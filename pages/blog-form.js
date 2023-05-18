import { useState } from 'react';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title,content,image);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Content:</label>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Image:</label>
        <input
          type="file"
          onChange={e => setImage(e.target.files[0])}
          className="form-input"
        />
      </div>
      <button className="submit-button">Submit</button>
      <style jsx>{`
        .form-group {
          margin-bottom: 20px;
        }
        .form-label {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .form-input {
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 100%;
          box-sizing: border-box;
        }
        .submit-button {
          background-color: #4CAF50;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          float: right;
          font-size: 16px;
        }
        .submit-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </form>
  );
};

export default BlogForm;
