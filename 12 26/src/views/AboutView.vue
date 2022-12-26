<template>
  <!-- <h2>一个人的信息</h2>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h4>工作种类：{{ job.type }}</h4>
  <h4>薪资：{{ job.salary }}</h4>
  <button @click="changeInfo">修改人的信息</button> -->
  <!-- <h2>一个人的信息</h2>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h4>工作种类：{{ job.type }}</h4>
  <h4>薪资：{{ job.salary }}</h4>
  <button @click="changeInfo">修改人的信息</button> -->
  <h2>一个人的信息</h2>
  <h3>姓名：{{ name }}</h3>
  <h3>年龄：{{ age }}</h3>
  <h4>工作种类：{{ job.type }}</h4>
  <h4>薪资：{{ job.salary }}</h4>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from "vue";
export default {
  // setup() {
  //   let name = ref("张三");
  //   let age = ref(18);
  //   let job = ref({
  //     type: "前端开发工程师",
  //     salary: "30w",
  //   });

  //   function changeInfo() {
  //     name.value = "李四";
  //     age.value = 28;
  //     job.value.type = "算法工程师";
  //     job.value.salary = "60w";
  //   }

  //   return {
  //     name,
  //     age,
  //     job,
  //     changeInfo,
  //   };
  // },
  // setup() {
  //   let name = ref("张三");
  //   let age = ref(18);
  //   let job = ref({
  //     type: "前端开发工程师",
  //     salary: "30w",
  //   });

  //   function changeInfo() {
  //     name.value = "李四";
  //     age.value = 28;
  //     job.value.type = "算法工程师";
  //     job.value.salary = "60w";
  //   }

  //   return {
  //     name,
  //     age,
  //     job,
  //     changeInfo,
  //   };
  // },
  setup() {
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端开发工程师",
      salary: "30w",
    });

    function changeInfo() {
      name.value = "李四";
      age.value = 28;
      job.value.type = "算法工程师";
      job.value.salary = "60w";
    }

    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>
