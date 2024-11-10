package dev.skyherobrine.app.repositories;

import dev.skyherobrine.app.models.PostComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

@Repository
@RestResource
public interface PostCommentRepository extends JpaRepository<PostComment,Long> {
}
