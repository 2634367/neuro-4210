import React from 'react';

import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function DrivingForceEquationLatex( props ) {
	return (
		<div className="wadu">
			<h2>Driving Force Equation</h2>
			<BlockMath>{String.raw`Driving\ Force = (\ Membrane\ Potential\ (V_m)\ (millivolts)\ ) - (\ Nernst\ Potential\ (E_{ion})\ (millivolts) \ )`}
			</BlockMath>
		</div>
	);
}
export default DrivingForceEquationLatex;