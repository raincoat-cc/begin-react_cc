import './App.css';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  const name = "hello";
  const style = {
    backgroundColor: 'black'
  }

  return (
    <div className="App">
        <div style={style}>{name}</div>
      <InputSample/>
     {/* <Counter/> */}
    </div>
  );
}

export default App;
