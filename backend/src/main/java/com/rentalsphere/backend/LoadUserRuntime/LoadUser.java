package com.rentalsphere.backend.LoadUserRuntime;

import com.rentalsphere.backend.enums.Roles;
import com.rentalsphere.backend.user.Repository.UserRepository;
import com.rentalsphere.backend.user.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadUser {
    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository){
        return args -> {
            User admin = new User();
            admin.setFirstName("admin");
            admin.setLastName("admin");
            admin.setEmail("admin@gmail.com");
            admin.setPassword("admin");
            admin.setRole(Roles.ADMIN);

            if(userRepository.findByEmail(admin.getEmail()).isEmpty()){
                userRepository.save(admin);
            }
        };
    }
}
