var bots=[
    'facebookexternalhit',
    'Googlebot',
    'Bingbot',
    'sitemaps',
    'Trident'
]
module.exports = {
    amIBot: function (userAgent) {
        for (var i = 0; i < bots.length; i++) {
            var bot = bots[i].toLowerCase();
            if (userAgent.toLowerCase().indexOf(bot) > -1) {
                return true;
            }
        }
        return false;
    }
}
