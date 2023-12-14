import logo from './logo.svg';
import './App.css';
import { getDatabase, ref, set } from "firebase/database";
import {app} from './firebase';
const db=getDatabase(app);

function App() {

  const putData =()=> {
    //syntax- set(ref(database name, path), { actual data to enter})
    set(ref(db, "users/shubham"), {
      id:1,
      name: "shubham dogra",
      email: "shubhamdogra418@gmail.com",
    })
  }
  return (
    <div className="App">
      <h1> Firebase React App</h1>
      <button onClick={putData}>Put Data </button>
    </div>
  );
}

export default App;
