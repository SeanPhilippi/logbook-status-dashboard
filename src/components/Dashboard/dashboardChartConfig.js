export default (data) => {
    return {
        chart: {
            type: 'column',
            height: 'inherit',
        },
        navigation: {
            buttonOptions: {
                symbolStroke: 'black',
            },
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            backgroundColor: 'grey',
            verticalAlign: 'middle',
            padding: 3,
            itemMarginTop: 15,
            itemMarginBottom: 15,
            itemStyle: {
                lineHeight: '14px',
                color: 'white',
            }
        },
        title: {
            align: 'left',
            text: 'Logbook Status Dashboard',
        },
        // subtitle: {
        //   text: '',
        // },
        xAxis: {
            categories: ['Received', 'Assigned', 'Examine', 'Posted', 'Waiting'],
        },
        yAxis: {
            min: 0,
            className: 'y-axis',
            title: {
                text: 'Count',
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:3px">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: false,
            useHTML: true,
            valuePrefix: ' ',
            valueSuffix: ' tickets',
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0,
                groupPadding: 0.12,
                shadow: false,
            },
        },
        series: data.series,
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 500,
                    },
                },
            ],
        },
    };
};
