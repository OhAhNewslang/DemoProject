package com.example.DemoProject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class SsrTestController {
    @GetMapping("/hello")
    public List<String> hello(){
        return Arrays.asList("OHAH!","ProtoType", "Hello", "World ~!");
    }
}
