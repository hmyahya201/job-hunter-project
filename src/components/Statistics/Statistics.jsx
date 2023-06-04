/* eslint-disable no-unused-vars */
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip} from 'recharts';

const Statistics = () => {
    const data = [
        {
          name: 'Ass 1',
          mark: 60,
        },
        {
          name: 'Ass 2',
          mark: 55,
        },
        {
          name: 'Ass 3',
          mark: 58,
        },
        {
          name: 'Ass 4',
          mark: 48,
        },
        {
          name: 'Ass 5',
          mark: 25,
        },
        {
          name: 'Ass 6',
          mark: 23,
        },
        {
          name: 'Ass 7',
          mark: 30,
        },
        {
          name: 'Ass 8',
          mark: 48,
        },
      ];
      
    return (
        <div style={{display:"grid", placeItems:"center", marginTop:"50px"}}>
            
                <AreaChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
               
                >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
        </div>
    );
};

export default Statistics;