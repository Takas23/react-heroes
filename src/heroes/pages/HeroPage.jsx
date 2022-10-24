import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getgHeroById } from "../helpers"


export const HeroPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    //memoriza el valor para no recargar cada vez (solo se dispara cuando cambia [id])
    const hero = useMemo ( () => getgHeroById(id), [id]) 

    const onNavigateBack = () => {
        navigate(-1) // -1 navega un paso atras del historial
    }

    if (!hero) {
        return <Navigate to='/marvel' />
    }

    return (
        <div className="row mt-5 animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b> {hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Back
                </button>
            </div>
        </div>
    )
}
