import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');

    const navigate=useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, author, body }; 

      fetch("http://localhost:3002/blogs",{
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(blog)
      }).then(() => {
        console.log('Blog added!');
        navigate('/'); // 🔁 Redirect to home
      });
      console.log(blog) 
      setTitle('');
      setAuthor('');
      setBody('');

    };
  

    return(
    <div className="form-container">
    <h2>Add New Blog</h2>
    <form onSubmit={handleSubmit}>
      <label>Blog Title:</label>
      <input 
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Blog Body:</label>
      <textarea 
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

<label>Blog Author:</label>
      <input 
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
       <select className='select'>
        <option value="John Doe" className='options'>John Doe</option>
        <option value="Jane Smith" className='options'>Jane Smith</option>
      </select>


      <button type="submit">Add Blog</button>
    </form>
  </div>
);
}

export default Create