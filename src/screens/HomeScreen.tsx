import { Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks'

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets()
  const {simplePokemonList, loadPokemon} = usePokemonPaginated();
  
  return (
    <>
      <Image source={require('../assets/pokebola.png')} style={styles.pokeballBG}/>
      {/* <Text style={{...styles.title, ...styles.globalMargin, top: top + 20,}}>Dex</Text> */}
      <FlatList
        data={simplePokemonList}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({item}) => (
          <Image 
            source={{uri: item.picture}}
            style={{width: 100, height: 100}}
          />
        )}

        //infinite scroll
        onEndReached={loadPokemon}
        onEndReachedThreshold={0.4}

        //activity indicator

        ListFooterComponent={<ActivityIndicator style={{height: 100}} color='grey' size={20}/>}
      />
    </>
  )
}
