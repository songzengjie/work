<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">新建</el-button>
    <el-calendar>
      <template slot="dateCell" slot-scope="{data}">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(2).join('-') }}
        </p>
        <!-- {{ data.day }} -->
        <ul>
          <li :class="item.resource == '已办' ? 'act1' : 'act2'" v-for="(item, i) in $store.state.list" :key="i"
            v-show="(item.time == data.day)">{{ item.name }}</li>
        </ul>
      </template>
    </el-calendar>

    <el-dialog title="新增事件" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="事件名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.time" type="date" placeholder="选择日期" />
        </el-form-item>
        <el-form-item label="事件状态" :label-width="formLabelWidth">
          <el-radio-group v-model="form.resource">
            <el-radio label="待办"></el-radio>
            <el-radio label="已办"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>


export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {


      },
      formLabelWidth: '120px'

    }
  },
  methods: {
    add() {

      let str = this.form.time.toLocaleString().split(' ')[0].split('/').join('-')
      console.log(str.length);
      if (str.length < 10) {
        let newtime = this.insertStr(str, 8, '0')
        this.form.time = newtime
      } else {
        this.form.time = str
      }
      console.log(this.form);
      this.$store.commit('add', this.form)
      this.dialogFormVisible = false
      this.form = {}
    },
    insertStr(source, start, newStr) {
      return source.slice(0, start) + newStr + source.slice(start)
    }


  },
  created() {

  },
  mounted() {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss'>
.is-selected {
  color: #1989FA;
}

ul {
  width: 100%;
  height: 60px;
  // overflow: hidden;
  overflow-y: scroll;
  font-size: 14px;

  li {
    width: 60%;
    line-height: 20px;
    margin: 5px;
    color: #fff;
  }
}

.act1 {
  padding: 5px;
  background: greenyellow;

  border-radius: 4px;
}

.act2 {
  padding: 5px;
  background: red;
  border-radius: 4px
}
</style>
