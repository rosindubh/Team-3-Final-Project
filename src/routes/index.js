const { Router } = require("express");
const router = Router();
const { listUsers, addUser, updateUser, deleteUser } = require("../controllers")

router.get("/listUsers", listUsers);

router.post("/addUser", addUser);

router.put("/updateUser", updateUser);

router.delete("/deleteUser/:email", deleteUser)

module.exports = router;