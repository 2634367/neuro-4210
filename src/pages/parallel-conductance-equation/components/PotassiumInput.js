import React , { Component , setGlobal } from 'reactn';
import Select from 'react-select';
import { Grid , Row , Col } from 'react-flexbox-grid';
import MetricUnitsSelection from "./MetricUnitsSelection.js";

import CalculatePotassiumEqualibriumPotential from '../events/CalculatePotassiumEqualibriumPotential.js';
import CalculateParallelConductanceEquation from '../events/CalculateParallelConductanceEquation.js';

class PotassiumInput extends Component {

	constructor( props ) {
		super( props );
		this.handleConcentrationInsideChange = this.handleConcentrationInsideChange.bind( this );
		this.handleConcentrationOutsideChange = this.handleConcentrationOutsideChange.bind( this );
		this.handleConductanceChange = this.handleConductanceChange.bind( this );
	}

	handleConcentrationInsideChange( event ) {
		console.log( event.target.value );
		let object = { parallel_conductance_equation: { ...this.global.parallel_conductance_equation } };
		object.parallel_conductance_equation.ions.potassium.concentration_inside = event.target.value;
		setGlobal( object );
		CalculatePotassiumEqualibriumPotential();
	}

	handleConcentrationOutsideChange( event ) {
		console.log( event.target.value );
		let object = { parallel_conductance_equation: { ...this.global.parallel_conductance_equation } };
		object.parallel_conductance_equation.ions.potassium.concentration_outside = event.target.value;
		setGlobal( object );
		CalculatePotassiumEqualibriumPotential();
	}

	handleConductanceChange( event ) {
		console.log( event.target.value );
		let object = { parallel_conductance_equation: { ...this.global.parallel_conductance_equation } };
		object.parallel_conductance_equation.ions.potassium.conductance = event.target.value;
		setGlobal( object );
		CalculateParallelConductanceEquation();
	}

	render() {
		return (
			<React.Fragment >
				<br/>
				<br/>
				<Row>
					<Col xs={12}>
						<Row center="xs">
							<Col xs={6} >
								<Row end="xs">
									<span style={{color: '#E9C46A'}}>Potassium</span>
									<span>&nbsp;- Concentration Inside = &nbsp;</span>
									<input
										name="concentration_inside"
										value={ this.global.parallel_conductance_equation.ions.potassium.concentration_inside }
										onChange={ this.handleConcentrationInsideChange }
									/>
								</Row>
							</Col>
							<Col xs={6} >
								<Row start="xs">
									<MetricUnitsSelection
										type="ion_concentration"
										ion_name="potassium"
										concentration_type="inside"
										default_value={ this.global.parallel_conductance_equation.ions.potassium.concentration_inside_units }
									/>
									<span>&nbsp;molar</span>
								</Row>
							</Col>
						</Row>
						<Row center="xs">
							<Col xs={6} >
								<Row end="xs">
									<span style={{color: '#E9C46A'}}>Potassium</span>
									<span>&nbsp;- Concentration Outside = &nbsp;</span>
									<input
										name="concentration_outside"
										value={ this.global.parallel_conductance_equation.ions.potassium.concentration_outside }
										onChange={ this.handleConcentrationOutsideChange }
									/>
								</Row>
							</Col>
							<Col xs={6} >
								<Row start="xs">
									<MetricUnitsSelection
										type="ion_concentration"
										ion_name="potassium"
										concentration_type="outside"
										default_value={ this.global.parallel_conductance_equation.ions.potassium.concentration_outside_units }
									/>
									<span>&nbsp;molar</span>
								</Row>
							</Col>
						</Row>
						<Row center="xs">
							<Col xs={6} >
								<Row end="xs">
									<span style={{color: '#E9C46A'}}>Potassium</span>
									<span>&nbsp;- Conductance = &nbsp;</span>
									<input
										name="conductance"
										value={ this.global.parallel_conductance_equation.ions.potassium.conductance }
										onChange={ this.handleConductanceChange }
									/>
								</Row>
							</Col>
							<Col xs={6} >
								<Row start="xs">
									<MetricUnitsSelection
										type="ion_conductance"
										ion_name="potassium"
										default_value={ this.global.parallel_conductance_equation.ions.potassium.conductance_units }
									/>
									<span>&nbsp;siemens</span>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</React.Fragment>
		);
	}
};

export default PotassiumInput;