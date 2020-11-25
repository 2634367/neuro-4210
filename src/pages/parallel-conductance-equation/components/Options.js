import React , { Component , setGlobal } from 'reactn';

// https://github.com/roylee0704/react-flexbox-grid
// https://roylee0704.github.io/react-flexbox-grid/
import { Grid , Row , Col } from 'react-flexbox-grid';

import Switch from "react-switch";
import IncludedIonsSelection from "./IncludedIonsSelection.js";
import TemperatureInput from "./TemperatureInput.js";
import SodiumInput from "./SodiumInput.js";
import PotassiumInput from "./PotassiumInput.js";
import ChlorideInput from "./ChlorideInput.js";

class Options extends Component {
	constructor( props ) {
		super( props );
		this.handlePilotShowStepsToggle = this.handlePilotShowStepsToggle.bind( this );
	}

	handlePilotShowStepsToggle( checked ) {
		setGlobal({
			parallel_conductance_equation: {
				...this.global.parallel_conductance_equation ,
				show_pilot_steps: checked
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
					<IncludedIonsSelection />
					<br/>
					<span>Show Pilot Steps</span> &nbsp;
					<Switch onChange={ this.handlePilotShowStepsToggle } checked={ this.global.parallel_conductance_equation.show_pilot_steps } />
					<br/>
					<br/>
					<TemperatureInput/>
					{ this.global.parallel_conductance_equation.ions.sodium.using === true &&
						<SodiumInput/>
					}
					{ this.global.parallel_conductance_equation.ions.potassium.using === true &&
						<PotassiumInput/>
					}
					{ this.global.parallel_conductance_equation.ions.chloride.using === true &&
						<ChlorideInput/>
					}
				</Grid>
			</div>
		);
	}
}

export default Options;