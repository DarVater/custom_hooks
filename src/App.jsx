import useInput from "./hooks/useInput";

function App() {
    const username = useInput('')
    const password = useInput('')

   return (
    <div >
      <input {...username} type="text" placeholder='Username'/>
      <input {...password} type="password" placeholder='Password'/>
      <button onClick={() => {console.log(username.value, password.value)}}>Принт в лог</button>
    </div>
  );
}

export default App;
