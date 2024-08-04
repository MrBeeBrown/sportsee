import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default class BiaxialBarChart extends PureComponent {

  render() {
    const { data } = this.props;

    function CustomTooltip({ payload, active }) {
      if (active) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value}`}</p>
            <p className="label">{`${payload[1].value}`}</p>
          </div>
        );
      }
      return null;
    }

    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={900} minHeight={320} >
        <BarChart data={data} margin={{ top: 30, right: 15, left: 15, bottom: 15 }} barSize={10}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis yAxisId="right" orientation="right" stroke="#282D30" />
          <YAxis yAxisId="left" orientation="left" stroke="#E60000" hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Legend align='right' verticalAlign='top' iconType='circle' iconSize={10} height={60} />
          <Bar yAxisId="right" dataKey="Poids (Kg)" fill="#282D30" />
          <Bar yAxisId="left" dataKey="Calories brûlées (kCal)" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}