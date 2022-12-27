<template>
    <div class="tousers" style="width: 100%;height:15%;background: #2a2b2d;padding: 10px;margin-top: 5px;">
        <h5 style="display: flex;">慕课外卖用户年龄分布&平均年龄<div style="font-size: 24px;margin-left: 6px;">30.24 <span
                    style="font-size: 14px;">岁</span></div>
        </h5>
        <div id="echx9" style="width: 100%;height: 40px;"></div>
        <ul style="width: 100%;display: flex;justify-content: space-between;align-items: center;font-size: 14px;">
            <li style="text-align: center;">
                <h3>304,378</h3>
                <p>0-20</p>
            </li>
            <li style="text-align: center;">
                <h3>505,391</h3>
                <p>20-30</p>
            </li>
            <li style="text-align: center;">
                <h3>725,216</h3>
                <p>30-50</p>
            </li>
            <li style="text-align: center;">
                <h3>204,934</h3>
                <p>>50</p>
            </li>
        </ul>

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
                // bottom: '3%',
                containLabel: false
            },
            xAxis: {
                show: false,
                type: 'value',
                boundaryGap: [0, 0.01],
                min: 0, //刻度最小值
                max: 1739232, //刻度最大值
                axisTick: {
                    show: true,    // 是否显示坐标轴刻度
                    inside: true,     // 坐标轴刻度是否朝内，默认朝外
                    length: 100,    //坐标轴刻度的长度        
                    lineStyle: {
                        color: '#FFF',     //刻度线的颜色
                        width: 2,    //坐标轴刻度线宽
                        type: 'solid',    //坐标轴线线的类型（solid实线类型；dashed虚线类型；dotted点状类型）
                    },

                }
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

                data: ['']
            },
            series: [
                {
                    name: '0-20',
                    type: 'bar',
                    stack: 'total',
                    barWidth: 10,
                    label: {
                        show: false
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [374798]
                },
                {
                    name: '20-30',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [576200]
                },
                {
                    name: '30-50',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [795760]
                },
                {
                    name: '>50',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [275281]
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

<style lang='scss' scoped>

</style>
