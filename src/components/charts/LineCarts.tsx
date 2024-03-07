import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function LineCarts<T>({
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
        <LineChart
          width={730}
          height={250}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {showCartesianGrid && <CartesianGrid strokeDasharray="1 1" />}
          <XAxis dataKey={labelOne} />
          <YAxis dataKey={labelTwo} />
          <Tooltip />
          <Legend iconType="diamond"/>
          <Line type="monotone" dataKey={dataKeyOne} stroke="#8884d8" />
          <Line type="monotone" dataKey={dataKeyTwo} stroke="#facc15" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineCarts;
