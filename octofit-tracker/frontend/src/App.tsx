import { Container, Nav, Navbar } from 'react-bootstrap'
import { Route, Routes, Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>OctoFit Tracker</h1>
      <p>Welcome to the modern React + Vite frontend for OctoFit Tracker.</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This frontend is initialized for React 19, React Router, and Bootstrap styling.</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">
            OctoFit Tracker
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  )
}
