/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          
          <div className="copyright">
            © {new Date().getFullYear()} Power{" "}
            <i className="tim-icons icon-heart-2" /> by{" "}
						<li className="nav-item">
              <a className="nav-link" href="https://www.softniz-ishika.com">
                <strong><h5>Softniz-iShika</h5></strong> 
              </a>
            </li>
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
