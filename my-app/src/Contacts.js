import React from 'react';

function Contacts() {
     return  <>
     <div class="sidebar-container">

<div class="contact">
    <h2 class="sidebar-title">Contact</h2>
       
    <div class="address">
        <h3 class="sidebar-subtitle">Address</h3>
        <p>Irpin, Ukraine</p>
    </div>

    <div>
        <h3 class="sidebar-subtitle">Phone</h3>
        <a href="tel:+380984691749" class="phone-link">+380984691749</a>
    </div>

    <div>
        <h3 class="sidebar-subtitle">E-mail</h3>
        <a href="mailto:melomanna@gmail.com"
           class="link">melomanna@gmail.com</a>
    </div>

    <div>
        <h3 class="sidebar-subtitle">Linkedin</h3>
        <a href="https://www.linkedin.com/in/hannarudiuk/"
           class="link">https://www.linkedin.com/in/hannarudiuk/</a>
    </div>
    
  </div>
</div>
     </>
}

export default Contacts;