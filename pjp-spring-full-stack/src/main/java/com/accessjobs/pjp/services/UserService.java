package com.accessjobs.pjp.services;

import com.accessjobs.pjp.domain.User;
import com.accessjobs.pjp.exceptions.EmailAlreadyExistsException;
import com.accessjobs.pjp.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired //define the bean in the main spring boot app
    private BCryptPasswordEncoder bCryptPasswordEncoder;//store non readable password in the database

    public User register(User newUser){
        try{
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            //user name has to be unique (exception)
            newUser.setEmail(newUser.getEmail());
            //make sure that pass and confpass are matches
            //we dont presist or show the confirm password
            newUser.setConfirmPassword("");
            return userRepository.save(newUser);

        }catch (Exception e){
            throw new EmailAlreadyExistsException("Email' "+newUser.getEmail()+"' is already exists");
        }

    }
}
