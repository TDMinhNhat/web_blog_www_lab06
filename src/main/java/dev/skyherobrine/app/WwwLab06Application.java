package dev.skyherobrine.app;

import dev.skyherobrine.app.models.User;
import dev.skyherobrine.app.repositories.UserRepository;
import net.datafaker.Faker;
import net.datafaker.providers.base.Name;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Base64;
import java.util.Objects;

@SpringBootApplication
public class WwwLab06Application implements CommandLineRunner {

    @Autowired
    private UserRepository ur;

    public static void main(String[] args) {
        SpringApplication.run(WwwLab06Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
//        Faker faker = new Faker();
//        for(int i = 1; i <= 100; ++i) {
//            String[] fullName = faker.name().nameWithMiddle().split(" ");
//
//            User user = new User(
//                    fullName[0],
//                    fullName[1],
//                    fullName[fullName.length - 1],
//                    faker.internet().emailAddress(),
//                    faker.phoneNumber().cellPhone(),
//                    Base64.getEncoder().encode("123456789".getBytes()).toString()
//            );
//
//            ur.save(user);
//        }
    }
}
