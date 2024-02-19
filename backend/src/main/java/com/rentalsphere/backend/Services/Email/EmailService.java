package com.rentalsphere.backend.Services.Email;

import com.rentalsphere.backend.Services.Email.IService.IEmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
public class EmailService implements IEmailService {
    private final JavaMailSender mailSender;
    private final SpringTemplateEngine templateEngine;

    /**
     *
     * @param to - receiver email
     * @param subject - subject of email
     * @param body - body of email
     */
    @Override
    public void sendEmail(String to, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(body);

        mailSender.send(message);
    }

    /**
     *
     * @param to - receiver email
     * @param subject - email subject
     * @param name - name of receiver
     * @param emailMessage - message to add in email body
     * @throws MessagingException - exception thrown by MimeMessage
     */
    @Async
    @Override
    public void sendEmailTemplate(String to, String subject, String name, String emailMessage) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        Context context = new Context();
        context.setVariable("name", name);
        context.setVariable("message", emailMessage);
        context.setVariable("logo","logo");
        String process = templateEngine.process("AdminDecision.html", context);
        MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED, StandardCharsets.UTF_8.name());
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(process, true);
        helper.addInline("logo", new ClassPathResource("static/images/logo.png"));
        mailSender.send(message);
    }
}
