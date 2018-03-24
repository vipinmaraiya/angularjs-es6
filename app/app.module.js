import angular from "angular";
import IndexController  from "./controllers/indexController.js";
import UserService from "./services/app.user.service";

angular
.module("app",
[])
.controller("indexController", IndexController)
.service("UserService",UserService);

