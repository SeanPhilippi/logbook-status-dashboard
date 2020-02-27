import React from 'react';
import './Settings.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const Settings = () => {
    return (
        <div className='d-flex justify-content-between border'>
            <FormGroup className=''>
                <FormControlLabel control={<Checkbox />} label='Show Prior Month Separately' />
            </FormGroup>
            <div>Cutoff Date: <b>02/04/2020</b></div>
            <FormGroup className=''>
                <FormControlLabel control={<Checkbox />} label='Prior Yr Only' />
                <FormControlLabel control={<Checkbox />} label='Priority' />
            </FormGroup>
        </div>
    );
};

export default Settings;
