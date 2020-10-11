package com.dixon.mafia

import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/backend")
@CrossOrigin(origins = ["http://localhost:4200"])
class BackendController {
    @PostMapping("/login")
    fun login(@RequestBody loginDetails: LoginDetails): User = User(loginDetails.email.subSequence(0, loginDetails.email.indexOf('@')).toString())
}
