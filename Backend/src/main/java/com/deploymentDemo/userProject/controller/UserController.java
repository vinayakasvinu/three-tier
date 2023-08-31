package com.deploymentDemo.userProject.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.deploymentDemo.userProject.model.UserModel;
import com.deploymentDemo.userProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/saveUser")
    public UserModel saveUsers(@RequestParam(name = "name") String name){
        UserModel userModel= new UserModel(name);
        return this.userService.saveUser(userModel);
    }

    @GetMapping("/getAllUsers")
    public List<UserModel> getAllUsers(){
         
        return this.userService.getUsers();
    }

}
