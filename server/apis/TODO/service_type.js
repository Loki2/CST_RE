const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message:'Service Type GET Reqeust is Fetched...!'
  });
});

router.get('/:service_type_id', (req, res, next) => {
  const id = req.params.service_type_id;
  if(id === 'special'){
    res.status(200).json({
      message:'You have discover Special ID',
      id:id
    });
  }else{
    res.status(200).json({
      message:'You have passed ID'
    });
  }
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    message:'Servcice Type Post Request is entered...!'
  });
});

router.patch('/:service_type_id', (req, res, next) => {
  res.status(200).json({
    message:'ຂໍ້ມູນອັບເດດສຳເລັດແລ້ວ'
  });
});

router.delete('/:service_type_id', (req, res, next) => {
  res.status(200).json({
    message:'ຂໍ້ມູນລົບອອກສຳເລັດແລ້ວ'
  });
});

module.exports = router;