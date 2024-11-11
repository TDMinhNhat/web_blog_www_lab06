package dev.skyherobrine.app.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import dev.skyherobrine.app.enums.UserRole;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.Objects;
import java.util.Set;

@Entity
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "first_name", length = 50, nullable = false) @NonNull
    private String firstName;
    @Column(name = "middle_name", length = 50, nullable = false) @NonNull
    private String middleName;
    @Column(name = "last_name", length = 50, nullable = false) @NonNull
    private String lastName;
    @Column(length = 50, nullable = false) @NonNull
    private String email;
    @Column(length = 20, nullable = false) @NonNull
    private String mobile;
    @Column(columnDefinition = "TINYTEXT")
    private String intro;
    @Column(columnDefinition = "TINYTEXT")
    private String profile;
    @Column(name = "registered_at", length = 6, nullable = false)
    private Instant registeredAt;
    @Column(name = "last_login", length = 6, nullable = false)
    private Instant lastLogin;
    @Column(name = "password_hash", length = 32, nullable = false) @NonNull
    private String passwordHash;
    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false)
    private UserRole role;
    @Column(nullable = false)
    private boolean status;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private Set<PostComment> comments;
    @JsonIgnore
    @OneToMany(mappedBy = "author", fetch = FetchType.EAGER)
    private Set<Post> posts;

    @PrePersist
    public void prePersist() {
        registeredAt = lastLogin = Instant.now();
        role = UserRole.USER;
        status = true;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(getId(), user.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }
}
