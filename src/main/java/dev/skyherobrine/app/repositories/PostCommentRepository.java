package dev.skyherobrine.app.repositories;

import dev.skyherobrine.app.models.PostComment;
import dev.skyherobrine.app.projections.PostCommentProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(excerptProjection = PostCommentProject.class)
public interface PostCommentRepository extends JpaRepository<PostComment,Long> {
}
