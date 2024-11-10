package dev.skyherobrine.app.repositories;

import dev.skyherobrine.app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

@Repository
@RestResource(path = "/v1/users")
public interface UserRepository extends JpaRepository<User,Long> {
}
