package com.example.demo.exception;

public class VoterNotFoundException
        extends RuntimeException {

    public VoterNotFoundException(String message) {
        super(message);
    }
}