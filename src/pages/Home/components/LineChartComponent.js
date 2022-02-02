import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import './LineChartComponent.css';

const MyDot = ({ cx, cy }) => {
	return (
		<svg>
			<rect fill="#00000030" x={cx} y={0} height="270" width="340" />
			<circle cx={cx} cy={cy} r={4} stroke="white" fill="white" />
			<circle cx={cx} cy={cy} r={8} fill="#00000030" />
		</svg>
	);
};

export default function LineChartComponent(props) {
	return (
		<>
			<div className="titleLineChart">Durée moyenne des sessions</div>
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
				<XAxis
					dataKey={'name'}
					stroke="rgba(255, 255, 255, 0.5)"
					tickLine={false}
					axisLine={false}
					tick={{ fontSize: 12 }}
					padding={{ left: 10, right: 10 }}
				/>
				<YAxis hide={true} tickLine={false} />
				<Tooltip />
				<Line
					type="monotone"
					dataKey="min"
					stroke="#fff"
					strokeWidth={2}
					dot={false}
					activeDot={<MyDot />}
				/>
			</LineChart>
		</>
	);
}

LineChartComponent.propTypes = {
	data: PropTypes.array.isRequired,
};
