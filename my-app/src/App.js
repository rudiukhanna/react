import { Contacts } from './components/Contacts';
import { Experience } from './components/Experience';
import { Image } from './components/Image';
import '../src/styles.scss/styles.css'

const photoLink = './CVphoto.jpg';

function App() {
  return (
    <body className='main-theme'>
      <div className='cv-page'>
        <header className='sidebar'>
          <Image imageLink = {photoLink}/>
          <div className='sidebar-container'>
            <Contacts/>
          </div>
            
       
          
        </header>
   
    <Experience/>
      </div>
  </body>
  )
}

export default App;
