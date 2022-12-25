<template>
  <div id="app">
    <header>
      <div class="her-left">
        <div class="her-left-top">
          <p class="title">公开数据展示</p>
          <ul class="ul1">
            <li>
              <p>500</p>
              <p>党务公开</p>
            </li>
            <li>
              <p>400</p>
              <p>政务公开</p>
            </li>
            <li>
              <p>350</p>
              <p>财务公开</p>
            </li>
          </ul>
          <ul class="ul2">
            <li>
              <p>363</p>
              <p>村务公开</p>
            </li>
            <li>
              <p>800</p>
              <p>属务公开</p>
            </li>
            <li>
              <p>0</p>
              <p>占位公开</p>
            </li>
            <li>
              <p>0</p>
              <p>占位公开</p>
            </li>
          </ul>
        </div>
        <div class="her-left-bottom">
          <p class="title">xx信息员添加数据展示</p>
          <div id="echx1" style="width: 100%; height: 180px;">

          </div>
        </div>
      </div>
      <div class="her-con">
        <header>
          <div class="her-con-left">web网页</div>
          <div class="her-con-top-con">
            <h3>服务大数据可视化监听平台</h3>
          </div>
          <div class="her-con-left">管理系统</div>
        </header>
        <div class="her-con-con-con">
          <h2>xx公开数量</h2>
          <div class="her-con-con-con-one"></div>
          <div class="her-con-con-con-one"></div>
          <div class="her-con-con-con-one"></div>
          <div class="her-con-con-con-one"></div>
          <div class="her-con-con-con-one"></div>
        </div>
        <div class="her-con-con-bottom">
          <div class="her-con-con-bottom-left">
            <p>xxxx公开数量占比</p>
            <div id="echx3" style="width: 90%; height: 180px;">

            </div>
          </div>
          <div class="her-con-con-bottom-right">
            <p>xxxx公开数量占比</p>
            <div id="echx4" style="width: 90%; height: 180px;">

            </div>
          </div>
        </div>
      </div>
      <div class="her-right">
        <div class="her-right-top">
          <p class="title">xx数据展示</p>
          <ul class="right-ul1">
            <li>
              <p>304</p>
              <p>今日公开</p>
            </li>
            <li>
              <p>2044</p>
              <p>本周公开</p>
            </li>
          </ul>
          <ul class="right-ul2">
            <li>
              <p>909</p>
              <p>本月公开</p>
            </li>
            <li>
              <p>980</p>
              <p>办事指南</p>
            </li>
            <li>
              <p>200</p>
              <p>政策解读</p>
            </li>
          </ul>
        </div>
        <div class="her-left-bottom">
          <p class="title">xxxx数量类型占比</p>
          <div id="echx2" style="width: 100%; height: 180px;">
          </div>
        </div>
      </div>
    </header><br>
    <ul class="con">
      <li>
        <p>测试11</p>
        <h2>300</h2>
      </li>
      <li>
        <p>测试22</p>
        <h2>500</h2>
      </li>
      <li>
        <p>测试33</p>
        <h2>400</h2>
      </li>
      <li>
        <p>测试44</p>
        <h2>350</h2>
      </li>
      <li>
        <p>测试55</p>
        <h2>363</h2>
      </li>
    </ul>
    <ul class="ul3">
      <li>
        <p>xx指南</p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
      </li>
      <li>
        <p>xxxx公开占比</p>
        <div id="echx5" style="width: 100%;height: 90%;"></div>
      </li>
      <li>
        <p>政策xx</p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
        <p>
          <span>精品可视化模板店里更多</span>
          <span>2020/05/20</span>
        </p>
      </li>
    </ul>
    <div class="bottom" style="text-align: center;">
      <div class="bottom-one">
        <p style="width: 75%;" class="title">主要关注xxxx占比</p>
        <div id="echx6" style="width: 100%;height: 90%;"></div>
      </div>
      <div class="bottom-two">
        <p style="width: 75%;" class="title">关注xxxx占比</p>
        <div id="echx7" style="width: 90%;height: 90%;"></div>
      </div>
      <div class="bottom-three">
        <p style="width: 75%;" class="title">xxxx发布量</p>
        <div id="echx8" style="width: 90%;height: 90%;"></div>
      </div>
      <div class="bottom-four">
        <p style="width: 75%;" class="title">xxx公开数量</p>
        <div id="echx9" style="width: 85%;height: 90%;"></div>
      </div>
    </div>


  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  created() {

  },
  mounted() {
    /** echx1图表*/
    var chartDom = document.getElementById('echx1');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        show: false,
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',

        data: ['测试1', '测试2', '测试3', '测试4', '测试5'],
        axisTick: {
          show: false
        },
        axisLine: {  //这是x轴文字颜色
          lineStyle: {
            color: "#fff",
          },
          lineStyle: {
            color: "#ccc",//y轴线的颜色（若只设置了y轴线的颜色，未设置y轴文字的颜色，则y轴文字会默认跟设置的y轴线颜色一致）
            width: 0,//y轴线的宽度
            type: "solid"//y轴线为实线
          },
        },


      },
      series: [
        {
          type: 'bar',
          data: [200, 300, 400, 500, 300, 300],
          barWidth: 6,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '37d2d4',
                  fontSize: 12
                }
              },
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                // 四个数字分别对应 数组中颜色的开始位置，分别为 右，下，左，上。例如（1,0,0,0 ）代表从右边开始渐
                // 变。offset取值为0~1，0代表开始时的颜色，1代表结束时的颜色，柱子表现为这两种颜色的渐变。
                offset: 0,
                color: '#62fbf6'
              }, {
                offset: 1,
                color: '#326d88'
              }]),


            }
          }
        },
      ]
    };

    option && myChart.setOption(option);

    var chartDom2 = document.getElementById('echx2');
    var myChart2 = echarts.init(chartDom2);
    var option2;
    option2 = {
      title: {
        // text: 'Referer of a Website',
        // subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        itemGap: 25,
        top: '5%',
        left: '55%',
        textStyle: {
          fontSize: 10,
          color: '#FFFFFF',
        },
      },

      series: [
        {

          type: 'pie',
          radius: '50%',
          left: '-40%',
          data: [
            { value: 300, name: '测试11' },
            { value: 500, name: '测试22' },
            { value: 400, name: '测试33' },
            { value: 350, name: '测试44' },
            { value: 363, name: '测试55' },
            { value: 300, name: '测试66' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            normal: {
              show: false
            },
            labelLine: {
              normal: {
                show: false
              }
            }

          },
        }
      ]
    };

    option2 && myChart2.setOption(option2);

    var chartDom3 = document.getElementById('echx3');
    var myChart3 = echarts.init(chartDom3);
    var option3;

    option3 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        itemGap: 25,
        top: '5%',
        left: '65%',
        textStyle: {
          fontSize: 12,
          color: '#FFFFFF',
        },
      },
      series: [
        {
          type: 'pie',
          left: '-40%',
          radius: ['55%', '70%'],
          avoidLabelOverlap: false,
          roseType: 'area',
          label: {
            show: false,
            position: 'center',

          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 300, name: '测试11' },
            { value: 500, name: '测试22' },
            { value: 400, name: '测试33' },
            { value: 350, name: '测试44' },
            { value: 363, name: '测试55' },
            { value: 300, name: '测试66' }
          ]
        }
      ]
    };

    option3 && myChart3.setOption(option3);

    var chartDom4 = document.getElementById('echx4');
    var myChart4 = echarts.init(chartDom4);
    var option4;

    option4 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        itemGap: 20,
        top: '5%',
        left: '65%',
        textStyle: {
          fontSize: 12,
          color: '#FFFFFF',
        },
      },
      series: [
        {
          type: 'pie',
          left: '-40%',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 300, name: '测试11' },
            { value: 500, name: '测试22' },
            { value: 400, name: '测试33' },
            { value: 350, name: '测试44' },
            { value: 363, name: '测试55' },
            { value: 300, name: '测试66' }
          ]
        },
        {
          name: '内边框',
          type: 'pie',
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          left: '-40%',
          radius: ['40%', '40%'],
          label: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 9,
            name: '',
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: '#ccc'
              }
            }
          }]
        },
      ]
    };

    option4 && myChart4.setOption(option4);


    var chartDom5 = document.getElementById('echx5');
    var myChart5 = echarts.init(chartDom5);
    var option5;

    option5 = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        itemGap: 10,
        top: '5%',
        left: '20%',
        textStyle: {
          fontSize: 10,
          color: '#FFFFFF',
        },
      },
      series: [
        {
          type: 'pie',
          left: '40%',
          radius: ['50%', '70%'],
          center: ["50%", "41%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center',
            normal: {
              textStyle: {
                color: '#37d2d4',	// 提示文字颜色
                fontSize: 12		// 提示文字大小
              }
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true,
            normal: {
              length: 8,   	// 指示线长度
              lineStyle: {
                color: "#37d2d4"  // 指示线颜色
              }
            },
          },
          data: [
            { value: 300, name: '测试11' },
            { value: 500, name: '测试22' },
            { value: 400, name: '测试33' },
            { value: 350, name: '测试44' },
            { value: 363, name: '测试55' },

          ]
        }, {
          name: '外边框',
          type: 'pie',
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ["70%", "41%"],
          radius: ['75%', '75%'],
          label: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 9,
            name: '',
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: '#2985e0'
              }
            }
          }]
        },
        {
          name: '内边框',
          type: 'pie',
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          center: ["70%", "41%"],
          radius: ['40%', '40%'],
          label: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 9,
            name: '',
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: '#2985e0'
              }
            }
          }]
        },

      ]
    };

    option5 && myChart5.setOption(option5);

    var chartDom6 = document.getElementById('echx6');
    var myChart6 = echarts.init(chartDom6);
    var option6;

    option6 = {
      tooltip: {
        trigger: 'axis'
      },

      radar: [

        {
          name: {
            show: true,
            formatter: null,
            textStyle: {
              //设置颜色
              color: '#37d2d4'
            }
          },
          indicator: [
            { text: '测试11', max: 500 },
            { text: '测试22', max: 500 },
            { text: '测试33', max: 500 },
            { text: '测试44', max: 500 },
            { text: '测试55', max: 500 },
            { text: '测试66', max: 500 }
          ],
          radius: 60,
          splitLine: {     //配置雷达图的每一圈的网格线颜色
            lineStyle: {
              color: '#37d2d4',
            },
          },
          splitArea: {     //配置雷达图的网格线背景
            show: false,
          },
          center: ['40%', '50%']
        },

      ],
      series: [
        {
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          itemStyle: {     //此属性的颜色和下面areaStyle属性的颜色都设置成相同色即可实现
            color: '#37d2d4',
            borderColor: '#37d2d4',
          },
          areaStyle: {},
          data: [
            {
              value: [300, 500, 400, 350, 363, 300],

            }
          ]
        },


      ]
    };

    option6 && myChart6.setOption(option6);
    var chartDom7 = document.getElementById('echx7');
    var myChart7 = echarts.init(chartDom7);
    var option7;

    option7 = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['财务', '村务', '党务', '居务', '政务'],
        top: '5%',
        left: '20%',
        textStyle: {
          fontSize: 10,
          color: '#FFFFFF',
        },
      },

      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['测试11', '测试22', '测试55', '测试66'],
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: "单位:%",
          nameTextStyle: {
            color: "#fff",

          },

          min: 0,
          max: 100,
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }

        }
      ],
      series: [
        {
          name: '财务',
          type: 'bar',
          barWidth: 14,
          data: [
            30, 50, 80,
          ],

        },
        {
          name: '村务',
          type: 'bar',
          barWidth: 16,
          data: [
            30, 50, 30, 80
          ],
        },
        {
          name: '党务',
          type: 'bar',
          barWidth: 16,
          data: [
            30, 50, 80
          ],
        },
        {
          name: '居务',
          type: 'bar',
          barWidth: 16,
          data: [
            30, 50, 30, 80
          ],
        },
        {
          name: '政务',
          type: 'bar',
          barWidth: 16,
          data: [
            50, 30, 80
          ],
        }
      ]
    };

    option7 && myChart7.setOption(option7);

    var chartDom8 = document.getElementById('echx8');
    var myChart8 = echarts.init(chartDom8);
    var option8;

    option8 = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['巡查', '警示'],
        top: '5%',
        left: '20%',
        textStyle: {
          fontSize: 10,
          color: '#FFFFFF',
        },
      },

      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['测试11', '测试22', '测试33', '测试44', '测试55', '测试66'],
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: "单位:%",
          nameTextStyle: {
            color: "#fff",

          },

          min: 0,
          max: 1000,
          axisLabel: {
            textStyle: {
              color: '#fff'
            },

          }

        }
      ],
      series: [
        {
          name: '巡查',
          type: 'bar',
          barWidth: 15,
          data: [
            300, 500, 400, 380, 390, 800
          ],

        },
        {
          name: '警示',
          type: 'bar',
          barWidth: 18,
          data: [
            300, 500, 400, 380, 390, 800
          ],
        },


      ]
    };

    option8 && myChart8.setOption(option8);
    var chartDom9 = document.getElementById('echx9');
    var myChart9 = echarts.init(chartDom9);
    var option9;

    option9 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
      },
      legend: {
        show: false,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        show: false,
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        axisTick: {
          show: false
        }, axisLine: {//y轴线的配置
          show: true,//是否展示
          lineStyle: {
            color: "#ccc",//y轴线的颜色（若只设置了y轴线的颜色，未设置y轴文字的颜色，则y轴文字会默认跟设置的y轴线颜色一致）
            width: 0,//y轴线的宽度
            type: "solid"//y轴线为实线
          },
        },

        data: ['测试66', '测试55', '测试44', '测试33', '测试22', '测试11',]
      },
      series: [
        {
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          barWidth: 8,
          label: {
            show: false
          },
          emphasis: {
            focus: 'series'
          },
          data: [80, 36, 36, 40, 50, 30]
        },
        {
          name: 'Mail Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [80, 36, 35, 40, 50, 30]
        },
        {
          name: 'Affiliate Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [0, 36, 35, 40, 30, 30]
        },
        {
          name: 'Video Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [0, 20, 18, 10, 0, 30]
        },

      ]
    };

    option9 && myChart9.setOption(option9);


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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  background: #1d2b56;
  padding: 8px;
}

.title {
  color: #37d2d4;
}

header {
  height: 43%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  .her-left {
    flex: 2;
    height: 100%;

    .her-left-top {
      width: 100%;
      text-align: center;
      background: url(./assets/images/main_top_left.png) no-repeat;
      background-size: 100%;
      font-size: 12px;
      height: 200px;

      p {
        line-height: 28px;
      }

      .ul2,
      .ul1 {
        margin-top: 10px;
        color: #fff !important;
        display: flex;
        justify-content: space-around;
        padding: 6px;

        li {
          width: 30%;
          line-height: 35px;
        }

      }

      .ul1 {
        li:nth-child(1) {
          background: #37d2d4;
        }

        li:nth-child(2) {
          background: #19ca88;
        }

        li:nth-child(3) {
          background: #858ff8;
        }
      }

      .ul2 {
        padding-bottom: 10px;

        li {
          width: 20% !important;
        }

        li:nth-child(1) {
          background: #fd9133;
        }

        li:nth-child(2) {
          background: #f6d10e;
        }

        li:nth-child(3) {
          background: #2e8cff;
        }

        li:nth-child(4) {
          background: #f6580e;
        }
      }
    }
  }

  .her-con {
    flex: 6;
    height: 100%;

    header {
      width: 100%;
      height: 80px;
      display: flex;

      .her-con-left {
        text-align: center;
        margin-top: 10px;
        flex: 1;
        height: 35px;
        line-height: 35px;
        color: #37d2d4;
        border: 1px solid #37d2d4;

      }

      .her-con-top-con {
        flex: 8;
        height: 100%;
        background: url(./assets/images/title_bg.png) no-repeat;
        background-size: contain;
        text-align: center;
        line-height: 60px;
        color: #37d2d4;
        font-size: 26px;
      }



    }

    .her-con-con-con {
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #37d2d4;

      .her-con-con-con-one {
        margin-left: 20px;
        width: 60px;
        height: 60px;
        background: url(./assets/images/nums.png) no-repeat;
        background-size: 100%;
        background-position: 0 -600px;
      }
    }

    .her-con-con-bottom {
      margin-top: 20px;
      height: 68%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .her-con-con-bottom-left,
      .her-con-con-bottom-right {
        p {
          margin: 10px;
          color: #37d2d4;
        }

        width: 48%;
        height: 100%;
        background: url(./assets/images/main_top_bottom.png) no-repeat;
        background-size: 100%;
      }
    }
  }

  .her-right {
    flex: 2;
    height: 100%;
  }

  .her-left-bottom {
    margin-top: 5px;
    font-size: 12px;
    width: 100%;
    text-align: center;
    background: url(./assets/images/main_top_left.png) no-repeat;
    background-size: 100%;
    height: 200px;

    p {
      line-height: 28px;
    }
  }

  .her-right {
    flex: 2;
    height: 100%;

    .her-right-top {
      width: 100%;
      text-align: center;
      background: url(./assets/images/main_top_left.png) no-repeat;
      background-size: 100%;
      font-size: 12px;
      height: 200px;

      p {
        line-height: 30px;
      }

      .right-ul2,
      .right-ul1 {
        margin-top: 10px;
        color: #fff !important;
        display: flex;
        justify-content: space-around;
        padding: 6px;

        li {
          width: 46%;
          line-height: 35px;
        }

      }

      .right-ul1 {
        li:nth-child(1) {
          background: #37d2d4;
        }

        li:nth-child(2) {
          background: #19ca88;
        }


      }

      .right-ul2 {
        padding-bottom: 10px;

        li {
          width: 30% !important;
        }

        li:nth-child(1) {
          background: #858ff8;
        }


        li:nth-child(2) {
          background: #2e8cff;
        }

        li:nth-child(3) {
          background: #f6580e;
        }
      }
    }
  }

}

.con {
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    padding-left: 10px;
    width: 18%;
    line-height: 38px;
    background: url(./assets/images/main_middle.png) no-repeat;
    background-size: 100%;

    p {
      color: #37d2d4;
    }

    h2 {
      text-align: center;
      color: #fff;
    }
  }
}

.ul3 {
  width: 100%;
  display: flex;
  height: 180px;
  justify-content: space-between;
  align-items: center;

  li {
    width: 30%;
    height: 100%;
    background: url(./assets/images/main_bottopm_top2.png)no-repeat;
    background-size: 100%;
    padding: 5px;
    padding-top: 28px;
    color: #fff;
    font-size: 14px;

    p {
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p:nth-child(1) {
      padding-left: 80px;
    }
  }
}

.bottom {
  margin-top: 10px;
  width: 100%;
  height: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .bottom-one {
    flex: 2;
    height: 100%;
    background: url(./assets/images/main_bottom_bottom.png)no-repeat;
    background-size: contain;
  }

  .bottom-two {
    flex: 3;
    height: 100%;
    background: url(./assets/images/main_bootm_middle.png)no-repeat;
    background-size: contain;
  }

  .bottom-three {
    flex: 3;
    height: 100%;
    background: url(./assets/images/main_bootm_middle.png)no-repeat;
    background-size: contain;
  }

  .bottom-four {
    flex: 2;
    height: 100%;
    background: url(./assets/images/main_bottom_bottom.png)no-repeat;
    background-size: contain;
  }
}
</style>
