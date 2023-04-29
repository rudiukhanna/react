import React from 'react';
import Contacts from './Contacts';
import Experience from './Experience';
import Image from './Image';
import '../src/styles.scss/styles.css'

function App() {
  return <div>
    <Image src="/CVphoto.jpg" />
    <Contacts/>
    <Experience/>
  </div>
}

export default App;
