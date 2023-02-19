// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi React</h1>
      <p>Session 1</p>
      <p>Session 2</p>
      <p>Session 3</p>
      <p>Session 4</p>
      <p>Session 5</p>
      <p>Session 6</p>
      <MyPara text='Session 7'/>
    </div>
  );
}

export default App;

 function MyPara(props) {
  // console.log(props.text);
  
  return <p style={{fontSize:'25px'}}>{props.text}</p>;
 }