import { baseURL, config } from './services';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav'

function App() {

  const [plays, setPlays] = useState([]);

  useEffect(() => {
    const getPlays = async () => {
      const resp = await axios.get(baseURL, config);
      setPlays(resp.data.records);
    }
    getPlays();
  }, []);

  return (
    <div className="App">
      <Nav />
      <main>
        {plays.map((play) => (
          <p>{play.fields.name}</p>
        ))}
      </main>
    </div>
  );
}

export default App;
