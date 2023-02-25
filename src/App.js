import React , {useState, useCallback} from 'react';
import Button from "./components/UI/Button/Button";

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  
  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setallowToggle] = useState(false);
 
  console.log('APP RUNNING')

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
 
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setallowToggle(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={setShowParagraph} />
      <Button onClick={toggleParagraphHandler}>Show Paragraph</Button>
      <Button onClick={allowToggleHandler}>Allow toggling</Button>
    </div>
  );
}

export default App;
