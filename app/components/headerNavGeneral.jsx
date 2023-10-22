import { Link } from "@remix-run/react"
import HeaderLinksExplore from "./headerLinksExplore"
import HeaderLinksGenders from "./headerLinksGenders"
import HeaderLinksNews from "./headerLinksNews"

export default function HeaderNavGeneral({
  showBrowseMenu,
  ToogleShowBrowseMenu,
  showNewsMenu,
  ToogleShowNewsMenu
}) {
  return (
    <ul className="navegation__general">
      
      {/* Browse Button */}
      <li>
        <button 
          className={`btn-nav btn-flex ${showBrowseMenu ? 'selected' : ''}`}
          onClick={ToogleShowBrowseMenu}
        >
          Browse 
          <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="dropdown-svg" aria-labelledby="dropdown-svg" aria-hidden="true" role="img">
            <title id="dropdown-svg">Menú desplegable</title>
            <path d="M7 10h10l-5 5z"></path>
          </svg>
        </button>

        {/* Submenu that will appear when the button above is click it */}
        <div className={`sbmn ${showBrowseMenu ? 'sbmn-show' : ''}`}>
          <div className="grid-browse">
            <ul className="btn-li-white">
              {/* Link Component */}
              <HeaderLinksExplore />
            </ul>
            <ul className="line-grid-genres">
              <li><p className="heading-menu">GENRES</p></li>
              <li>
                <ul className="btn-li grid-genres">
                  {/* Link Component */}
                  <HeaderLinksGenders />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </li>

      {/* Manga Button */}
      <li><Link to={"/search"} className="btn-nav">Manga</Link></li>

      {/* Game Button */}
      <li><Link to={"/search"} className="btn-nav">Games</Link></li>

      {/* News Button */}
      <li>
        <button 
          className={`btn-nav btn-flex ${showNewsMenu ? 'selected' : ''}`}
          onClick={ToogleShowNewsMenu}
        >
          News 
          <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="dropdown-svg" aria-labelledby="dropdown-svg" aria-hidden="true" role="img">
            <title id="dropdown-svg">Menú desplegable</title>
            <path d="M7 10h10l-5 5z"></path>
          </svg>
        </button>

        {/* Submenu that will appear when the button above is click it */}
        <div className={`sbmn ${showNewsMenu ? 'sbmn-show' : ''}`}>
          <ul className="grid-news btn-li-white">
            {/* Link Component */}
            <HeaderLinksNews />
          </ul>
        </div>
      </li>
    </ul>
  )
}
