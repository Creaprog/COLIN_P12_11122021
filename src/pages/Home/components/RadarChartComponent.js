import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';

/**
 *
 * @param {Array} props
 * @returns Radar Chart
 */
export default function RadarChartComponent(props) {
	return (
		<RadarChart
			cx="50%"
			cy="50%"
			outerRadius="80%"
			width={258}
			height={268}
			data={props.data}
		>
			<PolarGrid radialLines={false} />
			<PolarAngleAxis
				dataKey="kind"
				stroke="white"
				tickLine={false}
				ticks={false}
				tick={{ fontSize: 9 }}
			/>
			<Radar
				dataKey="value"
				stroke="rgba(230, 0, 0, 0)"
				fill="#e60000"
				fillOpacity={0.6}
			/>
		</RadarChart>
	);
}

RadarChartComponent.propTypes = {
	data: PropTypes.array.isRequired,
};
