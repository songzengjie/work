let exporess = require("express")
let Mock = require("mockjs") /**登录*/
const loginData = require("./common/longin.json")
const home = require("./common/home.json") /** 侧边栏数据*/
const users = require("./common/users.json") /**用户列表信息 */
const rolesData = require('./common/roles.json') /**角色列表 */
const rightsData = require('./common/rights.json') /**权限列表 */
const shoplistData = require('./common/shoplist.json') /**商品列表数据 */
const shopclassData = require('./common/shopclass.json') /**商品分类数据 */
const ordersData = require('./common/orders.json') /**订单管理*/
const rolesTree = require('./common/rolesTree.json') /**角色权限信息 */
const kuaidi = require('./common/kuaidi.json') /**权限 */

let app = exporess()
/**登录*/
app.use("/login", function (req, res) {
	res.json(
		Mock.mock({
			...loginData
		})
	)
})
/** 侧边栏数据*/
app.use("/left", function (req, res) {
	res.json(
		Mock.mock({
			...home
		})
	)
})
/**用户列表信息 */
app.use("/users", function (req, res) {
	res.json(
		Mock.mock({
			...users
		})
	)
})
/**角色列表 */
app.use("/roles", function (req, res) {
	res.json(
		Mock.mock({
			...rolesData
		})
	)
})
/**权限列表 */
app.use("/rights", function (req, res) {
	res.json(
		Mock.mock({
			...rightsData
		})
	)
})
/**商品列表数据 */
app.use("/goods", function (req, res) {
	res.json(
		Mock.mock({
			...shoplistData
		})
	)
})
/**商品分类数据 */
app.use("/categories", function (req, res) {
	res.json(
		Mock.mock({
			...shopclassData
		})
	)
})
/**订单 */
app.use("/orders", function (req, res) {
	res.json(
		Mock.mock({
			...ordersData
		})
	)
})
/**角色权限信息 */
app.use("/tree", function (req, res) {
	res.json(
		Mock.mock({
			...rolesTree
		})
	)
})
/**快递信息 */
app.use("/kuaidi", function (req, res) {
	res.json(
		Mock.mock({
			...kuaidi
		})
	)
})

app.listen("8090", () => {
	console.log("监听端口  8090")
})
