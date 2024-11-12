package dev.skyherobrine.app.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.Objects;
import java.util.Set;

@Entity
@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne @JoinColumn(name = "author_id", nullable = false) @NonNull
    private User author;
    @Column(length = 75, nullable = false) @NonNull
    private String title;
    @Column(length = 100)
    private String metaTitle;
    @Column(columnDefinition = "TINYTEXT")
    private String content;
    @Column(columnDefinition = "TINYTEXT")
    private String summary;
    @ManyToOne @JoinColumn(name = "parent_id")
    private Post parent;
    @Column(nullable = false)
    private boolean published;
    @Column(name = "created_at", nullable = false)
    private Instant createdAt;
    @Column(name = "updated_at")
    private Instant updatedAt;
    @Column(name = "published_at")
    private Instant publishedAt;
    @JsonIgnore
    @OneToMany(mappedBy = "parent", fetch = FetchType.EAGER)
    private Set<Post> posts;
    @JsonIgnore
    @OneToMany(mappedBy = "post", fetch = FetchType.EAGER)
    private Set<PostComment> comments;

    @JsonCreator
    public Post(@JsonProperty("id") Long id) {
        this.id = id;
    }

    public Post(@NonNull User author, @NonNull String title, String metaTitle, String content, String summary, Post parent) {
        this.author = author;
        this.title = title;
        this.metaTitle = metaTitle;
        this.content = content;
        this.summary = summary;
        this.parent = parent;
    }

    @PostPersist
    public void postPersist() {
        this.createdAt = this.updatedAt = Instant.now();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return Objects.equals(getId(), post.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }
}
