import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

export default function BarChartComponent(props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                // width={500}
                // height={300}
                data={props.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="kilogram" fill="#282D30" />
                <Bar dataKey="calories" fill="#E60000" />
            </BarChart>
        </ResponsiveContainer>
    )
}
