var processModule = function (module) {
    module = module.replace(/\./g, '/');
    return module;
}

var enterInside = function (target, before, insert) {
    var newLine = '';
    if (target === undefined) {
        return target;
    }

    var test = target.indexOf(insert);

    if (test > 0)return target;

    var start, startAfterIndex;
    try {
        var temp = 0;
        before.forEach(function (txt) {
            // need to have a space in order not to be included in submodules. eg. common not to common.test
            txt += ' ';
            temp = target.indexOf(txt, temp);
        });
        start = target.indexOf('>', temp) + 1;
        start = target.indexOf('Index', start) + 1;
        start = target.indexOf('>', start) + 1;
        start = target.indexOf('>', start) + 1;

    } catch (e) {
        start = target.indexOf(before);
    }

    var p1 = target.substring(0, start) + newLine;
    var p2 = target.substring(start);
    return p1 + insert + p2;
}

var removeFromInside = function (target, remove) {
    if (target == undefined)
        return target;
    remove = remove.trim();

    var targetArr = target.split(remove);
    var final = '';

    targetArr.forEach(function (part) {
        if (part.length > 4 && part !== undefined) {
            var end = part.length - 2;
            var isLineEnd = part.substr(end) === '\r\n';
            if (isLineEnd) {
                part = part.substring(0, end);
            }
            final += part;

        }

    });

    return final;
}

module.exports = function (grunt) {
    var _ = require('underscore');
    _.str = require('underscore.string');

    _.str.include('Underscore.string', 'string');

    var delFileDep = function (fileName) {
        var arrExt = ['jade', 'js', 'html'];

        var dotCoord = fileName.lastIndexOf('.');
        fileName = dotCoord > 0 ? fileName.substring(0, dotCoord) : fileName;

        arrExt.forEach(function (e) {
            var fileNameFull = fileName + '.' + e;
            if (grunt.file.exists(fileNameFull)) {
                grunt.file.delete(fileNameFull);
            }
        });

    }
    grunt.loadNpmTasks('grunt-git');
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        gitadd: {
            task: {
                options: {
                    cwd: './app'
                },
                files: {
                    src: ['.']
                }
            }
        },
        gitcommit: {
            task: {
                options: {
                    message: 'Add files',
                    noVerify: true,
                    noStatus: false
                },
                files: {
                    src: ['.']
                }
            }
        }
    });
    grunt.registerTask('addcommit', function () {
        grunt.task.run('gitadd');
        grunt.task.run('gitcommit');
    });
    grunt.registerTask('move-app-to-z', function () {
        if (grunt.file.exists('vs/app.js')) {
            grunt.file.copy('vs/app.js', 'vs/z/app.js');
            grunt.file.delete('vs/app.js');
        }
    });

    grunt.registerTask('copy-profile-to-root', function () {
        var address = 'app/profile.js';
        var content = grunt.file.read(address);
        content = content.replace(/http:\/\/localhost:44300/g, '');

        grunt.file.write(address, content);
        grunt.file.copy('app/profile.js', 'profile.js');
    });

    grunt.registerTask('templates', function () {
        var file = grunt.file.read('app/scripts/app.js');
        var search = "templateUrl";
        var index = 0, pos = 0;
        var fileContent = "";

        var options = {
            charset: 'utf-8',
            collapseWhitespace: true,
            removeComments: true
        }

        while (true) {
            index = file.indexOf(search, index);
            if (index == -1) {
                break;
            }

            index = file.indexOf('"', index) + 1;
            var final = file.indexOf('"', index);
            var key = file.substring(index, final);
            var startPos = key.indexOf('views');
            startPos = key.indexOf('/', startPos) + 1;
            var fileName = 'app/views/' + key.substring(startPos);
            var content = minify(grunt.file.read(fileName).trim(), options).replace('\n', '').replace('\t', '');

            var fullChunk = '<script type="text/ng-template" id="' + key + '">' + content + '</script>';
//            grunt.log.subhead(content);
            fileContent += fullChunk;
            if (final > index) {
                index = final;
            }
        }

        var dirFolder = 'app/views/directives';

        grunt.file.recurse(dirFolder, function (file) {

            var content = minify(grunt.file.read(file).trim(), options).replace('\n', '').replace('\t', '');
//            grunt.log.ok(content);

            var pos = file.indexOf('views');
            var key = file.substring(pos);
//
            var fullChunk = '<script type="text/ng-template" id="' + key + '">' + content + '</script>';
            fileContent += fullChunk;
        });

        grunt.file.write('templates.cshtml', fileContent);

    });

    grunt.registerTask('addcss', function () {

        grunt.task.run('cssmin');
        var tempFile = grunt.file.read('templates.cshtml');
        var cssFile = '<style>' + grunt.file.read('app/styles/Profile.min.css') + '</style>';

        var fileContent = tempFile + cssFile;

        fileContent = fileContent.replace(/imgdir\//g, '/Scripts/app/profile/app/imgdir/');
        fileContent = fileContent.replace(/..\/..\/img\//g, '/Scripts/app/profile/app/img/');

        grunt.file.write('templates.cshtml', fileContent);

    });

    grunt.registerTask('clean', function () {
        if (grunt.file.exists('vs')) {
            grunt.file.delete('vs');
        }

        if (grunt.file.exists('app/profile.js')) {
            grunt.file.delete('app/profile.js');
        }
    });
    grunt.registerTask('vs', function () {
//        grunt.task.run('typescript:same');
        grunt.task.run(['ngmin']);
        grunt.task.run(['move-app-to-z']);
        grunt.task.run(['uglify:minvs']);
//        grunt.task.run(['concat']);
        grunt.task.run(['copy-profile-to-root']);
        grunt.task.run(['templates']);
        grunt.task.run(['addcss']);
        grunt.task.run(['clean']);
        grunt.task.run(['ftp']);

    });

    grunt.registerTask('c', function (cname) {
//        delete option
        var rm = grunt.option('rm');

        rm = (rm === undefined) ? false : rm;

//      Module
        var module = grunt.option('m');

        if (module === undefined) {
            grunt.fail.fatal('Module, dude, module');
            return;
        }
        var moduleDirectirized = processModule(module);

//     C        //
        var d = 'app/scripts/' + moduleDirectirized + '/controllers/';
        var t = 'Ctrl' + '.js';
        var ctrl = grunt.file.read('templates/ctrl.js');

        var lname = cname;

        var name = lname.charAt(0).toUpperCase() + lname.substring(1);
        var nameCamel = lname.charAt(0).toLowerCase() + lname.substring(1);

        lname = nameCamel;

        var ctrlr = ctrl.replace(/#name#/g, name)
            .replace(/#module#/g, module)
            .replace(/#lname#/g, nameCamel);

////////////////

////////////////

        // register
        var state = '\t\t\t\t.state("' + _.str.dasherize(lname) + '", {\r\n' +
            '\t\t\t\t\turl: "/' + _.str.dasherize(lname) + '", \r\n' +
            '\t\t\t\t\tcontroller:"' + name + 'Ctrl as ' + nameCamel + '",\r\n' +
            '\t\t\t\t\ttemplateUrl: "scripts/' + moduleDirectirized + '/views/' + _.str.dasherize(lname) + 'Ctrl.html"\r\n' +
            '\t\t\t\t})\r\n';

        var apath = 'app/scripts/app.js';
        var routesPath = 'app/scripts/routes.js';

        var tpath = 'app/scripts/' + moduleDirectirized + '/views/' + _.str.dasherize(lname) + 'Ctrl.jade';
        var tpathHtml = 'app/scripts/' + moduleDirectirized + '/views/' + _.str.dasherize(lname) + 'Ctrl.html';

        var app = grunt.file.read(apath);
        var routes = grunt.file.read(routesPath);

        if (rm) {
            routes = removeFromInside(routes, state);
        }
        else {

            routes = enterInside(routes, '//#state', state);
        }

        var placeToInsert = module.split('.');
        var before = placeToInsert || '<!-- links -->';
        console.log(before);
        /////////////////// index
        var ipath = 'app/index.html';
        var src = '\r\n<script src="scripts/' + moduleDirectirized + '/controllers/' + name + 'Ctrl.js"></script>';
        var indf;

        var newIndex = generateModule(module, rm);

        if (newIndex && !rm) {
            indf = newIndex;
        } else {

            indf = grunt.file.read(ipath);
        }
        //////////////////
        if (rm) {
            indf = removeFromInside(indf, src);

        } else {

            indf = enterInside(indf, before, src);
        }

        if (rm) {
            var file = d + name + t;
            delFileDep(file);
            delFileDep(tpath);
            delFileDep(tpathHtml);
            //grunt.file.delete(tpath);
        } else {
            grunt.file.write(d + name + t, ctrlr);
            grunt.file.write(tpath, '.well content');
            grunt.file.write(tpathHtml, '<div class="well">content</div>');
        }
        grunt.file.write(routesPath, routes);

        grunt.file.write(ipath, indf);
        grunt.task.run('addcommit');
    })

    grunt.registerTask('s', function (sname) {
//        delete option
        var rm = grunt.option('rm');

        rm = (rm === undefined) ? false : rm;

        var injectFile = grunt.option('file');

        rm = (rm === undefined) ? false : rm;
        injectFile = (injectFile === undefined) ? false : injectFile;
        //      Module
        var module = grunt.option('m');

        if (module === undefined) {
            grunt.fail.fatal('Module, dude, module');
            return;
        }
        var moduleDirectirized = processModule(module);

//     C        //
        var d = 'app/scripts/' + moduleDirectirized + '/services/';
        var t = 'Serv.js';
        var serv = grunt.file.read('templates/serv.js');

        //var lname = sname.toLowerCase();
        var lname = sname;
        var name = lname.charAt(0).toUpperCase() + lname.substring(1);

        var servr = serv.replace(/#name#/g, name).replace(/#lname#/g, lname).replace(/#module#/g, module);

        // register

        var apath = 'app/scripts/app.js';
        var app = grunt.file.read(apath);

        var placeToInsert = module.split('.');
        var before = placeToInsert || '<!-- links -->';
        /////////////////// index
        var ipath = 'app/index.html';
        var src = '\r\n<script src="scripts/' + moduleDirectirized + '/services/' + name + 'Serv.js"></script>';

        var indf;
        var newIndex = generateModule(module, rm);

        if (newIndex && !rm) {
            indf = newIndex;
        } else {

            indf = grunt.file.read(ipath);
        }
        //////////////////
        if (rm) {
            indf = removeFromInside(indf, src);

        } else {

            indf = enterInside(indf, before, src);
        }

        if (rm) {
            var file = d + name + t;

            delFileDep(file);

        } else {
            grunt.file.write(d + name + t, servr);
        }
        grunt.file.write(ipath, indf);

        if (injectFile) {
            injectFile = injectFile + '.js';
            var files = grunt.file.expand('app/scripts/**/*.js');
            files.every(function (file) {
                if (file.indexOf(injectFile) > -1) {

                    var fileContent = grunt.file.read(file);

                    if (!rm) {
                        var prefix = ', function (' + name + 'Serv';
                        var selector = ', function (';
                        var start = fileContent.indexOf(selector) + selector.length;
                        var finish = fileContent.indexOf(')', start);
                        if (finish - start > 2) {
                            prefix += ', ';
                        }

                        fileContent = fileContent.replace(selector, prefix);
                    } else {
                        fileContent = fileContent.replace(', function (' + name + 'Serv, ', ', function (');
                        fileContent = fileContent.replace(', function (' + name + 'Serv', ', function (');
                    }

                    grunt.file.write(file, fileContent);

                    return false;
                }
                return true;
            })
            grunt.task.run('gitcommit');
        }
        grunt.task.run('addcommit');

    })

    grunt.registerTask('f', function (fname) {
//        delete option
        var rm = grunt.option('rm');
        rm = (rm === undefined) ? false : rm;

//      Module
        var module = grunt.option('m');

        if (module === undefined) {
            grunt.fail.fatal('Module, dude, module');
            return;
        }
        var moduleDirectirized = processModule(module);

//     C        //
        var d = 'app/scripts/' + moduleDirectirized + '/filters/';
        var t = '.js';

        var filt = grunt.file.read('templates/filt.js');

        var name = fname.charAt(0).toUpperCase() + fname.substring(1);
        var jname = name.charAt(0).toLowerCase() + name.substring(1);

        var filtr = filt.replace(/#name#/g, name).replace(/#module#/g, module);

        var apath = 'app/scripts/app.js';
        var app = grunt.file.read(apath);

        var placeToInsert = module.split('.');
        var before = placeToInsert || '<!-- links -->';
        /////////////////// index
        var ipath = 'app/index.html';
        var src = '\r\n<script src="scripts/' + moduleDirectirized + '/filters/' + name + '.js"></script>';

        var indf;
        var newIndex = generateModule(module, rm);

        if (newIndex && !rm) {
            indf = newIndex;
        } else {

            indf = grunt.file.read(ipath);
        }
        //////////////////
        if (rm) {
            indf = removeFromInside(indf, src);

        } else {

            indf = enterInside(indf, before, src);
        }

        if (rm) {
            var file = d + name + t;

            delFileDep(file);

        } else {
            grunt.file.write(d + name + t, filtr);
        }
        grunt.file.write(ipath, indf);
        grunt.task.run('addcommit');
    })

    grunt.registerTask('d', function (dname, dtype) {
        dname = dname.charAt(0).toLowerCase() + dname.substr(1);
//        delete option
        var rm = grunt.option('rm');

        rm = (rm === undefined) ? false : rm;

//      Module
        var module = grunt.option('m');

        if (module === undefined) {
            grunt.fail.fatal('Module, dude, module');
            return;
        }
        var moduleDirectirized = processModule(module);

        var placeToInsert = module.split('.');
        var before = placeToInsert || '<!-- links -->';

        var d = 'app/scripts/' + moduleDirectirized + '/directives/';
        var directive = grunt.file.read('templates/dir.js');
        dname = 'sv-' + _.str.dasherize(dname);
        var dnames = dname.toLowerCase().split('-');

        var uname = '', lname = '', jname = '';
        var counter = 1;
        dnames.forEach(function (part) {
            var Upart = part.charAt(0).toUpperCase() + part.substring(1).toLowerCase();
            uname += Upart;
            lname += part.toLowerCase();
            if (counter++ == 1) {
                jname += part.toLowerCase();
            }
            else {
                jname += Upart;
            }

        });

        jnameDashed = _.str.dasherize(jname);

        var oname = dname;
        var directivef = directive.replace(/#uname#/g, uname)
            .replace(/#lname#/g, lname)
            .replace(/#module#/g, module)
            .replace(/#moduleDirectirized#/g, moduleDirectirized)
            .replace(/#jname#/g, jname).replace(/#dname#/g, dname);

        var dirFileName = d + jnameDashed + '.js';
        dirFileName = dirFileName.replace(/--/g, '-');

        if (!rm)
            grunt.file.write(dirFileName, directivef);
        else {
            delFileDep(dirFileName);
        }

        var apath = 'app/scripts/app.js';
        var tpath = d + oname + '.jade';
        var tpathHtml = d + oname + '.html';
        var app = grunt.file.read(apath);

        /////////////////// index/
        var ipath = 'app/index.html';
        var src = '\r\n<script src="scripts/' + moduleDirectirized + '/directives/' + jnameDashed + '.js"></script>';
        //////////////////
        var directiveTemplate = '.well ' + oname + ' Template';
        var directiveTemplateHtml = '<div class="well">' + oname + ' Template</div>';
        /////////////////

/////
        var indf;
        var newIndex = generateModule(module, rm);

        if (newIndex && !rm) {
            indf = newIndex;
        } else {

            indf = grunt.file.read(ipath);
        }

        if (rm) {
            indf = removeFromInside(indf, src);

        } else {

            indf = enterInside(indf, before, src);
        }

        if (rm) {
            delFileDep(tpath);
            delFileDep(tpathHtml);
        } else {
            grunt.file.write(tpath, directiveTemplate);
            grunt.file.write(tpathHtml, directiveTemplateHtml);
        }
        grunt.file.write(ipath, indf);
        grunt.task.run('addcommit');

    })
    var SCRIPT_PATH = 'app/scripts/';
    var APP = SCRIPT_PATH + 'app.js'
    var MAINSTYL = 'app/styles/' + 'main.styl'
    var INDEXHTML = 'app/' + 'index.html';
    var eol = '\r\n';

    function generateModule(module, rm) {
        if (rm) {
            return null;
        }

        var moduleDirectirized = processModule(module);
        var moduleNameArr = module.split('.');
        var moduleName = moduleNameArr[moduleNameArr.length - 1];

        var moduleIndex = SCRIPT_PATH + moduleDirectirized + '/' + moduleName + 'Index.js';

        //grunt.file.delete(moduleIndex);
        //console.log(moduleIndex);

        var isIndexExist = grunt.file.exists(moduleIndex);

        function includeStyleCreateImgFolder() {
            var styleAddition = "@import '../scripts/" + moduleDirectirized + "/styles/" + moduleName + "'";
            var newMainStyl = addStyleImages("@import 'nib'", styleAddition);
            if (!_.isUndefined(newMainStyl)) {
                grunt.file.write(MAINSTYL, newMainStyl);

            }
        }

        if (!isIndexExist) {
            var moduleTpl = grunt.file.read('templates/module.tpl.js');
            moduleTpl = moduleTpl.replace(/#module#/g, module);
            grunt.file.write(moduleIndex, moduleTpl);

            var newApp = addInAppJs('// modules', module);
            grunt.file.write(APP, newApp);
            includeStyleCreateImgFolder();
            var slash = moduleIndex.indexOf('/') + 1;
            var moduleIndexShort = moduleIndex.substr(slash);

            var indexAddition = '<!-- ' + module + ' -->'
                + '\r\n<script src="' + moduleIndexShort + '"></script>';

            return addInIndexHtml('<!-- MODULES-->', indexAddition);

        }

        includeStyleCreateImgFolder();
        return null;
    }

    function addStyleImages(after, addition) {

        var app = grunt.file.read(MAINSTYL);
        var alreadyIn = app.indexOf(addition);

        if (alreadyIn > -1) {
            return;
        }

        var start = app.indexOf(after);
        start = app.indexOf('\r\n', start);
        var part1 = app.substr(0, start);
        var part2 = app.substr(start);

        var startStyle = addition.indexOf('..') + 3;
        var finishStyle = addition.lastIndexOf("'");

        var styleFile = 'app/' + addition.substring(startStyle, finishStyle) + '.styl';

        if (!grunt.file.exists(styleFile)) {
            grunt.file.write(styleFile, '');
        }
        var startImg = styleFile.lastIndexOf('styles/');
        var imgDir = styleFile.substring(0, startImg) + 'img';

        if (!grunt.file.exists(imgDir)) {
            grunt.file.mkdir(imgDir);
        }

        return part1 + '\r\n' + addition + part2;
    }

    function addInAppJs(after, addition) {
        var app = grunt.file.read(APP);
        var alreadyIn = app.indexOf("'" + addition + "',");
        if (alreadyIn > -1) {
            return app;
        }

        var start = app.indexOf(after);
        start = app.indexOf('\r\n', start);
        var part1 = app.substr(0, start);
        var part2 = app.substr(start);
        return part1 + '\r\n\t\t\'' + addition + '\',' + part2;
    }

    function addInIndexHtml(after, addition) {
        var indexHtml = grunt.file.read(INDEXHTML);
        var start = indexHtml.indexOf(after);
        start = indexHtml.indexOf(eol, start);
        var part1 = indexHtml.substr(0, start);
        var part2 = indexHtml.substr(start);
        return part1 + eol + eol + addition + part2;
    }

};
