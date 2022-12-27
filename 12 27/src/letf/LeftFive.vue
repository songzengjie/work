<template>
    <div style="width: 100%;height:15%;background: #2a2b2d;padding: 10px;margin-top: 5px;">
        <h4>慕课外卖骑手概况</h4>
        <p style="font-size: 10px;">1233</p>
        <div style="width: 100%;height: 70%;" id="main">

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

        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            grid: {
            top:"20%",
            left: '3%%',
            right: '4%',
            bottom: '3%',
            //是否显示网格
            show:true,
            //是否显示刻度标签
            containLabel: true,
            borderColor: "green",

        },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                    name: "数据"
                },
                {
                    data: [820, 1002, 800, 900, 700, 1320, 1350],
                    type: 'line',
                    smooth: true
                }
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
