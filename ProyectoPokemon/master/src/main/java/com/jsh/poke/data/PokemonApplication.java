package com.jsh.poke.data;

import com.jsh.poke.data.controllers.GenerateData;
import com.jsh.poke.data.model.Pokemon;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import com.jsh.poke.data.client.PokemonClientApi;

@EnableDiscoveryClient
@EnableFeignClients
@SpringBootApplication
public class PokemonApplication {


    public static void main(String[] args) {
        SpringApplication.run(PokemonApplication.class, args);
    }

    @Bean
    public CommandLineRunner run(PokemonClientApi pokemonClientApi) {
        return args -> {
            Pokemon pokemonInfo = pokemonClientApi.getPokemonInfo("Pikachu");
            GenerateData data = new GenerateData(pokemonInfo, pokemonClientApi);
            data.getInformation();

        };
    }

}
