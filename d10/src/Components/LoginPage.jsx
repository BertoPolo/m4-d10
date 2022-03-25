import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

const LoginPage = () => {
  const [name, setName] = useState("")

  const [password, setPassword] = useState(0)

  const navigate = useNavigate()

  return (


    <div class="main-super-cont">
    <nav class="navbar logo-navb">
        <div class="spoti-top-cont container">
              <img src="http://www.pubblicomnow-online.it/wp-content/uploads/2018/02/Spotify_Logo_CMYK_Black.png" alt="">
        </div>
      </nav>
      <div class="aaa">
<div class="main-section d-flex flex-column" >
      <div class="section2">

        <span>To continue, log in to Spotify?</span>

        <button class=" d-flex login-button facebook-button">
            <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" class="Svg-ytk21e-0 dMCjEC sc-bkkeKt gIBNai"><path data-name="White" d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.62v-7h-2.35v-2.69h2.35v-2a3.27 3.27 0 013.49-3.59 19.25 19.25 0 012.1.11v2.43h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.69L17.76 14h-2.34v7H20a1 1 0 001-1V4a1 1 0 00-1-1z" fill="#ffffff"></path></svg>
            CONTINUE WITH FACEBOOK
        </button>

        <button class="d-flex  login-button apple-button">
            <img src="/media/logo-apple-icon-information-apple-logo-png-cb2a995ce5ee2b4049f1daa647471a29.png" alt="">
            CONTINUE WITH APPLE
            </button>
    <div class="or">OR</div>
      </div>

      <form class="login-form">
        <div class="mb-3">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address or username">
        </div>
        <div class="mb-3">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="mb-3 form-check d-flex justify-content-between">
          <div>
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
        <a type="button" class="form-button" href="homepage.html">Log in</a>
      </div>
      
            
      <button type="submit" class="form-button2" onClick={()=> navigate("/home")}>Log in</button>
      </form>

      <div class="forgot"> <a href=""> Forgot your password?</a> </div>

      <div class="signup d-flex flex-column">
        Don't have an account?
        <button class="d-flex  login-button signup-button">
          SIGN UP FOR SPOTIFY
          </button>
      </div>

      <div class="privacy-policy">
        If you click "Log in with Facebook" and are not a Spotify user, you will be registered
        an you agree to Spotify's <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a>.
      </div>

    </div>
    <div style="position: absolute; right: 10px; bottom: 10px; opacity: 0.45;">
      <img src="/media/Marchio.png" alt="" width="500px">
    </div>
  </div>

</div>

  )
}
export default LoginPage
