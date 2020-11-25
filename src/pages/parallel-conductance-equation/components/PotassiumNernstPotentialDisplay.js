import React , { Component } from 'reactn';

import 'katex/dist/katex.min.css';
//import { BlockMath, InlineMath } from 'react-katex';
import { BlockMath } from 'react-katex';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Grid , Row , Col } from 'react-flexbox-grid';
import CalculatePotassiumEqualibriumPotential from '../events/CalculatePotassiumEqualibriumPotential.js';

class PotassiumNernstPotentialDisplay extends Component {
	constructor( props ) {
		super( props );
		this.state = props;
	}
	componentWillMount() {
		CalculatePotassiumEqualibriumPotential();
	}
	render(){

		if ( this.global.parallel_conductance_equation.ions.potassium.using === false ) {
			return <React.Fragment></React.Fragment>;
		}

		const latex_string = this.global.parallel_conductance_equation.ions.potassium.calculations.equalibrium_potential.steps[0].latex_string;
		const pilot_string = this.global.parallel_conductance_equation.ions.potassium.calculations.equalibrium_potential.steps[0].pilot_string;

		if ( this.global.parallel_conductance_equation.show_pilot_steps === true ) {
			return (
				<div className="wadu">
					<Grid>
						<Row center="xs">
							<Col xs={12}>
								<p style={{color: '#E9C46A'}}>Potassium Nernst Potential</p>
								<hr/>
								<BlockMath>{latex_string}</BlockMath>
							</Col>
						</Row>

						<Row center="xs">
							<Col xs={12}>
								<p>{pilot_string}</p>
							</Col>
						</Row>
						<Row center="xs">
							<Col xs={12}>
								<CopyToClipboard text={pilot_string}
									onCopy={ () => { this.copy_value = pilot_string } }>
									<button>Copy to Pilot Step to Clipboard</button>
								</CopyToClipboard>
								<hr/>
							</Col>
						</Row>
					</Grid>
				</div>
			);
		}
		else {
			return (
				<div className="wadu">
					<Grid>
						<Row center="xs">
							<Col xs={12}>
								<p style={{color: '#E9C46A'}}>Potassium Nernst Potential</p>
								<hr/>
								<BlockMath>{latex_string}</BlockMath>
								<hr/>
							</Col>
						</Row>
					</Grid>
				</div>
			);
		}
	}
}

export default PotassiumNernstPotentialDisplay;