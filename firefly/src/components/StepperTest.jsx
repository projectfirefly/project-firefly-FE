import React, { useState } from 'react';

//material
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StepConnector } from '@material-ui/core';
import LensIcon from '@material-ui/icons/Lens'

const StepperDots = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState(['', '', ''])

    const classes = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '80vh',
        },
        stepper: {
            background: 'rgba(0,0,0,0)',
            width: '500px',
        },
        icon: {
            zIndex: 2,
            color: '#d0ccff',
            '& $active': {
                color: '#5b4eff',
            },
        },
    }))();

    const connectorClasses = makeStyles(theme => ({
        connectorActive: {
            '& $connectorLine': {
                borderTop: '8px solid #5b4eff',
                borderRadius: '2px',
                marginTop: '-2px',
            },
        },
        connectorCompleted: {
            '& $connectorLine': {
                borderTop: '8px solid #5b4eff',
                borderRadius: '2px',
                marginTop: '-2px'
            },
        },
        connectorDisabled: {
            '& $connectorLine': {
                borderTop: '8px solid #d0ccff',
                borderRadius: '2px',
                marginTop: '-2px'
            },
        },
        connectorLine: {
            '& $connectorLine': {
                borderTop: '8px solid #d0ccff',
                borderRadius: '2px',
                marginTop: '-2px'
            },
            transition: theme.transitions.create('border-color'),
        },
        connectorRoot: {
            zIndex: 0,
            width: '170px',
            left: 'calc(-50%)'
        }
    }))();

    const stepClasses = makeStyles(theme => ({
        stepRoot: {
            zIndex: 2,
            color: '#d0ccff',
            '&.active': {
                color: '#5b4eff',
            },
            transition: theme.transitions.create('color'),
        }
    }))();

    const connector = (
        <StepConnector classes={{
            active: connectorClasses.connectorActive,
            completed: connectorClasses.connectorCompleted,
            disabled: connectorClasses.connectorDisabled,
            line: connectorClasses.connectorLine,
            root: connectorClasses.connectorRoot,
        }} />
    )

    const activateStepIcon = (step) => {
        if (activeStep >= step) {
            return "active"
        } else {
            return ""
        }
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleReset() {
        setActiveStep(0);
    }

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    return (
        <div className={classes.root}>
            <Stepper className={classes.stepper} activeStep={activeStep} connector={connector} alternativeLabel>
                <Step className={classes.step}>
                    <StepLabel StepIconProps={{
                        icon: (<LensIcon classes={{ root: stepClasses.stepRoot }} className={activateStepIcon(0)} />)
                    }} />
                </Step>
                <Step className={classes.step}>
                    <StepLabel StepIconProps={{
                        icon: (<LensIcon classes={{ root: stepClasses.stepRoot }} className={activateStepIcon(1)} />)
                    }} />
                </Step>
                <Step className={classes.step}>
                    <StepLabel StepIconProps={{
                        icon: (<LensIcon classes={{ root: stepClasses.stepRoot }} className={activateStepIcon(2)} />)
                    }} />
                </Step>
            </Stepper>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                >
                    Back
                </Button>
                <Button variant="contained" color="secondary" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    )
}

export default StepperDots
