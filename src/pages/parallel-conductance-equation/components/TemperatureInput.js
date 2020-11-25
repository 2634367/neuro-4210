import React , { Component , setGlobal } from 'reactn';
import Select from 'react-select';
import { Grid , Row , Col } from 'react-flexbox-grid';

class TemperatureInput extends Component {

	constructor( props ) {
		super( props );
		this.selection_options = [
			{
				id: 1 ,
				value: "celcius" ,
				label: "celcius" ,
				symbol: "C" ,
			} ,
			{
				id: 2 ,
				value: "kelvin" ,
				label: "kelvin" ,
				symbol: "K" ,
			} ,
		];
		this.selected_option = this.selection_options[0];
		this.handleUnitsChange = this.handleUnitsChange.bind( this );
		this.handleInputChange = this.handleInputChange.bind( this );
	}

	handleUnitsChange( selected ) {
		setGlobal({
			nernst_equation: {
				...this.global.nernst_equation ,
				temperature_units: selected
			}
		});
	}

	handleInputChange( event ) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		if ( this.global.parallel_conductance_equation.temperature_units.value === "celcius" ) {
			setGlobal({
				parallel_conductance_equation: {
					...this.global.parallel_conductance_equation ,
					temperature_celcius: parseFloat( value ) ,
					temperature_kelvin: ( parseFloat( value ) + 273.15 ) ,
					temperature_input: value
				}
			});
		}
		else {
			setGlobal({
				parallel_conductance_equation: {
					...this.global.parallel_conductance_equation ,
					temperature_celcius: ( parseFloat( value ) - 273.15 ) ,
					temperature_kelvin: parseFloat( value ) ,
					temperature_input: value
				}
			});
		}
		console.log( this.global.parallel_conductance_equation );
	}

	render() {
		return (
			<div className="wadu">
				<Row center="xs">
					<Col xs={6} >
						<Row end="xs">
						<span>Temperature = &nbsp;</span>
						<input
							name="temperature_input"
							value={ this.global.parallel_conductance_equation.temperature_input }
							onChange={ this.handleInputChange }
						/>
						</Row>
					</Col>
					<Col xs={6} >
						<Row start="xs">
							<div style={{ width: "100px"}} >
								<Select
									onChange={ this.handleUnitsChange }
									options={ this.selection_options }
									defaultValue={ this.global.parallel_conductance_equation.temperature_units }
								/>
							</div>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
};

export default TemperatureInput;