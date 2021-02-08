import React, { Component } from "react";
import PropTypes from "prop-types";
import UploadPrescriptions from '../../UploadPrescription/UploadPrescriptions/index';
import {Address} from "../Address/index";
import Cart from '../CartPage/index';
import OrderSummarys from '../OrderSummarys/index';
import styles from "./Stepper.module.scss";
import PresPop from '../../UploadPrescription/UploadPrescriptions/PresPopup/index';

export default class CartStepper extends Component {
  constructor() {
    super();
    this.state = {
      steps: [],
      modal: false,
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
  handleProceed = () => {
    let { step } = this.state;
    this.setState({
      step: step+1
    })
    this.props.handleStepper();
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

  toggle = () => {
    let { modal } = this.state;
    modal = !modal
    this.setState({
        modal
    });
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
          {this.props.currentStepNumber===1 ? <Cart handleProceed={this.handleProceed}/> : ""}
          {this.props.currentStepNumber===2 ? <Address handleSubmitedOrder={this.handleProceed}/> : ""}
          {this.props.currentStepNumber===3 ? <OrderSummarys handleSubmitedOrder={this.toggle}/> : ""}
        </div>
        <PresPop modal={this.state.modal} toggle={this.toggle} />
      </>
    )
  }
}

CartStepper.propTypes = {
  direction: PropTypes.string.isRequired,
  currentStepNumber: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  stepColor: PropTypes.string.isRequired
};