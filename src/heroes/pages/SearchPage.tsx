import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { HeroCard } from "../components";
import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../helpers";

type Event = React.FormEvent<HTMLFormElement>;

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q as string);

  const { searchText, onInputChange } = useForm({
    searchText: q as string,
  });

  const onSearchSubmit = (event: Event) => {
    event.preventDefault();

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
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
          </form>

          <button className="btn btn-outline-primary mt-1">Search</button>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary animate__animated animate__fadeInLeft">
              Search a hero
            </div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger animate__animated animate__fadeInLeft">
                No hero with <b>{q}</b>
              </div>
            )
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
