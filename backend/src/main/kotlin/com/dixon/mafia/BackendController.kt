package com.dixon.mafia

import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.servlet.http.HttpSession


@RestController
@RequestMapping("/backend")
@CrossOrigin(allowCredentials = "true", origins = ["http://localhost:4200"])
class BackendController {

    @PostMapping("/login")
    fun login(@RequestBody loginDetails: LoginDetails, httpSession: HttpSession): User {
        val user = User(loginDetails.email.subSequence(0, loginDetails.email.indexOf('@')).toString())
        httpSession.setAttribute(USER, user)
        return user
    }

    @PostMapping("/logout")
    fun logout(httpSession: HttpSession): Unit = httpSession.removeAttribute(USER)

    @GetMapping("/user")
    fun user(httpSession: HttpSession): ResponseEntity<User> =
            ResponseEntity.of(Optional.ofNullable(httpSession.getAttribute(USER) as User?))

    companion object {
        const val USER: String = "user"
    }
}
