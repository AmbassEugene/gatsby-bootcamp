new Promise(resolve => resolve(true))
  .then(result => {
    throw "err"
  })
  .then(result => console.log(`result1: ${result}`))
  .catch(() => console.log("oops"))

{
  let maxNum = 0
  for (let i = 100; i < 999; i++) {
    for (let k = 100; k < 999; k++) {
      let n = i * k
      let s = "" + n
      if (s === s.split("").reverse().join("") && n > maxNum) {
        maxNum = n
        console.log("maxNum is now: ", { maxNum, n, s, i, k })
        break
      }
    }
    if (maxNum > 0) break
  }
  console.log("Real maxNum is now: ", [maxNum])
}

function smallestMult(n) {
  let inc = 2
  let step = 2
  let smallestNum = 2

  while (smallestNum <= Number.MAX_SAFE_INTEGER) {
    for (let i = 2; i <= n; i++) {
      const divisible = smallestNum % i === 0

      if (!divisible) {
        break
      }

      if (i === inc) {
        step = smallestNum

        inc++
      }

      if (i === n) {
        return smallestNum
      }
    }
    smallestNum += step
  }
}
smallestMult(20)

{
  let divisor = 2
  let number = 600851475143
  while (number > 1) {
    if (number % divisor === 0) {
      number /= divisor
    } else {
      divisor++
    }
  }
  console.log(divisor)
}
