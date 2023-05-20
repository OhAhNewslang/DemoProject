package com.example.DemoProject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class CsrTestController{
    @GetMapping("hello1")
    public String helloWorld(){
        return "OHAH! ProtoType CSR Test HelloWorld ~!";
    }
}
