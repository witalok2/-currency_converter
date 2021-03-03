export function floatToRealString (numberInput) {
  let number = numberInput
  if (!number) return '0,00'
  const negative = number.toString().split('-')

  number = number.toString().replace('-', '')
  const n = parseFloat(number)
    .toFixed(2)
    .split('.')
  n[0] = n[0].split(/(?=(?:...)*$)/).join('.')
  let result = n.join(',').toString()
  if (negative.length > 1) {
    result = `-${result}`
  }
  return result
}