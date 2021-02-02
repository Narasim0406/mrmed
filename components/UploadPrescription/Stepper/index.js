import React, { Component } from "react";
import PropTypes from "prop-types";
import UploadPrescriptions from '../UploadPrescriptions/index';
import {Address} from "../Address/index";
import ChooseMedicine from '../ChooseMedicine/index';
import {Payment} from '../Payment/index';

import styles from "./Stepper.module.scss";

export default class Stepper extends Component {
  constructor() {
    super();
    this.state = {
      steps: []
    };
  }

  componentDidMount() {
    const { steps, currentStepNumber } = this.props;

    const stepsState = steps.map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      stepObj.completed = false;
      return stepObj;
    });

    const currentSteps = this.updateStep(currentStepNumber, stepsState);

    this.setState({
      steps: currentSteps
    });
  }

  componentDidUpdate(prevProps) {
    const { steps } = this.state;
    const currentSteps = this.updateStep(this.props.currentStepNumber, steps);

    if (prevProps.currentStepNumber !== this.props.currentStepNumber)
      this.setState({
        steps: currentSteps
      });
  }

  updateStep(stepNumber, steps) {
    const newSteps = [...steps];
    let stepCounter = 0;

    // Completed - to add a check mark
    // Selected - to fill step with color
    // Highlighted - to make text of selected step bold

    while (stepCounter < newSteps.length) {
      // Current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false
        };
        stepCounter++;
      }
      // Past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true
        };
        stepCounter++;
      }
      // Future step
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false
        };
        stepCounter++;
      }
    }

    return newSteps;
  }

  render() {
    const { direction, stepColor="violet" } = this.props;
    const { steps } = this.state;
    const stepsJSX = steps.map((step, index) => {
      return (
        <div className={styles.stepWrapper} key={index}>
              <div
                className={`${styles.stepNumber} ${
                  step.selected ? `${styles.stepNumberSelected}` : `${styles.stepNumberDisabled}`
                }`}
                style={{ background: `${step.selected ?  stepColor : "none"}` }}
              >
                <span><div className={styles.circle}></div></span>
                {step.completed  ? "" : ""}
              </div>
              <div
                className={`${styles.stepDescription} ${step.highlighted &&
                  `${styles.stepDescriptionActive}`}`}
              >
                {step.description}
              </div>
              <div>
                <p className={styles.stepName}>Step {index+1}</p>
              </div>
            {index !== steps.length - 1 && (
              <div className={`${styles['dividerLine']} ${styles[`dividerLine_${steps.length}`]} ${step.completed ? `${styles.borderColor}` :""}`} />
            )}
        </div>
        
      );
    });
    const st = `stepperWrapper${direction}`
    return (
      <>
        <div className={styles[st]}>
        {stepsJSX}
        </div>
        <div>
          {this.props.currentStepNumber===0 ? <UploadPrescriptions/> : ""}
          {this.props.currentStepNumber===1 ?  <ChooseMedicine/> : ""}
          {this.props.currentStepNumber===2 ? <Address/> : ""}
        </div>
      </>
    )
  }
}

Stepper.propTypes = {
  direction: PropTypes.string.isRequired,
  currentStepNumber: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  stepColor: PropTypes.string.isRequired
};