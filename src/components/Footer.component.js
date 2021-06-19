import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
    <div className="main-footer">
      <div className="footer-middle">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>0321-4569927</li>
              <li>moodie_foodie@gmail.com</li>
              <li>@moodie_foodie_insta</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 col-sm-6">
            <h4>Locations</h4>
            <ul className="list-unstyled">
              <li>Islamabad, I-8/2</li>
              <li>Rawalpindi, Westridge</li>
              <li>Sialkot, California</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 col-sm-6">
            <h4>Information</h4>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <hr></hr>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} Moodie Foodie INC - All Rights Reserved
          </p>
        </div>
      </div>
      </div>
    </div>
    );
}

export default Footer