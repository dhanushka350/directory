package com.wedding.directory.mail;

import com.wedding.directory.payload.EmailContent;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import java.io.IOException;
import java.util.Date;
import java.util.Properties;

@Component
public class EmailService {


    private String userName = "zeebo.directory@gmail.com";

    private String password = "root@zeebo";

    public void sendEmail(EmailContent e) {


        String content = e.getMessage();

        Properties properties = new Properties();
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.host", "smtp.gmail.com");
        properties.put("mail.smtp.port", "587");

        Session session = Session.getInstance(properties,
                new javax.mail.Authenticator() {
                    @Override
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(userName, password);
                    }
                });

        Message msg = new MimeMessage(session);
        try {
            msg.setFrom(new InternetAddress(userName, false));
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(e.getTo()));
            msg.setSubject(e.getSubject());
            msg.setContent(content, "text/html");
            msg.setSentDate(new Date());

//            MimeBodyPart messageBodyPart = new MimeBodyPart();
//            messageBodyPart.setContent(content, "text/html");
//
//            Multipart multipart = new MimeMultipart();
//            multipart.addBodyPart(messageBodyPart);
//            MimeBodyPart attactPart = new MimeBodyPart();
//
////            attactPart.attachFile("C:\\Users\\Akvasoft\\Documents\\Dhanushka\\error.jpg");
//            multipart.addBodyPart(attactPart);
//            msg.setContent(multipart);
            Transport.send(msg);

        } catch (MessagingException e1) {
            e1.printStackTrace();

        }
    }
}
