package com.revature.Project1_react_Java.service;

import com.revature.Project1_react_Java.entity.Ticket;
import com.revature.Project1_react_Java.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {
    @Autowired
    private TicketRepository repository;

    public Ticket insertTicket(Ticket ticket){
        return repository.save(ticket);
    }

    public List<Ticket> getAllTicket(){
        return repository.findAll();
    }

    public Optional<Ticket> getTicketById(long id){
        return repository.findById(id);
    }
}
