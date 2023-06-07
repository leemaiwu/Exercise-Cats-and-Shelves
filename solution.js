const solution = (start, finish) => {
  let difference = finish - start
  if (difference == 0) {
    return 0
  } else if (difference < 3) {
    return 2
  }
  let jumps = Math.floor(difference / 3)
  let remaining = difference % 3
  if (remaining == 1) {
    jumps++
  } else if (remaining == 2) {
    jumps += 2
  }
  return jumps
}

console.log(solution(3, 3)) // 0
console.log(solution(1, 5)) // 2
console.log(solution(2, 4)) // 2
console.log(solution(1, 9)) // 4
console.log(solution(457, 1138)) // 227
console.log(solution(975, 989)) // 6
console.log(solution(300, 767)) // 157
console.log(solution(103, 455)) // 118
console.log(solution(895, 984)) // 31