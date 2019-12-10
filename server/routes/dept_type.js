const express = require('express');
const router = express.Router();
const config = require('../config/database');

router.get('/', (req, res, next) => {
    let sql = 'SELECT * FROM deparment_types';
    let query = config.query(sql, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
        // return redirect('');
    });
});

router.get('/:dep_type_id', (req, res, next) => {
    const id = req.params.dep_type_id;
    let sql = `SELECT * FROM deparment_types WHERE dep_type_id=${id}`;
    let query = config.query(sql, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
});

router.post('/', (req, res, next) => {
//   const dep_type_code = req.body.dep_type_code;
//   const dep_type_lao = req.body.dep_type_lao;
//   const dep_type_eng = req.body.dep_type_eng;

//   //let sql = `INSERT INTO deparment_types (dep_type_code, dep_type_desc_lao, dep_type_desc_eng) VALUES ("${dep_type_code}", "${dep_type_desc_lao}", "${dep_type_desc_eng}")`;
//   let sql =`INSERT INTO deparment_types (dep_type_code, dep_type_desc_lao, dep_type_desc_eng) VALUES ("${dep_type_code}", "${dep_type_lao}", "${dep_type_eng}")`;
//   let query = config.query(sql, (error, results) => {
//     if(error) throw error;
//     res.status(200).json(results);
//     //return redirect('');

    res.status(200).json({
        message:'this is Departments POST REQUEST router',
    })
});

router.put('/:dep_type_id', (req, res, next) => {
    const id = req.params.dep_type_id;
    const dep_type_code = req.body.dep_type_code;
    const dep_type_desc_lao = req.body.dep_type_desc_lao;
    const dep_type_desc_eng = req.body.dep_type_desc_eng;

    let sql = `UPDATE deparment_types SET dep_type_code = "${dep_type_code}", dep_type_desc_lao="${dep_type_desc_lao}", dep_type_desc_eng="${dep_type_desc_eng}" WHERE dep_type_id= ${id}`;
    let query = config.query(sql, (error, results) => {
        if(error) throw error;
        res.status(201).json({
            message:'ຂໍ້ມູນອັບເດດສຳເລັດແລ້ວ'
        });
    });
    
});


module.exports = router;