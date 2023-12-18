import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import QuestionOnUseEffect from './components/QuestionOnUseEffect';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <div className="App">
     <Counter/>
     <QuestionOnUseEffect/>
     <ToggleButton/>
    </div>
  );
}

export default App;
