
 ctx = document.getElementById('weekly').getContext('2d');
const weekly = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [20, 80],
            backgroundColor: [
                '#1ea896',
                '#af3e4d', 
            ],
            borderWidth: 1
        }]
    },
});
