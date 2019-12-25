const { 
    create,
    getAllowCode,
    getByAllowCodeId,
    updateAllowCode,
    delAllowCode
 } = require("./allowcode.service")

module.exports = {
    createAllowCode : ( req, res, next) => {
        const body = req.body;
        create(body, (err, results) => {
            if(err) {
                console.log(err)
                return res.status(500).json({
                    success: 0,
                    message: "Database Connect error"
                });
            }
            return res.status(200).json({
                success:1,
                data: results
            });
        });

    },
    getAllowCode: (req, res) => {
        getAllowCode((err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data: results
            });
        });
    },
    getByAllowCodeId: (req, res) => {
        const allow_code_id = req.params.allow_code_id;
        getByAllowCodeId(allow_code_id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data: results
            });
        });
    },
    updateAllowCode: (req, res, next ) => {
        const body = req.body;
        updateAllowCode(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message: "Update Successfully...!"
            });
        });
    },
    delAllowCode: (req, res) => {
        const data = req.body;
        delAllowCode(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message: "Record not found"
                });
            }
            return res.json({
                success:1,
                message: "Delete successfully"
            });
        })
    }
}