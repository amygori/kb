class Time {
  constructor (seconds) {
    this.seconds = seconds
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
}

export default Time
