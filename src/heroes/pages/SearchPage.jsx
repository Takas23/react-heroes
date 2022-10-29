import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
// npm i query-string para obtener datos de location
import queryString from 'query-string'
import { getHeroesByName } from "../helpers"



export const SearchPage = () => {

  //navegacion a ruta
  const navigate = useNavigate()
  //informacion de la localixzacion donde estamos
  const location = useLocation()

  //obtiene el search de location
  // destructura<mos la q (query default str vacio)
  const { q = '' } = queryString.parse(location.search)

  //hace la busqueda con el query
  const heroes = getHeroesByName(q)

  //utiliza el cust hook useform
  const { searchText, onInputChange } = useForm({
    // name del input
    searchText: q
  })


  const onSearchSubmit = (event) => {
    //evita el full refresh
    event.preventDefault()
    if (searchText.trim().length <= 1) return

    // navegacion con query
    navigate(`?q=${searchText}`)

  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">

          <h4>Search</h4>
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

            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* condicionales para mostrar lo que corresponda */}
          {
            (q === '') ?
              <div className="alert alert-primary animate__animated animate__fadeIn">
                Search a hero
              </div>
              : (heroes.length === 0) &&
              <div className="alert alert-danger animate__animated animate__fadeIn">
                No results with <b>{q}</b>
              </div>
          }

          {/* condicionales para cambiar el estilo */}
          {/* <div
            className="alert alert-primary"
            style={{ display: q !== '' ? '' : 'none' }}
          >
            Search a hero
          </div> */}

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }

        </div>

      </div>


    </>

  )
}
