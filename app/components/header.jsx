import { Link } from "@remix-run/react"
import HeaderNavGeneral from "./headerNavGeneral"
import HeaderNavLogin from "./headerNavLogin"
import HeaderMobileMenu from "./headerMobileMenu"

export default function Header({
  showBrowseMenu,
  ToogleShowBrowseMenu,
  showNewsMenu,
  ToogleShowNewsMenu,
  showDropBoxGenres, 
  ToogleDropBoxGenres, 
  showDropBoxNews, 
  ToogleDropBoxNews
}) {
  return (
    <header className="header">
      <div className="header__container">

        {/* Mobile/Tablet Menu */}
        <HeaderMobileMenu
          showBrowseMenu={showBrowseMenu}
          ToogleShowBrowseMenu={ToogleShowBrowseMenu}
          showNewsMenu={showNewsMenu}
          ToogleShowNewsMenu={ToogleShowNewsMenu}
          showDropBoxGenres={showDropBoxGenres}
          ToogleDropBoxGenres={ToogleDropBoxGenres}
          showDropBoxNews={showDropBoxNews}
          ToogleDropBoxNews={ToogleDropBoxNews}
        />

        {/* Mobile/Desktop Logos */}
        <div>
          <Link to={"/"}>
            <svg className="logo-desktop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136 24" data-t="crunchyroll-horizontal-svg"   aria-labelledby="crunchyroll-horizontal-svg" aria-hidden="false" role="img"
            >
              <title id="crunchyroll-horizontal-svg">Logo de Crunchyroll</title>
              <path d="M66.397 6.887c-2.775 0-5.067.25-5.067 2.124v9.317h2.62V9.873c0-.48 1.355-.577 2.097-.577 2.383 0 2.336 1.045 2.336 2.037v6.995h2.602v-7.053c0-3.134-1.552-4.388-4.588-4.388zm66.757 11.449h2.68V2.786h-2.68v15.55zm-5.808 0h2.682V2.786h-2.682v15.55zm-7.589-2.018c-1.594 0-2.603-.59-2.603-3.579 0-2.99 1.009-3.58 2.603-3.58 1.59 0 2.601.59 2.601 3.58s-1.01 3.579-2.6 3.579zm0-9.401c-3.41 0-5.292 2.06-5.292 5.822s1.882 5.822 5.292 5.822c3.406 0 5.29-2.06 5.29-5.822 0-3.761-1.884-5.822-5.29-5.822zM107.52 8.34v9.995h2.684V9.903c0-.66 1.646-.64 3.141-.663V6.894s-5.825-.243-5.825 1.447zm-7.143 6.587l-2.503-7.854h-2.834l3.994 10.674c-.14.398 0 .003-2.034 5.036l2.802.002 1.623-4.18 4.244-11.532h-2.836l-2.456 7.854zm-11.79-8.034c-.871 0-1.61.135-2.234.383V2.786h-2.679v15.55h2.679V9.624c.446-.203 1.05-.339 1.785-.339 2.502 0 2.726 1.06 2.726 2.055v6.996h2.658v-6.771c0-2.934-1.832-4.671-4.934-4.671zm-7.323 8.778c-.83.34-1.75.566-2.784.566-1.883 0-3.052-.59-3.052-3.493 0-2.925 1.169-3.492 3.052-3.492 1.034 0 1.953.204 2.784.543V7.528a8.639 8.639 0 0 0-3.233-.634c-3.41 0-5.299 2.087-5.299 5.85 0 3.767 1.89 5.831 5.299 5.831 1.192 0 2.27-.252 3.233-.636v-2.267zm-25.05-2.049c0 1.812-.656 2.431-2.289 2.431-1.613 0-2.268-.619-2.268-2.43v-6.55h-2.638v6.185c0 3.33 1.07 5.302 4.906 5.302 3.826 0 4.928-1.971 4.928-5.302V7.074h-2.64v6.55zM43.831 9.91c0-.667 1.632-.646 3.127-.67V6.894s-5.807-.237-5.807 1.447v9.995h2.68V9.91zM30 12.739c0-3.761 1.882-5.845 5.293-5.845 1.188 0 2.265.249 3.23.634v2.265a7.265 7.265 0 0 0-2.78-.542c-1.885 0-3.05.566-3.05 3.488 0 2.9 1.165 3.49 3.05 3.49 1.029 0 1.949-.226 2.78-.565v2.265a8.661 8.661 0 0 1-3.23.634c-3.41 0-5.293-2.06-5.293-5.824zm-10.875 1.175a3.8 3.8 0 0 0 3.039-1.516 8.357 8.357 0 0 1-8.217 9.889 8.357 8.357 0 0 1-8.357-8.358 8.357 8.357 0 0 1 12.243-7.4 3.806 3.806 0 0 0 1.292 7.385zM11.892 0c6.569 0 11.893 5.325 11.893 11.892 0 .236-.007.469-.02.7-.376-5.43-4.9-9.72-10.427-9.72-5.773 0-10.454 4.68-10.454 10.453 0 5.56 4.34 10.103 9.817 10.433-.267.018-.536.027-.809.027C5.325 23.785 0 18.461 0 11.892 0 5.325 5.325 0 11.892 0z"></path>
            </svg>

            <svg className="logo-mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="crunchyroll-logo-only-svg" aria-labelledby="crunchyroll-logo-only-svg" aria-hidden="true" role="img"
            >
              <title id="crunchyroll-logo-only-svg">Logo de Crunchyroll</title>
              <path d="M19.125 13.914a3.804 3.804 0 0 1-1.292-7.385 8.357 8.357 0 0 0-12.243 7.4 8.357 8.357 0 0 0 8.357 8.357 8.357 8.357 0 0 0 8.217-9.888 3.8 3.8 0 0 1-3.04 1.516M11.893 0C5.325 0 0 5.325 0 11.892c0 6.569 5.325 11.893 11.892 11.893.273 0 .542-.01.809-.027-5.476-.33-9.817-4.873-9.817-10.433 0-5.773 4.68-10.453 10.454-10.453 5.527 0 10.051 4.29 10.427 9.72.013-.231.02-.464.02-.7C23.785 5.325 18.461 0 11.892 0">  
              </path>
            </svg>
          </Link>
        </div>

        {/* Main Navegation */}
        <nav className="navegation">
          <HeaderNavGeneral 
            showBrowseMenu={showBrowseMenu}
            ToogleShowBrowseMenu={ToogleShowBrowseMenu}
            showNewsMenu={showNewsMenu}
            ToogleShowNewsMenu={ToogleShowNewsMenu}
          />
          <HeaderNavLogin />
        </nav>
      </div>
    </header>
  )
}
