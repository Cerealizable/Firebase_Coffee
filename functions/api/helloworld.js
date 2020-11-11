const { db } = require('../util/admin');

// This gets all messages from the the HelloWorld Firestore collection (proves DB API is working)
exports.getHelloWorld = (request, response) => {
	db
		.collection('helloWorld')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let messages = [];
			data.forEach((doc) => {
				messages.push({
					messageId: doc.id,
					title: doc.data().title,
					body: doc.data().body,
					createdAt: doc.data().createdAt,
				});
			});
			return response.json(messages);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

// This generates static messages to validate the API is working.
exports.helloWorld = (request, response) => {
    messages = [
        {
            'id': '1',
            'title': 'Welcome!!!',
            'body': 'Hello world from Thomas Frost'
        },
        {
            'id': '2',
            'title': 'Welcome!',
            'body': 'Hello Worldz from Kristen Frost'
        }
    ]
    return response.json(messages);
}