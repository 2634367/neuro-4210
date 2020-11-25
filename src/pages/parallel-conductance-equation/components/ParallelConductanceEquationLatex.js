import React from 'react';

import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

function ParallelConductanceEquationLatex( props ) {
	return (
		<div className="wadu">
			<BlockMath>{String.raw`Let\ Conductance = G`}</BlockMath>
			<BlockMath>{String.raw`Let\ Equalibrium\ Potential = E`}</BlockMath>
			<BlockMath>{String.raw`Reverse\ Membrane\ Potential\ (V_m) = \frac{( (G_{Na}*E_{Na}) + (G_K *E_K) + (G_{Cl} * E_{Cl})}{ G_{Na} + G_K + G_{Cl}}`}
			</BlockMath>
		</div>
	);
}
export default ParallelConductanceEquationLatex;