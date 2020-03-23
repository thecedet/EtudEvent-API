const jwt = require("jsonwebtoken")

const secret = "Etud'event"

module.exports = {
    createAccount: ({uid}) => jwt.sign({uid}, secret, {
        expiresIn: "45m"
    }),
    createToken: (data) => jwt.sign({data}, secret, {
        expiresIn: "7d"
    }),
    checkjwt: (token) => {
        try {
            decode = jwt.verify(token,secret)
        }catch(err) {
            return "error"
        }
        return decode
    }
}