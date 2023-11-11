
// Doghnut chart

document.addEventListener('DOMContentLoaded', function () {
    createDonutChart(95, 'donutChart1', '#F5E9CA');
    createDonutChart(78, 'donutChart2', '#F5E9CA');
    createDonutChart(59, 'donutChart3', '#F5E9CA');
});

function createDonutChart(value, canvasId, highlightColor) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var percentageText = document.querySelector(`#${canvasId} + .percentage-text`);

    // Calculate the remaining percentage (out of 100) to fill the rest of the donut
    var remainingValue = 100 - value;

    // Calculate the length of the graph (outer radius - inner radius) to be 20px
    var length = 84;
    var outerRadius = (length + 100) / 2;
    var innerRadius = (100 - length) / 2;

    // Create the data for the donut chart
    var data = {
        datasets: [{
            data: [value, remainingValue],
            backgroundColor: [highlightColor, '#F0F0F0'],
            borderColor: [highlightColor, '#F0F0F0'], // Set the border color same as filled part
            borderWidth: [3, 0], // Set the border width of the filled part to 2px
        }],
    };

    // Create the options for the donut chart
    var options = {
        cutout: `${length}%`, // Adjust the size of the hole in the middle of the donut
        plugins: {
            legend: {
                display: false // Hide the legend
            },
            tooltip: {
                enabled: false // Disable the tooltip
            }
        }
    };

    // Create the donut chart using Chart.js
    var donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

    // Update the percentage text in the middle of the donut
    percentageText.textContent = value + '%';
}
// doghnut--2


document.addEventListener('DOMContentLoaded', function () {
    createDonutChart(95, 'donutChart4', '#F5E9CA');
    createDonutChart(78, 'donutChart5', '#F5E9CA');
    createDonutChart(59, 'donutChart6', '#F5E9CA');
});

function createDonutChart(value, canvasId, highlightColor) {
    var ctx = document.getElementById(canvasId).getContext('2d');
    var percentageText = document.querySelector(`#${canvasId} + .percentage-text`);

    // Calculate the remaining percentage (out of 100) to fill the rest of the donut
    var remainingValue = 100 - value;

    // Calculate the length of the graph (outer radius - inner radius) to be 20px
    var length = 84;
    var outerRadius = (length + 100) / 2;
    var innerRadius = (100 - length) / 2;

    // Create the data for the donut chart
    var data = {
        datasets: [{
            data: [value, remainingValue],
            backgroundColor: [highlightColor, '#F0F0F0'],
            borderColor: [highlightColor, '#F0F0F0'], // Set the border color same as filled part
            borderWidth: [3, 0], // Set the border width of the filled part to 2px
        }],
    };

    // Create the options for the donut chart
    var options = {
        cutout: `${length}%`, // Adjust the size of the hole in the middle of the donut
        plugins: {
            legend: {
                display: false // Hide the legend
            },
            tooltip: {
                enabled: false // Disable the tooltip
            }
        }
    };

    // Create the donut chart using Chart.js
    var donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });

    // Update the percentage text in the middle of the donut
    percentageText.textContent = value + '%';
}


// Range slider

const slider1 = document.getElementById("slider1");
const output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

slider1.oninput = function () {
    output1.innerHTML = this.value;
    var percentage = (this.value - this.min) / (this.max - this.min) * 100;
    var fillStyle = "linear-gradient(to right, #7F8DFF 0%, #7F8DFF " + percentage + "%, #80FFFF " + percentage + "%, #80FFFF 100%)";
    this.style.background = fillStyle;
}

const slider2 = document.getElementById("slider2");
const output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function () {
    output2.innerHTML = this.value;
    var percentage = (this.value - this.min) / (this.max - this.min) * 100;
    var fillStyle = "linear-gradient(to right, #7F8DFF 0%, #7F8DFF " + percentage + "%, #80FFFF " + percentage + "%, #80FFFF 100%)";
    this.style.background = fillStyle;
}
// r2
const slider3 = document.getElementById("slider3");
const output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider3.oninput = function () {
    output3.innerHTML = this.value;
    var percentage = (this.value - this.min) / (this.max - this.min) * 100;
    var fillStyle = "linear-gradient(to right, #7F8DFF 0%, #7F8DFF " + percentage + "%, #80FFFF " + percentage + "%, #80FFFF 100%)";
    this.style.background = fillStyle;
}

const slider4 = document.getElementById("slider4");
const output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;

slider4.oninput = function () {
    output4.innerHTML = this.value;
    var percentage = (this.value - this.min) / (this.max - this.min) * 100;
    var fillStyle = "linear-gradient(to right, #7F8DFF 0%, #7F8DFF " + percentage + "%, #80FFFF " + percentage + "%, #80FFFF 100%)";
    this.style.background = fillStyle;
}

// stackedChart

// Data for the chart
var data = {
    labels: [
        '20', '', '25', '', '30', '', '35', '', '40', '', '60', '', '65'
    ],
    datasets: [
        {
            label: 'Employer',
            data: [22, 31, 38, 42, 47, 53, 59, 65, 71, 77, 85, 91, 105],
            backgroundColor: 'rgba(0, 0, 128, 0.7)',
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 128, 1)',
            barPercentage: 0.4,
            categoryPercentage: 1.0
        },
        {
            label: 'Employee',
            data: [17, 28, 35, 40, 43, 51, 55, 61, 66, 74, 80, 88, 103],
            backgroundColor: 'rgba(0, 0, 255, 0.7)',
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 255, 1)',
            barPercentage: 0.4,
            categoryPercentage: 1.0
        },
        {
            label: 'Total Interest',
            data: [27, 35, 22, 26, 34, 41, 47, 55, 62, 72, 84, 91, 101],
            backgroundColor: 'rgba(0, 128, 255, 0.7)',
            borderWidth: 1,
            borderColor: 'rgba(0, 128, 255, 1)',
            barPercentage: 0.4,
            categoryPercentage: 1.0
        }
    ]
};

// Chart configuration
var config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0,
                    fontSize: 14,
                }
            },
            y: {
                stacked: true,
                beginAtZero: true,
                max: 300,
                ticks: {
                    stepSize: 100,
                    callback: function (value) {
                        return '$' + value;
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

// Create the chart
var stackedChart = new Chart(document.getElementById('stackedChart'), config);

// Calculate the sum for each dataset
var employerSum = data.datasets[0].data.reduce((acc, value) => acc + value, 0);
var employeeSum = data.datasets[1].data.reduce((acc, value) => acc + value, 0);
var totalInterestSum = data.datasets[2].data.reduce((acc, value) => acc + value, 0);

// Display the sums in the chart description
document.getElementById('employerSum').textContent = '$' + employerSum;
document.getElementById('employeeSum').textContent = '$' + employeeSum;
document.getElementById('totalInterestSum').textContent = '$' + totalInterestSum;

// Add class names to the chart labels
var chartLabels = document.querySelectorAll('.chartjs-chart .chartjs-category-axis .chartjs-tick');
chartLabels.forEach(function (label, index) {
    if (index % 3 === 0) {
        label.classList.add('chart-label-employer');
    } else if (index % 3 === 1) {
        label.classList.add('chart-label-employee');
    } else {
        label.classList.add('chart-label-total-interest');
    }
});

// button Shadow 

function toggleShadow() {
    const button = document.getElementById("shadowButton");
    button.classList.toggle("active");
}


//   onclick

function myFunction() {
    alert("Comming soon...");
}