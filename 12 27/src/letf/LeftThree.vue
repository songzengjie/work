<template>
    <div class="three"
        style="width: 100%;height:15%;background: #2a2b2d;padding: 10px;margin-top: 5px;display: flex;align-items: center;">
        <div class="left" style="flex: 3;height: 100%;" id="echx2"></div>
        <div class="right">
            <div style="flex: 7;height: 50%;display: flex;;">
                <div style="margin-right: 10px;">
                    <h5>慕课外卖登陆设配</h5>
                    <p></p>
                </div>
                <div style="display: flex;">
                    <h2>1,365,633</h2>
                    <span style="font-size: 14px;margin-top: 10px;">台</span>
                </div>

            </div>
            <ul
                style="width: 100%;height: 50%;text-align: center; display: flex;justify-content: space-between; align-items: center;">
                <li>
                    <h3>522,041</h3>
                    <p style="font-size: 10px;">Androld</p>
                </li>
                <li>
                    <h3>471,645</h3>
                    <p style="font-size: 10px;">ios</p>
                </li>
                <li>
                    <h3>371,947</h3>
                    <p style="font-size: 10px;">PC</p>
                </li>
            </ul>


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
    //   legend: {
    //     orient: 'vertical',
    //     itemGap: 25,
    //     top: '5%',
    //     left: '55%',
    //     textStyle: {
    //       fontSize: 10,
    //       color: '#FFFFFF',
    //     },
    //   },
    color: ['#b4cc80', '#b4cc80', '#89a455'],
      series: [
        {

          type: 'pie',
          radius: '80%',
          left: '-20%',
          roseType: 'area',
          data: [
            { value: 522041, name: 'Androld' },
            { value: 471645, name: 'ios' },
            { value: 371947, name: 'pc' },
          
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

    },
    components: {

    },
    computed: {

    },
    watch: {

    },
}
</script>

<style lang='scss' scoped>

</style>
