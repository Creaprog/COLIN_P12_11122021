import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import PropTypes from 'prop-types';
import './RadialChartBartComponent.css';
export default function RadialChartBartComponent(props) {
	return (
		<>
			<div className='number-center'>{props.data[0].score}%</div>
			<div className='text-center'>de votre objectif</div>
			<RadialBarChart
				width={258}
				height={268}
				cx='50%'
				cy='50%'
				innerRadius={70}
				outerRadius={80}
				barSize={10}
				startAngle={-270}
				endAngle={90}
				data={props.data}
			>
				<PolarAngleAxis
					type='number'
					domain={[0, 100]}
					angleAxisId={0}
					tick={false}
				/>
				<RadialBar
					background={false}
					clockWise={true}
					cornerRadius={15}
					dataKey='score'
				/>
				<text
					x={35}
					y={25}
					textAnchor='middle'
					dominantBaseline='middle'
					className='progress-label'
				>
					Score
				</text>
			</RadialBarChart>
		</>
	);
}

RadialChartBartComponent.propTypes = {
	data: PropTypes.array.isRequired,
};
