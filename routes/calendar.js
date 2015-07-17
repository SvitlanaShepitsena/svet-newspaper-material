var path = require('path');
var userAgentServ = require('../services/UserAgentServ');

module.exports = function calendar(express) {

    var calendarRouter = express.Router();

    calendarRouter.get('/info', function (req, res, next) {

        var userAgent = req.get('user-agent');

        if (userAgentServ.amIBot(userAgent)) {

            var rootUrl = (req.protocol || 'http') + '://' + req.get('host');
            console.log(rootUrl);
            /*create a view-model for fb crawler*/
            var vm = {
                rootUrl: rootUrl,
                title: 'Calendar',
                og: {
                    title: 'Calendar 2015'
                }
            };

            res.render('calendar', {vm: vm});
        } else {
            next();

        }
    });

    /*Redirect user to AngularJs App*/
    var appFolder = path.join(__dirname, '../app');
    calendarRouter.use(express.static(appFolder));

    calendarRouter.get('/info', function (req, res) {
        res.sendFile('index.html', {root: appFolder});
    });
    return calendarRouter;

};
