import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";

function App() {
    const username = useInput('')
    const password = useInput('')

   return (
    <div >
        <input {...username} type="text" placeholder='Username'/>
        <input {...password} type="password" placeholder='Password'/>
        <button onClick={() => {console.log(username.value, password.value)}}>Принт в лог</button>
        <Hover/>
        <List/>
    </div>
  );
}

export default App;
