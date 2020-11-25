import React , { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


// import { ThemeProvider } from '@material-ui/core/styles'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import { createMuiTheme }  from '@material-ui/core/styles'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Menu from './components/Menu.js';
import NernstEquationPage from './pages/nernst-equation/NernstEquationPage.js'
import ParallelConductanceEquationPage from './pages/parallel-conductance-equation/ParallelConductanceEquationPage.js'
import ResistorsInParallelPage from './pages/resistors-in-parallel/ResistorsInParallelPage.js'


// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#009688"
//     },
//     secondary: {
//       main: "#00e676" ,
//     },
//   }
// });


function App() {
	useEffect(() => {
		document.title = "Neuro 4210"
	} , [] );
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/nernst-equation">Nernst Equation</Link>
						</li>
						<li>
							<Link to="/parallel-conductance-equation">Parallel Conductance Equation</Link>
						</li>
						<li>
							<Link to="/resistors-in-parallel">Resistors In Parallel</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/nernst-equation"> <NernstEquationPage /> </Route>
					<Route path="/parallel-conductance-equation"> <ParallelConductanceEquationPage /> </Route>
					<Route path="/resistors-in-parallel"> <ResistorsInParallelPage /> </Route>
					<Route path="/"> <Home /> </Route>
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	return (
		<div className="App">
			{/*<Menu />*/}
			<h1>Neuro 4210 Home</h1>
		</div>
	);
}

export default App;