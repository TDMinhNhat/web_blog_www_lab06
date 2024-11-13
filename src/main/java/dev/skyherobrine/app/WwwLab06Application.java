package dev.skyherobrine.app;

import dev.skyherobrine.app.models.Post;
import dev.skyherobrine.app.models.User;
import dev.skyherobrine.app.repositories.PostCommentRepository;
import dev.skyherobrine.app.repositories.PostRepository;
import dev.skyherobrine.app.repositories.UserRepository;
import net.datafaker.Faker;
import net.datafaker.providers.base.Name;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Base64;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.ThreadLocalRandom;

@SpringBootApplication
public class WwwLab06Application implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(WwwLab06Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
    }
}
