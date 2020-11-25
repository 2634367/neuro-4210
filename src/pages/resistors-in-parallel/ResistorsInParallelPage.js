import React , { Component , setGlobal , useGlobal , getGlobal , addReducer } from 'reactn';

// https://github.com/CharlesStover/reactn
// https://github.com/CharlesStover/reactn/blob/master/FAQ.md

// https://a8ab8a939acc.ngrok.io/

import NernstEquationLatex from './components/NernstEquationLatex.js';
import Options from "./components/Options.js";
import Step1 from './components/Step1.js';

class ResistorsInParallelPage extends Component {

	constructor( props ) {
		super( props );
		setGlobal({
			nernst_equation: {
				ion_name: "Sodium" ,
				ion_abbreviation: "Na+" ,
				ion_name_latex: String.raw`Na^{+}` ,
				ion_charge: 1.0 ,
				concentration_inside: 5.0 ,
				concentration_inside_units: { id: 14 , value: "milli" , label: "milli" , symbol: "m" , base_10: -3 } ,
				concentration_outside: 140.0 ,
				concentration_outside_units: { id: 14 , value: "milli" , label: "milli" , symbol: "m" , base_10: -3 } ,
				temperature_celcius: 37.0 ,
				temperature_kelvin: 310.15 ,
				temperature_units: { id: 1 , value: "celcius" , label: "celcius" , symbol: "C" } ,
				temperature_input: 37.0 ,
				show_pilot_steps: false ,
			}
		});
		// addReducer( 'nernstEquationUpdate' , ( global , dispatch , key , value ) => ({
		// 	key: value
		// }));
	}

	render() {
		return (
			<div className="App">
				<h1>Resistors in Parallel Calculator</h1>
				<NernstEquationLatex />
				<br/>
				<Options />
				<br/>
				<Step1/>
			</div>
		);
	}
}

export default ResistorsInParallelPage;