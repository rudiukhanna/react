import {useState} from 'react';
import { Contacts } from './components/Contacts';
import { Image } from './components/Image';
import { Counter } from './components/Counter';
import { Experience } from './components/Experience';
import WorkExperienceForm from './components/WorkExperienceForm';
import WorkExperienceItem from './components/WorkExperienceItem';

import '../src/styles/styles.css';

const photoLink = './CVphoto.jpg';

function App() {

    const [workExperienceItems, setWorkExperienceItems] = useState([]);

    function addWorkExperience(newItem) {
      setWorkExperienceItems([...workExperienceItems, newItem]);
    }
  
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
            <Experience />
    {workExperienceItems.map(item => (
          <WorkExperienceItem key={item.name} {...item} />
        ))}
        <WorkExperienceForm onAddItem={addWorkExperience} />
    <Counter/>
      </div>
    </main>
    </div>
    </body>
  );
}

export default App;
