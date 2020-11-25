import React , { Component , setGlobal } from 'reactn';
import Select from 'react-select';

import CalculateSodiumEqualibriumPotential from '../events/CalculateSodiumEqualibriumPotential.js';
import CalculatePotassiumEqualibriumPotential from '../events/CalculatePotassiumEqualibriumPotential.js';
import CalculateChlorideEqualibriumPotential from '../events/CalculateChlorideEqualibriumPotential.js';
const update_enum = {
	"sodium": CalculateSodiumEqualibriumPotential ,
	"potassium": CalculatePotassiumEqualibriumPotential ,
	"chloride": CalculateChlorideEqualibriumPotential
};

class MetricUnitsSelection extends Component {

	constructor( props ) {
		super( props );
		this.state = props;
		this.selection_options = [
			{
				id: 1 ,
				value: "yotta" ,
				label: "yotta" ,
				symbol: "Y" ,
				base_10: 24 ,
			} ,
			{
				id: 2 ,
				value: "zetta" ,
				label: "zetta" ,
				symbol: "Z" ,
				base_10: 21 ,
			} ,
			{
				id: 3 ,
				value: "exa" ,
				label: "exa" ,
				symbol: "E" ,
				base_10: 18 ,
			} ,
			{
				id: 4 ,
				value: "peta" ,
				label: "peta" ,
				symbol: "P" ,
				base_10: 15 ,
			} ,
			{
				id: 5 ,
				value: "tera" ,
				label: "tera" ,
				symbol: "T" ,
				base_10: 12 ,
			} ,
			{
				id: 6 ,
				value: "giga" ,
				label: "giga" ,
				symbol: "G" ,
				base_10: 9 ,
			} ,
			{
				id: 7 ,
				value: "mega" ,
				label: "mega" ,
				symbol: "M" ,
				base_10: 6 ,
			} ,
			{
				id: 8 ,
				value: "kilo" ,
				label: "kilo" ,
				symbol: "k" ,
				base_10: 3 ,
			} ,
			{
				id: 9 ,
				value: "hecto" ,
				label: "hecto" ,
				symbol: "h" ,
				base_10: 2 ,
			} ,
			{
				id: 10 ,
				value: "deca" ,
				label: "deca" ,
				symbol: "da" ,
				base_10: 1 ,
			} ,
			{
				id: 11 ,
				value: "one" ,
				label: "one" ,
				symbol: "1" ,
				base_10: 0 ,
			} ,
			{
				id: 12 ,
				value: "deci" ,
				label: "deci" ,
				symbol: "d" ,
				base_10: -1 ,
			} ,
			{
				id: 13 ,
				value: "centi" ,
				label: "centi" ,
				symbol: "c" ,
				base_10: -2 ,
			} ,
			{
				id: 14 ,
				value: "milli" ,
				label: "milli" ,
				symbol: "m" ,
				base_10: -3 ,
			} ,
			{
				id: 15 ,
				value: "micro" ,
				label: "micro" ,
				symbol: "µ" ,
				base_10: -6 ,
			} ,
			{
				id: 16 ,
				value: "nano" ,
				label: "nano" ,
				symbol: "n" ,
				base_10: -9 ,
			} ,
			{
				id: 17 ,
				value: "pico" ,
				label: "pico" ,
				symbol: "p" ,
				base_10: -12 ,
			} ,
			{
				id: 18 ,
				value: "femto" ,
				label: "femto" ,
				symbol: "f" ,
				base_10: -15 ,
			} ,
			{
				id: 19 ,
				value: "atto" ,
				label: "atto" ,
				symbol: "a" ,
				base_10: -18 ,
			} ,
			{
				id: 20 ,
				value: "zepto" ,
				label: "zepto" ,
				symbol: "z" ,
				base_10: -21 ,
			} ,
			{
				id: 21 ,
				value: "yocto" ,
				label: "yocto" ,
				symbol: "y" ,
				base_10: -24 ,
			}
		];
		this.selected_option = this.selection_options[0];
		this.handleSelectionChange = this.handleSelectionChange.bind( this );
	}

	handleSelectionChange( selected ) {
		let object = { parallel_conductance_equation: { ...this.global.parallel_conductance_equation } };
		switch( this.state.type ) {
			case "ion_concentration":
				switch( this.state.concentration_type ) {
					case "inside":
						object.parallel_conductance_equation.ions[this.state.ion_name].concentration_inside_units = selected;
						break;
					case "outside":
						object.parallel_conductance_equation.ions[this.state.ion_name].concentration_outside_units = selected;
						break;
					default:
						break;
				}
				break;
			case "ion_conductance":
				object.parallel_conductance_equation.ions[this.state.ion_name].conductance_units = selected
				break;
			default:
				break;
		}
		setGlobal( object );
		update_enum[this.state.ion_name]();
	}
	render() {
		return (
			<div style={{ width: "100px"}} >
				<Select
					onChange={ this.handleSelectionChange }
					options={ this.selection_options }
					defaultValue={ this.state.default_value }
				/>
			</div>
		);
	}
};

export default MetricUnitsSelection;