import { baseURL, config } from './services';
import { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Details from './components/Details'

function App() {

  const [plays, setPlays] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getPlays = async () => {
      const resp = await axios.get(baseURL, config);
      setPlays(resp.data.records);
    }
    getPlays();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <main>
        {plays.map((play) => (
          <Link key={play.id}to={`/play/${play.id}`}>{play.fields.name}</Link>
        ))}
      </main>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch}/>
        </Route>
        <Route path="/play/:id">
          <Details plays={plays}/>
      </Route>
    </div>
  );
}

export default App;
