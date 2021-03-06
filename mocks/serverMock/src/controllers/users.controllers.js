import UserService from '../services/users.services.js';

export default class UserController{
    constructor() {
        this.UserService = new UserService();
        // Creamos un bind
        this.createUser = this.createUser.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.addUser = this.addUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    async createUser(req, res) {
        const {cant} = req.query;  
        try {            
            const response = await this.UserService.createUser(cant);
            res.status(200).json({usuarios: response});
        } catch (error) {
            console.log(error)
        }
    }

    async getUsers(req,res) {
        // Creo el id con valor null
        let id = null;
        // Verifico si el id que llega tiene valor
        if (req.query.id) {
            id = req.query.id;
        }
        try {
            const response = await this.UserService.getUsers(id);
            res.status(200).json({ usuarios: response});
        } catch (error) {
            console.log(error);
        }  
    }

    async addUser(req,res) {
        await this.UserService.addUser()
        res.status(200).send('Usuario Agregado');
    }

    async updateUser(req,res) {
        const {id} = req.params;
        const { body } = req;
        try {
            const response = await this.UserService.updateUser(id, body);
            res.status(200).send("Usuario actualizado");
        } catch (error) {
            console.log(error);
        }
    }


}