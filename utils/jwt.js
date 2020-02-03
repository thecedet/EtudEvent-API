const jwt = require("jsonwebtoken")

const secret = "Etud'event"

module.exports = {
    createAccount: ({uid}) => jwt.sign({uid}, secret, {
        expiresIn: "45m"
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