package com.revature.Project1_react_Java.controller;

import com.revature.Project1_react_Java.entity.Ticket;
import com.revature.Project1_react_Java.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TicketController {
    @Autowired
    private TicketService service;

    @PostMapping("/tickets")
    public Ticket saveTicket(@RequestBody Ticket ticket){
        System.out.println("save ticket");
        return service.insertTicket(ticket);
    }

    @GetMapping("/tickets")
    public List<Ticket> getTicket(){
        System.out.println("get tickets");
        return service.getAllTicket();
    }

    @GetMapping("/ticket/{id}")
    public Optional<Ticket> getTicketById(@PathVariable("id") long id){
        System.out.println("get ticket");
        return service.getTicketById(id);
    }
}
