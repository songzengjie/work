let exporess = require("express")
let Mock = require("mockjs")
const loginData = require("./common/longin.json")
let app = exporess()
app.use("/longin", function (req, res) {
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
app.listen("8090", () => {
  console.log("监听端口  8090")
})
