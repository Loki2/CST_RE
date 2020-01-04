const express = require('express');
const router = express.Router();
const config = require('../config/database');

router.get('/', (req, res, next) => {
    let sql = 'SELECT * FROM employees';
    let query = config.query(sql, (error, results) => {
        if(error) throw error;
        res.status(200).json(results);
    });
});

router.get('/:employee_id', (req, res, next) => {
    const id = req.params.employee_id;
    let sql = `SELECT * FROM employees WHERE employee_id = ${id}`;
});

router.post('/', (req, res, next) => {
    const employee_id = req.body.employee_id;
    const department_id = req.body.department_id;
    const section_id = req.body.section_id;
    const fullname = req.body.fullname;
    const lastname = req.body.lastname;
    // const birth_date = req.body.
    const age = req.body.age;
    const mental_status_id = req.body.mental_status_id;
    const gender_id = req.body.gender_id;
    const join_date = req.body.join_date;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const province = req.body.province;
    const country = req.body.country;
    const remark = req.body.remark;
    const status = req.body.status;

    let sql = `INSERT INTO employees 
                (
                    employee_id,
                    department_id,
                    section_id,
                    fullname,
                    lastname,
                    age,
                    mental_status_id,
                    gender_id,
                    join_date,
                    address1,
                    address2,
                    city,
                    province,
                    country,
                    remark,
                    status
                    ) 
                    VALUES (
                        "${employee_id}",
                        "${department_id}",
                        "${section_id}",
                        "${fullname}",
                        "${lastname}",
                        "${age}",
                        "${mental_status_id}",
                        "${gender_id}",
                        "${join_date}",
                        "${address1}",
                        "${address2}",
                        "${city}",
                        "${province}",
                        "${country}",
                        "${remark}",
                        "${status}"
                    )`;
    let query = config.query(sql, (error, results) => {
        if(error) throw error;
        res.status(200).send('ການເພີ່ມຂໍ້ມູນສຳເລັດແລ້ວ');
    });

});


router.delete('/:employee_id', (req, res, next) => {
    const id = req.params.employee_id;

    let sql = `DELETE FROM employees WHERE employee_id=${id}`;
    let query = config.query(sql, (error, results) => {
        if(error) throw error;
        res.status(201).json({
            message:'ຂໍ້ມູນລົບອອກສຳເລັດແລ້ວ'
        });
    });
});


module.exports = router;