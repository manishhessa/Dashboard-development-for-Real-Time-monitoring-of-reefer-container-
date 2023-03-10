import './App.css';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, AreaChart, Area} from "recharts";
// import { Fragment } from 'react';
import React, { useEffect, useState } from "react";
// import Dropdown from './dropdown';

function App() {
  const [user, setUser] = useState([]);


  const fetchData = () => {
    return fetch("https://api-generator.retool.com/WihQgH/data")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }
  const OnClickChart = e => {
    e.preventDefault();
    console.log(e.value)
    if(e.target.value === 'Line'){
      document.querySelector('.linechart').hidden = false;
      document.querySelector('.barchart').hidden = true;
      document.querySelector('.areachart').hidden = true;
    }
    if(e.target.value === 'Bar'){
      document.querySelector('.linechart').hidden = true;
      document.querySelector('.barchart').hidden = false;
      document.querySelector('.areachart').hidden = true;
    }
    if(e.target.value === 'Area'){
      document.querySelector('.linechart').hidden = true;
      document.querySelector('.barchart').hidden = true;
      document.querySelector('.areachart').hidden = false;
    }
  }
  useEffect(() => {
    fetchData();
  },[])
  return (
    <div className='container'> 
    <div className='linechart'>
    <h1 className='chart-heading'>Line Chart</h1>
    {/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
          width={1000}
          height={300}
          data={user}
          margin={{
            top: 5,
            right: 10,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" />
          <YAxis domain={[0, 20]}/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Node 1" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Node 2" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Node 3" stroke="#d88499" />
          <Line type="monotone" dataKey="Node 4" stroke="#16A5A5" />
        </LineChart>
    
         
    </div>

        
      <div className='barchart' hidden>
      <h1 className='chart-heading'>Stacked Bar Chart</h1>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <BarChart
          width={1000}
          height={400}
          data={user}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Node 1" stackId="a" fill="#8884d8" />
          <Bar dataKey="Node 2" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Node 3" stackId="a" fill="#d88499" />
          <Bar dataKey="Node 4" stackId="a" fill="#16A5A5" />
        </BarChart>
        </div>
      {/* </ResponsiveContainer> */}
      <div className='areachart' hidden>
      <h1 className='chart-heading'>Stacked Area Chart</h1>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        {/* <AreaChart
          width={1000}
          height={400}
          data={user}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Node 1" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Node 2" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Node 3" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="Node 4" stackId="1" stroke="#16A5A5" fill="#16A5A5" />
        </AreaChart> */}
      {/* </ResponsiveContainer> */}
    <AreaChart width={1000} height={200} data={user}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="Node1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Node2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Node3" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#A54FCD" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#A54FCD" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="Node4" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#3E98B5" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#3E98B5" stopOpacity={0}/>
    </linearGradient>
  </defs>
   <XAxis dataKey="Time" />
    <YAxis domain={[0,30]}/>
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Area type="monotone" dataKey="Node 1" stroke="#8884d8" fillOpacity={1} fill="url(#Node1)" />
    <Area type="monotone" dataKey="Node 2" stroke="#82ca9d" fillOpacity={1} fill="url(#Node2)" />
    <Area type="monotone" dataKey="Node 3" stroke="#A54FCD" fillOpacity={1} fill="url(#Node3)" />
    <Area type="monotone" dataKey="Node 4" stroke="#3E98B5" fillOpacity={1} fill="url(#Node4)" />
  </AreaChart>
  </div>
  {/* below code is for daily weekly monthly buttons till div is closed  */}

  <div className='btn-group mx-3 ms-5 ps-5' role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-success">Daily</button>
        <button type="button" class="btn btn-outline-success">Weekly</button>
        <button type="button" class="btn btn-outline-success">Monthly</button>
        <button type="button" class="btn btn-outline-success">Quarterly</button>
          </div>
  <div className='btn-group mx-3 ' role="group" aria-label="Basic example">
        <button type="button" class="btn btn-outline-success" onClick={OnClickChart} value='Line'>Line Chart</button>
        <button type="button" class="btn btn-outline-success" onClick={OnClickChart} value='Bar'>Bar Chart</button>
        <button type="button" class="btn btn-outline-success" onClick={OnClickChart} value='Area'>Area Chart</button>
        </div>

        <button class="btn btn-outline-success dropdown-toggle mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Temperature
    
        <ul class="dropdown-menu">
        <li><a class="dropdown-item"  href="#">Temperature</a></li>
          <li><a class="dropdown-item" href="#">Humidity</a></li>
          <li><a class="dropdown-item" href="#">VOC</a></li>
         <li><a class="dropdown-item" href="#">CO2</a></li>
        </ul>
      
         </button>
    </div>
    
  );
}

export default App;
