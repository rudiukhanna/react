import React from 'react';

function Contacts() {
     return  <>
     <div className="sidebar-container">

<div className="contact">
    <h2 className="sidebar-title">Contact</h2>
       
    <div className="address">
        <h3 className="sidebar-subtitle">Address</h3>
        <p>Irpin, Ukraine</p>
    </div>

    <div>
        <h3 className="sidebar-subtitle">Phone</h3>
        <a href="tel:+380984691749" className="phone-link">+380984691749</a>
    </div>

    <div>
        <h3 className="sidebar-subtitle">E-mail</h3>
        <a href="mailto:melomanna@gmail.com"
           className="link">melomanna@gmail.com</a>
    </div>

    <div>
        <h3 className="sidebar-subtitle">Linkedin</h3>
        <a href="https://www.linkedin.com/in/hannarudiuk/"
           className="link">https://www.linkedin.com/in/hannarudiuk/</a>
    </div>
    
  </div>
</div>
     </>
}

export default Contacts;