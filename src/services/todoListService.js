import axios from "axios"


export default class todoListService{
    gettodoList(){
        return axios.get("http://localhost:8080/api/todoList/getall")
    }
}