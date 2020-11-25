import React , { Component , setGlobal } from 'reactn';
import Select from 'react-select';

class TemperatureSelection extends Component {

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
		this.handleSelectionChange = this.handleSelectionChange.bind( this );
	}

	handleSelectionChange( selected ) {
		setGlobal({
			nernst_equation: {
				...this.global.nernst_equation ,
				temperature_units: selected
			}
		});
	}
	render() {
		return (
			<div style={{ width: "100px"}} >
				<Select
					onChange={ this.handleSelectionChange }
					options={ this.selection_options }
					defaultValue={ this.global.nernst_equation.temperature_units }
				/>
			</div>
		);
	}
};

export default TemperatureSelection;