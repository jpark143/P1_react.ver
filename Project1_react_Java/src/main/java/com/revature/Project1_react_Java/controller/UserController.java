package com.revature.Project1_react_Java.controller;

import java.util.List;
import com.revature.Project1_react_Java.entity.User;
import com.revature.Project1_react_Java.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping("/users")
    public List<User> getUsers(){
        System.out.println("get users");
        return service.getAllUsers();
    }
}
