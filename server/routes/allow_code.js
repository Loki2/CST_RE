const express = require('express');
const router = express.Router();
const config = require('../config/database');


router.get('/', (req, res, next) => {
  let sql = 'SELECT * FROM allow_code';
  let query = config.query(sql, (err, results) => {
    if(err) throw err;
    res.status(200).json(results);
  });
});

router.get('/:allow_code_id', (req, res, next) => {
  let id = req.params.allow_code_id;
  let sql = `SELECT * FROM allow_code WHERE allow_code_id=${id}`;
  config.query(sql, (err, results) => {
    res.json(results);
  });
});


router.post('/', (req, res, next) => {
  const allow_code_title = req.body.allow_code_title;
  const allow_code_desc = req.body.allow_code_desc;
  let sql =`INSERT INTO allow_code (allow_code_title, allow_code_desc) VALUES ("${allow_code_title}", "${allow_code_desc}")`;
  let query = config.query(sql, (error, results) => {
    if(error) throw error;
    res.status(201).send(`ຂໍ້ມູນເຂົາໄປສຳເລັດແລ້ວ`);
  });

});


router.put('/:allow_code_id', (req, res, next) => {
  const id = req.params.allow_code_id;
  const allow_code_title = req.body.allow_code_title;
  const allow_code_desc = req.body.allow_code_desc;

  let sql = `UPDATE allow_code SET allow_code_title="${allow_code_title}", allow_code_desc="${allow_code_desc}" WHERE allow_code_id=${id}`;
  let query = config.query(sql, (error, results) => {
    if(error) throw error;
    res.status(201).json({
      message:'ຂໍ້ມູນອັບເດດສຳເລັດແລ້ວ'
    });
  });

});

router.delete('/:allow_code_id', (req, res, next) => {
  const id = req.params.allow_code_id;

  let sql = `DELETE FROM allow_code WHERE allow_code_id=${id}`;
  let query = config.query(sql, (error, results) => {
    if(error) throw error;
    res.status(200).json({
      message:'ຂໍ້ມູນລົບອອກສຳເລັດແລ້ວ'
    });
  });

});



module.exports = router;