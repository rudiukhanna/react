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
          <div className='sidebar-photo'>
              <Image imageLink = {photoLink}/>
          </div>
         
          <Contacts/>        
        </header>
     <main>
      <div className='main-content'>
          <Experience/>
      </div>
     </main>
      </div>
  </body>
  )
}

export default App;
