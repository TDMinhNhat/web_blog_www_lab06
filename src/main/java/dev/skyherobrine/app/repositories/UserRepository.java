package dev.skyherobrine.app.repositories;

import dev.skyherobrine.app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource
public interface UserRepository extends JpaRepository<User,Long> {

    @Override
    @RestResource
    @Modifying
    @Query("update User u set u.status = false where u.id = :id")
    void deleteById(@Param("id") Long id);
}
