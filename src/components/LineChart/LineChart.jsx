import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


const LineChart = ({ dataChart }) => {
  let first = []
  let second = []
  let third = []
  if (dataChart !== undefined && dataChart !== null) {
    const values = Object?.values(dataChart);
    first = values[0];
    second = values[1];
    third = values[2];

  } else {
  }
  
  let arrTimes = [];
  for (let i = 0; i < dataChart?.chart?.times.length; i = i + 2) {
    arrTimes.push(`${dataChart?.chart.times[i].hour}.00`);
  }
  let timeMili = [];
  let timeMili2 = [];
  let timeMili3 = [];
  
  if(first?.length > 0) {
    for (let i = 0; i < 24; i++) {
      timeMili.push(first[i]?.counter);
    }

    for (let i = 0; i < 24; i++) {
      timeMili2.push(second[i].counter);
    }
  
    for (let i = 0; i < 24; i++) {
      timeMili3.push(third[i]?.counter);
    }
  }
  ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const chartData = {
    data: {
      labels: ["1","2","3","4","5","6","7","8","9","10","11","12"],
      datasets: [
        {
          // label: 'abcccccccc',
          data: timeMili,
          backgroundColor: "#e35050",
          borderColor: "#e35050",
          borderWidth: 1.5,
          tension: 0.4,
          pointBackgroundColor: "#000",
          pointBorderColor: "#4a90e2",
          pointBorderWidth: 3,
          pointRadius: 0,
          hoverRadius: 6,
        },
        {
          // label: dataChart?.items[1].title,
          data: timeMili2,
          backgroundColor: "#27bd9c",
          borderColor: "#27bd9c",
          borderWidth: 1.5,
          tension: 0.4,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#27bd9c",
          pointBorderWidth: 3,
          hoverRadius: 6,
          pointRadius: 0,
        },
        {
          // label: dataChart?.items[2].title,
          data: timeMili3,
          backgroundColor: "#4a90e2",
          borderColor: "#4a90e2",
          borderWidth: 1.5,
          tension: 0.4,
          pointBackgroundColor: "#fff",
          pointBorderColor: "#e35050",
          pointBorderWidth: 3,
          hoverRadius: 6,
          pointRadius: 0,
        },
      ],
    },

    options: {
      animation: {
        hover: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: "left",
        },
        tooltip: {
          mode: "index",
          position: "nearest",
          intersect: false,
          yAlign: "bottom",
          backgroundColor: "#e35050",
          titleFontSize: 16,
          titleFontColor: "#e35050",
          bodyFontColor: "#e35050",
          bodyFontSize: 10,
          displayColors: false,
          lable: {
            display: true,
          },
        },
      },
      interaction: {
        mode: "dataset",
        intersect: false,
      },
      stacked: false,

      scales: {
        y: {
          display: false,
        },
      },
    },
  };
  return <Line data={chartData.data} options={chartData.options} />;
};

export default LineChart;
