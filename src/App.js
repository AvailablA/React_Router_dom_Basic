
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Error from './Error';
import Navbar from './Navbar';
import Service from './Service';

const Name = () => {
  return (
    <h1>Hello, I am a Name Page</h1>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} /*
        {() =><About name="About"/>}*/ />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={() => <Service name="Service" />} />
        <Route path="/contact/Name" component={Name} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
