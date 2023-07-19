package com.z.project.pocwebsite.Service;

import com.z.project.pocwebsite.Entity.User;
import com.z.project.pocwebsite.Helper.Cred;
import com.z.project.pocwebsite.Helper.Valid;
import com.z.project.pocwebsite.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;
    private Valid valid = new Valid();
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public User registerUser(User user) {
        return userRepository.save(user);
    }
    public User updateUser(User user) {
        return userRepository.save(user);
    }
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public String findPassByEmailId(String email){
            if (userRepository.findByEmail(email) instanceof User){
                return userRepository.findByEmail(email).getPassword();
            }
            else{
                return "Password does not exist";
            }
    }

    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    public Valid isAuthenticated(Cred cred){
        if(cred.pass.equals(this.findPassByEmailId(cred.email))){
            this.valid.isValid=true;
        }
        else{
            this.valid.isValid=false;
        }
        return this.valid;
    }
}

