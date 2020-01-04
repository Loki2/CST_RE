const { 
    create,
    getAllowCode,
    getByAllowCodeId,
    updateAllowCode,
    delAllowCode
 } = require("./allowcode.service")

module.exports = {
    createAllowCode : async ( req, res, next) => {
        const body = await req.body;
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
    getAllowCode: async (req, res) => {
        // const data = await req(Option);
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
    getByAllowCodeId: async (req, res) => {
        const allow_code_id = await req.params.allow_code_id;
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
    updateAllowCode: async (req, res, next ) => {
        const body = await req.body;
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
    delAllowCode:  (req, res) => {
        const data = req.params.allow_code_id;
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
    },
    // getChart: (req, res, next) => {
        
    // }
}