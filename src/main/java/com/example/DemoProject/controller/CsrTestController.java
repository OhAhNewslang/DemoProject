package com.example.DemoProject.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CsrTestController {
    @GetMapping("hello1")
    public String helloWorld(Model model){
        return "OHAH! ProtoType CSR Test HelloWorld ~!";
    }
}
