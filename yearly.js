
 ctx = document.getElementById('yearly').getContext('2d');
const yearly = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [12, 88],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
            ],
            borderWidth: 1
        }]
    },

});
