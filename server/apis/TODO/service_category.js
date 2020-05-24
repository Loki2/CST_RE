const express = require('express');
const router = express.Router();
const db = '../config/database.js';

router.get('/', (req, res, next) => {

	let sql = 'SELECT * FROM service_category';
	let query = db.query(sql, (error, results) => {
		if(error) throw error;
		console.log(results);
		res.send('Service Category is fetched...!')
	});
	// res.status(200).json({
	//     message:'Handling get Request /Service Category'
	// });
});

router.get('/:service_cat_id', (req, res, next) => {
	const id = req.params.service_cat_id;
	if(id === 'special') {
		res.status(200).json({
			message:'You disciver Special ID',
			id: id
		})
	}else{
		res.status(200).json({
			message:'You passed ID'
		})
	}
})

router.post('/', (req, res, next) => {
	res.status(200).json({
		message:'Handling Post Request /Service Category'
	});
});

router.patch('/:service_cat_id', (req, res, next) => {
	res.status(200).json({
		message:'ຂໍ້ມູນອັບເດດສຳເລັດແລ້ວ'
	});
});

router.delete('/:service_cat_id', (req, res, next) => {
	res.status(200).json({
		message:'ຂໍ້ມູນລົບອອກສຳເລັດແລ້ວ'
	});
});

module.exports = router;