package dev.skyherobrine.app.repositories;

import dev.skyherobrine.app.models.Post;
import dev.skyherobrine.app.projections.PostProject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(excerptProjection = PostProject.class)
public interface PostRepository extends JpaRepository<Post,Long> {

    //Path api query: localhost:8080/api/posts/search/published?page={?}&size={?}
    @RestResource(path = "published")
    @Query("select p from Post p where p.published = true")
    Page getAllPostPublished(Pageable page);

    @Modifying
    @Query("update Post p set p.published = true where p.id = :id")
    void publishPost(@Param("id") Long id);
}
