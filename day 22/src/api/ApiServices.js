import axios from 'axios';

const USER_API_BASE_URL= "http://localhost:8080/api/v1";

class  ApiServices{

    createUser(user){
        console.log(user)
        return axios.post(USER_API_BASE_URL + '/auth/register', user).then(res=>res.data);
    }
    loginUser(user){
        console.log(user);
        return axios.post(USER_API_BASE_URL + '/auth/login' , user).then(res=>res.data);
    }

}
 
export default new ApiServices();