package com.dixon.mafia

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MafiaApplication

fun main(args: Array<String>) {
	runApplication<MafiaApplication>(*args)
}
