const express = require("express")

const account = require("./routes/account")
const annonce = require("./routes/annonce")
const notification = require("./routes/notification")
const permission = require("./utils/permission")

exports.router = (() => {

    const Router = express.Router()

    Router.route("/account/create").post(account.create)
    Router.route("/account/validate/:token").get(account.validate)
    Router.route("/account/connect").post(account.connect)
    Router.route("/account/list").get(account.list)
    Router.route("/account/list/:user").get(account.listUser)

    Router.route("/annonce/:uid?").get(annonce.select)

    Router.route("/notification/register").post(notification.register)
    Router.route("/notification/send").post(notification.send)

    Router.route("/test").get((request,response) => console.log(request))

    return Router
})()