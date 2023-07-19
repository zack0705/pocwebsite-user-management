package com.z.project.pocwebsite.Helper;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class LoginResponse {
        private Valid valid;
        private String token;
}
