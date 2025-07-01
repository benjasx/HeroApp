import { Navigate, useParams } from "react-router";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
    const { heroId } = useParams();
    const hero = useMemo(()=> getHeroById(heroId),[heroId]) ;

    if (!hero) return <Navigate to="/" />

    return (
        <div className="row mt-5 p-5">
            <div className="col-4">
                <img 
                    src={`/assets/heroes/${heroId}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__backInDown" 
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {hero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {hero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance:</b> {hero.first_appearance}
                    </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={() => window.history.back()}
                >
                    Back
                </button>
            </div>
        </div>
    )
}
