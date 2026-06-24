package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Voter;
import com.example.demo.repository.VoterRepository;



@Service
public class VoterServiceImpl implements VoterService {

    @Autowired
    private VoterRepository repo;

    @Override
    public String upsert(Voter voter) {

        if (voter.getVoterId() != null) {
            repo.save(voter);
            return "Voter Updated Successfully";
        } else {
            repo.save(voter);
            return "Voter Added Successfully";
        }
    }

    @Override
    public List<Voter> getAll() {
        return repo.findAll();
    }

    @Override
    public Voter getById(Integer voterId) {

        return repo.findById(voterId).orElse(null);
    }

    @Override
    public String delete(Integer voterId) {

        if (repo.existsById(voterId)) {
            repo.deleteById(voterId);
            return "Voter Deleted Successfully";
        }

        return "Voter Not Found";
    }
}