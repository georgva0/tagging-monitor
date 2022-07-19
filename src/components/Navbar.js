import React from "react";
//import { useLocation } from "react-router-dom";

import {
  Navbar,
  // NavItem,
  // NavbarToggler,
  // Collapse,
  // NavLink,
  // Nav,
  NavbarBrand,
  Container,
} from "reactstrap";

const Navigation = () => {
  // const location = useLocation();
  // const [url, setUrl] = useState(null);
  // useEffect(() => {
  //   setUrl(location.pathname);
  // }, [location]);

  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  return (
    <Container>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/" className="py-1">
          <span className="mb-0 h1 text-danger">Tagging monitor</span>
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink
                href="/top-stories"
                className={url === "/top-stories" ? " active" : ""}
              >
                TOP STORIES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/most-read"
                className={url === "/most-read" ? " active" : ""}
              >
                MOST READ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/emerging-stories"
                className={url === "/emerging-stories" ? " active" : ""}
              >
                EMERGING STORIES
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Navbar>
    </Container>
  );
};

export default Navigation;
