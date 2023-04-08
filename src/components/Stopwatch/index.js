import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, increasingSeconds: 1}

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {increasingSeconds} = this.state
    const newMinutes = Math.floor(increasingSeconds / 60)
    const newSeconds = increasingSeconds % 60

    this.setState(prevState => ({
      minutes: newMinutes,
      seconds: newSeconds,
      increasingSeconds: prevState.increasingSeconds + 1,
    }))
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    // Extra Functionality: Stop the timing along with the reset "Dual functionality"

    clearInterval(this.timerId)
    this.setState({minutes: 0, seconds: 0, increasingSeconds: 1})
  }

  render() {
    const {minutes, seconds} = this.state
    const addMinutes = minutes.toString().length === 1 ? `0${minutes}` : minutes
    const addSeconds = seconds.toString().length === 1 ? `0${seconds}` : seconds

    return (
      <div className="bg-container">
        <h1 className="watch-heading">Stopwatch</h1>
        <div className="watch-card">
          <div className="timer-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="timer-image"
              alt="stopwatch"
            />
            <p className="timer-para">Timer</p>
          </div>
          <h1 className="timing">
            {addMinutes}:{addSeconds}
          </h1>
          <div className="buttons-card">
            <div>
              <button
                className="start-button"
                type="submit"
                onClick={this.onStart}
              >
                Start
              </button>
            </div>
            <div>
              <button
                className="stop-button"
                type="submit"
                onClick={this.onStop}
              >
                Stop
              </button>
            </div>
            <div>
              <button
                className="reset-button"
                type="submit"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
