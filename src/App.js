// import logo from './logo.svg';
import "./App.css";
const sessions = [{ status: "compleated", text: "Session 1" }, 
{ status: "compleated", text: "Session 2" },
{ status: "compleated", text: "Session 3" },
{ status: "compleated", text: "Session 4" },
{ status: "compleated", text: "Session 5" },
{ status: "on-going", text: "Session 6" },
{ status: "not-started", text: "Session 7" }];

const test =10;
function App(value) {
  return (
    <div className="App">
      <h1>Hi React</h1>
      {sessions.map(function(val, key){
        return <MyPara key={key} text={val.text} status={val.status}/>;
      })}
    </div>
  );
}

export default App;

function MyPara({ status, text }) {
  // const { status, text } = props;
  return (
    <p
      style={{
        fontSize: "15px",
        color:
          status === "compleated"
            ? "green"
            : status === "on-going"
            ? "violet"
            : "black",
      }}
    >
      {text}
    </p>
  );
}
