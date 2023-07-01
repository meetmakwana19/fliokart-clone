import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="" className="p-0">
      <Container fluid className="container-fluid">
        <div className="p-0 nav-div1">
          <Navbar.Brand href="#" className="d-flex flex-column p-0 m-0 nav-brand">
            <a href="/">
              <Image src="images/flipkart-logo.png" className="w-75"/>
            </a>
            <a href="/" className="explore-anchor">
              Explore{" "}
              <span>
                Plus <Image src="images/flipkart-plus-star.png" />
              </span>
            </a>
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex w-50">
            <Form.Control
              type="search"
              placeholder="Search for products, brands and more"
              className="me-2 search-input h-75 w-100"
              aria-label="Search"
              data-bs-theme="light"
            />
          </Form>
          <Nav
            className="my-2 my-lg-0 w-50"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="login-div">
              <Button
                size="sm"
                variant="light"
                className="text-primary fw-bold"
              >Login</Button>
            </Nav.Link>
            <Nav.Link href="#action2" className="active text-white">Become a Seller</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown" className="active text-white">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="active text-white">
            <i class="bi bi-cart-fill"></i> Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
