class Time {
  constructor (seconds) {
    this.seconds = seconds
  }

  static fromDateTime (dt) {
    let seconds = dt.hour * 3600 + dt.minute * 60 + dt.second
    return new Time(seconds)
  }

  toString () {
    let timeString = ''
    timeString += Math.floor(this.seconds / 3600).toString().padStart(2, '0')
    timeString += ':'
    timeString += Math.floor((this.seconds % 3600) / 60).toString().padStart(2, '0')
    timeString += ':'
    timeString += (this.seconds % 60).toString().padStart(2, '0')
    return timeString
  }

  plus (secs) {
    return new Time(this.seconds + secs)
  }

  compare (otherTime) {
    return this.seconds - otherTime.seconds
  }
}

export default Time
