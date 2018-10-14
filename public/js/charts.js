setInterval(function(){
     
  fetch('/queue')
    .then((queue) => {
      return queue.json();
    }).then((queue) => {
      document.querySelector('.queueSize').innerHTML = queue.currentSize;
      document.querySelector('.waitTime').innerHTML = queue.averageWaitTime;
    });

 }, 500);

window.onload = function() {
  $.get("/data", (data) => {
    const lineChartData = data.sentiment.map((current) => {
      return {
        y: current.sentimentScore,
        x: new Date(current.timestamp),
      };
    });

    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "",
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
          dataPoints: lineChartData,
        },
      ],
    });
    chart.render();

    const titleCase = (lowercase) => {
      return lowercase[0].toUpperCase() + lowercase.substr(1);
    };

    const chartLabels = Object.keys(data.emotion).map((current) =>
      titleCase(current),
    );

    const chartData = Object.keys(data.emotion).map(
      (current) => data.emotion[current],
    );

    var ctx2 = document.getElementById("emotionsChart").getContext("2d");
    var polarChart = new Chart(ctx2, {
      type: "radar",
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: "Number of calls (minutes, customers, frequency)",
            data: chartData,
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
  });

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
};
