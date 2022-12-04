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
          <li @click="xg(item, i)" :class="item.resource == '已办' ? 'act1' : 'act2'"
            v-for="(item, i) in $store.state.list" :key="i" v-show="(item.time == data.day)">{{ item.name }}</li>
        </ul>
      </template>
    </el-calendar>
    <!-- 添加弹框 -->
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
    <!-- 修改弹框 -->
    <el-dialog title="修改事件" :visible.sync="dialogFormVisibles">
      <el-form :model="forms">
        <el-form-item label="事件名称" :label-width="formLabelWidth">
          <el-input v-model="forms.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择日期" :label-width="formLabelWidth">
          <el-date-picker v-model="forms.time" type="date" placeholder="选择日期" />
        </el-form-item>
        <el-form-item label="事件状态" :label-width="formLabelWidth">
          <el-radio-group v-model="forms.resource">
            <el-radio label="待办"></el-radio>
            <el-radio label="已办"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibles = false">取 消</el-button>
        <el-button type="danger" @click="del">删除该事件</el-button>
        <el-button type="primary" @click="edit()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>


export default {
  data() {
    return {
      // 弹框显示
      dialogFormVisible: false,
      dialogFormVisibles: false,
      //添加内容表单
      form: {


      },
      //修改表单内容
      forms: {

      },
      i: -1,
      formLabelWidth: '120px'

    }
  },
  methods: {
    //添加事件
    add() {
      // 处理时间格式
      console.log(this.form);
      let str = this.form.time.toLocaleString().split(' ')[0].split('/').join('-')
      console.log(str);
      // 判断是否需要补0
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
    //时间个数补0
    insertStr(source, start, newStr) {
      return source.slice(0, start) + newStr + source.slice(start)
    },
    //回填
    xg(item, i) {
      this.dialogFormVisibles = true

      this.forms = {
        ...item
      }
      this.i = i

    },
    // 确定修改
    edit() {
      let str = this.forms.time.toLocaleString().split(' ')[0].split('/').join('-')
      if (str.length < 10) {
        let newtime = this.insertStr(str, 8, '0')
        this.forms.time = newtime
      } else {
        this.forms.time = str
      }

      this.$store.commit('edit', { ...this.forms, i: this.i })

      this.dialogFormVisibles = false
    },
    //删除该事件
    del() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.$store.commit('del', this.i)
        this.dialogFormVisibles = false
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

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

  overflow: auto;
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
