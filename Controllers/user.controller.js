import UserModel from "../Models/user.model.js";

class UserController {
    list = async (req, res) => {
        const result = await UserModel.findAll({
            attributes: ['id', 'firstname', 'lastname'],
        })
        res.json(result)
    }

    details = async (req, res) => {
        const result = await UserModel.findAll({
            where: {id: req.params.id},
            attributes: ['id', 'firstname', 'lastname'],
        })
        res.json(result)
    }
}


export default UserController