var path = require('path');

var userAgentServ = require('../services/UserAgentServ');
module.exports = function aboutUs(express) {

    var aboutUsRouter = express.Router();

    aboutUsRouter.get('/info', function (req, res, next) {

        var userAgent = req.get('user-agent');

        if (userAgentServ.amIBot(userAgent)) {

            var rootUrl = (req.protocol || 'http') + '://' + req.get('host');
            console.log(rootUrl);
            /*create a view-model for fb crawler*/
            var vm = {
                rootUrl: rootUrl,
                title: 'About us Page Title',
                og: {
                    title: 'About us',
                    description: 'Info about us'
                }
            };

            res.render('about', {vm: vm});
        } else {
            next();

        }
    });

    /*Redirect user to AngularJs App*/
    var appFolder = path.join(__dirname, '../app');
    aboutUsRouter.use(express.static(appFolder));

    aboutUsRouter.get('/info', function (req, res) {
        res.sendFile('index.html', {root: appFolder});
    });
    return aboutUsRouter;

};
