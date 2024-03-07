import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarCharts<T>({
  chartData,
  dataKeyOne,
  dataKeyTwo,
  labelOne,
  labelTwo,
  aspect = 2,
  showCartesianGrid = true,
  showBar = true,
  color = "#8884d8",
}: {
  chartData: T[];
  dataKeyOne: string;
  dataKeyTwo?: string;
  labelOne: string;
  labelTwo?: string;
  aspect?: number;
  showCartesianGrid?: boolean;
  showBar?: boolean;
  color?: string;
}) {
  return (
    <div>
      <ResponsiveContainer aspect={aspect}>
        <BarChart width={730} height={250} data={chartData}>
          {showCartesianGrid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey={labelOne} />
          <YAxis dataKey={labelTwo} />
          <Tooltip />
          <Legend iconType="diamond"/>
          <Bar dataKey={dataKeyOne} fill={color} />
          {
            showBar && dataKeyTwo && (
              <Bar dataKey={dataKeyTwo} fill="#facc15" />
            )
          }
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarCharts;
