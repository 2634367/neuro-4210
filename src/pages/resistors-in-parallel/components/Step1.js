import React , { Component } from 'reactn';

import 'katex/dist/katex.min.css';
//import { BlockMath, InlineMath } from 'react-katex';
import { BlockMath } from 'react-katex';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Grid , Row , Col } from 'react-flexbox-grid';

class Step1 extends Component {
	constructor( props ) {
		super( props );
		this.state = props;
	}
	render(){

		const latex_string = String.raw`${this.global.nernst_equation.ion_name_latex} = \frac{\frac{8.314\ Joules}{1\ Kelvin \cdot mol} \ *\ ( ${this.global.nernst_equation.temperature_kelvin.toFixed(3)} )\ ^{\circ} K}{${this.global.nernst_equation.ion_charge.toFixed(1)} \ *\  \frac{96485\ Joules}{Volts \cdot mol} * \frac{1\ Volt}{1000\ mV} }   \ * ln\left( \frac{[${this.global.nernst_equation.concentration_outside}]\ ${this.global.nernst_equation.concentration_outside_units.value}\  molar }{ [${this.global.nernst_equation.concentration_inside}]\ ${this.global.nernst_equation.concentration_inside_units.value}\ molar }\right)`;

		const pilot_string = String.raw`${this.global.nernst_equation.ion_abbreviation} = ( ( ( 8.314 Joules / 1 Kelvin · mol ) * ( ${this.global.nernst_equation.temperature_kelvin.toFixed(3)} ∘K ) ) / ( ${this.global.nernst_equation.ion_charge.toFixed(1)} * ( 96485 Joules / Volts · mol ) * ( 1 Volt / 1000 mV ) ) ) * ( ln( [${this.global.nernst_equation.concentration_outside}] ${this.global.nernst_equation.concentration_outside_units.value} molar / [${this.global.nernst_equation.concentration_inside}] ${this.global.nernst_equation.concentration_inside_units.value} molar ) )`;

		if ( this.global.nernst_equation.show_pilot_steps === true ) {
			return (
				<div className="wadu">
					<Grid>
						<Row center="xs">
							<Col xs={6}>
								<h2>Step 1</h2>
								<hr/>
							</Col>
						</Row>

						<Row center="xs">
							<Col xs={6}>
								<BlockMath>{latex_string}</BlockMath>
								<hr/>
							</Col>
						</Row>

						<Row center="xs">
							<Col xs={6}>
								<p>{pilot_string}</p>
							</Col>
						</Row>
						<Row center="xs">
							<Col xs={6}>
								<CopyToClipboard text={pilot_string}
									onCopy={ () => { this.copy_value = pilot_string } }>
									<button>Copy to Pilot Step 1 to Clipboard</button>
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
							<Col xs={6}>
								<h2>Step 1</h2>
								<hr/>
							</Col>
						</Row>

						<Row center="xs">
							<Col xs={6}>
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

export default Step1;