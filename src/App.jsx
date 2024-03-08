import './App.css'
import Seretary from './scenes/Seretary'
import state from "./state";
import { useSnapshot } from "valtio";
import { SetMonthsWeeks } from "./scenes";

function App() {
  const snap = useSnapshot(state);

  return (
    <section className="p-5 flex flex-col items-center w-full">
      {snap.currentPage === 1 && <SetMonthsWeeks />}
      {snap.currentPage === 2 &&    <Seretary />}
      
    </section>
  );
}

export default App;
