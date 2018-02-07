module.exports = function(app, db) {
	


	app.post('/postits', (req, res) => {
		const postit = { title: req.body.title, body: req.body.body };
		db.collection('postits').insert(postit, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(result.ops[0]);
			}
		});
	})

}


