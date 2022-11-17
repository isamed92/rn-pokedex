import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20, 
    },
    pokeballBG: {
        position: 'absolute',
        width: 300,
        height: 300,
        right: -100,
        top: -100,
        opacity: 0.2
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    cardContainer : {
        marginHorizontal: 10, 
        height: 120,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20, 
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokeballContainer: {
        width: 100, 
        height: 100, 
        position: 'absolute',
        opacity: .5,
        overflow: 'hidden',
        bottom: 0,
        right: 0
    },
    
    pokeball: {
        width: 100, 
        height: 100, 
        position: 'absolute',
        bottom: -25,
        right: -25
    },
    pokemonImage: {
        width: 120, 
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -15
    },
    
});