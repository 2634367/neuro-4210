import React , { Component , setGlobal } from 'reactn';
import Switch from "react-switch";

import CalculateParallelConductanceEquation from '../events/CalculateParallelConductanceEquation.js';
class IncludedIonsSelection extends Component {

	constructor( props ) {
		super( props );
		this.handleSodiumSelection = this.handleSodiumSelection.bind( this );
		this.handlePotasiumSelection = this.handlePotasiumSelection.bind( this );
		this.handleChlorideSelection = this.handleChlorideSelection.bind( this );
	}

	handleSodiumSelection( selected ) {
		let object = { parallel_conductance_equation: { ...this.global.parallel_conductance_equation } };
		object.parallel_conductance_equation.ions.sodium.using = selected;
		setGlobal( object );
		CalculateParallelConductanceEquation();
	}

	handlePotasiumSelection( selected ) {
		let object = { parallel_conductance_equation: { ...this.global.parallel_conductance_equation } };
		object.parallel_conductance_equation.ions.potassium.using = selected;
		setGlobal( object );
		CalculateParallelConductanceEquation();
	}

	handleChlorideSelection( selected ) {
		let object = { parallel_conductance_equation: { ...this.global.parallel_conductance_equation } };
		object.parallel_conductance_equation.ions.chloride.using = selected;
		setGlobal( object );
		CalculateParallelConductanceEquation();
	}

	render() {
		return (
			<div className="wadu" >
				<label>
					<span style={{color: '#E76F51'}}>Sodium&nbsp;</span>
					<Switch onChange={ this.handleSodiumSelection } checked={ this.global.parallel_conductance_equation.ions.sodium.using } />
					&nbsp;
				</label>
				<label>
					<span style={{color: '#E9C46A'}}>Potassium&nbsp;</span>
					<Switch onChange={ this.handlePotasiumSelection } checked={ this.global.parallel_conductance_equation.ions.potassium.using } />
					&nbsp;
				</label>
				<label>
					<span style={{color: '#2A9D8F'}}>Chloride&nbsp;</span>
					<Switch onChange={ this.handleChlorideSelection } checked={ this.global.parallel_conductance_equation.ions.chloride.using } />
					&nbsp;
				</label>
			</div>
		);
	}
};

export default IncludedIonsSelection;