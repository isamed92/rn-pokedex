import { useEffect, useRef, useState } from "react"
import { pokemonAPI } from '../api/pokemonAPI';
import { PokemonPaginatedResponse, Result, SimplePokemon } from "../interfaces";

export const usePokemonPaginated = () => {
    const [isLoading, setIsLoading] = useState(true)

    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')


    const loadPokemon = async () => {
        setIsLoading(true)
        const resp = await pokemonAPI.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results)
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}, i) => {
            const urlParts = url.split('/')
            const id = urlParts[urlParts.length - 2]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            return {
                id,
                picture,
                name,
            }
        })
        setSimplePokemonList([...simplePokemonList, ...newPokemonList])
        setIsLoading(false)
    }

    useEffect(() => {
      loadPokemon()
    
      
    }, [])
    return {
        isLoading,
        simplePokemonList,
        loadPokemon,
    }
}
