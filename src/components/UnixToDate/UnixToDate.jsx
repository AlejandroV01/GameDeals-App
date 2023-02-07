import React from 'react'

const UnixToDate = ({ unix }) => {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  const dealDate = new Date(unix * 1000)
  const currentDate = new Date()
  const ms = currentDate - dealDate
  const days = Math.floor(ms / (24 * 60 * 60 * 1000))
  const daysMs = ms % (24 * 60 * 60 * 1000)
  const hours = Math.floor(daysMs / (60 * 60 * 1000))
  const hoursMs = ms % (60 * 60 * 1000)
  const minutes = Math.floor(hoursMs / (60 * 1000))
  const minutesMs = ms % (60 * 1000)
  const sec = Math.floor(minutesMs / 1000)
  console.log(days, hours, minutes, sec)
  if (days > 0) {
    return <>{days}d ago</>
  }
  if (hours > 0) {
    return <>{hours}h ago</>
  }
  if (minutes > 0) {
    return <>{minutes}m ago</>
  }
  if (sec > 0) {
    return <>{sec}s ago</>
  }
}

export default UnixToDate
