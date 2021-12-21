import React, {useState} from 'react';
import './App.css';
import { LargePost } from './features/largePost/LargePost';
import { SmallPost } from './features/smallPost/SmallPost';
import Toggle from 'react-toggle';
import SearchField from './features/searchBar/react-search-field';
import { ThemeContext, themes } from './features/context/themeContext';


function App() {
  const [toggleOn, setToggleOn] = useState(false);
  const [darkMode, setDarkMode] = useState(true);


  let appStyle;

  // if (toggleOn === false) {
  //   appStyle = "App-blue"
  // } else {
  //   appStyle = "App-orange"
  // }
  
  return (

    <div className={appStyle}>
      
      
      
      <header className="App-header">
        
        <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Toggle
              defaultChecked={false}
              icons={false}
              onChange={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
              className="toggle"
          />
            )}
          </ThemeContext.Consumer>

       
          
        
        <h1>AestheticReddit</h1>
        <div className="search-bar">
          <SearchField 
          placeholder='Search Reddit...'
          />
        </div>
        
        
      </header>
      <div className="main-content">
        <div className="large-post">
          <LargePost/>
        </div>
        <div className="small-post small-post-1">
          <SmallPost />
        </div>
        <div className="small-post small-post-2">
          <SmallPost />
        </div>
        <div className="small-post small-post-3">
          <SmallPost />
        </div>
        


      </div>
      
      
    </div>
  );
}

export default App;
