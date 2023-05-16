package com.example.DemoProject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SsrTestController {
    @GetMapping("/hello2")
    public String HelloWorld(){
        return "OHAH! ProtoType SSR Test Hello World ~!";
    }
}
