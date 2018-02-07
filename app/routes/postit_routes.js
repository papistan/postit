module.exports = function(app, db) {
	app.post('/postits', (req, res) => {
		console.log(req.body);
		res.send('Hello dude')
	})

}


