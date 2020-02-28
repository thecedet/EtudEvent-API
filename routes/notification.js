const connection = require("../utils/mysql")
const Expo = require("expo-server-sdk").default

const expo = new Expo()


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


    },
    send: (request,response) => {
        const title = request.body.title
        const body = request.body.body

        connection.query(`SELECT notifictation FROM user WHERE notifictation IS NOT NULL`,(error, result ) => {
            if(error) {
                console.log(error)
                response.status(500).send({
                    result: "ERR_BDD"
                })
                return
            }
            if(result) {
                result.forEach(({notifictation}) => {
                    if(!Expo.isExpoPushToken(notifictation)) {
                        response.status(500).send({result: 'ERR_TOKEN'})
                    }else {
                        let messages = [{
                            to: notifictation,
                            sound: true,
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
