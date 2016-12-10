import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class AnimateInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasValue: false,
      value   : null,
    }
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnBlur(e) {
    const hasValue = Boolean(e.target.value);
    this.validateField(hasValue);
    this.setState({ hasValue: hasValue });
  }

  validateField(hasValue) {
    if(hasValue && !this.state.hasValue) {
      this.props.incrementNumOfValidAnswers();
    } else if (!hasValue && this.state.hasValue) {
      this.props.decrementNumOfValidAnswers();
    }
  }

  handleOnChange(e) {
    this.setState({ hasValue: Boolean(e.target.value), value: e.target.value });
  }

  render() {
    const { autoComplete, placeholder, type, id } = this.props;
    const inputClass = classNames('fl-input-form', this.props.customClass, { 'fl-valid': this.state.hasValue });
    return (
      <div className="fl-input-container">
        <input
          autoComplete={autoComplete}
          className={inputClass}
          onBlur={this.handleOnBlur}
          type={type}
          onChange={this.handleOnChange}
        />
        <label className='fl-input-form-label' htmlFor={id}>{placeholder}</label>
        <span className='fl-input-bar'></span>
      </div>
    );
  }
}
AnimateInputField.PropTypes = {
  incrementNumOfValidAnswers: PropTypes.func.isRequired,
  decrementNumOfValidAnswers: PropTypes.func.isRequired,
}

AnimateInputField.defaultProps = {
  autoComplete: false,
  type        : 'text',
  id          : 'text-box',
  placeholder : '',
}