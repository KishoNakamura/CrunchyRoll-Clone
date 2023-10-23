import { Link } from "@remix-run/react"

export default function HeaderNavLoginAuth({ToogleShowAccount}) {
  return (
    <ul className="account-container">
      <li>
        <button className="close-btn" onClick={ToogleShowAccount}>X</button>
      </li>
      <li>
        <div className="auth-account">
          <img className="user-avatar" src="https://static.crunchyroll.com/assets/avatar/170x170/100003-the-rising-of-the-shield-hero-filo.png" alt="Avatar de usuario" loading="lazy"/>
          <div>
            <p>Hikari_Sokudo02</p>
            <div className="isPremium">
              <svg className="svg-icon" viewBox="0 0 16 16" data-t="premium-filled-svg" aria-labelledby="premium-filled-svg" aria-hidden="true" role="img"><title id="premium-filled-svg">Premium</title><path d="M2.419 13L0 4.797 4.837 6.94 8 2l3.163 4.94L16 4.798 13.581 13z"></path></svg>
              <p>Miembro Premium</p>
            </div>
          </div>
        </div>
      </li>
      <li className="line-auth">
        <ul className="auth-link-padding">
          <li className="auth-link-hover">
            <Link to={"/account/properties"} className="auth-link-row">
              <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="watchlist-svg" aria-labelledby="watchlist-svg" aria-hidden="true" role="img"><title id="watchlist-svg">Favoritos</title><path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path></svg>
              <p>Favoritos</p>
            </Link>
          </li>
          <li className="auth-link-hover">
            <Link to={"/account/properties"} className="auth-link-row">
              <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="custom-list-svg" aria-labelledby="custom-list-svg" aria-hidden="true" role="img"><title id="custom-list-svg">Crunchylista</title><path d="M22 17v2H6v-2h16zM3 17c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm19-6v2H6v-2h16zM3 11c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm19-6v2H6V5h16zM3 5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"></path></svg>
              <p>Crunchylistas</p>
            </Link>
          </li>
          <li className="auth-link-hover">
            <Link to={"/account/properties"} className="auth-link-row">
              <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="history-svg" aria-labelledby="history-svg" aria-hidden="true" role="img"><title id="history-svg">Historial</title><path d="M11 7a1 1 0 0 1 2 0v5.411l-3.293 3.293a1 1 0 0 1-1.414-1.414L11 11.583V7zm1-5c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.977 9.977 0 0 1-6.667-2.547 1 1 0 1 1 1.334-1.49A7.986 7.986 0 0 0 12 20c4.411 0 8-3.589 8-8s-3.589-8-8-8c-4.072 0-7.436 3.06-7.931 7H6l-3 3-3-3h2.051C2.554 5.954 6.823 2 12 2z"></path></svg>
              <p>Historial</p>
            </Link>
          </li>
        </ul>
      </li>
      <li className="line-auth">
        <ul className="auth-link-padding">
          <li className="auth-link-hover">
            <Link to={"/account/properties"} className="auth-link-row">
              <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="notification-svg" aria-labelledby="notification-svg" aria-hidden="true" role="img"><title id="notification-svg">Notificación</title><path d="M4.382 18L6 15.274V11c0-4.252 2.355-7 6-7s6 2.748 6 7v4.274L19.62 18H4.382zM12 21a1.993 1.993 0 0 1-1.722-1h3.444c-.347.595-.985 1-1.722 1zm9.806-3.234L20 14.726V11c0-5.299-3.29-9-8-9s-8 3.701-8 9v3.726L2.16 17.829a1.488 1.488 0 0 0 .066 1.459A1.49 1.49 0 0 0 3.502 20h4.64c.448 1.721 2 3 3.859 3s3.41-1.279 3.859-3h4.64c.525 0 1.002-.267 1.278-.713.275-.446.298-.992.029-1.521z"></path></svg>
              <p>Notificaciones</p>
            </Link>
          </li>
          <li className="auth-link-hover">
            <Link to={"/account/properties"} className="auth-link-row">
              <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="user-settings-svg" aria-labelledby="user-settings-svg" aria-hidden="true" role="img"><title id="user-settings-svg">Menú de la cuenta</title><path d="M12 20a6.01 6.01 0 0 1-5.966-5.355L12 12.088l5.966 2.557A6.01 6.01 0 0 1 12 20m0-16c1.654 0 3 1.346 3 3s-1.345 3-2.999 3h-.002A3.003 3.003 0 0 1 9 7c0-1.654 1.346-3 3-3m7.394 9.081l-4.572-1.959A4.997 4.997 0 0 0 17 7c0-2.757-2.243-5-5-5S7 4.243 7 7c0 1.71.865 3.22 2.178 4.122l-4.572 1.959A.999.999 0 0 0 4 14c0 4.411 3.589 8 8 8s8-3.589 8-8c0-.4-.238-.762-.606-.919"></path></svg>
              <div>
                <p>Mi cuenta</p>
                <p>Gestiona tu perfil y tus opciones.</p>
              </div>
            </Link>
          </li>
          <li className="auth-link-hover">
            <Link to={"/account/properties"} className="auth-link-row">
              <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" data-t="gift-svg" aria-labelledby="gift-svg" aria-hidden="true" role="img"><title id="gift-svg">regalo</title><path d="M13.963 3c2.827 0 4.882.872 6.044 2.95 1.118-2.003 3.069-2.886 5.742-2.947l.3-.003h.256c1.311.007 2.294.105 3.328.465 1.906.662 3.267 2.148 3.362 4.294L33 8v.295l-.003.286c-.021 1.321-.26 2.471-.748 3.419H37v10l-3.001-.001L34 37H6l-.001-15.001L3 22V12h4.763c-.488-.948-.727-2.098-.748-3.419l-.003-.286V8c0-2.276 1.39-3.848 3.367-4.535 1.034-.36 2.017-.458 3.328-.465h.256zM18.5 21.999 8.999 22v12l9.501-.001v-12zM30.999 22l-9.499-.001v12l9.499.001V22zm-17.062-7.001L6 15v4l12.5-.001V15h-4.488l-.075-.001zM34 15l-7.926-.001L26 15h-4.5v3.999L34 19v-4zm-7.578-8.998h-.611c-2.728.059-3.505 1.165-3.72 3.485l-.018.221-.026.413-.018.435-.01.458-.007.986H26c2.842 0 3.665-1.006 3.903-2.308l.021-.127.032-.25.022-.257.013-.26.006-.265L30 8c0-1.52-1.55-1.885-2.852-1.972l-.144-.009-.3-.012-.282-.005zm-12.833 0-.282.005-.3.012c-1.328.071-2.995.405-2.995 1.981l.003.533.006.264.013.261.022.256.032.251c.208 1.363.99 2.435 3.924 2.435H18l-.007-.986-.01-.458-.018-.435-.026-.413c-.187-2.471-.925-3.645-3.738-3.706h-.612z"></path></svg>
              <div>
                <p>Tarjeto regalo</p>
                <p>¿Tienes tarjeta de regalo? Canjéala aquí</p>
              </div>
            </Link>
          </li>
        </ul>
      </li>
      <li className="line-auth">
        <ul className="auth-link-padding-top">
          <li className="auth-link-hover">
            <Link to={"/account/properties"} className="auth-link-row">
              <svg className="svg-icon base-svg--is-flip--QvCQC" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="sign-out-svg" aria-labelledby="sign-out-svg" aria-hidden="true" role="img"><title id="sign-out-svg">Desconectar</title><path d="M15 15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V4H6v16h8v-4a1 1 0 0 1 1-1zm8.923-2.618a1 1 0 0 1-.217.326l-4 3.999A.993.993 0 0 1 19 17a.999.999 0 0 1-.707-1.707L20.586 13H15a1 1 0 0 1 0-2h5.586l-2.293-2.293a.999.999 0 1 1 1.414-1.414l3.999 4a.992.992 0 0 1 .217 1.089z"></path></svg>
              <p>Desconectar</p>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  )
}
