import axios from "axios";
//@ts-ignore It checks node types but bruh it's installed.
interface IUser {
    id: Number;
}

class User implements IUser{
    constructor(public id: Number){
        this.id = id;
    }
    public async getData(){
        let promise = axios.get(`https://api.polytoria.com/v1/users/user?id=${this.id}`);
        promise.then( (data) => {
            data.data;
            
        }) 
    }

    /**
     * @type Object
     * @var this.id ID variable.
     * @returns JSON of Friends.
     */
    public async getFriends(){
        const promise = axios.get(`https://api.polytoria.com/v1/users/friends?id=${this.id}`);
        const promiseData  = promise.then((Response)=>Response.data)
        return promiseData;
    }
    public async getAppreance(){
        const promise = axios.get(`https://api.polytoria.com/v1/users/getappearance?id=${this.id}`);
        const promiseData = promise.then((Response)=>Response.data)
        return promiseData;
    }
    public async getUsername(){
        const promise = axios.get(`https://api.polytoria.com/v1/users/user?id=${this.id}`);
        const promiseData  = promise.then((Response)=>Response.data.Username)
        return promiseData;
    }
    public static async getFromUsername(username:string){
        const promise = axios.get(`https://api.polytoria.com/v1/users/getbyusername?username=${username}`);
        const promiseData : Object = promise.then((Response)=>Response.data)
        return promiseData;
    }
}

