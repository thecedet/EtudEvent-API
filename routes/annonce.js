const connection = require("../utils/mysql")

const query = {
    select: (page,show) => `
SELECT
annonce.uid, annonce.date, annonce.title, annonce.data, 
user.firstName AS userFirstName, user.lastName AS userLastName
FROM annonce 
LEFT JOIN user 
ON annonce.owner = user.uid
ORDER BY annonce.date ASC
LIMIT ${0 + page*show}, ${show}    
`
}


module.exports = {
    select: (request,response) => {

        const page = parseInt(request.query.page) || 0
        const show = parseInt(request.query.show) || 5

        connection.query(query.select(page,show),(error, result ) => {
            if(error) {
                console.log(error)
                response.status(503).send({
                    result: "ERR_BDD"
                })
                return
            }
            if(result) {
                response.status(200).send({
                    result: "OK", annonce: result
                })
            }
        })


    }
}
