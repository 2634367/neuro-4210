import { getGlobal , setGlobal } from 'reactn';

import CalculateParallelConductanceEquation from './CalculateParallelConductanceEquation.js';

export default function() {

	let global_current = getGlobal();
	global_current["parallel_conductance_equation"]["ions"]["sodium"]["calculations"]["equalibrium_potential"]["value"] = ( ( ( 8.314 * global_current["parallel_conductance_equation"].temperature_kelvin ) / ( global_current["parallel_conductance_equation"]["ions"]["sodium"]["charge"] * 96485 * ( 1 / 1000 ) ) ) * ( Math.log( global_current["parallel_conductance_equation"]["ions"]["sodium"]["concentration_outside"] / global_current["parallel_conductance_equation"]["ions"]["sodium"]["concentration_inside"] ) ) );

	global_current["parallel_conductance_equation"]["ions"]["sodium"]["calculations"]["equalibrium_potential"]["steps"][0]["latex_string"] = String.raw`${global_current["parallel_conductance_equation"]["ions"]["sodium"]["name_latex"]} = \frac{\frac{8.314\ Joules}{1\ Kelvin \cdot mol} \ *\ ( ${global_current["parallel_conductance_equation"].temperature_kelvin.toFixed(3)} )\ ^{\circ} K}{${global_current["parallel_conductance_equation"]["ions"]["sodium"]["charge"].toFixed(1)} \ *\  \frac{96485\ Joules}{Volts \cdot mol} * \frac{1\ Volt}{1000\ mV} }   \ * ln\left( \frac{[${global_current["parallel_conductance_equation"]["ions"]["sodium"]["concentration_outside"]}]\ ${global_current["parallel_conductance_equation"]["ions"]["sodium"]["concentration_outside_units"]["value"]}\  molar }{ [${global_current["parallel_conductance_equation"]["ions"]["sodium"]["concentration_inside"]}]\ ${global_current["parallel_conductance_equation"]["ions"]["sodium"]["concentration_inside_units"]["value"]}\ molar }\right) = ${global_current["parallel_conductance_equation"]["ions"]["sodium"]["calculations"]["equalibrium_potential"]["value"]}\ milli\ volts`;

	global_current["parallel_conductance_equation"]["ions"]["sodium"]["calculations"]["equalibrium_potential"]["steps"][0]["pilot_string"] = String.raw`${global_current["parallel_conductance_equation"]["ions"]["sodium"]["abbreviation"]} = ( ( ( 8.314 Joules / 1 Kelvin · mol ) * ( ${global_current["parallel_conductance_equation"].temperature_kelvin.toFixed(3)} °K ) ) / ( ${global_current["parallel_conductance_equation"]["ions"]["sodium"]["charge"].toFixed(1)} * ( 96485 Joules / Volts · mol ) * ( 1 Volt / 1000 mV ) ) ) * ( ln( [${global_current["parallel_conductance_equation"]["ions"]["sodium"]["concentration_outside"]}] ${global_current["parallel_conductance_equation"]["ions"]["sodium"]["concentration_outside_units"]["value"]} molar / [${global_current["parallel_conductance_equation"]["ions"]["sodium"]["concentration_inside"]}] ${global_current["parallel_conductance_equation"]["ions"]["sodium"]["concentration_inside_units"]["value"]} molar ) ) = ${global_current["parallel_conductance_equation"]["ions"]["sodium"]["calculations"]["equalibrium_potential"]["value"]} milli volts`;

	setGlobal( global_current );
	CalculateParallelConductanceEquation();
}