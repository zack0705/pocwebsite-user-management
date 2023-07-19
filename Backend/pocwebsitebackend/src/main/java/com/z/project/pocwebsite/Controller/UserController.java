package com.z.project.pocwebsite.Controller;

import com.z.project.pocwebsite.Entity.User;
import com.z.project.pocwebsite.Helper.Cred;
import com.z.project.pocwebsite.Helper.LoginResponse;
import com.z.project.pocwebsite.Helper.RegisterResponse;
import com.z.project.pocwebsite.Helper.Valid;
import com.z.project.pocwebsite.Service.UserService;
import com.z.project.pocwebsite.config.UserAuthProvider;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import io.jsonwebtoken.security.Keys;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private UserService userService;
    @Autowired
    private UserAuthProvider userAuthProvider;
    private byte[] secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512).getEncoded();
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<RegisterResponse> registerUser(@RequestBody User user) {

        User ResponseUser = userService.registerUser(user);
        String token = userAuthProvider.createToken(ResponseUser.getEmail());
        RegisterResponse registerResponse = new RegisterResponse(ResponseUser,token);
        return ResponseEntity.ok(registerResponse);
    }

    @PutMapping("/{userId}")
    public User updateUser(@PathVariable Long userId, @RequestBody User user) {
        user.setId(userId);
        return userService.updateUser(user);
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> getPass(@RequestBody Cred cred){
        Valid valid = userService.isAuthenticated(cred);
        String token = valid.isValid ? userAuthProvider.createToken(cred.email) : null;

        LoginResponse loginResponse = new LoginResponse(valid, token);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}

