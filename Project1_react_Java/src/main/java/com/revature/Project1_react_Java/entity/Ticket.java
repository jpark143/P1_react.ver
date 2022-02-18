package com.revature.Project1_react_Java.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Ticket {
    @Id
    private int id;
    private int user_id;
    private double value;
    private String description;
    private String status;
}
