function takeANumber(numpeople, name) {
  numpeople.push(name)
  return `Welcome, ${name}. You are number ${numpeople.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else if (katzDeliLine.length > 0) {
    // could just use else statement
    var move = katzDeliLine.shift()
    return `Currently serving ${move}.`
  }
}

function currentLine(array) {
  var newarray = ""
  for (let i = 0; i < array.length; i++) {
      if (i + 1 === array.length) {
        newarray = newarray + (i + 1) + `. ${array[i]}`
      }
      else {
        newarray = newarray + (i + 1) + `. ${array[i]}, `
      }
      //could also use if and else statement inside of for loop instead of slice
  }
  if (array.length === 0) {
    return "The line is currently empty."
  }
  else if (array.length > 0) {
    return `The line is currently: ${newarray}`
  }
}
