package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Voter;

public interface VoterService {

    String upsert(Voter voter);

    List<Voter> getAll();

    Voter getById(Integer voterId);

    String delete(Integer voterId);
}