import { Link } from "@remix-run/react"

export default function FooterStillSearching() {
  return (
    <div className="stillSearching">
      <div>
        <img src="https://www.crunchyroll.com/build/assets/img/home/yuzu.png" alt="Kawaii Neko"/>
        <div>
          <p>Still looking for something to watch? <br/> Browse our entire catalog</p>
          <Link to={"/browse"} className="btn-line">See All</Link>
        </div>
      </div>
    </div>
  )
}
