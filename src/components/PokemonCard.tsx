import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { SimplePokemon } from '../interfaces'
import { FadeInImage } from './'
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';
import ImageColors from 'react-native-image-colors'


const windowWidth = Dimensions.get('window').width
interface Props { 
    pokemon: SimplePokemon
}
export const PokemonCard = ({pokemon} : Props) => {
    const [bgColor, setBgColor] = useState('grey')



    useEffect(() => {

        const getColor = async () => {
            const result = await ImageColors.getColors(pokemon.picture, {
                fallback: 'grey',
                cache: true,
                key: 'unique_key',
              })
            switch (result.platform) {
            case 'android':
                // android result properties
                setBgColor(result.dominant || 'grey')
                break;
            case 'ios':
                // iOS result properties
                setBgColor(result.background)
                break;
            }
              
        }

        getColor()
    }, [])
    
  return (
    <TouchableOpacity activeOpacity={.9}>
        <View style={{...styles.cardContainer, backgroundColor: bgColor, width: windowWidth * .4}}>
            <View>
                <Text style={styles.name}>{pokemon.name} {'\n#' + pokemon.id}</Text>
            </View> 
            <View style={styles.pokeballContainer}>
                <Image style={styles.pokeball} source={require('../assets/pokebola-blanca.png')}/>
            </View>
            <FadeInImage 
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
            />
        </View>
    </TouchableOpacity>
  )
}

