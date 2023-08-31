package com.deploymentDemo.userProject.service;

import com.deploymentDemo.userProject.model.UserModel;

import java.util.List;

public interface UserService {

     UserModel saveUser(UserModel userModel);
     List<UserModel> getUsers();

}
