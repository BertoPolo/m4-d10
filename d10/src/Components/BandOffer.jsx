// import { useNavigate } from "react-router-dom"
import { Image } from "react-bootstrap"

const BandOffer = () => {
  //   const navigate = useNavigate()

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="heading">Recently played</div>
        <div className="seeall d-none d-sm-block">See All</div>
      </div>

      {/* map here */}
      <div className="home-content-container d-flex">
        <div className="card-item-default p-md-3 d-flex flex-column rounded">
          <div className="content-img-wrapper">
            <Image src="/media/homepage/artist_2.png" className="card-img-top img-fluid" alt="artist" />
            <div className="card-play-btn content-play-btn">
              <div className="play-btn-icon"></div>
            </div>
          </div>
          <h5>Llorca</h5>
          <p>The Garden</p>
        </div>
      </div>
    </>
  )
}

export default BandOffer
