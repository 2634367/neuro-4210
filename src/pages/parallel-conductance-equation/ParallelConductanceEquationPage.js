import React , { Component , setGlobal , useGlobal , getGlobal , addReducer } from 'reactn';

// https://github.com/CharlesStover/reactn
// https://github.com/CharlesStover/reactn/blob/master/FAQ.md

// https://07e4dd093a01.ngrok.io/

import ParallelConductanceEquationLatex from './components/ParallelConductanceEquationLatex.js';
import Options from "./components/Options.js";
import SodiumNernstPotentialDisplay from './components/SodiumNernstPotentialDisplay.js';
import PotassiumNernstPotentialDisplay from './components/PotassiumNernstPotentialDisplay.js';
import ChlorideNernstPotentialDisplay from './components/ChlorideNernstPotentialDisplay.js';
import ParallelConductanceEquationDisplay from './components/ParallelConductanceEquationDisplay.js';
import DrivingForceEquationLatex from './components/DrivingForceEquationLatex.js';
import SodiumDrivingForceDisplay from './components/SodiumDrivingForceDisplay.js';
import PotassiumDrivingForceDisplay from './components/PotassiumDrivingForceDisplay.js';
import ChlorideDrivingForceDisplay from './components/ChlorideDrivingForceDisplay.js';

class ParallelConductanceEquationPage extends Component {

	constructor( props ) {
		super( props );
		setGlobal({
			parallel_conductance_equation: {
				temperature_celcius: 37.0 ,
				temperature_kelvin: 310.15 ,
				temperature_units: { id: 1 , value: "celcius" , label: "celcius" , symbol: "C" } ,
				temperature_input: 37.0 ,
				show_pilot_steps: true ,
				ions: {
					sodium: {
						name: "Sodium" ,
						abbreviation: "Na+" ,
						name_latex: String.raw`Na^{+}` ,
						charge: 1.0 ,
						concentration_inside: 5.0 ,
						concentration_inside_units: { id: 14 , value: "milli" , label: "milli" , symbol: "m" , base_10: -3 } ,
						concentration_outside: 140.0 ,
						concentration_outside_units: { id: 14 , value: "milli" , label: "milli" , symbol: "m" , base_10: -3 } ,
						using: true ,
						conductance: 0.0 ,
						conductance_units: { id: 15 , value: "micro" , label: "micro" , symbol: "µ" , base_10: -6 } ,
						calculations: {
							equalibrium_potential: {
								value: 0.0 ,
								steps: [
									{
										latex_string: "" ,
										pilot_string: ""
									}
								]
							} ,
							driving_force: {
								value: 0.0 ,
								steps: [
									{
										latex_string: "" ,
										pilot_string: ""
									}
								]
							}
						}
					} ,
					potassium: {
						name: "Potassium" ,
						abbreviation: "K+" ,
						name_latex: String.raw`K^{+}` ,
						charge: 1.0 ,
						concentration_inside: 150.0 ,
						concentration_inside_units: { id: 14 , value: "milli" , label: "milli" , symbol: "m" , base_10: -3 } ,
						concentration_outside: 4.0 ,
						concentration_outside_units: { id: 14 , value: "milli" , label: "milli" , symbol: "m" , base_10: -3 } ,
						using: true ,
						conductance: 0.0 ,
						conductance_units: { id: 15 , value: "micro" , label: "micro" , symbol: "µ" , base_10: -6 } ,
						calculations: {
							equalibrium_potential: {
								value: 0.0 ,
								steps: [
									{
										latex_string: "" ,
										pilot_string: ""
									}
								]
							} ,
							driving_force: {
								value: 0.0 ,
								steps: [
									{
										latex_string: "" ,
										pilot_string: ""
									}
								]
							}
						}
					} ,
					chloride: {
						name: "Chloride" ,
						abbreviation: "Cl-" ,
						name_latex: String.raw`Cl^{-1}` ,
						charge: -1.0 ,
						concentration_inside: 3.8 ,
						concentration_inside_units: { id: 14 , value: "milli" , label: "milli" , symbol: "m" , base_10: -3 } ,
						concentration_outside: 120.0 ,
						concentration_outside_units: { id: 14 , value: "milli" , label: "milli" , symbol: "m" , base_10: -3 } ,
						using: true ,
						conductance: 0.0 ,
						conductance_units: { id: 15 , value: "micro" , label: "micro" , symbol: "µ" , base_10: -6 } ,
						calculations: {
							equalibrium_potential: {
								value: 0.0 ,
								steps: [
									{
										latex_string: "" ,
										pilot_string: ""
									}
								]
							} ,
							driving_force: {
								value: 0.0 ,
								steps: [
									{
										latex_string: "" ,
										pilot_string: ""
									}
								]
							}
						}
					} ,
				} ,
				value: 0.0 ,
				steps: [
					{
						latex_string: "" ,
						pilot_string: ""
					}
				]
			}
		});
	}

	render() {
		return (
			<div className="App">
				<h1>Parallel Conductance Equation</h1>
				<ParallelConductanceEquationLatex />
				<br/>
				<Options/>
				<br/>
				<h2>Equalibrium Calculations</h2>
				<br/>
				<SodiumNernstPotentialDisplay />
				<br/>
				<PotassiumNernstPotentialDisplay />
				<br/>
				<ChlorideNernstPotentialDisplay />
				<br/>
				<ParallelConductanceEquationDisplay />
				<br/>
				<br/>
				<DrivingForceEquationLatex />
				<br/>
				<SodiumDrivingForceDisplay />
				<br/>
				<PotassiumDrivingForceDisplay />
				<br />
				<ChlorideDrivingForceDisplay />
			</div>
		);
	}
}

export default ParallelConductanceEquationPage;