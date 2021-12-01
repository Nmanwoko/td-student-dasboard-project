
 ctx = document.getElementById('daily').getContext('2d');
const daily = new Chart(ctx, {
    type: 'doughnut',
    cutout:'85%',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [71, 29],
            backgroundColor: [
                '#1ea896',
                '#af3e4d',
            ],
            
            borderWidth: 1
        }]
    },
});

