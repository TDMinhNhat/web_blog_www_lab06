package dev.skyherobrine.app.resources;

import dev.skyherobrine.app.services.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
public class UserControllers {

    @Autowired
    private UserServiceImpl usi;

    @PostMapping(value = "login", produces = "application/json")
    public ResponseEntity<?> checkLogin(@RequestParam("email") String email, @RequestParam("password") String password) {
        return ResponseEntity.ok(usi.checkLogin(email, password));
    }
}
