一 vue生命周期
1.beforeCreate 在实例初始化之后，数据观测(data observer) 之前被调用。
2.created 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，watch/event 事件回调。这里没有$el
3.beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用。
4.mounted el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
5.beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
6.updated 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
7.beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。
8.destroyed Vue 实例销毁后调用。调用后， Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用

二 vue数据双向绑定
当把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。这些getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。每个组件实例都对应一个watcher 实例，它会在组件渲染的过程中把“接触"过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。
三 vuex
1vuex是 vue提供的一个状态管理工具，
用来存放公共数据，解决组件之间数据共享的问题，使任何组件都可以使用vuex里的公共数据
2state 存储数据
mutations 状态修改器 (修改state内的数据)
严格模式下(strict:true)唯一可以修改state的数据的
actions 异步 (可以调用一些请求/定时器 等异步操作)
getters 计算属性
modules 模块化 (针对大型项目)
3 state   this.$store.state
mutations   this.$store.commit("修改器方法名",数据)
actions   this.$store.dispatch("异步方法名",数据)
getters   this.$store.getters
4在项⽬中，若要改变 state 的状态,我们⼀般是在组件⾥⾯调⽤ this.$store.dispatch ⽅式，来触发在 actions ⾥⾯的⽅法,  在 actions中通过 commit 来调⽤ mutations 中定义的⽅法来改变 state,同时这也是 vuex 的执⾏机制
四 vue路由模式与区别
1、vue-router前端路由有两种模式，hash模式和history模式
hash模式
优点：

兼容性强，达到 IE8；
除发送 ajax和资源请求外不会发送其他多余请求；
改变 # 后的路径不会自动刷新页面；
无需服务器进行配合；
缺点：

访问路径上包含 # ，不美观；
对于需要锚点功能的需求会与当前路由机制发生冲突；
重定向操作时，后段无法获取 url完整路径；
history模式
优点：

符合 url 地址规范，没有 # ，使用起来比较美观；
后端可以获取到完整的路由信息；
可以使用 history.state获取完整的路由信息；
可以进行修改历史记录，并且不会立刻向后端发起请求；
缺点：

兼容性只到IE10；
改变 url路径后会重新请求资源；
若访问的路由地址不存在时会报404，需服务端配合支持重定向返回统一的404页面；
如果对于项目没有硬性标准要求，可以直接使用 hash模式开发。

五 路由守卫
路由的导航守卫 又叫做路由的钩子函数（生命周期函数）
就是在跳转页面的 时候把 路由拦下来 做一些操作 再放行
一共有三种

第一种是全局守卫
beforeEach 路由进入之前
afterEach 路由进入之后

第二种 组件内守卫
beforeRouteEnter 路由进入之前
beforeRouteUpdate 路由更新之前
beforeRouteLeave 路由离开之前

第三种
独享守卫
beforeEnter 路由进入之前

有三个参数
to from next
next 这个参数 在路由 3.x 版本的时候 是必须的

六 v-if与v-show的区别
v-if 根据表达式的值来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 <template>，将提出它的内容作为条件块
v-show 根据表达式之真假值，切换元素的 display CSS property。
当条件变化时该指令触发过渡效果。
七 v-for与v-if的优先级
vue2中v-for的优先级是高于v-if的，放在一起，会先执行循环在判断条件，并且如果值渲染列表中一小部分元素，也得再每次重渲染的时候遍历整个列表，比较浪费资源。
八 computed和watch的区别
1.watch是异步的可以请求接口,computed是同步的
2.computed是初次读取数据的时候就会执行,watch是监听属性变化的时候才会执行
3.computed具有缓存行,watch没有
4.计算属性时候通过已有的data中的属性值计算得来的,watch监听的属性值必须存在或者定义
九vue 组件通信
props 父组件向子组件传送数据，这应该是最常用的方式了
子组件接收到数据之后，不能直接修改父组件的数据。
否则会报错，因为当父组件重新渲染时，数据会被覆盖，

ref ref 如果在普通的DOM元素上，引用指向的就是该DOM元素;
如果在子组件上，引用的指向就是子组件实例;
父组件可以通过 ref 主动获取子组件的属性或者调用子组件的方法

$emit / v-on
	子组件通过派发事件的方式给父组件数据，或者触发父组件更新等操作
		// Child.vue 派发
export default {
  data(){
      return { msg: "这是发给父组件的信息" }
  },
  methods: {
      handleClick(){
          this.$emit("sendMsg",this.msg)
      }
  },
}
// Parent.vue 响应
<template>
    <child v-on:sendMsg="getChildMsg"></child>
    // 或 简写
    <child @sendMsg="getChildMsg"></child>
</template>
 
export default {
    methods:{
        getChildMsg(msg){
            console.log(msg) // 这是父组件接收到的消息
        }
    }
}

EventBus EventBus 是中央事件总线，不管是父子组件，兄弟组件，跨层级组件等都可以使用它完成通信操作

Vuex 在大项目中被常用
	Vuex 是状态管理器，集中式存储管理所有组件的状态。

十 为什么 vue 中 data 必须是⼀个函数?在什么情况可以用对象
	如果 data 是⼀个函数的话，这样每复⽤⼀次组件，就会返回⼀份新的 data，类似于给每个组件实例创建⼀个私有的数据空间，让各个组件实例维护各⾃的数据。⽽单纯的写成对象形式，就使得所有组件实例共⽤了⼀份 data，就会造成⼀个变了全
都会变的结果。
	当我们使用 new Vue() 的方式的时候，无论我们将 data 设置为对象还是函数都是可以的，因为 new Vue() 的方式是生成一个根组件，该组件不会复用，也就不存在共享 data 的情况了

十一 数据变了视图不更新的原因
	数组
		1.通过下标的形式修改数组,修改的内容并没有被object.definproty添加getter和setter属性,没有变成响应式的数据,所以无法被检测到
		解决办法: 
			1. 调用数组的方法: push, unshift,pop
			Vue.set(target, 下标, 内容) // 全局的使用方法
this.$set(和上面一样)
		this.$focusUpdated
			强制更新视图
	对象
		深层次的对象修改其中的一个对象属性,无法被检测到

十二 跨域
理解跨域的概念：协议、域名、端口都相同才同域，否则都是跨域
跨域就是指浏览器不允许当前页面的所在源，去请求另一个源的数据
在vue 中主要是通过vue 脚手架中的vue.config.js 文件来配置的，通过在devServer中的proxy来配置跨域的前缀

module.exports = {
  devServer:{
    host:'localhost', //域名
    port:8080, //端口
    proxy:{ //进行代理转发
      '/api':{
      //要解决跨域的接口的域名
        target:'http://mall-pre.springboot.cn', 
       // 是否开启本地代理 默认true; 如果接口跨域，需要进行此参数配置
        changeOrigin:true, 
       //如果是https接口，需要配置这个参数
        secure:false,           
        pathRewrite:{
          '/api':'' //重写地址
        }
      }
    }
  },
}
其中 ‘/api’ 为匹配项，target 为被请求的地址
当我们的接口遇到 /api 的时候就是说需要用到我们设置的代理了，将 /api 转化成target 的地址
因为在 ajax 的 url 中加了前缀 ‘/api’，而原本的接口是没有这个前缀的
所以需要通过 pathRewrite 来重写地址，将前缀 ‘/api’ 转为 ‘’；如果本身的接口地址就有 ‘/api’ 这种通用前缀，就可以把 pathRewrite 删掉。
总说明：target后面的就是需要请求的网址的公共部分，然后用/api来代理target，最后重写一些路径，请求的时候使用的我们的代理的api来作为前缀。

十三 keep-alive
	Props：
include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
max - 数字。最多可以缓存多少组件实例。
	<keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在组件的父组件链中。
	当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。