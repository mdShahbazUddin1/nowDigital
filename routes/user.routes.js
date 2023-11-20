const express = require("express")

const userRoute = express.Router()

const userController = require("../controller/user");



userRoute.post("/create",userController.createuser)
userRoute.get("/getuser",userController.getUser)
userRoute.get("/getuser/:id",userController.getUserById)
userRoute.delete("/deleteuser/:id",userController.deleteUser)
userRoute.put("/updateuser/:id",userController.updateUser)



module.exports = { 
    userRoute
}