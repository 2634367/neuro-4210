import React from 'react';

import 'katex/dist/katex.min.css';
//import { BlockMath, InlineMath } from 'react-katex';
import { BlockMath } from 'react-katex';

function NernstEquationLatex( props ) {
	return (
		<div className="wadu">
			<BlockMath>{String.raw`
				Equalibrium\ of\ Ion\ \text{"Z"} \ = E_Z = \frac{\frac{8.314\ Joules}{1\ Kelvin \cdot mol} \ *\ ( 37\ ^{\circ}C + 273.15)\ ^{\circ} K}{Charge\ of \ Ion\  (Z) \ * \ \frac{96485\ Joules}{Volts \cdot mol}} \ * ln\left( \frac{[Z]_{outside}\ (Molar)}{[Z]_{inside}\ (Molar)}\right)
			`}
			</BlockMath>
		</div>
	);
}
export default NernstEquationLatex;