package com.rentalsphere.backend.Services.Email.IService;

import jakarta.mail.MessagingException;
import org.springframework.scheduling.annotation.Async;

/**
 * Email service interface
 */
public interface IEmailService {
    public void sendEmail(String to, String subject, String body);
    public void sendEmailTemplate(String to, String subject, String name, String emailMessage) throws MessagingException;
}
