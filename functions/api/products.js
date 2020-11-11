const { response } = require('express');
const { db } = require('../util/admin');

exports.getProduct = (request, response) => {
	db
		.doc(`/products/${request.params.productId}`)
		.get()
		.then((doc) => {
			if (!doc.exists) {
				return response.status(404).json(
					{ 
						error: 'Product not found' 
					});
			}
			ProductData = doc.data();
			ProductData.productId = doc.id;
			return response.json(ProductData);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: error.code });
		});
};

exports.getAllProducts = (request, response) => {
	db
		.collection('products')
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

// eslint-disable-next-line consistent-return
exports.postProduct = (request, response) => {
	if (!request.body || !request.body.body || request.body.body.trim() === '') {
		return response.status(400).json({ body: 'Must not be empty' });
	}

	if (!request.body || !request.body.title || request.body.title.trim() === '') {
			return response.status(400).json({ title: 'Must not be empty' });
	}

	const newHelloWorldItem = {
			title: request.body.title,
			body: request.body.body,
			createdAt: new Date().toISOString()
	}
	db
		.collection('helloWorld')
		.add(newHelloWorldItem)
		.then((doc)=>{
				const responseHelloWorldItem = newHelloWorldItem;
				responseHelloWorldItem.id = doc.id;
				return response.json(responseHelloWorldItem);
		})
		.catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
	});
};

exports.deleteProduct = (request, response) => {
	const document = db.doc(`/product/${request.params.productId}`);
	document
		.get()
		.then((doc) => {
			if (!doc.exists) {
				return response.status(404).json({ error: 'Product not found' })
			}
			return document.delete();
		})
		.then(() => {
			return response.json({ message: 'Delete successfull' });
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code });
		});
};

exports.editProduct = (request, parameters) => {
	if(request.body.productId || request.body.createdAt){
		response.status(403).json({message: 'Not allowed to edit'});
	}
	let document = db.collection('products').doc(`${request.params.productId}`);
	document.update(request.body)
	.then(()=> {
		return response.json({message: 'Updated successfully'});
	})
	.catch((err) => {
		console.error(err);
		return response.status(500).json({ 
			error: err.code 
		});
	});
}