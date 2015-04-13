mainApp.filter('iconSearch', function () {
    function isAlias(text, aliases) {
        for (var i = 0; i < aliases.length; i++) {
            if (aliases[i].indexOf(text) > -1) {
                return true;
            }
        }
        return false;
    };
    return function(input, text) {
        if (text == '') { return input; }
        var out = [];
        for (var i = 0; i < input.length; i++) {
            if (input[i].name.indexOf(text) > -1 || isAlias(text, input[i].aliases)) {
                out.push(input[i]);
            }
        }
        return out;
    };
})