import React from 'react';
import './Bookmark.css';

const dummyBookmarks = [
  {
    id: 1,
    title: 'The Complete Guide to React Hooks',
    url: 'https://linkupapp.com/react-hooks-guide',
    description: 'A comprehensive tutorial on using React hooks in your projects.',
    category: 'Development'
  },
  {
    id: 2,
    title: 'Mastering CSS Flexbox',
    url: 'https://linkupapp.com/mastering-css-flexbox',
    description: 'Learn how to create responsive layouts with CSS Flexbox.',
    category: 'Web Design'
  },
  {
    id: 3,
    title: 'How to Build RESTful APIs with Node.js',
    url: 'https://linkupapp.com/nodejs-restful-apis',
    description: 'A step-by-step guide to building RESTful APIs with Node.js.',
    category: 'Development'
  },
];

const Bookmark = () => {
  return (
    <div className="container">
      <h1>Bookmarked Posts</h1>
      <ul className="bookmark-list">
        {dummyBookmarks.map(bookmark => (
          <li key={bookmark.id}>
            <div className="bookmark-item">
              <div className="bookmark-info">
                <a className="bookmark-title" href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.title}</a>
                <p className="bookmark-category">{bookmark.category}</p>
                <p className="bookmark-description">{bookmark.description}</p>
              </div>
              <div className="bookmark-actions">
                <button className="bookmark-button">Open Post</button>
                <button className="bookmark-button">Remove Bookmark</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmark;
