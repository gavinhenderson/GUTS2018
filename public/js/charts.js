window.onload = function() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bubble",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Number of calls (minutes, customers, frequency)",
          data: [
            {
              x: 1,
              y: 2,
              r: 3,
            },
            {
              x: 10,
              y: 6,
              r: 4,
            },
            {
              x: 5,
              y: 4,
              r: 10,
            },
            {
              x: 9,
              y: 1,
              r: 20,
            },
            {
              x: 4,
              y: 2,
              r: 40,
            },
            {
              x: 2,
              y: 6,
              r: 15,
            },
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  var ctx2 = document.getElementById("polarChart").getContext("2d");
  var polarChart = new Chart(ctx2, {
    type: "polarArea",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Number of calls (minutes, customers, frequency)",
          data: [10, 20, 30, 5, 12, 17],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Simple Line Chart",
    },
    axisX: {
      title: "Seconds",
    },
    axisY: {
      title: "Sentiment",
      includeZero: true,
    },
    data: [
      {
        type: "line",
        dataPoints: [
          {
            y: 45.0,
          },
          {
            y: 41.4,
          },
          {
            y: 90.0,
            indexLabel: "highest",
            markerColor: "red",
            markerType: "triangle",
          },
          {
            y: 46.0,
          },
          {
            y: 45.0,
          },
          {
            y: 50.0,
          },
          {
            y: 48.0,
          },
          {
            y: 48.0,
          },
          {
            y: 16.0,
            indexLabel: "lowest",
            markerColor: "DarkSlateGrey",
            markerType: "cross",
          },
          {
            y: 50.0,
          },
          {
            y: 48.0,
          },
        ],
      },
    ],
  });
  chart.render();
};
