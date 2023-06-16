import UserModel from "../Models/user.model.js";

class UserController {
    list = async (req, res) => {
        const result = await UserModel.findAll({
            attributes: ['id', 'firstname', 'lastname'],
        })
        res.json(result)
    }

    details = async (req, res) => {
        const { id } = req.params || 0
        const result = await UserModel.findAll({
            where: { id: id },
            attributes: ['id', 'firstname', 'lastname', 'email']
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { firstname, lastname, email, password } = req.body
        if (firstname && lastname && email && password) {
            const model = await UserModel.create(req.body)
            res.json({newId: model.id})
        } else {
            res.sendStatus(418)
        }

    }
}


export default UserController