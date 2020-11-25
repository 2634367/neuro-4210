import React , { Component , setGlobal } from 'reactn';

// https://github.com/roylee0704/react-flexbox-grid
// https://roylee0704.github.io/react-flexbox-grid/
import { Grid , Row , Col } from 'react-flexbox-grid';

import Switch from "react-switch";
import IonSelection from "./IonSelection.js";
import TemperatureSelection from "./TemperatureSelection.js";
import MetricUnitsSelection from "./MetricUnitsSelection.js";

class Options extends Component {
	constructor( props ) {
		super( props );

		this.handlePilotShowStepsToggle = this.handlePilotShowStepsToggle.bind( this );
		this.handleInputChange = this.handleInputChange.bind( this );
		this.handleTemperatureChange = this.handleTemperatureChange.bind( this );
	}

	handlePilotShowStepsToggle( checked ) {
		setGlobal({
			nernst_equation: {
				...this.global.nernst_equation ,
				show_pilot_steps: checked
			}
		});
	}

	handleTemperatureChange( event ) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		if ( this.global.nernst_equation.temperature_units.value === "celcius" ) {
			setGlobal({
				nernst_equation: {
					...this.global.nernst_equation ,
					temperature_celcius: parseFloat( value ) ,
					temperature_kelvin: ( parseFloat( value ) + 273.15 ) ,
					temperature_input: value
				}
			});
		}
		else {
			setGlobal({
				nernst_equation: {
					...this.global.nernst_equation ,
					temperature_celcius: ( parseFloat( value ) - 273.15 ) ,
					temperature_kelvin: parseFloat( value ) ,
					temperature_input: value
				}
			});
		}
		console.log( this.global.nernst_equation );
	}

	handleInputChange( event ) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		// this.setState({
		// 	[name]: value
		// });
		setGlobal({
			nernst_equation: {
				...this.global.nernst_equation ,
				[name]: value
			}
		});
	}
	// style={{border: '1px solid red'}}
	render() {
		return (
			<div className="wadu">
				{/*<Grid fluid>*/}
				<Grid>
					<h2>Options</h2>
					<IonSelection />
					<br/>
					<span>Show Pilot Steps</span> &nbsp;
					<Switch onChange={ this.handlePilotShowStepsToggle } checked={ this.global.nernst_equation.show_pilot_steps } />
					<br/>
					<h2>Input Values</h2>
					<span>Charge of Ion = </span>
					<input
						name="charge"
						value={ this.global.nernst_equation.ion_charge }
						onChange={ this.handleInputChange }
					/>
					<br/>
					<br/>
					<Row center="xs">
						<Col xs={6} >
							<Row end="xs">
							<span>Temperature = &nbsp;</span>
							<input
								name="temperature_input"
								value={ this.global.nernst_equation.temperature_input }
								onChange={ this.handleTemperatureChange }
							/>
							</Row>
						</Col>
						<Col xs={6} >
							<Row start="xs">
								<TemperatureSelection />
							</Row>
						</Col>
					</Row>
					<br/>
					<br/>
					<Row center="xs">
						<Col xs={6} >
							<Row end="xs">
							<span>Concentration Inside = &nbsp;</span>
							<input
								name="concentration_inside"
								value={ this.global.nernst_equation.concentration_inside }
								onChange={ this.handleInputChange }
							/>
							</Row>
						</Col>
						<Col xs={6} >
							<Row start="xs">
								<MetricUnitsSelection parent_name="concentration_inside_units" />
								<span>&nbsp;molar</span>
							</Row>
						</Col>
					</Row>
					<br/>
					<br/>
					<Row center="xs">
						<Col xs={6} >
							<Row end="xs">
							<span>Concentration Outside = &nbsp;</span>
							<input
								name="concentration_outside"
								value={ this.global.nernst_equation.concentration_outside }
								onChange={ this.handleInputChange }
							/>
							</Row>
						</Col>
						<Col xs={6} >
							<Row start="xs">
								<MetricUnitsSelection parent_name="concentration_outside_units" />
								<span>&nbsp;molar</span>
							</Row>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Options;