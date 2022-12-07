let exporess = require("express")
let Mock = require("mockjs")
const loginData = require("./common/longin.json")
const home = require("./common/home.json")
let app = exporess()
// 登录
app.use("/login", function (req, res) {
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
// 侧边栏数据
app.use("/left", function (req, res) {
  res.json(
    Mock.mock({
      ...home
    })
  )
})
app.listen("8090", () => {
  console.log("监听端口  8090")
})
