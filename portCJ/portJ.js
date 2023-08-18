var xValues = ["เรียน", "สัตว์เลี้ยง", "เข้าสังคม", "ท่องเที่ยว", "กิจกรรม"];
var yValues = [60, 80, 100, 100, 20];
var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
});

var ctxPA = document.getElementById("polarChart").getContext("2d");
var myPolarChart = new Chart(ctxPA, {
  type: "polarArea",
  data: {
    labels: ["Python", "html", "css", "js", "c/c++"],
    datasets: [
      {
        data: [200, 150, 100, 40, 120],
        backgroundColor: [
          "rgba(219, 0, 0, 0.1)",
          "rgba(0, 165, 2, 0.1)",
          "rgba(255, 195, 15, 0.2)",
          "rgba(55, 59, 66, 0.1)",
          "rgba(0, 0, 0, 0.3)",
        ],
        hoverBackgroundColor: [
          "rgba(219, 0, 0, 0.2)",
          "rgba(0, 165, 2, 0.2)",
          "rgba(255, 195, 15, 0.3)",
          "rgba(55, 59, 66, 0.1)",
          "rgba(0, 0, 0, 0.4)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
