const express = require('express');
const { send } = require('express/lib/response');
const app = express()

const PORT = 13000


app.get('/', (req, res) => {
    res.send('Hello, World!')
  });

  app.get('/add/:x/:y', (req,res) => {
      const num1 = Number(req.params.x)
      const num2 = Number(req.params.y)
      result = num1 + num2
      console.log(`add ${num1} and ${num2} to get ${result}`)
      res.send(`add ${num1} and ${num2} to get ${result}`)
  })
  
  app.get('/subtract/:x/:y', (req,res) => {
    const num1 = Number(req.params.x)
    const num2 = Number(req.params.y)
    result = num1 - num2
    console.log(`${num1} minus ${num2} is ${result}`)
    res.send(`${num1} minus ${num2} is ${result}`)

})
  app.get('/multiply/:x/:y', (req,res) => {
    const num1 = Number(req.params.x)
    const num2 = Number(req.params.y)
    result = num1 * num2
    console.log(`multiply ${num1} and ${num2} to get ${result}`)
    res.send(`multiply ${num1} and ${num2} to get ${result}`)
})
  app.get('/divide/:x/:y', (req,res) => {
    const num1 = Number(req.params.x)
    const num2 = Number(req.params.y)
    result = num1 / num2
    console.log(`${num1} divided by ${num2} is ${result}`)
    res.send(`${num1} divided by ${num2} is ${result}`)
})

app.get('/*', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    const nums = req.params[0].split('/')
    const operator = req.query.math
    if (operator=='add') {
        let result = 0
        let num = 0
        nums.forEach(number => {
            num = Number(number)
            result += num
        })
        res.send(`The addition of those numbers results in ${result}`)
    } else if (operator=='subtract') {
        let result = 0
        let num = 0
        nums.forEach(number => {
            num = Number(number)
            result -= num
        })
        res.send(`The subtraction of those numbers results in ${result}`)
    } else if (operator=='multiply') {
        let result = 1
        let num = 0
        nums.forEach(number => {
            num = Number(number)
            result *= num
        })
        res.send(`The multiplication of those numbers results in ${result}`)
    } else if (operator=='divide') {
        let result = 1
        let num = 0
        nums.forEach(number => {
            num = Number(number)
            result /= num
        })
        res.send(`The division of those numbers results in ${result}`)
    }

})


app.listen(PORT, () => {
    console.log(`Smooth sailing over here on PORT ${PORT}!`)
})

















