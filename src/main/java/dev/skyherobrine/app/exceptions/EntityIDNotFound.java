package dev.skyherobrine.app.exceptions;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class EntityIDNotFound extends Exception {

    public EntityIDNotFound(String id) {
        super("The entity with ID " + id + " was not found.");
        log.warn("The entity was not found");
    }
}
