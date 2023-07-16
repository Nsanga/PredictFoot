import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const StatChart = ({ successPercentage, titleStat }) => {
    const data = [{ name: 'Success', value: successPercentage }, { name: 'Remaining', value: 100 - successPercentage }];
    const colors = ['#0088FE', '#ECECEC']; // Couleurs pour Success et Remaining

    return (
        <PieChart width={300} height={300}>
            <Pie
                data={data}
                dataKey="value"
                cx={150}
                cy={150}
                innerRadius={100}
                outerRadius={120}
                startAngle={90}
                endAngle={-270}
                paddingAngle={2}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
            </Pie>
            <text
                x={150}
                y={135}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={38}
                fontWeight={700}
                style={{ fill: '#243E63' }}
            >
                {successPercentage}%
            </text>
            <text x={153} y={190} textAnchor="middle" dominantBaseline="middle" fontSize={18} fontWeight={500}  style={{ fill: '#243E63' }}>
                {titleStat}
            </text>
        </PieChart>
    );
};

export default StatChart;
