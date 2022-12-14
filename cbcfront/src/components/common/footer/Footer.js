import { Link } from "react-router-dom";
import { ExternalLink } from "../lib/styledElements/Index";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="row">
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li>
                <ExternalLink href="http://instagram.com/CBC">
                  Instagram
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="http://facebook.com/CBC">
                  facebook
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="http://twitter.com/CBC">
                  twitter
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="http://linkedIn.com/CBC">
                  linkedIn
                </ExternalLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="OfficeStaff">Office Staff</Link>
              </li>
              <li>
                <Link to="Controllers">Controllers</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Important Links</h4>
            <ul>
              <li>
                <Link to="Feedback">Feedback</Link>
              </li>
              <li>
                <Link to="Announcements">Announcements</Link>
              </li>
              <li>
                <Link to="Gallery">Gallery</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>About Us</h2>
            <p>
              We made this project to simulate how an application should work
              when end users of the systems are directly connected to the firm's
              product. i.e., bus service
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
