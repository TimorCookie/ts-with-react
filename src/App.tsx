import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import LikeButton from './components/LikeButton';
import MourseTracker from './components/MouseTracker';
import useMousePosition from './hooks/useMousePositions'
import useURLLoading from './hooks/useURLLoader';



interface iShowResult {
  message: string;
  status: string;
}
interface IThemeProps {
  [key: string]: {
    color: string,
    background: string
  }
}
const themes:IThemeProps = {
  'light': {
    color: '#000',
    background: '#0f0'
  },
  'dark': {
    color: '#fff',
    background: '#f00'
  }
}
export const themeContext = React.createContext(themes.light)
function App() {
  const positions = useMousePosition()
  const [data, loading] = useURLLoading('https://dog.ceo/api/breeds/image/random')
  const dogRes = data as iShowResult
  const [currentTheme, setCurrentTheme] = useState(themes.light)
const changeTheme=()=>{
  console.log(currentTheme)
  if(currentTheme===themes.light) {
    setCurrentTheme(themes.dark)
  } else {
    setCurrentTheme(themes.light)
  }
}

  return (
    <div className="App">
      <themeContext.Provider value={currentTheme}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {loading ? <p>loading </p> : <img src={dogRes && dogRes.message} alt="" />}
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={changeTheme}>change theme</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <Hello message="hello world2" />
          <LikeButton />
          <MourseTracker />
          <p>Ox:{positions.x},oy:{positions.y}</p>
        </header>
      </themeContext.Provider>

    </div>
  );
}

export default App;
