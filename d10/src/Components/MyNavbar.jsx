import { Navbar, Button, Form, Nav, NavDropdown, FormControl } from "react-bootstrap"
const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home">Spotify</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar

/*     <div id="top-nav" class="d-none d-sm-block" style="z-index: 100;">
      <Navbar className="navbar px-3 d-flex justify-content-between w-100" style="position: absolute">
        <ul class="nav">
          <li class="nav-item position-relative">
            <a class="nav-link position-relative" href="/album.html">
              <i class="bi bi-chevron-left"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-center position-relative" href="/artist.html">
              <i class="bi bi-chevron-right"></i>
            </a>
          </li>
        </ul>

        <div class="dropdown">
          <Button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <Img src="/media/maneskin-cover.jpg" style="width: 20px" />
            <Navbar.Brand href="#home">Spotify</Navbar.Brand>
          </Button>
          <NavDropdown title="Dropdown" class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuButton">
            <NavDropdown.Item>
              <a class="dropdown-item" href="login.html">
                Account{" "}
                <span>
                  <i class="bi bi-box-arrow-up-right"></i>
                </span>
              </a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <a href="">Profile</a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <a href="finish.html">Log-out</a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <a class="dropdown-item effect" type="button" href="#" data-bs-toggle="modal" data-bs-target="#albumModal">
                Song List
              </a>
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              <a class="dropdown-item effect" type="button" href="#" onclick="countUnique()">
                Unique
              </a>
            </NavDropdown.Item>
          </NavDropdown>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </Navbar>
    </div>
  )
} */
