const express = require('express');
const router = express.Router();
const config = require('../config/database');


router.get('/', (req, res, next) => {
    let sql = 'SELECT * FROM clients';
    let query = config.query(sql, (err, results) => {
        if (err) throw err;
        res.status(200).json(results);
    });

});

router.get('/:client_id', (req, res, next) => {
    const id = req.params.client_id;
    let sql = `SELECT * FROM clients WHERE client_id = ${id}`;
    let query = config.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/', (req, res, next) => {
    const client_name = req.body.client_name;
    const company_name = req.body.company_name;
    const cargos = req.body.cargos;
    const client_address1 = req.body.client_address1;
    const client_address2 = req.body.client_address2;
    const city = req.body.city;
    const province = req.body.province;
    const country = req.body.country;
    const client_email = req.body.client_email;
    const client_contact = req.body.client_contact;
    const create_by = req.body.create_by;
    const client_status = req.body.client_status;

    let sql = `INSERT INTO clients 
            (
                client_name,
                company_name,
                cargos, 
                client_address1, 
                client_address2, 
                city, 
                province, 
                country, 
                client_email, 
                client_contact, 
                create_by, 
                client_status
                )
                VALUES (
                    "${client_name}", 
                    "${company_name}", 
                    "${cargos}", 
                    "${client_address1}", 
                    "${client_address2}", 
                    "${city}", 
                    "${province}", 
                    "${country}", 
                    "${client_email}", 
                    "${client_contact}", 
                    "${create_by}", 
                    "${client_status}"
                    )`;
    let query = config.query(sql, (error, results) => {
        if (error) throw error;
        res.status(200).send('ການເພີ່ມຂໍ້ມູນສຳເລັດແລ້ວ');
    });
});

router.put('/:client_id', (req, res, next) => {
    const id = req.params.client_id;
    const client_name = req.body.client_name;
    const company_name = req.body.company_name;
    const cargos = req.body.cargos;
    const client_address1 = req.body.client_address1;
    const client_address2 = req.body.client_address2;
    const city = req.body.city;
    const province = req.body.province;
    const country = req.body.country;
    const client_email = req.body.client_email;
    const client_contact = req.body.client_contact;
    const create_by = req.body.create_by;
    const client_status = req.body.client_status;

    let sql = `UPDATE clients SET client_name = "${client_name}",
                                  company_name = "${company_name}", 
                                  cargos = "${cargos}", 
                                  client_address1 = "${client_address1}", 
                                  client_address2 = "${client_address2}", 
                                  city = "${city}", 
                                  province = "${province}", 
                                  country = "${country}", 
                                  client_email = "${client_email}", 
                                  client_contact = "${client_contact}, 
                                  create_by = "${create_by}", 
                                  client_status = "${client_status}"
                         WHERE client_id = "${id}"`;
    let query = config.query(sql, (error, results) => {
        if (error) throw error;
        res.status(201).json({
            message: 'ຂໍ້ມູນອັບເດດສຳເລັດແລ້ວ'
        });
    });
});

router.delete('/:client_id', (req, res, next) => {
    const id = req.params.client_id;

    let sql = `DELETE FROM clients WHERE client_id=${id}`;
    let query = config.query(sql, (error, results) => {
        if(error) throw error;
        res.status(200).json({
            message: 'ຂໍ້ມູນລົບອອກສຳເລັດ'
        });
    });
});

module.exports = router;