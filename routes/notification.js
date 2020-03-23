const connection = require("../utils/mysql")
const Expo = require("expo-server-sdk").default
const jwtUtils = require("../utils/jwt")

const expo = new Expo()


module.exports = {
    register: (request,response) => {

        const email = request.body.email
        const token = request.body.token

        connection.query(`UPDATE user SET notification = "${token}" WHERE email REGEXP "${email}"`,(error, result ) => {
            if(error) {
                console.log(error)
                response.status(500).send({
                    result: "ERR_BDD"
                })
                return
            }
            if(result) {
                console.log(result)
                response.status(200).send({
                    result
                })
            }
        })


    },
    send: (request,response) => {

        const title = request.body.title 
        const body = request.body.body
        const token = request.body.token

        try {
            if(!jwtUtils.checkjwt(token).data.permissions.find(permission => permission == "NOTIFICATION.SEND")) {
                response.status(400).send({
                    result: "ERR_NO_PERMISSION"
                })
            }
        }catch(err) {
            response.status(400).send({
                result: "ERR_INVALID_TOKEN"
            })
        }

        console.log("oui")

        connection.query(`SELECT notification FROM user WHERE notification IS NOT NULL`,(error, result ) => {
            if(error) {
                console.log(error)
                response.status(500).send({
                    result: "ERR_BDD"
                })
                return
            }
            if(result) {
                result.forEach(({notification}) => {
                    if(!Expo.isExpoPushToken(notification)) {
                        response.status(500).send({result: 'ERR_TOKEN'})
                    }else {
                        let messages = [{
                            to: notification,
                            vibrate: true,
                            android: {
                                sound: true
                            },
                            body, title
                        }]
                        expo.sendPushNotificationsAsync(messages).then(ticket => {
                            response.send({result: "OK", ticket})
                        }).catch(error => {
                            response.status(500).send({result: 'ERR_SEND', error})
                        })
                    }
                })
            }
        })
    }
}
