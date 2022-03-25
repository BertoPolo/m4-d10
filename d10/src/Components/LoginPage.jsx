import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Form, Button, Image, Navbar } from "react-bootstrap"

const LoginPage = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState(0)
  const navigate = useNavigate()

  return (
    <>
      <div className="main-super-cont">
        <Navbar className="navbar logo-navb">
          <div className="spoti-top-cont container">
            <Image src="http://www.pubblicomnow-online.it/wp-content/uploads/2018/02/Spotify_Logo_CMYK_Black.png" alt="" />
          </div>
        </Navbar>
        <div className="aaa">
          <div className="main-section d-flex flex-column">
            <div className="section2">
              <span>To continue, log in to Spotify?</span>

              <Button className=" d-flex login-button facebook-button">
                <svg role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" className="Svg-ytk21e-0 dMCjEC sc-bkkeKt gIBNai">
                  <path
                    data-name="White"
                    d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h8.62v-7h-2.35v-2.69h2.35v-2a3.27 3.27 0 013.49-3.59 19.25 19.25 0 012.1.11v2.43h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.69L17.76 14h-2.34v7H20a1 1 0 001-1V4a1 1 0 00-1-1z"
                    fill="#ffffff"
                  ></path>
                </svg>
                CONTINUE WITH FACEBOOK
              </Button>

              <Button className="d-flex  login-button apple-button">
                <Image esrc="/media/logo-apple-icon-information-apple-logo-png-cb2a995ce5ee2b4049f1daa647471a29.png" alt="" />
                CONTINUE WITH APPLE
              </Button>
              <div className="or">OR</div>
            </div>

            <Form className="login-form">
              <div className="mb-3">
                <Form.Group controlId="exampleInputEmail1">
                  <Form.Control type="email" className="form-control" placeholder="Email address or username" />
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group controlId="exampleInputPassword1">
                  <Form.Control className="form-control" type="password" id="exampleInputPassword1" placeholder="Password" />
                </Form.Group>
              </div>

              <div className="mb-3 form-check d-flex justify-content-between">
                <div>
                  <Form.Group controlId="exampleInputPassword1">
                    <Form.Control className="form-control" type="checkbox" id="exampleCheck1" />
                  </Form.Group>

                  <label className="form-check-label" for="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <Link type="button" className="form-button" to={"/home"}>
                  Log in
                </Link>
              </div>

              <Button type="submit" className="form-button2" onClick={() => navigate("/home")}>
                Log in
              </Button>
            </Form>

            <div className="forgot">
              <Link to={""}> Forgot your password? </Link>
            </div>

            <div className="signup d-flex flex-column">
              Don't have an account?
              <Button className="d-flex  login-button signup-button">SIGN UP FOR SPOTIFY</Button>
            </div>

            <div className="privacy-policy">
              If you click "Log in with Facebook" and are not a Spotify user, you will be registered an you agree to Spotify's
              <Link to={""}>Terms & Conditions</Link> and <Link to={""}>Privacy Policy</Link>.
            </div>
          </div>
          <div style={{ position: "absolute", right: "10px", bottom: " 10px", opacity: " 0.45" }}>
            <Image src="/media/Marchio.png" alt="" width="500px" />
          </div>
        </div>
      </div>
    </>
  )
}
export default LoginPage
