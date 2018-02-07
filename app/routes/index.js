const postitRoutes = require('./postit_routes');

module.exports = function(app, db) {
	postitRoutes(app, db);
}
