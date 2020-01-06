const { create, getClients, getByClientId, updateClient, delClient } = require('./client.service');

module.exports = {
    createClient : async (req, res, next) => {
        const body = await req.body;
        create(body, (error, results) => {
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
    getClients : async (req, res, next) => {
        getClients((err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                data: results
            });
        })
    },
    getByClientId : async (req, res, next) => {
        const client_id = await req.params.client_id;
        getByClientId(client_id, (error, results) => {
            if(error) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success:0,
                    message:"Record not Found"
                });
            }
            return res.json({
                success:1,
                data: results
            })
        });
    },
    updateClient : async (req, res, next) => {
        const data = await req.body;
        updateClient(data, (err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                message:"Updata Successfully...!",
                data: results
            });
        });
    },
    delClient: async (req, res, next) => {
        const client_id = await req.params.client_id;
        delClient(client_id, (err, results) => {
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