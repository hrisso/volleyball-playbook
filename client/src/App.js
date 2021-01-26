import { baseURL, config } from './services';
import { useEffect, useState } from 'react';
import { Route, useHistory  } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Details from './components/Details';
import Home from './components/Home';
import List from './components/List';
import Footer from './components/Footer'

function App() {

  const [plays, setPlays] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getPlays = async () => {
      const resp = await axios.get(baseURL, config);
      setPlays(resp.data.records);
      history.push('/')
    }
    getPlays();
  }, [toggleFetch, history]);

  return (
    <div className="App">
      <Nav />
      <main>
        <Route exact path="/">
          <Home />
        </Route >
        <Route path="/:type">
          <List plays={plays}/>
        </Route>
      </main>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/play/:id">
        <Details plays={plays}/>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
