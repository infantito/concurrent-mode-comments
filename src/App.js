import React from 'react';
import Modes from './components/Modes';
import Comments from './components/Comments';
import SearchComments from './components/SearchComments';
import './app.css';

const modes = {
  synchronous: 'synchronous',
  debounced: 'debounced',
  asynchronous: 'asynchronous'
};
const SUSPENSE_CONFIG = { timeoutMs: 2000 };

function App() {
  const [comment, setComment] = React.useState('');
  const [mode, setMode] = React.useState(modes.synchronous);
  const deferredComment = React.useDeferredValue(comment, SUSPENSE_CONFIG);
  const handleMode = e => setMode(modes[e.target.id]);
  const handleChange = e => setComment(e.target.value);
  const handleReset = () => setComment('');

  return (
    <div className="app">
      <Modes mode={mode} handleMode={handleMode} />
      <SearchComments comment={comment} handleChange={handleChange} handleReset={handleReset} />
      <Comments comment={deferredComment} />
    </div>
  );
}

export default App;
