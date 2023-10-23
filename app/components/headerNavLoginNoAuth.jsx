import { Link } from "@remix-run/react"

export default function HeaderNavLoginNoAuth({ToogleShowAccount}) {
  return (
    <ul className="account-container">
      <li>
        <button className="close-btn" onClick={ToogleShowAccount}>X</button>
      </li>
      <li className="auth-link-hover">
        <Link to={"/account/properties"} className="auth-link">
          <p>Crear Cuenta</p>
          <p>Suscribete gratis o hazte Premium</p>
        </Link>
      </li>
      <li className="auth-link-hover">
        <Link to={"/account/properties"} className="auth-link">
          <p>Acceder</p>
          <p>¿Ya eres mimebro de Crunchyroll? Te damos la bienvenida</p>
        </Link>
      </li>
      <li className="auth-link-hover">
        <Link to={"/account/properties"} className="auth-link">
          <p>Tarjeta regalo</p>
          <p>¿Tienes una tarjeta regalo? Canjéala aqui</p>
        </Link>
      </li>
      <li className="btn-free-try-space">
        <Link to={"/account/properties"} className="btn-free-try">
          <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="premium-svg" aria-labelledby="premium-svg" aria-hidden="true" role="img">
            <title id="premium-svg">Solo para Premium</title>
            <path d="M18.188 17l1.667-5.606-4.26 1.864L12 7.688l-3.596 5.57-4.259-1.864L5.812 17h12.376zm-14.08 1.285L1.614 9.9a1 1 0 0 1 1.36-1.2l4.673 2.045 3.512-5.442a1 1 0 0 1 1.68 0l3.514 5.442 4.674-2.046a1 1 0 0 1 1.36 1.201l-2.494 8.386a1 1 0 0 1-.959.715H5.067a1 1 0 0 1-.959-.715z"></path>
          </svg>
          <p>Prueba gratuita de 14 días</p>
        </Link>
      </li>
    </ul>
  )
}
