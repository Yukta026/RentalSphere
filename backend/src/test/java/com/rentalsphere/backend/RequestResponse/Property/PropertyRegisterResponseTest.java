package com.rentalsphere.backend.RequestResponse.Property;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class PropertyRegisterResponseTest {

    @Test
    void testPropertyRegisterResponse() {
        PropertyRegisterResponse response = PropertyRegisterResponse.builder()
                .isSuccess(true)
                .message("Property registered successfully")
                .build();

        assertNotNull(response);
        assertTrue(response.isSuccess());
        assertEquals("Property registered successfully", response.getMessage());
    }

    @Test
    void testPropertyRegisterResponseWithFailure() {
        PropertyRegisterResponse response = PropertyRegisterResponse.builder()
                .isSuccess(false)
                .message("Failed to register property")
                .build();

        assertNotNull(response);
        assertFalse(response.isSuccess());
        assertEquals("Failed to register property", response.getMessage());
    }
}


