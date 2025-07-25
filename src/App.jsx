import useSwitch from "./customHooks/useSwitch"
import useDate from "./customHooks/useDate";
import useCustomPointer from "./customHooks/useCustomPointer";
import useKeyPress from "./customHooks/useKeyPress";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer('😀')
  const isEnterPressed = useKeyPress("Enter");

  return (
    <>
      <div>
        <h1>Il valore è: {isOn ? 'ON' : 'OFF'}</h1>
        <button onClick={toggle}>Cambia stato</button>
      </div>

      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>

      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>

      <div>
        <h1>Tieni premuto 'Enter' per testare il custom hook</h1>
        <p>{isEnterPressed ? 'Enter premuto!' : 'In attesa di input...'}</p>
      </div>
    </>
  )
}

export default App
