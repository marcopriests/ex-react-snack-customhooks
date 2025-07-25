import useSwitch from "./customHooks/useSwitch"

function App() {
  const [isOn, toggle] = useSwitch();

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? 'ON' : 'OFF'}</h1>
        <button onClick={toggle}>Cambia stato</button>
      </div>
    </>
  )
}

export default App
