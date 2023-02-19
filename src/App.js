// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hi React</h1>
      <MyPara status='compleated' text="Session 1" />
      <MyPara status='compleated' text="Session 2" />
      <MyPara status='compleated' text="Session 3" />
      <MyPara status='compleated' text="Session 4" />
      <MyPara status='compleated' text="Session 5" />
      <MyPara status='on-going' text="Session 6" />
      <MyPara status='not-started' text="Session 7" />
    </div>
  );
}

export default App;

function MyPara(props) {
   console.log(props.status);
  return <p style={{ fontSize: '15px',  color: props.status==='compleated' ? 'green': props.status==='on-going' ? 'violet': 'brown'}}>{props.text}</p>;
}
