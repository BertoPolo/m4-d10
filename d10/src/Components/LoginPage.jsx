import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"

const LoginPage = () => {
  const [name, setName] = useState("")

  const [password, setPassword] = useState(0)

  const navigate = useNavigate()

  return (
    <header className="App-header">
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Email adress or username" required min="2" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="Password" onChange={(e) => setPassword(e.target.value)} required minLength="8" />
        </Form.Group>

        <Form.Group>
          <Form.Check className="text-dark" type="checkbox" label="Remember me" />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          onClick={() => {
            navigate("/home")
          }}
        >
          Log In
        </Button>
      </Form>
    </header>
  )
}
export default LoginPage
