import React , { Component , setGlobal } from 'reactn';
import Select from 'react-select';
import { Grid , Row , Col } from 'react-flexbox-grid';
import MetricUnitsSelection from "./MetricUnitsSelection.js";

import CalculateChlorideEqualibriumPotential from '../events/CalculateChlorideEqualibriumPotential.js';
import CalculateParallelConductanceEquation from '../events/CalculateParallelConductanceEquation.js';

class ChlorideInput extends Component {

	constructor( props ) {
		super( props );
		this.handleConcentrationInsideChange = this.handleConcentrationInsideChange.bind( this );
		this.handleConcentrationOutsideChange = this.handleConcentrationOutsideChange.bind( this );
		this.handleConductanceChange = this.handleConductanceChange.bind( this );
	}

	handleConcentrationInsideChange( event ) {
		console.log( event.target.value );
		let object = { parallel_conductance_equation: { ...this.global.parallel_conductance_equation } };
		object.parallel_conductance_equation.ions.chloride.concentration_inside = event.target.value;
		setGlobal( object );
		CalculateChlorideEqualibriumPotential();
	}

	handleConcentrationOutsideChange( event ) {
		console.log( event.target.value );
		let object = { parallel_conductance_equation: { ...this.global.parallel_conductance_equation } };
		object.parallel_conductance_equation.ions.chloride.concentration_outside = event.target.value;
		setGlobal( object );
		CalculateChlorideEqualibriumPotential();
	}

	handleConductanceChange( event ) {
		console.log( event.target.value );
		let object = { parallel_conductance_equation: { ...this.global.parallel_conductance_equation } };
		object.parallel_conductance_equation.ions.chloride.conductance = event.target.value;
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
									<span style={{color: '#2A9D8F'}}>Chloride</span>
									<span>&nbsp;- Concentration Inside = &nbsp;</span>
									<input
										name="concentration_inside"
										value={ this.global.parallel_conductance_equation.ions.chloride.concentration_inside }
										onChange={ this.handleConcentrationInsideChange }
									/>
								</Row>
							</Col>
							<Col xs={6} >
								<Row start="xs">
									<MetricUnitsSelection
										type="ion_concentration"
										ion_name="chloride"
										concentration_type="inside"
										default_value={ this.global.parallel_conductance_equation.ions.chloride.concentration_inside_units }
									/>
									<span>&nbsp;molar</span>
								</Row>
							</Col>
						</Row>
						<Row center="xs">
							<Col xs={6} >
								<Row end="xs">
									<span style={{color: '#2A9D8F'}}>Chloride</span>
									<span>&nbsp;- Concentration Outside = &nbsp;</span>
									<input
										name="concentration_outside"
										value={ this.global.parallel_conductance_equation.ions.chloride.concentration_outside }
										onChange={ this.handleConcentrationOutsideChange }
									/>
								</Row>
							</Col>
							<Col xs={6} >
								<Row start="xs">
									<MetricUnitsSelection
										type="ion_concentration"
										ion_name="chloride"
										concentration_type="outside"
										default_value={ this.global.parallel_conductance_equation.ions.chloride.concentration_outside_units }
									/>
									<span>&nbsp;molar</span>
								</Row>
							</Col>
						</Row>
						<Row center="xs">
							<Col xs={6} >
								<Row end="xs">
									<span style={{color: '#2A9D8F'}}>Chloride</span>
									<span>&nbsp;- Conductance = &nbsp;</span>
									<input
										name="conductance"
										value={ this.global.parallel_conductance_equation.ions.chloride.conductance }
										onChange={ this.handleConductanceChange }
									/>
								</Row>
							</Col>
							<Col xs={6} >
								<Row start="xs">
									<MetricUnitsSelection
										type="ion_conductance"
										ion_name="chloride"
										default_value={ this.global.parallel_conductance_equation.ions.chloride.conductance_units }
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

export default ChlorideInput;