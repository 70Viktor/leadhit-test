<template>
    <h1 class="title">Аналитика</h1>
    <figure>
        <div id="chartdiv"></div>
        <figcaption class="subtitle">Аналитика по визитам</figcaption>
    </figure>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "AnalyticsView",
        computed: {
            ...mapState(['analytics'])
        },
        mounted() {
            am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
                var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
                root.setThemes([
                    am5themes_Animated.new(root)
                ]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
                var chart = root.container.children.push(am5xy.XYChart.new(root, {
                    panX: true,
                    panY: true,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    layout: root.verticalLayout,
                    pinchZoomX:true
                }));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
                var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                    behavior: "none"
                }));
                cursor.lineY.set("visible", false);

                var colorSet = am5.ColorSet.new(root, {});

// The data
                var data = []
                let analytics = [
                    {"date":"2020-07-01","visits":213},
                    {"date":"2020-07-02","visits":249},
                    {"date":"2020-07-03","visits":179},
                    {"date":"2020-07-04","visits":170},
                    {"date":"2020-07-05","visits":184},
                    {"date":"2020-07-06","visits":202},
                    {"date":"2020-07-07","visits":198},
                    {"date":"2020-07-08","visits":168},
                    {"date":"2020-07-09","visits":176},
                    {"date":"2020-07-10","visits":171},
                    {"date":"2020-07-11","visits":190},
                    {"date":"2020-07-12","visits":154},
                    {"date":"2020-07-13","visits":246},
                    {"date":"2020-07-14","visits":250},
                    {"date":"2020-07-15","visits":227},
                    {"date":"2020-07-16","visits":140},
                    {"date":"2020-07-17","visits":170},
                    {"date":"2020-07-18","visits":125},
                    {"date":"2020-07-19","visits":106},
                    {"date":"2020-07-20","visits":207},
                    {"date":"2020-07-21","visits":222},
                    {"date":"2020-07-22","visits":198},
                    {"date":"2020-07-23","visits":204},
                    {"date":"2020-07-24","visits":213},
                    {"date":"2020-07-25","visits":145},
                    {"date":"2020-07-26","visits":166},
                    {"date":"2020-07-27","visits":163},
                    {"date":"2020-07-28","visits":135},
                    {"date":"2020-07-29","visits":45}
                ]
                analytics.forEach(analytic => {
                    let date = (new Date(analytic.date))
                        .toUTCString()
                        .split(' ')
                        .slice(1,3)
                        .join(' ')
                    let visits = analytic.visits

                    data.push({
                        date,
                        visits,
                        strokeSettings: {
                            stroke: colorSet.getIndex(3)
                        },
                        fillSettings: {
                            fill: colorSet.getIndex(5),
                        },
                        bulletSettings: {
                            fill: colorSet.getIndex(3)
                        }
                    })
                })

// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
                var xRenderer = am5xy.AxisRendererX.new(root, {});
                xRenderer.grid.template.set("location", 0.5);
                xRenderer.labels.template.setAll({
                    location: 0.5,
                    multiLocation: 0.5
                });

                var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
                    categoryField: "date",
                    renderer: xRenderer,
                    tooltip: am5.Tooltip.new(root, {})
                }));

                xAxis.data.setAll(data);

                var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                    maxPrecision: 0,
                    renderer: am5xy.AxisRendererY.new(root, {})
                }));

                var series = chart.series.push(am5xy.LineSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: "visits",
                    categoryXField: "date",
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueY}",
                        dy:-5
                    })
                }));

                series.strokes.template.setAll({
                    templateField: "strokeSettings",
                    strokeWidth: 3
                });

                series.fills.template.setAll({
                    visible: true,
                    fillOpacity: 0.5,
                    templateField: "fillSettings"
                });


                series.bullets.push(function() {
                    return am5.Bullet.new(root, {
                        sprite: am5.Circle.new(root, {
                            templateField: "bulletSettings",
                            radius: 5
                        })
                    });
                });

                series.data.setAll(data);
                series.appear(1000);

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
            })
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>