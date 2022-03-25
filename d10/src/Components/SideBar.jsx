import { Link } from "react-router-dom"
import { Form, Button, Image } from "react-bootstrap"

const SideBar = () => {
  //change Atag for router-LINK

  // const navigate = useNavigate()

  return (
    <div className="col d-none d-md-block col-sm-3 col-lg-2 col-xxl-2 full-screen-height p-0">
      <div className="sidebar-div  d-flex flex-column">
        <Image id="logo-top" className="img-fluid" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="" />

        <div className="side-icons">
          <div className="hover-effect d-flex ">
            <svg
              className="svg-top bi bi-house-door-fill"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>

            <Link to={""} style={{text-decoration: "none", color: "inherit"}}>
              Home
            </Link>
          </div>

          <div className="hover-effect d-flex ">
            <svg className="svg-top bi bi-search" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>

            <Link to={"/home"} style="text-decoration: none; color: inherit;">
              Search
            </Link>
          </div>

          <div className=" hover-effect d-flex ">
            <svg
              className="svg-top bi bi-collection"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
            </svg>

            <p>Your Library</p>
          </div>
        </div>

        <div className="linked-songs">
          <div className="hover-effect d-flex ">
            <svg
              className="svg-top bi bi-plus-square-fill"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            </svg>

            <p>Create Playlist</p>
          </div>

          <div className="hover-effect d-flex ">
            <div className="like-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>
            </div>

            <p>Liked Songs</p>
          </div>
          <div className="border-like"></div>
        </div>
        <div className="scrollbar">
          <div className="group-side-p d-flex">
            <p className="side-p">Spotify Playlist</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-people">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
          </div>
          <div className="group-side-p d-flex">
            <p className="side-p">Spotify Playlist</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-people">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
          </div>
          <p className="side-p">Spotify Playlist</p>
          <p className="side-p">Spotify Playlist Spotify Playlist</p>
          <div className="group-side-p d-flex">
            <p className="side-p">Spotify Playlist</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-people">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
            </svg>
          </div>
          <p className="side-p">Spotify Playlist</p>
          <p className="side-p">Spotify Playlist Spotify Playlist</p>
          <p className="side-p">Spotify Playlist</p>
          <p className="side-p">Spotify Playlist</p>
          <p className="side-p">Spotify Playlist</p>
          <p className="side-p">Spotify Playlist Spotify Playlist</p>
          <p className="side-p">Spotify Playlist</p>
          <p className="side-p">Spotify Playlist Spotify Playlist</p>
          <p className="side-p">Spotify Playlist</p>
          <p className="side-p">Spotify Playlist</p>
          <p className="side-p">Spotify Playlist Spotify Playlist</p>
        </div>
        <Button className="install d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>

          <span>Install App</span>
        </Button>
        <div className="d-none d-md-block d-lg-none">
          <div className="text-center">
            <Image className="my-3" style="width: 70%" src="/media/maneskin-cover.jpg" />
          </div>
          <div className="position-relative" style="margin-left: 34px; width: 70%">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <h6 style="font-weight: 500;">ZITTI E BUONI</h6>
                <p style="font-size:small">Måneskin</p>
              </div>
              <div id="heart-container0" onclick="changeHeart0()">
                <i id="heart0" className="bi bi-heart" style="font-size: 1.5rem;"></i>
              </div>
            </div>
          </div>
          <div className="slide-container-music px-1" style="margin-left:30px; margin-bottom: 10px; width:80%; height: 1px">
            <Form>
              <Form.Group>
                <Form.Control type="range" min="0" max="100" value="0" className="slider" ontimeupdate="rangevalue.value=value" />
              </Form.Group>
            </Form>
          </div>
          <div className="d-flex flex-row justify-content-center" style="margin-left:0px; width: 100%; color: white">
            <h2 style="margin-right: 20px;">
              <i className="bi bi-skip-start-fill"></i>
            </h2>
            <h1 style="margin-right: 20px">
              <i className="bi bi-play-circle-fill" id="media-player-play0" onclick="pressPlay0()"></i>
            </h1>
            <h2>
              <i className="bi bi-skip-end-fill"></i>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
