import { Link } from "react-router"

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img className="card-img" src={heroImageUrl} alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            
                            {
                                (alter_ego !== characters) && (<p>{characters}</p>)
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`../${id}`}>
                            Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
