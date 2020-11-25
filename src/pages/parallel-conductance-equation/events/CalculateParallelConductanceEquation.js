import { getGlobal , setGlobal } from 'reactn';

export default function() {

	// 1.) Grab RxJS "slice"
	let slice = getGlobal();

	// 2.) Convert All Conductance Values Inputed To Microsiemens : 1E-6
	const sodium_conductance_micro_siemens = ( slice.parallel_conductance_equation.ions.sodium.conductance * 10**slice.parallel_conductance_equation.ions.sodium.conductance_units.base_10 ) / ( 1*10**-6 );
	const potasium_conductance_micro_siemens = ( slice.parallel_conductance_equation.ions.potassium.conductance * 10**slice.parallel_conductance_equation.ions.potassium.conductance_units.base_10 ) / ( 1*10**-6 );
	const chloride_conductance_micro_siemens = ( slice.parallel_conductance_equation.ions.chloride.conductance * 10**slice.parallel_conductance_equation.ions.chloride.conductance_units.base_10 ) / ( 1*10**-6 );

	// 3.) Calculate Parallel Conductance Value
	const sodium_equalibrium_potential_millivolts = slice.parallel_conductance_equation.ions.sodium.calculations.equalibrium_potential.value;
	const potassium_equalibrium_potential_millivolts = slice.parallel_conductance_equation.ions.potassium.calculations.equalibrium_potential.value;
	const chloride_equalibrium_potential_millivolts = slice.parallel_conductance_equation.ions.chloride.calculations.equalibrium_potential.value;
	slice.parallel_conductance_equation.value = ( ( ( sodium_conductance_micro_siemens * sodium_equalibrium_potential_millivolts ) + ( potasium_conductance_micro_siemens * potassium_equalibrium_potential_millivolts ) + ( chloride_conductance_micro_siemens * chloride_equalibrium_potential_millivolts ) ) / ( sodium_conductance_micro_siemens + potasium_conductance_micro_siemens + chloride_conductance_micro_siemens ) );

	// 4.) Calculate Driving Force Values
	slice.parallel_conductance_equation.ions.sodium.calculations.driving_force.value = ( slice.parallel_conductance_equation.value - sodium_equalibrium_potential_millivolts );
	slice.parallel_conductance_equation.ions.potassium.calculations.driving_force.value = ( slice.parallel_conductance_equation.value - potassium_equalibrium_potential_millivolts );
	slice.parallel_conductance_equation.ions.chloride.calculations.driving_force.value = ( slice.parallel_conductance_equation.value - chloride_equalibrium_potential_millivolts );

	// 5.) Build Parallel Conductance Latex and Pilot Strings
	let latex_string = '';
	let pilot_string = '';
	const using_sodium = slice.parallel_conductance_equation.ions.sodium.using;
	const using_potassium = slice.parallel_conductance_equation.ions.potassium.using;
	const using_chloride = slice.parallel_conductance_equation.ions.chloride.using;
	// All 3
	if ( using_sodium === true && using_potassium === true && using_chloride === true ) {
		const sodium_numerator_latex = String.raw`\left( ${sodium_conductance_micro_siemens}\ \mu s * ${sodium_equalibrium_potential_millivolts}\ millivolts \right)_{sodium}`;
		const potassium_numerator_latex = String.raw`\left( ${potasium_conductance_micro_siemens}\ \mu s * ${potassium_equalibrium_potential_millivolts}\ millivolts \right)_{potassium}`;
		const chloride_numerator_latex = String.raw`\left( ${chloride_conductance_micro_siemens}\ \mu s * ${chloride_equalibrium_potential_millivolts}\ millivolts \right)_{chloride}`;
		const denominator_latex = String.raw`${sodium_conductance_micro_siemens}\ \mu s + ${potasium_conductance_micro_siemens}\ \mu s + ${chloride_conductance_micro_siemens}\ \mu s`;
		latex_string = String.raw`\frac{ ${sodium_numerator_latex} + ${potassium_numerator_latex} + ${chloride_numerator_latex} }{${denominator_latex}} = ${slice.parallel_conductance_equation.value}\ millivolts`;

		const sodium_numerator_pilot = String.raw`( ${sodium_conductance_micro_siemens} µs * ${sodium_equalibrium_potential_millivolts} millivolts )`;
		const potassium_numerator_pilot = String.raw`( ${potasium_conductance_micro_siemens} µs * ${potassium_equalibrium_potential_millivolts} millivolts )`;
		const chloride_numerator_pilot = String.raw`( ${chloride_conductance_micro_siemens} µs * ${chloride_equalibrium_potential_millivolts} millivolts )`;
		const denominator_pilot = String.raw`${sodium_conductance_micro_siemens} µs + ${potasium_conductance_micro_siemens} µs + ${chloride_conductance_micro_siemens} µs`;
		pilot_string = String.raw`( ${sodium_numerator_pilot} + ${potassium_numerator_pilot} + ${chloride_numerator_pilot} ) / ( ${denominator_pilot} ) = ${slice.parallel_conductance_equation.value} millivolts`;
	}
	// The 2's
	else if ( using_sodium === false && using_potassium === true && using_chloride === true ) {
		const potassium_numerator_latex = String.raw`\left( ${potasium_conductance_micro_siemens}\ \mu s * ${potassium_equalibrium_potential_millivolts}\ millivolts \right)_{potassium}`;
		const chloride_numerator_latex = String.raw`\left( ${chloride_conductance_micro_siemens}\ \mu s * ${chloride_equalibrium_potential_millivolts}\ millivolts \right)_{chloride}`;
		const denominator_latex = String.raw`${potasium_conductance_micro_siemens}\ \mu s + ${chloride_conductance_micro_siemens}\ \mu s`;
		latex_string = String.raw`\frac{ ${potassium_numerator_latex} + ${chloride_numerator_latex} }{${denominator_latex}} = ${slice.parallel_conductance_equation.value}\ millivolts`;

		const potassium_numerator_pilot = String.raw`( ${potasium_conductance_micro_siemens} µs * ${potassium_equalibrium_potential_millivolts} millivolts )`;
		const chloride_numerator_pilot = String.raw`( ${chloride_conductance_micro_siemens} µs * ${chloride_equalibrium_potential_millivolts} millivolts )`;
		const denominator_pilot = String.raw`${potasium_conductance_micro_siemens} µs + ${chloride_conductance_micro_siemens} µs`;
		pilot_string = String.raw`( ${potassium_numerator_pilot} + ${chloride_numerator_pilot} ) / ( ${denominator_pilot} ) = ${slice.parallel_conductance_equation.value} millivolts`;
	}
	else if ( using_sodium === true && using_potassium === true && using_chloride === false ) {
		const sodium_numerator_latex = String.raw`\left( ${sodium_conductance_micro_siemens}\ \mu s * ${sodium_equalibrium_potential_millivolts}\ millivolts \right)_{sodium}`;
		const potassium_numerator_latex = String.raw`\left( ${potasium_conductance_micro_siemens}\ \mu s * ${potassium_equalibrium_potential_millivolts}\ millivolts \right)_{potassium}`;
		const denominator_latex = String.raw`${sodium_conductance_micro_siemens}\ \mu s + ${potasium_conductance_micro_siemens}\ \mu s`;
		latex_string = String.raw`\frac{ ${sodium_numerator_latex} + ${potassium_numerator_latex}}{${denominator_latex}} = ${slice.parallel_conductance_equation.value}\ millivolts`;

		const sodium_numerator_pilot = String.raw`( ${sodium_conductance_micro_siemens} µs * ${sodium_equalibrium_potential_millivolts} millivolts )`;
		const potassium_numerator_pilot = String.raw`( ${potasium_conductance_micro_siemens} µs * ${potassium_equalibrium_potential_millivolts} millivolts )`;
		const denominator_pilot = String.raw`${sodium_conductance_micro_siemens} µs + ${potasium_conductance_micro_siemens} µs`;
		pilot_string = String.raw`( ${sodium_numerator_pilot} + ${potassium_numerator_pilot} ) / ( ${denominator_pilot} ) = ${slice.parallel_conductance_equation.value} millivolts`;
	}
	else if ( using_sodium === true && using_potassium === false && using_chloride === true ) {
		const sodium_numerator_latex = String.raw`\left( ${sodium_conductance_micro_siemens}\ \mu s * ${sodium_equalibrium_potential_millivolts}\ millivolts \right)_{sodium}`;
		const chloride_numerator_latex = String.raw`\left( ${chloride_conductance_micro_siemens}\ \mu s * ${chloride_equalibrium_potential_millivolts}\ millivolts \right)_{chroride}`;
		const denominator_latex = String.raw`${sodium_conductance_micro_siemens}\ \mu s + ${chloride_conductance_micro_siemens}\ \mu s`;
		latex_string = String.raw`\frac{ ${sodium_numerator_latex} + ${chloride_numerator_latex} }{${denominator_latex}} = ${slice.parallel_conductance_equation.value}\ millivolts`;

		const sodium_numerator_pilot = String.raw`( ${sodium_conductance_micro_siemens} µs * ${sodium_equalibrium_potential_millivolts} millivolts )`;
		const chloride_numerator_pilot = String.raw`( ${chloride_conductance_micro_siemens} µs * ${chloride_equalibrium_potential_millivolts} millivolts )`;
		const denominator_pilot = String.raw`${sodium_conductance_micro_siemens} µs + ${chloride_conductance_micro_siemens} µs`;
		pilot_string = String.raw`( ${sodium_numerator_pilot} + ${chloride_numerator_pilot} ) / ( ${denominator_pilot} ) = ${slice.parallel_conductance_equation.value} millivolts`;
	}
	slice.parallel_conductance_equation.steps[0].latex_string = latex_string;
	slice.parallel_conductance_equation.steps[0].pilot_string = pilot_string;

	// 6.) Build Driving Force Latex and Pilot Strings
	slice.parallel_conductance_equation.ions.sodium.calculations.driving_force.steps[0].latex_string = String.raw`Sodium\ Driving\ Force = \left(${slice.parallel_conductance_equation.value}\ millivolts\right)_{membrane\ potential} - \left(${slice.parallel_conductance_equation.ions.sodium.calculations.equalibrium_potential.value}\ millivolts\right)_{nernst\ potential} = ${slice.parallel_conductance_equation.ions.sodium.calculations.driving_force.value}\ millivolts`;
	slice.parallel_conductance_equation.ions.sodium.calculations.driving_force.steps[0].pilot_string = String.raw`Sodium Driving Force = ( ${slice.parallel_conductance_equation.value} millivolts ) - ( ${slice.parallel_conductance_equation.ions.sodium.calculations.equalibrium_potential.value} millivolts ) = ${slice.parallel_conductance_equation.ions.sodium.calculations.driving_force.value} millivolts`;
	slice.parallel_conductance_equation.ions.potassium.calculations.driving_force.steps[0].latex_string = String.raw`Potassium\ Driving\ Force = \left(${slice.parallel_conductance_equation.value}\ millivolts\right)_{membrane\ potential} - \left(${slice.parallel_conductance_equation.ions.potassium.calculations.equalibrium_potential.value}\ millivolts\right)_{nernst\ potential} = ${slice.parallel_conductance_equation.ions.potassium.calculations.driving_force.value}\ millivolts`;
	slice.parallel_conductance_equation.ions.potassium.calculations.driving_force.steps[0].pilot_string = String.raw`Potassium Driving Force = ( ${slice.parallel_conductance_equation.value} millivolts ) - ( ${slice.parallel_conductance_equation.ions.potassium.calculations.equalibrium_potential.value} millivolts ) = ${slice.parallel_conductance_equation.ions.potassium.calculations.driving_force.value} millivolts`;
	slice.parallel_conductance_equation.ions.chloride.calculations.driving_force.steps[0].latex_string = String.raw`Chloride\ Driving\ Force = \left(${slice.parallel_conductance_equation.value}\ millivolts\right)_{membrane\ potential} - \left(${slice.parallel_conductance_equation.ions.chloride.calculations.equalibrium_potential.value}\ millivolts\right)_{nernst\ potential} = ${slice.parallel_conductance_equation.ions.chloride.calculations.driving_force.value}\ millivolts`;
	slice.parallel_conductance_equation.ions.chloride.calculations.driving_force.steps[0].pilot_string = String.raw`Chloride Driving Force = ( ${slice.parallel_conductance_equation.value} millivolts ) - ( ${slice.parallel_conductance_equation.ions.chloride.calculations.equalibrium_potential.value} millivolts ) = ${slice.parallel_conductance_equation.ions.potassium.calculations.driving_force.value} millivolts`;

	// 7.) Update Global
	setGlobal( slice );
}