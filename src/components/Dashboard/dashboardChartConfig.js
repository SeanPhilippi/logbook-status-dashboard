export default () => {
  return {
    // chart: {
    //   type: 'column',
    //   height: 'inherit',
    //   zoomType: 'x',
    //   resetZoomButton: {
    //     theme: {
    //       fill: 'white',
    //       stroke: 'black',
    //       r: 4,
    //       states: {
    //         hover: {
    //           fill: 'black',
    //           style: {
    //             color: 'white',
    //           },
    //         },
    //       },
    //     },
    //   },
    //   panning: true,
    //   panKey: 'shift',
    // },
    navigation: {
      buttonOptions: {
        symbolStroke: 'black',
      },
    },
    title: {
      align: 'left',
      text: 'Logbook Status Dashboard',
    },
    // subtitle: {
    //   text: '',
    // },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges'],
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    yAxis: {
      min: 0,
      className: 'y-axis',
      title: {
        text: 'Revenue (USD)',
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>',
      shared: false,
      useHTML: true,
      valuePrefix: '$',
      valueSuffix: ' USD',
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
        groupPadding: .05,
        shadow: false,
      },
    },
    // series: data.series,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };
};
