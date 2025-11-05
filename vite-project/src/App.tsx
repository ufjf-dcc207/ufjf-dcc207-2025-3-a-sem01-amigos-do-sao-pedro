import './App.css';
import { Pokedex } from './components/Pokedex';

function Header() {
  return (
    <header className="app-header">
      <h1>Pokedex</h1>
    </header>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Pokedex />
      </main>
    </div>
  );
}

export default App;
