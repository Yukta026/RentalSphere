package com.rentalsphere.backend;
import com.rentalsphere.backend.Enums.ApplicationStatus;
import com.rentalsphere.backend.Enums.EmailType;
import com.rentalsphere.backend.Enums.Roles;
import com.rentalsphere.backend.Exception.User.UserNotFoundException;
import com.rentalsphere.backend.Property.Service.PropertyService;
import com.rentalsphere.backend.RequestResponse.Tenant.TenantResponse;
import com.rentalsphere.backend.Services.Email.EmailService;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import com.rentalsphere.backend.Tenant.Repository.TenantRepository;
import com.rentalsphere.backend.User.Model.User;
import com.rentalsphere.backend.User.Repository.UserRepository;
import com.rentalsphere.backend.Role.Model.Role;
import com.rentalsphere.backend.Role.Repository.RoleRepository;
import jakarta.mail.MessagingException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TenantRequestApprovalTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private RoleRepository roleRepository;
    @Mock
    private TenantRepository tenantRepository;

    @Mock
    private EmailService emailService;
    @Mock
    private User user;
    private Tenant tenant;
    private Role userRole;
    private Role tenantRole;

    @InjectMocks
    private PropertyService propertyService;

    @BeforeEach
    void init(){
        userRole = new Role(UUID.randomUUID(), Roles.USER, new ArrayList<>(Arrays.asList(user)));
        tenantRole = new Role(UUID.randomUUID(), Roles.TENANT, null);
//        user = User.builder()
//                .email("some@gmail.com")
//                .firstName("user")
//                .lastName("user")
//                .password("password")
//                .roles(List.of(userRole))
//                .build();
        tenant = new Tenant();
    }

    @Test
    public void testAcceptTenantRequest() throws MessagingException {

        // Mocking UserRepository behavior
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.of(user));

        when(tenantRepository.findByUserAndApplicationStatus(any(User.class), any(ApplicationStatus.class))).thenReturn(tenant);

        // Mocking RoleRepository behavior
        when(user.getRoles()).thenReturn(new ArrayList<>(Arrays.asList(userRole)));
        when(roleRepository.findByName(any(Roles.class))).thenReturn(tenantRole);

        // Calling the method under test
        TenantResponse response = propertyService.acceptTenantRequest(anyString());

        // Verifying UserRepository interactions
        verify(userRepository, times(1)).findByEmail(anyString());

        // Verifying RoleRepository interactions
        verify(roleRepository, times(1)).findByName(Roles.TENANT);

        // Verifying TenantResponse content
        assertTrue(response.isSuccess());
        assertEquals("Request Accepted", response.getMessage());
        assertNotNull(response.getTimeStamp());

//         Verifying email service interaction
//        verify(emailService, times(1)).sendEmailTemplate(
//                any(),
//                eq(anyString()),
//                eq("Request Accepted"),
//                eq(user.getFirstName() + " " + user.getLastName()),
//                eq("Congratulations, your request to become a tenant has been accepted by the property manager."),
//                any()
//        );
    }

    @Test
    public void testRejectTenantRequest() throws MessagingException {

        // Mocking UserRepository behavior
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.of(user));

        // Mocking TenantRepository behavior
        when(tenantRepository.findByUserAndApplicationStatus(any(User.class), any(ApplicationStatus.class))).thenReturn(tenant);

        // Mocking RoleRepository behavior
//        when(user.getRoles()).thenReturn(new ArrayList<>(Arrays.asList(userRole)));
//        when(roleRepository.findByName(any(Roles.class))).thenReturn(tenantRole);

        // Calling the method under test
        TenantResponse response = propertyService.rejectTenantRequest(anyString());

        // Verifying UserRepository interactions
        verify(userRepository, times(1)).findByEmail(anyString());

//        // Verifying RoleRepository interactions
//        verify(roleRepository, times(1)).findByName(Roles.TENANT);

        // Verifying TenantResponse content
        assertTrue(response.isSuccess());
        assertEquals("Request Rejected", response.getMessage());
        assertNotNull(response.getTimeStamp());

        // Verifying email service interaction
//        verify(emailService, times(1)).sendEmailTemplate(
//                eq(EmailType.ADMIN_DECISION),
//                anyString(),
//                eq("Request Rejected"),
//                any(),
//                eq("Sorry, your request to become a tenant has been rejected by the property manager."),
//                anyString()
//                any(),
//                eq(any()),
//                eq("Request Rejected"),
//                eq(anyString()),
////                eq(user.getFirstName() + " " + user.getLastName()),
//                eq("Sorry, your request to become a tenant has been rejected by property manager."),
//                any()
//        );
    }


    @Test
    public void testAcceptTenantRequest_UserNotFound() {
        // Mocking new user data and UserRepository
        String email = "newuser@example.com";
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());

        // Calling the method under test and expecting UserNotFoundException
        assertThrows(UserNotFoundException.class, () -> propertyService.acceptTenantRequest(email));

        // Verifying Repository interactions
        verify(userRepository, times(1)).findByEmail(email);
        verifyNoInteractions(roleRepository);
        verifyNoInteractions(emailService);
    }
}



