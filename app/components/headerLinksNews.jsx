import { Link } from "@remix-run/react"

export default function HeaderLinksNews() {
  return (
    <>
      <li><Link to={"/"}>Todas las secciones</Link></li>
      <li><Link to={"/"}>Awards</Link></li>
      <li><Link to={"/"}>Expo</Link></li>
      <li><Link to={"/"}>Movie Night</Link></li>
    </>
  )
}
