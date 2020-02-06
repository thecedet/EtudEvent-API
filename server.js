const express = require("express")
const bodyParser = require("body-parser")

const Router = require("./Router").router
const server = express()

PORT_API = process.env.PORT|| 8080

server.use(bodyParser.urlencoded({extended: true }))
server.use(bodyParser.json())

server.use((requestAnimationFrame, response, next) => {
    response.header("Access-Control-Allow-Origin", "*")
    response.header("Access-Control-Allow-Headers", "Origin, x-Reqyested-With, Content-type, Accept")
    next()
})


server.get("/", (request, response) => {
    response.setHeader("Content-type", "text/html")
    response.status(200).send("Etud'event API")
})
server.use("/", Router)
server.use('/cdn', express.static('cdn'));

server.listen(PORT_API, console.log(`Server API listen on ${PORT_API}`))