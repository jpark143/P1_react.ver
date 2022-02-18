package com.revature.Project1_react_Java.service;

import java.util.List;
import com.revature.Project1_react_Java.entity.User;
import com.revature.Project1_react_Java.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    public User getUserByUsername(String username){
        return repository.getUserByUsername(username);
    }
    public List<User> getAllUsers(){
        return repository.findAll();
    }

}
