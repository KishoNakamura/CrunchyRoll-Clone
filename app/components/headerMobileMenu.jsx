import { Link } from "@remix-run/react"
import HeaderLinksExplore from "./headerLinksExplore"
import HeaderLinksGenders from "./headerLinksGenders"
import HeaderLinksNews from "./headerLinksNews"

export default function HeaderMobileMenu({
  showMenu, 
  ToogleShowMenu, 
  showDropBoxGenres, 
  ToogleDropBoxGenres, 
  showDropBoxNews, 
  ToogleDropBoxNews
}) {
  return (
    <ul className="mobile-menu">
      <li>
        <button
          className={`btn-nav ${showMenu ? 'selected' : ''}`}
          onClick={ToogleShowMenu}
        >
          <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="menu-svg" aria-labelledby="menu-svg" aria-hidden="true" role="img"
          >
            <title id="menu-svg">Menú</title>
            <path d="M21 4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm0 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm0 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18z"></path>
          </svg>
        </button>

        {/* Menu that will appear when the button above is click it */}
        <ul className={`sbmn-mobile-menu sbmn ${showMenu ? 'sbmn-show' : ''}`}>
          <li><p className="heading-mobile-menu">Browse</p></li>
          <li>
            <ul className="btn-mobile-menu">
              {/* Link Component */}
              <HeaderLinksExplore />
              <li>
                <button 
                  className="dropbox-btn"
                  onClick={ToogleDropBoxGenres}
                >
                  Genres
                  <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="angle-bottom-svg" aria-labelledby="angle-svg" aria-hidden="true" role="img"><title id="angle-svg">Expand</title><path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"></path></svg>
                </button>

                {/* Dropbox that will appear when the button above is click it */}
                <ul className={`dropbox-list ${showDropBoxGenres ? 'dropbox-show' : ''}`}>
                  {/* Link Component */}
                  <HeaderLinksGenders />
                </ul>
              </li>
            </ul>
          </li>
          <li className="line-mobile-menu">
            <ul className="btn-mobile-menu">
              <li><Link to={"/search"}>Manga</Link></li>
              <li><Link to={"/games"}>Games</Link></li>
              <li>
                <button 
                  className="dropbox-btn"
                  onClick={ToogleDropBoxNews}
                >
                  News
                  <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="angle-bottom-svg" aria-labelledby="angle-svg" aria-hidden="true" role="img"><title id="angle-svg">Expand</title><path d="M8.6 7.4L10 6l6 6-6 6-1.4-1.4 4.6-4.6z"></path></svg>
                </button>

                {/* Dropbox that will appear when the button above is click it */}
                <ul className={`dropbox-list ${showDropBoxNews ? 'dropbox-show' : ''}`}>
                  {/* Link Component */}
                  <HeaderLinksNews />
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  )
}
