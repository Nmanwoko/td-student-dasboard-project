
 ctx = document.getElementById('yearly').getContext('2d');
const yearly = new Chart(ctx, {
    type: 'doughnut',
    cutout:'85%',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [12, 88],
            backgroundColor: [
                '#1ea896',
                '#af3e4d',
            ],
            borderWidth: 1
        }]
    },

});
