import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

/**
 *
 * @param {array} props
 * @returns
 */
export default function BarChartComponent(props) {
	return (
		<div className="barChart">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={props.data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid vertical={false} strokeDasharray="2 2" />
					<XAxis dataKey="name" axisLine={false} tickLine={false} />
					<YAxis
						orientation="right"
						tickCount={4}
						axisLine={false}
						tickLine={false}
						datakey="kilogram"
					/>
					<YAxis datakey="calories" hide={true} />

					<Tooltip />
					<Bar
						dataKey="kilogram"
						fill="#282D30"
						barSize={8}
						radius={[10, 10, 0, 0]}
					/>
					<Bar
						dataKey="calories"
						fill="#E60000"
						barSize={8}
						radius={[10, 10, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

BarChartComponent.propTypes = {
	data: PropTypes.array.isRequired,
};
