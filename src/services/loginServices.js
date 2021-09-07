import axios from "axios"


export default class loginService{
    getlogin(){
        return axios.get("http://localhost:8080/api/user/getall")
    }
}


