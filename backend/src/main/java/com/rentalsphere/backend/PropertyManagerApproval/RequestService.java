package com.rentalsphere.backend.PropertyManagerApproval;


import com.rentalsphere.backend.Exception.User.InvalidCredentialsException;
import com.rentalsphere.backend.User.Model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rentalsphere.backend.User.Repository.UserRepository;


@Service
@RequiredArgsConstructor
public class RequestService {
    @Autowired
    private final UserRepository userRepository;

    public void approveRequest(String email) {
        User request = userRepository.findByEmail(email).orElseThrow(() -> new InvalidCredentialsException("No registered user with this email"));
        request.setStatus("approved");
        userRepository.save(request);

    }

    public void denyRequest(String email) {
        User request = userRepository.findByEmail(email).orElseThrow(() -> new InvalidCredentialsException("No registered user with this email"));
        request.setStatus("denied");
        userRepository.save(request);

    }
}
