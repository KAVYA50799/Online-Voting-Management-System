package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Voter;
import com.example.demo.service.VoterService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/voter")
public class VoterController {

    @Autowired
    private VoterService service;

    @PostMapping("/save")
    public String saveVoter(@RequestBody Voter voter) {

        return service.upsert(voter);
    }

    @GetMapping("/all")
    public List<Voter> getAllVoters() {

        return service.getAll();
    }

    @GetMapping("/{voterId}")
    public Voter getVoterById(@PathVariable Integer voterId) {

        return service.getById(voterId);
    }

    @DeleteMapping("/{voterId}")
    public String deleteVoter(@PathVariable Integer voterId) {

        return service.delete(voterId);
    }

    @PutMapping("/update")
    public String updateVoter(@RequestBody Voter voter) {

        return service.upsert(voter);
    }
}