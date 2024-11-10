package dev.skyherobrine.app.repositories;

import dev.skyherobrine.app.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

@Repository
@RestResource
public interface PostRepository extends JpaRepository<Post,Long> {
}
