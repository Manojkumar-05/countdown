const newYear = '1 jan 2024'

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')


const countdown = () => {
    
    const newYearsDate = new Date(newYear)
    const currentDate = new Date()
    let totalSeconds= (newYearsDate - currentDate) / 1000
    let days =  Math.floor(totalSeconds / 3600 / 24)
    let hours =  Math.floor(totalSeconds / 3600) % 24
    let minutes = Math.floor(totalSeconds / 60) % 60
    let seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days 
    hoursEl.innerHTML = zeroBefore(hours)
    minutesEl.innerHTML = zeroBefore(minutes)
    secondsEl.innerHTML = zeroBefore(seconds) 
    // console.log(days,hours,minutes,seconds)
}
countdown()

function zeroBefore(time) {
    return time < 10 ? `0${time}` : time}
    
setInterval(countdown,1000)