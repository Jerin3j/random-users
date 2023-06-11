import './App.css';
import Header from './Components/Header/Header';
import IconPost from './Components/IconPost/IconPost';
import RowPost from './Components/RowPost/RowPost';
import Context from './Context/Context';

function App() {
  return (
    <div className="App">
    <Context>
     <Header/>
     <IconPost/>
     <RowPost/>
     </Context>
    </div>
  );
}

export default App;
