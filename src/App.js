import React from 'react';
import Comments from './components/Comments';
import SearchComments from './components/SearchComments';
import './app.css';

function App() {
  const [comment, setComment] = React.useState('');
  const handleChange = e => setComment(e.target.value);
  const handleReset = () => setComment('');

  return (
    <div className="app">
      <SearchComments comment={comment} handleChange={handleChange} handleReset={handleReset} />
      <Comments comment={comment} />
    </div>
  );
}

export default App;
