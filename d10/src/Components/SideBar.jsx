const SideBar = () => {
  //change Atag for router-LINK
  return (
    <>
    <div class="col d-none d-md-block col-sm-3 col-lg-2 col-xxl-2 full-screen-height p-0" >

    <div class="sidebar-div  d-flex flex-column">

      <img id="logo-top" class="img-fluid" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="">

      <div class="side-icons">
        <div class="hover-effect d-flex ">
          <svg class="svg-top" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path
              d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
          </svg>

          <a href="#" style="text-decoration: none; color: inherit;">Home</a>
        </div>

        <div class="hover-effect d-flex ">
          <svg class="svg-top" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-search" viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>

          <a href="search.html" style="text-decoration: none; color: inherit;">Search</a>
        </div>

        <div class=" hover-effect d-flex ">
          <svg class="svg-top" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-collection" viewBox="0 0 16 16">
            <path
              d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z" />
          </svg>

          <p>Your Library</p>
        </div>
      </div>

      <div class="linked-songs">
        <div class="hover-effect d-flex ">
          <svg class="svg-top" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-plus-square-fill" viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
          </svg>

          <p>Create Playlist</p>

        </div>

        <div class="hover-effect d-flex ">
          <div class="like-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
              class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
          </div>

          <p>Liked Songs</p>
        </div>
        <div class="border-like"></div>
      </div>
      <div class="scrollbar">
        <div class="group-side-p d-flex">
          <p class="side-p">Spotify Playlist</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-people">
            <path
              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>
          </svg>
        </div>
        <div class="group-side-p d-flex">
          <p class="side-p">Spotify Playlist</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-people">
            <path
              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>
          </svg>
        </div>
        <p class="side-p">Spotify Playlist</p>
        <p class="side-p">Spotify Playlist Spotify Playlist</p>
        <div class="group-side-p d-flex">
          <p class="side-p">Spotify Playlist</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-people">
            <path
              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>
          </svg>
        </div>
        <p class="side-p">Spotify Playlist</p>
        <p class="side-p">Spotify Playlist Spotify Playlist</p>
        <p class="side-p">Spotify Playlist</p>
        <p class="side-p">Spotify Playlist</p>
        <p class="side-p">Spotify Playlist</p>
        <p class="side-p">Spotify Playlist Spotify Playlist</p>
        <p class="side-p">Spotify Playlist</p>
        <p class="side-p">Spotify Playlist Spotify Playlist</p>
        <p class="side-p">Spotify Playlist</p>
        <p class="side-p">Spotify Playlist</p>
        <p class="side-p">Spotify Playlist Spotify Playlist</p>

      </div>
      <button class="install d-flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
          class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
        </svg>

        <span>Install App</span>
      </button>
      <div class="d-none d-md-block d-lg-none">
        <div class="text-center"><img class="my-3" style="width: 70%" src="/media/maneskin-cover.jpg"></div>
        <div class="position-relative" style="margin-left: 34px; width: 70%">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column">
              <h6 style ="font-weight: 500;">ZITTI E BUONI</h6>
              <p style="font-size:small">Måneskin</p>
          </div>
          <div id="heart-container0" onclick="changeHeart0()"><i id="heart0" class="bi bi-heart" style="font-size: 1.5rem;"></i></div>
        </div>
        </div>
        <div class="slide-container-music px-1" style="margin-left:30px; margin-bottom: 10px; width:80%; height: 1px">
          <input type="range" min="0" max="100" value="0" class="slider" ontimeupdate="rangevalue.value=value"/>
        </div>
        <div class="d-flex flex-row justify-content-center" style="margin-left:0px; width: 100%; color: white">
      <h2 style="margin-right: 20px;"><i class="bi bi-skip-start-fill"></i>
      </h2>
      <h1 style="margin-right: 20px"><i class="bi bi-play-circle-fill" id="media-player-play0" onclick="pressPlay0()"></i>
      </h1>
      <h2><i class="bi bi-skip-end-fill"></i></h2>
      </div>
      </div>
    </div>


  </div>

</>
)
}

export default SideBar
