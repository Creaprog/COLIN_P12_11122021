import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';
import PropTypes from 'prop-types';

export default function LineChartComponent(props) {
	return (
		<LineChart
			width={258}
			height={268}
			data={props.data}
			margin={{
				top: 0,
				right: 0,
				left: 0,
				bottom: 0,
			}}
		>
			<CartesianGrid strokeDasharray='3 3' />
			<XAxis
				dataKey={'name'}
				stroke='rgba(255, 255, 255, 0.5)'
				tickLine={false}
				axisLine={false}
				tick={{ fontSize: 12 }}
				padding={{ left: 10, right: 10 }}
			/>
			<YAxis hide={true} />
			<Tooltip />
			<Line
				type='natural'
				dataKey='min'
				stroke='#fff'
				strokeWidth={2}
				dot={false}
				activeDot={{
					stroke: 'rgba(255, 255, 255, 0.25)',
					strokeWidth: 10,
					r: 5,
					fill: '#fff',
				}}
			/>
		</LineChart>
	);
}
LineChartComponent.propTypes = {
	data: PropTypes.array.isRequired,
};
