
 ctx = document.getElementById('daily').getContext('2d');
const daily = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [71, 29],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
            ],
            
            borderWidth: 1
        }]
    },
});

