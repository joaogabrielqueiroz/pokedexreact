import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/Pokemoncard';

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 50; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        console.log(endpoints)
        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
        return response;

  };

  return (
    <div>
      <Navbar />
      <Container maxWidth="xg">
        <Grid container spacing={(3)}>
          {pokemons.map((pokemon, key) => (
            <Grid item xs={3} key={key}>
              <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
