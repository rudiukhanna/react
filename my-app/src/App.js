import { Contacts } from './components/Contacts';
import { Experience } from './components/Experience';
import { Image } from './components/Image';
import Counter from './components/Counter';
import '../src/styles.scss/styles.css'

const photoLink = './CVphoto.jpg';

function App() {
  return <div className='main-theme'>
    <Image imageLink = {photoLink} />
    <Contacts/>
    <Experience/>
    <Counter/>
  </div>
}

export default App;
