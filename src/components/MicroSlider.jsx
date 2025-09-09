
/**
 * React Micro slider
 */
import React from 'react';
import MicroSlider from 'micro-slider';
import PropTypes from 'prop-types';

export default class ReactMicroSlider extends React.Component {
  static propTypes = {
    arrows: PropTypes.bool,
    nextArrow: PropTypes.element,
    onChange: PropTypes.func,
    previousArrow: PropTypes.element,
  }

  componentDidMount() {
    // console.log(this._microSliderRef)
    const options = { ...this.props.options };
    this._bind()
    // console.log(options.children)
    // delete options.children;
    // delete options.onChange;
    // console.log(options)
    // options.onCycleTo = this._cycleTo
    // options = this
    this._microSlider = new MicroSlider(this._microSliderRef, options);
  }

  _bind() {
    this._cycleTo = this._cycleTo.bind(this)
    this._moveToNextSlide = this._moveToNextSlide.bind(this)
    this._moveToPreviousSlide = this._moveToPreviousSlide.bind(this)
  }

  _cycleTo(element, draggedY) {
    const { onChange } = this.props

    if (typeof (onChange) === 'function') {
      onChange(element, draggedY)
    }
  }

  _moveToNextSlide(event) {
    this._microSlider.next()
  }

  _moveToPreviousSlide(event) {
    this._microSlider.prev()
  }

  render() {
    return (
      <div className="react-micro-slider">
        {this.renderPreviousArrowIfNeed()}
        <div ref={r => this._microSliderRef = r} className="micro-slider">
          {this.props.children}
        </div>
        {this.renderNextArrowIfNeed()}
      </div>
    )
  }

  renderPreviousArrowIfNeed() {
    const { arrows, previousArrow } = this.props
    let component = null

    if (arrows) {
      if (previousArrow) {
        component = previousArrow
      } else {
        component = (
          <button type="button" data-role="none" className="micro-slider-arrow previous" onClick={this._moveToPreviousSlide}>
            Previous
          </button>
        )
      }
    }

    return component
  }

  renderNextArrowIfNeed() {
    const { arrows, nextArrow } = this.props
    let component = null

    if (arrows) {
      if (nextArrow) {
        component = nextArrow
      } else {
        component = (
          <button type="button" data-role="none" className="slider-arrow next" onClick={this._moveToNextSlide}>
            Next
          </button>
        )
      }
    }

    return component
  }
}
