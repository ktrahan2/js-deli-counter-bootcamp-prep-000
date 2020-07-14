function takeANumber(katzDeliLine) {
  var ticketnumber = katzDeliLine.length
  return `Welcome, you are number ${ticketnumber} in line.`
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
      newarray = newarray + (i + 1) + `. ${array[i]}, `
    }
      //could also use if and else statement in for loop instead of slice
  if (array.length === 0) {
    return "The line is currently empty."
  }
  else if (array.length > 0) {
    return `The line is currently: ${newarray.slice(0, -2)}`
  }
}
