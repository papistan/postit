var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	


	app.get('/postits/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id)};
		db.collection('postits').findOne(details, (err, item) => {
			if (err) {
				res.send({'error': 'An error has occurred'})
			} else {
				res.send(item);
			}
		})
	});

	app.post('/postits', (req, res) => {
		const postit = { title: req.body.title, body: req.body.body };
		db.collection('postits').insert(postit, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});

	app.put('/postits/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id': new ObjectID(id) };
		const postit = { title: req.body.title, body: req.body.body };
		db.collection('postits').update(details, postit, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(postit)
			}
		});
	});


	app.delete('/postits/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id)};
		db.collection('postits').remove(details, (err, item) => {
			if (err) {
				res.send({'error': 'An error has occurred'})
			} else {
				res.send('Postit ' + id + ' deleted!');
			}
		})
	});

}


