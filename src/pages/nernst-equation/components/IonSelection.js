import React , { Component , setGlobal } from 'reactn';
import Select from 'react-select';

class IonSelection extends Component {

	constructor( props ) {
		super( props );
		this.selection_options = [
			{
				id: 1 ,
				value: "Sodium" ,
				label: "Sodium" ,
				symbol: "Na+" ,
				symbol_latex: String.raw`Na^{+}` ,
				charge: 1.0
			} ,
			{
				id: 2 ,
				value: "Potassium" ,
				label: "Potassium" ,
				symbol: "K+" ,
				symbol_latex: String.raw`K^{+}` ,
				charge: 1.0
			} ,
			{
				id: 3 ,
				value: "Chloride" ,
				label: "Chloride" ,
				symbol: "Cl-" ,
				symbol_latex: String.raw`Cl^{-}` ,
				charge: -1.0
			} ,
			{
				id: 4 ,
				value: "Manual" ,
				label: "Manual" ,
			}
		];
		this.selected_option = this.selection_options[0];
		this.handleSelectionChange = this.handleSelectionChange.bind( this );
	}

	handleSelectionChange( selected ) {
		setGlobal({
			nernst_equation: {
				...this.global.nernst_equation ,
				ion_name: selected.label ,
				ion_abbreviation: selected.symbol ,
				ion_name_latex: selected.symbol_latex ,
				ion_charge: selected.charge
			}
		});
		// this.dispatch.nernstEquationUpdate( "ion_name" , selected.label );
		// this.dispatch.nernstEquationUpdate( "ion_abbreviation" , selected.symbol );
		// this.dispatch.nernstEquationUpdate( "ion_name_latex" , selected.symbol_latex );
		// this.dispatch.nernstEquationUpdate( "ion_charge" , selected.charge );
	}
	render() {
		return (
			<div style={{ maxWidth: "350px", margin: "0 auto" }} >
				<Select
					onChange={ this.handleSelectionChange }
					options={ this.selection_options }
					defaultValue={ this.selected_option }
				/>
			</div>
		);
	}
};

export default IonSelection;