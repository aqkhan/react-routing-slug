import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SampleComponent from "./components/SampleComponent";

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>
                <ul>
                    <li>
                        <Link to={{ pathname: `/1`, query: { slug: 'some-1', _id: 12 } }}>1</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: `/2`, query: { slug: 'some-2', _id: 12 } }}>2</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: `/3`, query: { slug: 'some-3', _id: 12 } }}>3</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: `/4`, query: { slug: 'some-4', _id: 12 } }}>4</Link>
                    </li>
                </ul>

                <Route path="/:id" component={SampleComponent} />

            </div>
        </Router>
    );
  }
}

export default App;
