import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid stroke="#fdf" strokeDasharray=" 5 8" />}
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis />
          <Line type="monotone" dataKey={dataKey} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
