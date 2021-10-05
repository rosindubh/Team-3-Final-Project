// //POST      /user
// exports.addUser = async(req, res) => {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.status(200).send({ user, message: "User added success" });
//     } catch (error) {
//         res.status(500).send(error);
//     }
// }

// ///PUT       /user/update
// exports.updateUser = async(req, res) => {
//     try {
//         await User.updateOne({ email: req.body.email },
//             // {$set: {[req.body.key]: req.body.update } }  //THIS DIDN'T WORK???? ASK ANDY
//             { $set: { password: req.body.password } }
//         );
//         res.status(200).send({ message: "Successfully Updated..." })
//     } catch (error) {
//         res.status(500).send(error);
//     }
// }

// //GET      /user/list
// exports.listUsers = async(req, res) => {
//     try {
//         const list = await User.find({});
//         res.status(200).send({ allUsers: list });
//     } catch (error) {
//         res.status(500).send({ err: error })
//     }
// }

// //DELETE      /user/[user email]
// exports.deleteUser = async(req, res) => {
//     try {
//         const email = req.params.email //THIS LINE MISSING IN VIDEO???
//         await User.deleteOne({ email: req.params.email });
//         res.status(200).send({ message: `${email} deleted` })
//     } catch (error) {
//         res.status(500).send(error);
//     }
// }

const { User } = require("../models")

//GET      /user/list
exports.listUsers = async(req, res) => {
    try {
        const list = await User.find({});
        res.status(200).send({ allUsers: list });
    } catch (error) {
        res.status(500).send({ err: error })
    }
}

//POST      /user
exports.addUser = async(req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(200).send({ user, message: "User added success" });
    } catch (error) {
        res.status(500).send(error);
    }
}

///PUT       /user/update
exports.updateUser = async(req, res) => {
    try {
        await User.updateOne({ email: req.body.email },
            // {$set: {[req.body.key]: req.body.update } }  //THIS DIDN'T WORK???? ASK ANDY
            { $set: { password: req.body.password } }
        );
        res.status(200).send({ message: "Successfully Updated..." })
    } catch (error) {
        res.status(500).send(error);
    }
}

//DELETE      /user/[user email]
exports.deleteUser = async(req, res) => {
    try {
        const email = req.params.email //THIS LINE MISSING IN VIDEO???
        await User.deleteOne({ email: req.params.email });
        res.status(200).send({ message: `${email} deleted` })
    } catch (error) {
        res.status(500).send(error);
    }
}