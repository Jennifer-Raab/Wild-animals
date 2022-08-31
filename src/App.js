import './App.css';
import { client } from './Components/client';

function App() {
  console.log('EFG ');
  client.getEntries().then(response => console.log('ABC ', response)).catch(console.error);
  return (
    <div className="App">CDE
    </div>
  );
}

export default App;
