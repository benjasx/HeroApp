import { useLocation, useNavigate } from "react-router"
import { useForm } from "../../hooks/useForm"
import queryString from "query-string";
import { getHeroeByName } from "../helpers";
import { HeroCard } from "../components";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroeByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q
    })

    const showSearch = (q.length === 0)
    const showError = (q.length > 0 && heroes.length === 0)

    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (searchText.trim().length === 1) return;
        navigate(`?q=${searchText}`)
    }
    return (
        <>
            <h1 className="ps-5 pt-5">Search a hero</h1 >
            <hr />
            <div className="row p-5">

                <div className="col-5">
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-2">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    {

                    }
                    <div className="alert alert-primary" style={{display: showSearch ? '' : 'none'}}>
                        Search a hero
                    </div>
                    <div className="alert alert-danger" style={{display: showError ? '' : 'none'}}>
                        No hero with <b>{q}</b>
                    </div>
                    {heroes.map(hero => (

                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    )
}
