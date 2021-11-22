
 ctx = document.getElementById('weekly').getContext('2d');
const weekly = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [20, 80],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)', 
            ],
            borderWidth: 1
        }]
    },
});
