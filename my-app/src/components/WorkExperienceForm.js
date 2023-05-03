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
          <h2>Add new work experience</h2>
          <div className="form-group">
            <label htmlFor="name">Name of employer</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
    <div className="form-group">
    <label htmlFor="title">Job title</label>
    <input
    type="text"
    id="title"
    value={title}
    onChange={event => setTitle(event.target.value)}
    />
    </div>
    <div className="form-group">
    <label htmlFor="description">Job description</label>
    <textarea
    id="description"
    value={description}
    onChange={event => setDescription(event.target.value)}
    ></textarea>
    </div>
    <button type="submit">Add experience</button>
    </form>
    );
    }
   