import React, { useEffect } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui';
import { useState } from 'react';
import { localFavorites } from '../../utils';
import { Card, Grid } from '@nextui-org/react';
import { FavoritePokemons } from '../../components/pokemon';

export const FavoritesPage = () => {

  const [ favoritePokemons, setFavoritePokemons ] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() );
  }, []);


  return (
    <Layout title='Pokemons - Favoritos'>

        {
          favoritePokemons.length === 0
          ? (< NoFavorites /> )
          : (<FavoritePokemons pokemons={favoritePokemons}/>)

        }

        

    </Layout>
  )
}

export default FavoritesPage