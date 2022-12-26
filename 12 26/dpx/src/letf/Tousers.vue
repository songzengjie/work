<template>
    <div class="tousers" style="width: 100%;height:15%;background: #424345;padding: 10px;">
        <h4>慕课外卖用户总数</h4>
        <h3 style="font-size: 20px;line-height: 40px;">1,739,913</h3>
        <p style="font-size: 14px;color: palegreen;margin-bottom: 10px;">每日增长率：102.17% 每月增长率：152.72%</p>
        <div id="echx" style="width: 100%;height: 30px;"></div>
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
        var chartDom = document.getElementById('echx');
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
                left: '0%',
                right: '0%',
                containLabel: false
            },
            xAxis: {
                show: false,
                type: 'value',
                boundaryGap: [0, 0.1]
            },
            yAxis: {
                type: 'category',
                data: ['用户总数'],
                axisTick: {
                    show: true
                },
                axisLine: {  //这是x轴文字颜色
                    lineStyle: {
                        color: "#fff",
                    },
                    lineStyle: {
                        color: "#ccc",//y轴线的颜色（若只设置了y轴线的颜色，未设置y轴文字的颜色，则y轴文字会默认跟设置的y轴线颜色一致）
                        width: 0,//y轴线的宽度
                        type: "solid",//y轴线为实线

                    },
                },


            },
            series: [
                {
                    type: 'bar',
                    data: [2022039],
                    barWidth: 10,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false,
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
                                color: '#eee'
                            }, {
                                offset: 1,
                                color: '#ccc'
                            }]),


                        }
                    }
                },
            ]
        };

        option && myChart.setOption(option);

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
