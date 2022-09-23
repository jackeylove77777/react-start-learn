import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import App from "./App";
import {BrowserRouter as Router, HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <App></App>
        </Router>
    </React.StrictMode>
)


