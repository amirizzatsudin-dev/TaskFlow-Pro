const ctx = document.getElementById('employeeChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Active', 'On Leave', 'Resigned'],
        datasets: [{
            data: [112, 8, 5],
            backgroundColor: [
                '#198754',
                '#ffc107',
                '#dc3545'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});