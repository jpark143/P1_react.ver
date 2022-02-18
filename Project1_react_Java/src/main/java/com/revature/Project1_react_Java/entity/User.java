package com.revature.Project1_react_Java.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    private int id;
    private String username;
    private String password;
    private String status;
}
