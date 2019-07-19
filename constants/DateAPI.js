export function getCurrentDayAndDate() {
  var today = new Date()
  var day = today.getDay()
  var dd = today.getDate()
  var mm = today.getMonth()
  var yyyy = today.getFullYear();

  switch(day) {
    case 0:
      day = "Sunday"
      break
    case 1:
      day = "Monday"
      break
    case 2:
      day = "Tuesday"
      break
    case 3:
      day = "Wednesday"
      break
    case 4:
      day = "Thursday"
      break
    case 5:
      day = "Friday"
      break
    case 6:
      day = "Saturday"
      break
  }

  switch(mm) {
    case 0:
      mm = "January"
      break
    case 1:
      mm = "February"
      break
    case 2:
      mm = "March"
      break
    case 3:
      mm = "April"
      break
    case 4:
      mm = "May"
      break
    case 5:
      mm = "June"
      break
    case 6:
      mm = "July"
      break
    case 7:
      mm = "August"
      break
    case 8:
      mm = "September"
      break
    case 9:
      mm = "October"
      break
    case 10:
      mm = "November"
      break
    case 11:
      mm = "December"
      break
  }

  today = day + ", " + dd + " " + mm + " " + yyyy

  return today
}

export function getTimeOfDay() {
  var today = new Date()
  var hour = today.getHours()
  var timeOfDay = ""
  if (hour >= 0 && hour <= 12) {
    timeOfDay = "Morning"
  } else if (hour > 12 && hour < 18) {
    timeOfDay = "Afternoon"
  } else {
    timeOfDay = "Night"
  }
  return timeOfDay
}

export function daysToFEP() {
  const today = new Date()
  const fep = new Date(today.getFullYear(), 7, 19)
  const one_day = 1000 * 60 * 60 * 24
  const daysLeft = Math.ceil((fep.getTime() - today.getTime()) / (one_day))
  return daysLeft
}