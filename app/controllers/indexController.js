export default class IndexController{
    constructor(userService){
        this.userService = userService;
        this.ctrlName ="Index";
        this.getUsers();
    }

    getUsers(){
        this.userService.getUsers((result)=>{
            this.data = result;
        })
    }
}

IndexController.$inject = ["UserService"];