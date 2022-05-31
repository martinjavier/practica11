import createUser from '../utils/users.utils.js';

export default class UserService{
    constructor() {
        this.users = [];
    }

    async createUser(cant=50){
        for (let i=0; i< cant; i++){
            const user = createUser();
            user.id=i+1;
            this.users.push(user);
        }
        return this.users;
    }

    async getUsers(id) {
        if(id) {
            return this.users.filter((user) => user.id===Number(id));
        } else {
            return this.users
        }
    }

}