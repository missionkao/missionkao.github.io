$(function () { 

		Highcharts.setOptions({
        colors: ['#058DC7']
    });
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        
        title: {
            text: 'Technology Skills / Languages'
        },
        xAxis: {
            categories: ['Matlab', 'HTML5/CSS', 'Javascript', 'Java','C/C++', 'Android','IOS' ,'Verilog', 
                            'Mandarin', 'Taiwanese', 'English', 'Japanese']
        },
        yAxis: {
            title: {
                text: 'Percentage (%)'
            },
            max: 100
        },
        plotOptions: {
            series: {
                borderColor: '#303030'
            }
        },
        series: [{
            name: 'Terry Kao',
            data: [90, 70, 60, 60, 50, 30, 20, 10, 100, 90, 60, 20 ]
        }]
    });
});



// $(function () { 

//         Highcharts.setOptions({
//         colors: ['#058DC7']
//     });
//     $('#language').highcharts({
//         chart: {
//             type: 'bar'
//         },
        
//         title: {
//             text: 'Languages'
//         },
//         xAxis: {
//             categories: ['Mandarin', 'Taiwanese', 'English', 'Japanese','Spanish']
//         },
//         yAxis: {
//             title: {
//                 text: 'Percentage (%)'
//             },
//             max: 100
//         },
//         plotOptions: {
//             series: {
//                 borderColor: '#303030'
//             }
//         },
//         series: [{
//             name: 'Terry Kao',
//             data: [100, 90, 60, 30, 5]
//         }]
//     });
// });