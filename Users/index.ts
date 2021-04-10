import axios from "axios";

class User {
    public token;
    constructor(csrf:string){
        this.token = csrf;
    }
    public async block(id){
        const promise = axios.post('https://polytoria.com/api/users/block',{
            csrf: this.token,
            id: id
        })
        .then((response) => response.data)
        .catch((err) => console.log(err));
    }
}