import axios from "axios";

class User {
    public id:number;
    constructor(id){
        this.id = id;
    }
    public async getUserData(){
        const promise = axios.get(`https://api.polytoria.com/users/user?id=${this.id}`);
        const promiseData : Object = promise.then((Response)=>Response.data)
        return promiseData;
    }
    /**
     * @type Object
     * @var this.id ID variable.
     * @returns JSON of Friends.
     */
    public async getFriends(){
        const promise = axios.get(`https://api.polytoria.com/users/friends?id=${this.id}`);
        const promiseData : Object = promise.then((Response)=>Response.data)
        return promiseData;
    }
    public async getAppreance(){
        const promise = axios.get(`https://api.polytoria.com/users/getappearance?id=${this.id}`);
        const promiseData : Object = promise.then((Response)=>Response.data)
        return promiseData;
    }
    public async getUsername(){

    }
    public static async getFromUsername(username:string){
        const promise = axios.get(`https://api.polytoria.com/users/getbyusername?username=${username}`);
        const promiseData : Object = promise.then((Response)=>Response.data)
        return promiseData;
    }
}
