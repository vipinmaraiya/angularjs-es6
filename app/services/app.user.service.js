class UserService{

    constructor($http){
        this.http = $http;
    }

    getUsers(callback){
        this.http.get("/package.json").then((result)=>{
            callback(result);
        });
    }
}

UserService.$inject = ["$http"];

export default UserService;