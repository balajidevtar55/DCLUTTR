"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Info, ArrowUp, ArrowDown, Filter } from 'lucide-react';
import * as echarts from 'echarts';
import { dynamicJSONData } from '../enums/dynamicdatajson';
// Main Dashboard Component
const QuickCommerceDashboard = () => {
  const [dateRange, setDateRange] = useState('Aug 01, 024 - Aug 03, 024');
  const [selectedFilter, setSelectedFilter] = useState('Blinkit');
  const [activeTab, setActiveTab] = useState(null);


  useEffect(() => {
    console.log("dynamicJSONData",dynamicJSONData)
  }, [])
  

  return (
    <div className="bg-white p-4 rounded-lg border  w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-sm font-medium">Quick Commerce</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="h-4 w-6 flex items-center">
              <div className="h-3 w-3 rounded-sm bg-green-500 mr-1"></div>
              <div className="h-2 w-3 bg-gray-200"></div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 border rounded px-2 py-1">
            <span>{dateRange}</span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <FilterButton 
          text="Blinkit" 
          color="yellow" 
          active={selectedFilter === 'Blinkit'} 
          onClick={() => setSelectedFilter('Blinkit')} 
        />
        <FilterButton 
          text="Zepto" 
          color="purple" 
          active={selectedFilter === 'Zepto'} 
          onClick={() => setSelectedFilter('Zepto')} 
        />
        <FilterButton 
          text="Instamart" 
          color="orange" 
          active={selectedFilter === 'Instamart'} 
          onClick={() => setSelectedFilter('Instamart')} 
        />
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-6 mb-6  ">
        <MetricCard 
          title="Sales (MRP)"
          value="125.49"
          percentage={2.4}
          isPositive={true}
          comparisonText="vs 119.89 last month"
          chartType="line"
        />
        <MetricCard 
          title="Total Quantity Sold"
          value="125.49"
          percentage={2.4}
          isPositive={true}
          comparisonText="vs 119.89 last month"
          chartType="line"
        />
        <TopCitiesCard />
      </div>

      {/* SKU Level Data */}
      <DataTable 
        title="SKU level data"
        subtitle="Analytics for all your SKUs"
      />

      {/* City Level Data */}
      <DataTable 
        title="City level data"
        subtitle="Analytics for all your Cities"
      />

      {/* Bottom Toolbar */}
      {/* <BottomToolbar activeTab={activeTab} setActiveTab={setActiveTab} /> */}
    </div>
  );
};

// Filter Button Component
const FilterButton = ({ text, color, active, onClick }) => {
  const getColorClass = () => {
    const colorMap = {
      yellow: 'bg-yellow-100',
      purple: 'bg-purple-100',
      orange: 'bg-orange-100'
    };
    return active ? colorMap[color] : 'bg-gray-50';
  };

  return (
    <button 
      className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm ${getColorClass()} ${active ? 'border border-gray-300' : ''}`}
      onClick={onClick}
    >
      <div className={`w-3 h-3 rounded-sm ${color === 'yellow' ? 'bg-yellow-400' : color === 'purple' ? 'bg-purple-400' : 'bg-orange-400'}`}></div>
      {text}
    </button>
  );
};

// Metric Card with Chart
const MetricCard = ({ title, value, percentage, isPositive, comparisonText, chartType }) => {
  const chartRef = React.useRef(null);
  
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      
      const option = {
        grid: {
          left: '5%',
          right: '5%',
          top: '15%',
          bottom: '5%',
        },
        xAxis: {
          type: 'category',
          data: ['09', '10', '11', '12', '13', '14', '15'],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999',
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            color: '#999',
            fontSize: 10
          },
          splitLine: {
            show: false
          }
        },
        series: [{
          data: [4.5, 3.5, 4.9, 3.8, 5.2, 4.8, 6.0],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            color: '#4ade80'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(74, 222, 128, 0.3)'
              }, {
                offset: 1, color: 'rgba(74, 222, 128, 0.05)'
              }]
            }
          }
        },
        {
            data: [5, , 4.9, 3.8, 5.2, 4.8, 6.0],
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
              color: '#4ade80'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(74, 222, 128, 0.3)'
                }, {
                  offset: 1, color: 'rgba(74, 222, 128, 0.05)'
                }]
              }
            }
          }
    
    ]
      };
      
      myChart.setOption(option);
      
      const handleResize = () => {
        myChart.resize();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        myChart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [chartType]);

  return (
    <div className="bg-white rounded-lg p-4 border border-[#F1F1F1] box-shadow">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          {title}
          <Info size={14} />
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-2xl font-semibold text-[#031B15]">₹{value}</div>
          <div className="flex items-center text-xs mt-1">
            <span className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
              {percentage}%
            </span>
            <span className="text-gray-500 ml-1">{comparisonText}</span>
          </div>
        </div>
      </div>
      <div ref={chartRef} className="h-28 w-full mt-2"></div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>This Month</span>
        <span>Last Month</span>
      </div>
    </div>
  );
};

// Top Cities Card with Donut Chart
const TopCitiesCard = () => {
  const chartRef = React.useRef(null);
  
  useEffect(() => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);
      
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}: {c} ({d}%)'
        },
        legend: {
          show: false
        },
        series: [
          {
            type: 'pie',
            radius: ['60%', '80%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 4,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: false
              }
            },
            data: [
              { value: 39, name: 'New Delhi', itemStyle: { color: '#6366f1' } },
              { value: 27, name: 'Mumbai', itemStyle: { color: '#f59e0b' } },
              { value: 21, name: 'West Bengal', itemStyle: { color: '#10b981' } },
              { value: 13, name: 'Others', itemStyle: { color: '#94a3b8' } }
            ]
          }
        ]
      };
      
      myChart.setOption(option);
      
      const handleResize = () => {
        myChart.resize();
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        myChart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 border border-[#F1F1F1] box-shadow">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          Top Cities
          <Info size={14} />
        </div>
      </div>
      
      <div className="flex items-center">
        <div ref={chartRef} className="h-28 w-28"></div>
        <div className="ml-2">
          <div className="font-semibold text-xl text-[#000]">₹68.2L</div>
          <div className="text-xs text-green-500 ">↑ 2.4%</div>
          
          <div className="mt-2 space-y-1 text-[#000]">
            <div className="flex items-center text-xs text-[#000]">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mr-1"></div>
              <span>New Delhi</span>
              <span className="ml-auto mr-1">39%</span>
              <span className="text-green-500">↑ 1.2%</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-2 h-2 rounded-full bg-amber-500 mr-1"></div>
              <span>Mumbai</span>
              <span className="ml-auto mr-1">27%</span>
              <span className="text-green-500">↑ 2.3%</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mr-1"></div>
              <span>West Bengal</span>
              <span className="ml-auto mr-1">21%</span>
              <span className="text-green-500">↑ 3.2%</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-2 h-2 rounded-full bg-gray-400 mr-1"></div>
              <span>Others</span>
              <span className="ml-auto mr-1">13%</span>
              <span className="text-green-500">↑ 1.89%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data Table Component
const DataTable = ({ title, subtitle }) => {
  const [filterActive, setFilterActive] = useState(false);
  
  // Sample data
  const skuData = [
    { 
      id: 1, 
      name: 'Protein Bar 100g', 
      sales: '₹83,132.12', 
      outOfStock: '1.68%',
      totalInventory: '931.9',
      averageRank: '3.2',
      estTraffic: '12,303',
      estImpressions: '25,005',
      cr: '5.1',
      arrow: true
    },
    { 
      id: 2, 
      name: 'Choco Bar 100g', 
      sales: '₹6,526.32', 
      outOfStock: '6.79%',
      totalInventory: '679',
      averageRank: '7',
      estTraffic: '3005',
      estImpressions: '4231',
      cr: '7.1',
      arrow: true
    },
    { 
      id: 3, 
      name: 'SKU 3', 
      sales: '₹7,012.72', 
      outOfStock: '3.28%',
      totalInventory: '328',
      averageRank: '4',
      estTraffic: '2960',
      estImpressions: '3657',
      cr: '6.7',
      arrow: true
    },
    { 
      id: 4, 
      name: 'SKU 4', 
      sales: '₹0', 
      outOfStock: '0',
      totalInventory: '0',
      averageRank: '0',
      estTraffic: '₹0',
      estImpressions: '₹0',
      cr: '0.0',
      arrow: false
    }
  ];
  
  return (
    <div className="mt-6 mb-6">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-sm font-medium">{title}</h2>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <button 
          className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm ${filterActive ? 'bg-green-50 text-green-700' : 'bg-white text-gray-700'} border border-gray-300`}
          onClick={() => setFilterActive(!filterActive)}
        >
          <Filter size={14} />
          Filter({filterActive ? '1' : '0'})
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-2 w-8">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                </div>
              </th>
              <th className="p-2">SKU Name</th>
              <th className="p-2">
                <div className="flex items-center gap-1">
                  Sales <ChevronDown size={14} />
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center gap-1">
                  Out of Stock <ChevronDown size={14} />
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center gap-1">
                  Total Inventory <ChevronDown size={14} />
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center gap-1">
                  Average Rank <ChevronDown size={14} />
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center gap-1">
                  Est. Traffic <ChevronDown size={14} />
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center gap-1">
                  Est. Impressions <ChevronDown size={14} />
                </div>
              </th>
              <th className="p-2">
                <div className="flex items-center gap-1">
                  CR <ChevronDown size={14} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {skuData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-2">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 accent-green-600" />
                  </div>
                </td>
                <td className="p-2 font-medium text-[#0A090B]">{item.name}</td>
                <td className="p-2 text-[#4E5E5A]">{item.sales}</td>
                <td className="p-2 text-[#4E5E5A]">{item.outOfStock}</td>
                <td className="p-2 text-[#4E5E5A]">{item.totalInventory}</td>
                <td className="p-2 text-[#4E5E5A]">{item.averageRank}</td>
                <td className="p-2 text-[#4E5E5A]">{item.estTraffic}</td>
                <td className="p-2 text-[#4E5E5A]">{item.estImpressions}</td>
                <td className="p-2 text-[#4E5E5A]">{item.cr}</td>
              </tr>
            ))}
            <tr className="bg-gray-50 font-medium">
              <td className="p-2"></td>
              <td className="p-2 text-[#4E5E5A]">Total</td>
              <td className="p-2 text-[#4E5E5A]">₹2,93,132.12</td>
              <td className="p-2 text-[#4E5E5A]">16%</td>
              <td className="p-2 text-[#4E5E5A]">2931</td>
              <td className="p-2 text-[#4E5E5A]">8.3</td>
              <td className="p-2 text-[#4E5E5A]">61,985</td>
              <td className="p-2 text-[#4E5E5A]">2,61,768</td>
              <td className="p-2 text-[#4E5E5A]">5.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default QuickCommerceDashboard;