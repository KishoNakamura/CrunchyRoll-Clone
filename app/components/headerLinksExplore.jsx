import { Link } from "@remix-run/react"

export default function HeaderLinksExplore() {
  return (
    <>
      <li><Link to={"/videos/popular"}>Popular</Link></li>
      <li><Link to={"/videos/news"}>New</Link></li>
      <li><Link to={"/videos/alphabetical"}>Alphabetical</Link></li>
      <li><Link to={"/videos/simulcasts"}>Simulcast Season</Link></li>
      <li><Link to={"/videos/simulcasts-calendar"}>Release Calendar</Link></li>
      <li><Link to={"/videos/events-music"}>Music Videos & Concerts</Link></li>
    </>
  )
}
