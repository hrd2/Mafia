package com.dixon.mafia

/*
These models are the back-end parallel versions of the TypeScript models in
frontend/src/app/model.  They are structures used to communicate to and from the front-end.
 */

data class User(val displayName: String)
data class LoginDetails(val email: String, val password: String)
