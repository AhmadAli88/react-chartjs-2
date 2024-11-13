// App.js

import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import DoughnutChart from "./components/DoughnutChart";

const App = () => {
  return (
    <div>
      <h1>React Chart.js Examples</h1>
      <BarChart />
      <LineChart />
      <PieChart />
      <DoughnutChart />
    </div>
  );
};

export default App;
