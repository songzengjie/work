<template>
    <div style="width: 100%;height:20%;background: #2a2b2d;padding: 10px;margin-top: 5px;">
        <div style="font-size: 14px;;width: 100%;height: 30px;display: flex;justify-content: space-between; ">
            <div>
                <h4>当前热卖品类</h4>
                <p></p>
            </div>
            <p>最后更新时间:2022-12-23</p>
        </div>
        <div style="width: 100%;height: calc(100% - 30px);" id="echx8">
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
        var chartDom8 = document.getElementById('echx8');
        var myChart8 = echarts.init(chartDom8);
        var option8;

        option8 = {
            tooltip: {
                trigger: 'axis'
            },
            //   legend: {
            //     data: ['巡查', '警示'],
            //     top: '5%',
            //     left: '20%',
            //     textStyle: {
            //       fontSize: 10,
            //       color: '#FFFFFF',
            //     },
            //   },
            grid: {
                top: "20%",
                left: '3%%',
                right: '4%',
                bottom: '3%',
                //是否显示网格
                show: true,
                //是否显示刻度标签
                containLabel: true,
                borderColor: "green",

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


            ]
        };

        option8 && myChart8.setOption(option8);

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
