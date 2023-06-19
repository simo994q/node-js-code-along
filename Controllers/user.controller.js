import UserModel from "../Models/user.model.js";
import OrgModel from "../Models/org.model.js";
import { HasMany } from "sequelize";

OrgModel.hasMany(UserModel)
UserModel.belongsTo(OrgModel)

class UserController {
    list = async (req, res) => {
        const result = await UserModel.findAll({
            attributes: ['id', 'firstname', 'lastname'],
            include: {
                model: OrgModel,
                attributes: ['id', 'title']
            }
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
        const { firstname, lastname, email, password, org_id } = req.body
        if (firstname && lastname && email && password && org_id) {
            const model = await UserModel.create(req.body)
            res.json({newId: model.id})
        } else {
            res.sendStatus(418)
        }
    }

    update = async (req, res) => {
        const { id } = req.params || 0
        const { firstname, lastname, email, password, org_id } = req.body
        if (id && firstname && lastname && email && password && org_id) {
            const model = await UserModel.update(req.body, {
                where: {id: id},
                individualHooks: true
            })
            res.json({msg: 'Updated'})
        } else {
            res.sendStatus(418)
        }
    }
}


export default UserController