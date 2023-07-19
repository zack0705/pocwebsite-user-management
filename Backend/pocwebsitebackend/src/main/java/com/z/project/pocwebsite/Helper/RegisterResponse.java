package com.z.project.pocwebsite.Helper;

import com.z.project.pocwebsite.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class RegisterResponse {
    private User user;
    private String token;
}
