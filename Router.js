const express = require("express")

const account = require("./routes/account")

exports.router = (() => {

    const Router = express.Router()

    Router.route("/account/create").post(account.create)
    Router.route("/account/validate/:token").get(account.validate)
    Router.route("/account/connect").post(account.connect)
    Router.route("/account/list").get(account.list)

    return Router
})()