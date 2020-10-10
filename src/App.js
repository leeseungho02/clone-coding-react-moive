import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import MovieDetail from './routes/MovieDetail';
import Navigation from './components/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return <HashRouter>
		<Navigation />
		<Route path="/" exact={true} component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/movie/:id" component={MovieDetail}/>
	</HashRouter>;
}

export default App;