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
            categories: ['Matlab', 'iOS/Swift', 'HTML5/CSS/Javascript', 'Java', 'Android','C/C++','Verilog', 
                            '中文', '台語', '英語', '日語']
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
            data: [90, 60, 40, 30, 30, 30, 10, 100, 80, 50, 10 ]
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