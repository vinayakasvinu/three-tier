package com.deploymentDemo.userProject.serviceImpl;

import com.deploymentDemo.userProject.model.UserModel;
import com.deploymentDemo.userProject.repository.UserRepo;
import com.deploymentDemo.userProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public UserModel saveUser(UserModel userModel) {
        return this.userRepo.save(userModel);
    }

    @Override
    public List<UserModel> getUsers() {
        List<UserModel> list= this.userRepo.findAll();
        return list;
    }
}
