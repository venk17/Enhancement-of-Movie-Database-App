import {Link, withRouter} from 'react-router-dom'
import SearchMoviesContext from '../../context/SearchMoviesContext'
import './index.css'

const NavBar = props => {
  const renderSearchBar = () => (
    <SearchMoviesContext.Consumer>
      {value => {
        const {
          onTriggerSearchingQuery,
          onChangeSearchInput,
          searchInput,
        } = value

        const onChangeHandler = event => onChangeSearchInput(event.target.value)

        const onSearchHandler = event => {
          event.preventDefault()
          const {history} = props
          onTriggerSearchingQuery()
          history.push('/search')
        }

        return (
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              onChange={onChangeHandler}
              value={searchInput}
              placeholder="Search movies..."
            />
            <button
              className="search-button"
              type="button"
              onClick={onSearchHandler}
            >
              Search
            </button>
          </div>
        )
      }}
    </SearchMoviesContext.Consumer>
  )

  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo">movieDB</h1>
      </div>

      <div className="nav-links">
        <Link className="nav-link" to="/">
          Popular
        </Link>
        <Link className="nav-link" to="/top-rated">
          Top Rated
        </Link>
        <Link className="nav-link" to="/upcoming">
          Upcoming
        </Link>
      </div>

      <div className="search-wrapper">{renderSearchBar()}</div>
    </nav>
  )
}

export default withRouter(NavBar)
