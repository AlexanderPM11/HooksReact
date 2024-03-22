

export const PokemonCard = ({ sprites = [], name }) => {


    return (
        <>


            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div><div className="pokemons-container">
                    {

                        sprites.map((sprite) => {
                            return (

                                <img key={sprite} className="img-pokemon" src={sprite} />

                            )
                        })


                    }
                </div>
            </div>

        </>
    )
}
