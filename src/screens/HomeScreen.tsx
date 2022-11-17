import { Text, Image, FlatList, ActivityIndicator, View } from 'react-native'
import React from 'react'
import { styles } from '../theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks'
import { FadeInImage, PokemonCard } from '../components'

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets()
  const {simplePokemonList, loadPokemon} = usePokemonPaginated();
  
  return (
    <>
      <Image source={require('../assets/pokebola.png')} style={styles.pokeballBG}/>
      <View style={{...styles.globalMargin, alignItems: 'center'}}>
      <FlatList
        data={simplePokemonList}
        numColumns={2}
        // header
        ListHeaderComponent={(
          <Text style={{...styles.title, ...styles.globalMargin, top: top + 20, marginBottom: top + 20, paddingBottom: 10}}>Dex</Text>
        )}
        keyExtractor={(pokemon) => pokemon.id}
        renderItem={({item}) => <PokemonCard pokemon={item}/>}

        //infinite scroll
        onEndReached={loadPokemon}
        onEndReachedThreshold={0.4}

        //activity indicator

        ListFooterComponent={<ActivityIndicator style={{height: 100}} color='grey' size={20}/>}
      />

      </View>
    </>
  )
}
