import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import dashboardChartTheme from './dashboardChartTheme.js';
import dashboardChartConfig from './dashboardChartConfig.js';
import data from '../../data';
import './Dashboard.css';

Highcharts.setOptions(dashboardChartTheme);

const Dashboard = () => {
    return (
        <div className='border'>
            <HighchartsReact highcharts={Highcharts} options={dashboardChartConfig(data)} />
        </div>
    );
};

export default Dashboard;
