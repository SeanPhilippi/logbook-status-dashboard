import React, { PureComponent } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import dashboardChartTheme from './dashboardChartTheme.js';
import dashboardChartConfig from './dashboardChartConfig.js';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import data from '../../data';
import './Dashboard.css';
import { render } from '@testing-library/react';

Highcharts.setOptions(dashboardChartTheme);

const styles = theme => ({
    modal: {
        maxHeight: 500,
        maxWidth: 500,
        margin: 'auto'
    },
});

class Dashboard extends PureComponent {
    state = {
        isOpen: false,
    }

    showModal = () => {
        this.setState({ isOpen: true});
    };

    handleClose = () => {
        this.setState({ isOpen: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className='border'>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={dashboardChartConfig(data, this.showModal)}
                />
                <Dialog
                    className={classes.modal}
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                >
                    <DialogTitle>title</DialogTitle>
                    <DialogContent>
                        stuff
                    </DialogContent>
                    {/* <DialogActions>
                        <Button onClick={this.props.handleClose}>CANCEL</Button>
                        <Button onClick={handleSave}>SAVE</Button>
                    </DialogActions> */}
                </Dialog>
            </div>
        );
    }
};

export default withStyles(styles)(Dashboard);
