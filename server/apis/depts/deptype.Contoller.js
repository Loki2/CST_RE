const { create, getDepType, getByDepTypeId, updateDepType, delDepType } = require('./deptype.service');


module.exports = {
    createDepType: async (req, res, next) => {
        const body = await req.body;
        create(body, (error, results) => {
            if(error) {
                console.log(error);
                return res.status(500).json({
                    success:0,
                    message:"Database connect error"
                }); 
            }
            return res.status(200).json({
                success:1,
                data: results
            });
        });
    },

    getAllDepType: async (req, res, next) => {
        getDepType((error, results) => {
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


    getDepTypeById: async (req, res, next) => {
        const id = await req.params.dep_type_id;
        getByDepTypeId(id, (error, results) => {
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


    updateDepType: async (req, res, next) => {
        const data = await req.body;
        updateDepType(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message: "Update Successfully...!",
                data: results
            });
        });
    },

    delDepType: async (req, res, next) => {
        const data = await req.params.dep_type_id;
        delDepType(data, (err, results) => {
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
        });
    }
}