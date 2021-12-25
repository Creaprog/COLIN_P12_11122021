import React from 'react'
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts'
import PropTypes from 'prop-types'

export default function RadialChartBartComponent(props) {
    return (
        <RadialBarChart
            width={258}
            height={268}
            cx={150}
            cy={150}
            innerRadius={70}
            outerRadius={80}
            barSize={10}
            startAngle={-270}
            endAngle={90}
            data={props.data}
        >
            <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
            />
            <RadialBar
                background={false}
                clockWise={true}
                cornerRadius={15}
                dataKey="score"
            />
            <text
                x={35}
                y={25}
                textAnchor="middle"
                dominantBaseline="middle"
                // TODO : Attention pointe sur rien
                // className="progress-label"
            >
                Score
            </text>
        </RadialBarChart>
    )
}

RadialChartBartComponent.propTypes = {
    data: PropTypes.array.isRequired,
}
