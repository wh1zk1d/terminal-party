const char = '🔥'
const width = 50
let direction = 'up'
let count = 1
let countUp = true

async function go() {
  console.log(char.repeat(count))
  await waait(7)

  if (countUp) {
    count += 1
  } else {
    count -= 1
  }

  if (count === width || count === 0) {
    countUp = !countUp
  }

  go()
}

async function waait(amount) {
  return new Promise((resolve) => setTimeout(resolve, amount))
}

console.log("Let's party hard!")
waait(1000).then(() => {
  go()
})
