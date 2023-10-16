import { Link } from "@remix-run/react"

export default function HeaderLinksGenders() {
  return (
    <>
      <li><Link to={"/videos/action"}>Action</Link></li>
      <li><Link to={"/videos/adventure"}>Adventure</Link></li>
      <li><Link to={"/videos/comedy"}>Comedy</Link></li>
      <li><Link to={"/videos/drama"}>Drama</Link></li>
      <li><Link to={"/videos/fantasy"}>Fantasy</Link></li>
      <li><Link to={"/videos/music"}>Musical</Link></li>
      <li><Link to={"/videos/romance"}>Romance</Link></li>
      <li><Link to={"/videos/sci-fi"}>Science Fiction</Link></li>
      <li><Link to={"/videos/seinen"}>Seinen</Link></li>
      <li><Link to={"/videos/shouju"}>Shouju</Link></li>
      <li><Link to={"/videos/shounen"}>Shounen</Link></li>
      <li><Link to={"/videos/slice-of-life"}>Slice of Life</Link></li>
      <li><Link to={"/videos/sports"}>Sports</Link></li>
      <li><Link to={"/videos/supernatural"}>Supernatural</Link></li>
      <li><Link to={"/videos/thriller"}>Thriller</Link></li>
    </>
  )
}
