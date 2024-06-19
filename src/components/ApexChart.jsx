import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ priceRange }) => {
    const [chartData, setChartData] = useState({
        series: [{
            data: []
        }],
        options: {
            fill: {
                colors: ['#59e8ea']
            },
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 2,
                    columnWidth: '90%',
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 0
            },
            xaxis: {
                categories: [],
                labels: {
                    rotate: -45,
                    style: {
                        colors: ['#393C3C'],
                        fontSize: '13px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                    }
                },
            },
            yaxis: {
                title: {
                    text: 'No. of Items',
                    style: {
                        fontSize: '14px',
                        fontWeight: '600',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        color: '#393C3C'
                    },
                },
                labels: {
                    style: {
                        colors: ['#393C3C'],
                        fontSize: '11px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 600,
                    }
                }
            },
        }
    });

    useEffect(() => {
        if (priceRange) {
            const data = priceRange.map(item => item.items);
            const categories = priceRange.map(item => item.range);

            setChartData({
                ...chartData,
                series: [{
                    data: data
                }],
                options: {
                    ...chartData.options,
                    xaxis: {
                        ...chartData.options.xaxis,
                        categories: categories
                    },
                    yaxis: {
                        stepSize: 1,
                        ...chartData.options.yaxis,
                        min: 0,
                        max: Math.max(...data)
                    },
                    responsive: [{
                        breakpoint: 690,
                        options: {
                            chart: {
                                width: '100%',
                            },
                            plotOptions: {
                                bar: {
                                    horizontal: false,
                                    columnWidth: '70%',
                                    endingShape: 'rounded',
                                    borderRadius: 2,
                                },
                            },
                        },
                    }]
                },
            });
        }
    }, [priceRange]);

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} width={600} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexChart;
