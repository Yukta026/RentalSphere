package com.rentalsphere.backend.RequestResponse.Property;

import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockMultipartFile;
import java.util.Collections;
import java.util.Date;
import static org.junit.jupiter.api.Assertions.*;

public class PropertyRegisterRequestTest {

    @Test
    void testValidPropertyRegisterRequest() {
        PropertyRegisterRequest request = PropertyRegisterRequest.builder()
                .email("test@example.com")
                .images(Collections.singletonList(new MockMultipartFile("image", new byte[0])))
                .phoneNumber("1234567890")
                .propertyAddress("123 Main St")
                .city("City")
                .state("State")
                .zipCode("12345")
                .monthlyRent(1000.00)
                .availableMoveInDate("2024-04-01")
                .numBedrooms(2)
                .numBathrooms(1)
                .propertyDescription("A beautiful property")
                .licenseNumber("ABC123")
                .build();

        assertNotNull(request);
        assertEquals("test@example.com", request.getEmail());
        assertEquals(1, request.getImages().size());
        assertEquals("1234567890", request.getPhoneNumber());
        assertEquals("123 Main St", request.getPropertyAddress());
        assertEquals("City", request.getCity());
        assertEquals("State", request.getState());
        assertEquals("12345", request.getZipCode());
        assertEquals(1000.00, request.getMonthlyRent());
        assertEquals("2024-04-01", request.getAvailableMoveInDate());
        assertEquals(2, request.getNumBedrooms());
        assertEquals(1, request.getNumBathrooms());
        assertEquals("A beautiful property", request.getPropertyDescription());
        assertEquals("ABC123", request.getLicenseNumber());
    }

}

