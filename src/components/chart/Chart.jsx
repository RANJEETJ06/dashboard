import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data=[
    {name:"January",sell:1200,buy:700},
    {name:"February",sell:5000,buy:800},
    {name:"March",sell:1300,buy:1600},
    {name:"April",sell:1500,buy:3000},
    {name:"May",sell:2000,buy:200},
    {name:"June",sell:2200,buy:4000},
    {name:"July",sell:1000,buy:1300},
    {name:"August",sell:7000,buy:3000},
    {name:"September",sell:6000,buy:2500},
    {name:"October",sell:5500,buy:6000},
    {name:"November",sell:3400,buy:3000},
    {name:"December",sell:7300,buy:3000}
  ];
  return (
    <div className="chart">
      <div className="title">Last 1 Year Data </div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="buy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="rgb(255,0,0)" stopOpacity={0.8} />
              <stop offset="95%" stopColor="rgb(255,0,0)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="sell" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="buy"
            stroke="rgb(255,0,0)"
            fillOpacity={1}
            fill="url(#buy)"
          />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#sell)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
