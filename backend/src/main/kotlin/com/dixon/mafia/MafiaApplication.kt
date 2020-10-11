package com.dixon.mafia

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.ClassPathResource
import org.springframework.core.io.Resource
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.web.servlet.resource.PathResourceResolver


@SpringBootApplication
class MafiaApplication

fun main(args: Array<String>) {
    runApplication<MafiaApplication>(*args)
}

/*
Map all paths to the "/static/index.html" page unless there is another static mapping,
or a mapping configured in a Controller.

This allows Angular to handle the front-end routing
*/
@Configuration
class WebConfig : WebMvcConfigurer {

    object PathResolver : PathResourceResolver() {
        override fun getResource(resourcePath: String,
                                 location: Resource): Resource {
            val requestedResource: Resource = location.createRelative(resourcePath)
            return if (requestedResource.exists() && requestedResource.isReadable) {
                requestedResource
            } else {
                ClassPathResource("/static/index.html")
            }
        }
    }

    override fun addResourceHandlers(registry: ResourceHandlerRegistry): Unit {
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/")
                .resourceChain(true)
                .addResolver(PathResolver)
    }
}