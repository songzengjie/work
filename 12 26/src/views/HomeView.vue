<template>
  <h2>一个人的信息</h2>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <button @click="Addage">年龄加</button>
</template>

<script>
export default {

  setup() {
    let name = "张三";
    let age = 18;

    function Addage() {
      age++
    }

 
    return {
      name,
      age,
      Addage,
    };
  },
};
</script>