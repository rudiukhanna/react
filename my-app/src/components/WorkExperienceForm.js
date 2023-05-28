import { useState } from 'react';

export default function WorkExperienceForm(props) {
    const { onAddItem } = props;
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
  
    function handleSubmit(event) {
      event.preventDefault();
      const newItem = { name, title, description, link };
      onAddItem(newItem);
      setName('');
      setTitle('');
      setDescription('');
      setLink('');
    }
  
    return (
          <form onSubmit={handleSubmit}>
          <h3 className='work-definition'>Add new work experience</h3>
          <div className="form-wrapper">
            <label htmlFor="name" className='work-definition'>Name of employer </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
            <div className="form-wrapper">
            <label htmlFor="title" className='work-definition'>Job title </label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
            />
            </div>
            <div className="form-wrapper">
            <label htmlFor="description" className='work-definition'>Job description</label>
            <textarea
            id="description"
            value={description}
            onChange={event => setDescription(event.target.value)}
            ></textarea>
            </div>
            <button type="submit" className='form-button'>Add experience</button>
            </form>
    );
    }
   