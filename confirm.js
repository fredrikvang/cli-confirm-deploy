#!/usr/bin/env node

const { Input } = require("enquirer")

let q1 = new Input({
  name: "deploy",
  message: "Do you really want to deploy to production? (y/N)",
})

const code = Math.floor(Math.random() * 9000 + 1000)

let q2 = new Input({
  name: "code",
  message: `Confirm by typing the code ${code}`,
})

new Promise(async () => {
  let key = await q1.run()
  if (key !== "Y" && key !== "y") {
    console.error("Cancelling deployment")
    process.exit(-1)
  }
  let enteredCode = await q2.run()
  if (code === Number(enteredCode)) {
    console.info("Proceeding with deployment")
    process.exit(0)
  } else {
    console.error("Cancelling deployment")
    process.exit(-2)
  }
}).then(() => process.exit(-3))
