import { PokemonCard } from "./PokemonCard"
import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter"

export const MultiCustomHook = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { state } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);


    return (
        <>

            {
                state.isLoading
                    ?
                    <p>Cargando</p>
                    :
                    <PokemonCard
                        sprites={
                            [
                                state.data.sprites.back_default,
                                state.data.sprites.back_shiny,
                                state.data.sprites.front_default,
                                state.data.sprites.front_shiny,
                            ]
                        }
                        name={state.data.name}
                    />
            }

            <button
                className="btn btn-primary m-2"
                onClick={counter > 1 ? () => decrement(1) : null}
            >
                Anterior
            </button>

            <button
                className="btn btn-primary m-2"
                onClick={() => increment(1)}
            >
                Siguiente
            </button>
        </>
    )
}