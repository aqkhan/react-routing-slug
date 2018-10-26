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
                        <Link to={{ pathname: `/yabbhar`, query: { _id: 12 } }}>yabbhar</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: `/dhabbar`, query: { _id: 13 } }}>dhabbar</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: `/lagghar`, query: { _id: 14 } }}>lagghar</Link>
                    </li>
                    <li>
                        <Link to={{ pathname: `/BC`, query: { _id: 15 } }}>BC</Link>
                    </li>
                </ul>

                <Route path="/:id" component={SampleComponent} />

            </div>
        </Router>
    );
  }
}

export default App;
