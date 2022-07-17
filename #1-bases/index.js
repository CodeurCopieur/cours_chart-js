const barCanvas = document.getElementById('barCanvas');
const pieCanvas = document.getElementById('pieCanvas');
const lineCanvas = document.getElementById('lineCanvas');

const barChart = new Chart(barCanvas, {
  type: "bar",
  data: {
    labels: ['HTML', 'CSS', 'JS', 'VUEJS', 'TS', 'TAILWINDCSS'], // x
    datasets: [{
      data: [70, 60, 50, 55, 3, 70 ], // y
      backgroundColor: [
        "crimson", "lightgreen", "lightblue", "green", "pink", "cyan"
      ] // chaque couleur represente une data[i]
    }]
  },
  options: {
    scales: {
      y: {
        suggestedMax: 100, // echelle max => y
        ticks: {
          font: {
            size: 18
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 14
          }
        }
      }
    }
  }
});

const pieChart = new Chart(pieCanvas, {
  type: "pie",
  data: {
    labels: ['Marketing', 'Development', 'Security'],
    datasets: [{
      data: [300, 150, 100],
      backgroundColor: [
        "lightgreen", "lightblue", "cyan"
      ], // chaque couleur represente une data[i]
      hoverOffset: 4
    }]
  }
});

const lineChart = new Chart(lineCanvas, {
  type: "line",
  data: {
    labels: ['2019', '2020', '2021'], // x
    datasets: [{
      label: 'Kilograms',
      data: [75, 85, 80],
      fill: true, // remplir ou pas  w/ cyan
      backgroundColor: "cyan",
      tension: 0.1
    }]
  },
  options: {
    elements: {
      point: {
        pointBorderColor: "crimson"
      }
    },
    scales: {
      y: {
        ticks: {
          color: "lightgreen"
        },
        suggestedMin: 0,
        suggestedMax: 100
      },
      x: {
        ticks: {
          color: "crimson"
        }
      }
    }
  }
});
