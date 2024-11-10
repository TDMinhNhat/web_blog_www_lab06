package dev.skyherobrine.app.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.Set;

@Entity
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class PostComment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100, nullable = false) @NonNull
    private String title;
    @Column(columnDefinition = "TINYTEXT")
    private String content;
    @ManyToOne @JoinColumn(name = "post_id", nullable = false) @NonNull
    private Post post;
    @ManyToOne @JoinColumn(name = "parent_id")
    private PostComment parent;
    @ManyToOne @JoinColumn(name = "user_id", nullable = false) @NonNull
    private User user;
    @Column(nullable = false) @NonNull
    private Boolean published;
    @Column(name = "created_at", nullable = false)
    private Instant createdAt;
    @Column(name = "published_at")
    private Instant publishedAt;
    @JsonIgnore
    @OneToMany(mappedBy = "parent", fetch = FetchType.LAZY)
    private Set<PostComment> postComments;

    public PostComment(@NonNull String title, String content, @NonNull Post post, PostComment parent, @NonNull User user, @NonNull Boolean published) {
        this.title = title;
        this.content = content;
        this.post = post;
        this.parent = parent;
        this.user = user;
        this.published = published;
    }

    @PostPersist
    public void postPersist() {
        this.createdAt = Instant.now();
    }
}
