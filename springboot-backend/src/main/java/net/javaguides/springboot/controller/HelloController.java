// package net.javaguides.springboot.controller;

// public class HelloController {

// }
package net.javaguides.springboot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public String home() {
        return "Spring Boot Backend is running on port 8080!";
    }
}