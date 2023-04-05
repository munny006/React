import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DeashBoard = () => {
    const marksArray = [
        { id: 1, name: 'Alice', physics: 85, chemistry: 90, math: 92 },
        { id: 2, name: 'Bob', physics: 70, chemistry: 80, math: 75 },
        { id: 3, name: 'Charlie', physics: 95, chemistry: 87, math: 91 },
        { id: 4, name: 'David', physics: 68, chemistry: 75, math: 78 },
        { id: 5, name: 'Emily', physics: 90, chemistry: 92, math: 88 },
        { id: 6, name: 'Frank', physics: 80, chemistry: 85, math: 82 },
        { id: 7, name: 'Grace', physics: 93, chemistry: 91, math: 94 },
        { id: 8, name: 'Henry', physics: 77, chemistry: 81, math: 79 },
        { id: 9, name: 'Isabella', physics: 88, chemistry: 86, math: 89 },
        { id: 10, name: 'Jack', physics: 72, chemistry: 78, math: 76 },
        { id: 11, name: 'Kate', physics: 82, chemistry: 88, math: 90 },
        { id: 12, name: 'Leo', physics: 91, chemistry: 94, math: 85 }
      ];
    
      
      
      
      
      
      
    return (
        <div>
            <LineChart
            
            width={1000}
            height={500}
            data={marksArray}
            
            >
                <Line dataKey="physics"></Line>
                <Line dataKey="math" stroke="#8884d8"></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />


            </LineChart>
        </div>
    );
};

export default DeashBoard;