const connection = require("../utils/mysql")
const mail = require("../utils/sendMail")
const jwtUtils = require("../utils/jwt")


module.exports = {
    create: (request, response) => {

        const confirmEmailRegex = new RegExp(/^([\w-]*)\.([a-zA-Z-]+)\d*@(etu)?\.?univ-lorraine\.fr$/gm)

        const email = request.body.email
        const department = request.body.department
        const password = request.body.password

        if(!(email && department && password)) {
            response.status(400).json({
                result: "ERR_ARGS"
            })
        }

        let result = confirmEmailRegex.exec(email)
        if(!result) {
            response.status(400).json({
                result: "ERR_MAIL_NO_CONFORM"
            })
            return
        }
        
        data = {
            email: result[0],
            firstName: result[1],
            lastName: result[2],
            type: result[3]
        }
            
        connection.query(`INSERT INTO user (firstName, lastName, department, password, email) VALUES ('${data.firstName}', UPPER('${data.lastName}'), '${department}', "${password}", "${data.email}")`,
        (error,result) => {
            if(error) {
                if(error.code = "ER_DUP_ENTRY") {
                    response.status(400).json({result: "ERR_EMAIL_EXIST"})
                }
                return
            }
            if(result) {
                let token = jwtUtils.createAccount({uid: result.insertId}).toString()

                let url = `${process.env.API_URL}/account/validate/${token}`
                mail(data.email,"[Etud'event] Validation du compte",url)
                response.status(200).json({result: "OK"})
            }
        })

        
    },

    validate: (request, response) => {

        const token = request.params.token

        const verifiedToken = jwtUtils.checkjwt(token)

        if(verifiedToken === "error") {
            response.status(200).json({result: "ERR_TOKEN"})
            return
        }

        connection.query(`UPDATE user SET checked=1 WHERE uid=${verifiedToken.uid}`,
        (error, result ) => {
            if(error) {
                response.status(503).json({result: "ERR_BDD"})
                return
            }
            if(result) {
                if(result.changedRows === 0) {
                    response.status(400).json({result: "ERR_VALIDATED"})
                    return
                }
            }
            response.status(200).json({result: "OK"})
        }) 
           
        
    },

    connect: (request, response) => {
        const email = request.body.email
        const password = request.body.password

        if(!(email && password)) {
            response.status(400).json({result: "ERR_ARGS"})
            return
        }

        connection.query(`SELECT uid, firstName, lastName, department, image, email, checked FROM user WHERE email="${email}" AND password="${password}"`,
        (error, result) => {
            if(error) {
                   response.status(503).json({result: error})
                   return
                }
                if(result) {
                    if(result.length === 0) {
                        response.status(400).json({result: "ERR_INVALID_INFO"})
                        return
                    }
                    if(result[0].checked == 0) {
                        response.status(400).json({result: "ERR_CHECKED"})
                    }else {
                        response.status(200).json({result: "OK", data: result[0]})
                    }
                    return
                }
        })
    },
    list: (request,response) => {
        connection.query("SELECT * FROM user", (error,result) => {
            response.status(200).json({result})
        })
    }
}