package com.clickcafe.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("ClickCafe Backend API")
                        .description("Sistema de gestión para cafetería - API REST para manejo de productos y órdenes")
                        .version("1.0.0"));
    }
}
