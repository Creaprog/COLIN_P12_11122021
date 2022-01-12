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
 * The BarChartComponent is a React component that renders a BarChart.
 * 
 * The BarChartComponent takes a single prop, data, which is an array of objects. Each object in the
array must have a name and a kilogram property. The name property is a string and the kilogram
property is a number.
 * 
 * The BarChartComponent also takes a prop, margin, which is an object with top, right, left, and
bottom properties. The top, right, left, and bottom properties are numbers.
 * 
 * The BarChartComponent renders a BarChart with a CartesianGrid
 */
export default function BarChartComponent(props) {
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart
				data={props.data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid vertical={false} strokeDasharray='2 2' />
				<XAxis dataKey='name' axisLine={false} tickLine={false} />
				<YAxis
					orientation='right'
					tickCount={4}
					axisLine={false}
					tickLine={false}
					datakey='kilogram'
				/>
				<YAxis datakey='calories' hide={true} />

				<Tooltip />
				<Bar
					dataKey='kilogram'
					fill='#282D30'
					barSize={8}
					radius={[10, 10, 0, 0]}
				/>
				<Bar
					dataKey='calories'
					fill='#E60000'
					barSize={8}
					radius={[10, 10, 0, 0]}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}

BarChartComponent.propTypes = {
	data: PropTypes.array.isRequired,
};
