mainServices.factory('UtilService', function () {
    return {
        diffArray: function (items, not, prop) {
            prop = prop || 'id';
            return $(items).not(function (i, item) {
                return $.grep(not, function (n) {
                    return n[prop] == item[prop];
                }).length > 0;
            }).get();
        },
        inArray: function (array, value, property) {
            /// <summary>In Array</summary>
            var nested = typeof property === 'undefined' ? [] : property.split('.');
            arrayLoop: for (var i = 0; i < array.length; i++) {
                var check = array[i];
                for (var j = 0; j < nested.length; j++) {
                    if (typeof check === 'Object' && !(nested[j] in check)) {
                        continue arrayLoop;
                    }
                    check = check[nested[j]];
                }
                if (value == check) { return true; }
            }
            return false;
        },
        pathCommand: new RegExp("([a-z])["
            + "\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029"
            + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["
            + "\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029"
            + "]*,?["
            + "\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029"
            + "]*)+)", "ig"),
        pathValues: new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["
            + "\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029" + "]*,?["
            + "\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029" + "]*", "ig"),
        parsePathString: function (pathString) {
            /// <summary>Taken from Snap Library</summary>
            var me = this,
                paramCounts = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 },
                data = [];
            pathString.replace(me.pathCommand, function (a, b, c) {
                var params = [],
                    name = b.toLowerCase();
                c.replace(me.pathValues, function (a, b) {
                    b && params.push(+b);
                });
                if (name == "m" && params.length > 2) {
                    data.push([b].concat(params.splice(0, 2)));
                    name = "l";
                    b = b == "m" ? "l" : "L";
                }
                if (name == "o" && params.length == 1) {
                    data.push([b, params[0]]);
                }
                if (name == "r") {
                    data.push([b].concat(params));
                } else while (params.length >= paramCounts[name]) {
                    data.push([b].concat(params.splice(0, paramCounts[name])));
                    if (!paramCounts[name]) {
                        break;
                    }
                }
            });
            return data;
        },
        pathToAbsolute: function (pathArray) {
            /// <summary>Taken from Snap Library</summary>
            var pth = paths(pathArray);
            if (pth.abs) {
                return pathClone(pth.abs);
            }
            if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) { // rough assumption
                pathArray = this.parsePathString(pathArray);
            }
            if (!pathArray || !pathArray.length) {
                return [["M", 0, 0]];
            }
            var res = [],
                x = 0,
                y = 0,
                mx = 0,
                my = 0,
                start = 0,
                pa0;
            if (pathArray[0][0] == "M") {
                x = +pathArray[0][1];
                y = +pathArray[0][2];
                mx = x;
                my = y;
                start++;
                res[0] = ["M", x, y];
            }
            var crz = pathArray.length == 3 &&
                pathArray[0][0] == "M" &&
                pathArray[1][0].toUpperCase() == "R" &&
                pathArray[2][0].toUpperCase() == "Z";
            for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
                res.push(r = []);
                pa = pathArray[i];
                pa0 = pa[0];
                if (pa0 != pa0.toUpperCase()) {
                    r[0] = pa0.toUpperCase();
                    switch (r[0]) {
                        case "A":
                            r[1] = pa[1];
                            r[2] = pa[2];
                            r[3] = pa[3];
                            r[4] = pa[4];
                            r[5] = pa[5];
                            r[6] = +pa[6] + x;
                            r[7] = +pa[7] + y;
                            break;
                        case "V":
                            r[1] = +pa[1] + y;
                            break;
                        case "H":
                            r[1] = +pa[1] + x;
                            break;
                        case "R":
                            var dots = [x, y].concat(pa.slice(1));
                            for (var j = 2, jj = dots.length; j < jj; j++) {
                                dots[j] = +dots[j] + x;
                                dots[++j] = +dots[j] + y;
                            }
                            res.pop();
                            res = res.concat(catmullRom2bezier(dots, crz));
                            break;
                        case "O":
                            res.pop();
                            dots = ellipsePath(x, y, pa[1], pa[2]);
                            dots.push(dots[0]);
                            res = res.concat(dots);
                            break;
                        case "U":
                            res.pop();
                            res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                            r = ["U"].concat(res[res.length - 1].slice(-2));
                            break;
                        case "M":
                            mx = +pa[1] + x;
                            my = +pa[2] + y;
                        default:
                            for (j = 1, jj = pa.length; j < jj; j++) {
                                r[j] = +pa[j] + ((j % 2) ? x : y);
                            }
                    }
                } else if (pa0 == "R") {
                    dots = [x, y].concat(pa.slice(1));
                    res.pop();
                    res = res.concat(catmullRom2bezier(dots, crz));
                    r = ["R"].concat(pa.slice(-2));
                } else if (pa0 == "O") {
                    res.pop();
                    dots = ellipsePath(x, y, pa[1], pa[2]);
                    dots.push(dots[0]);
                    res = res.concat(dots);
                } else if (pa0 == "U") {
                    res.pop();
                    res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                    r = ["U"].concat(res[res.length - 1].slice(-2));
                } else {
                    for (var k = 0, kk = pa.length; k < kk; k++) {
                        r[k] = pa[k];
                    }
                }
                pa0 = pa0.toUpperCase();
                if (pa0 != "O") {
                    switch (r[0]) {
                        case "Z":
                            x = +mx;
                            y = +my;
                            break;
                        case "H":
                            x = r[1];
                            break;
                        case "V":
                            y = r[1];
                            break;
                        case "M":
                            mx = r[r.length - 2];
                            my = r[r.length - 1];
                        default:
                            x = r[r.length - 2];
                            y = r[r.length - 1];
                    }
                }
            }
            res.toString = toString;
            pth.abs = pathClone(res);
            return res;
        }
    };
});