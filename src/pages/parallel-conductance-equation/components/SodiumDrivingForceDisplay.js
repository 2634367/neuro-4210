import React , { Component } from 'reactn';

import 'katex/dist/katex.min.css';
//import { BlockMath, InlineMath } from 'react-katex';
import { BlockMath } from 'react-katex';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Grid , Row , Col } from 'react-flexbox-grid';
import CalculateParallelConductanceEquation from '../events/CalculateParallelConductanceEquation.js';

class ParallelConductanceEquationDisplay extends Component {
	constructor( props ) {
		super( props );
		this.state = props;
	}
	componentWillMount() {
		//CalculateParallelConductanceEquation();
	}
	render(){

		if ( this.global.parallel_conductance_equation.ions.sodium.using === false ) {
			return ( <React.Fragment></React.Fragment> );
		}

		const latex_string = this.global.parallel_conductance_equation.ions.sodium.calculations.driving_force.steps[0].latex_string;
		const pilot_string = this.global.parallel_conductance_equation.ions.sodium.calculations.driving_force.steps[0].pilot_string;

		if ( this.global.parallel_conductance_equation.show_pilot_steps === true ) {
			return (
				<div className="wadu">
					<Grid>
						<Row center="xs">
							<Col xs={12}>
								<p style={{color: '#E76F51'}}>Sodium Driving Force</p>
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
								<p style={{color: '#E76F51'}}>Sodium Driving Force</p>
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

export default ParallelConductanceEquationDisplay;