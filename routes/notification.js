const connection = require("../utils/mysql")



module.exports = {
    register: (request,response) => {

        const email = request.body.email
        const token = request.body.token

        connection.query(`UPDATE user SET notifictation  = "${token}" WHERE email="${email}"`,(error, result ) => {
            if(error) {
                console.log(error)
                response.status(500).send({
                    result: "ERR_BDD"
                })
                return
            }
            if(result) {
                response.status(200).send({
                    result
                })
            }
        })


    }
}
