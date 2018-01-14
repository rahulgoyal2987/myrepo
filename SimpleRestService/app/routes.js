module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {
		res.send('{"text":"sfsdfs","done":false}');
	});

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {
		res.send('[{"text":"sfsdfs","done":false},{"text":"abc","done":false}]');
	});
};