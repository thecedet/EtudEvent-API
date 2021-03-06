const connection = require("./mysql")

const sqlGet = where => `
    SELECT permission.name FROM permission
    LEFT JOIN user_permission
    ON permission.uid = user_permission.uid_permission
    LEFT JOIN user
    ON user_permission.uid_user = user.uid
    WHERE user.uid = ${where};
`

module.exports = {
    get: (uid, cb) => {
        let oui
        connection.query(sqlGet(uid), (error, result) => {
            if(error) cb(error)
            if(result) cb(result.map(permission => permission.name))
            
        })  
    }

}
