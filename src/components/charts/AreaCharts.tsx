import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend
} from "recharts";

function AreaCharts<T>({
  chartData,
  dataKeyOne,
  dataKeyTwo,
  labelOne,
  labelTwo,
  aspect = 2,
  showCartesianGrid = true,
}: {
  chartData: T[];
  dataKeyOne: string;
  dataKeyTwo: string;
  labelOne: string;
  labelTwo?: string;
  aspect?: number;
  showCartesianGrid?: boolean;
}) {
  return (
    <div>
      <ResponsiveContainer aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#facc15" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey={labelOne} />
          <YAxis dataKey={labelTwo} />
          {
            showCartesianGrid && <CartesianGrid strokeDasharray="1 1" />
          }
          <Tooltip />
          <Legend iconType="diamond"/>
          <Area
            type="monotone"
            dataKey={dataKeyOne}
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey={dataKeyTwo}
            stroke="#facc15"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaCharts;
