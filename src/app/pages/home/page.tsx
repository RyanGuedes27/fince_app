'use client';

import React from 'react';
import { ChartOne } from './components/ChartOne';
import { ChartTwo } from './components/ChartTwo';
import { ChartThree } from './components/ChartThree';

function Home() {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div>
        <h2 className='font-bold'>Dashboard</h2>
      </div>
      <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
        <div className=''>
          <ChartOne />
        </div>
        <div>
          <ChartTwo />
        </div>
        <div>
          <ChartThree />
        </div>
      </div>
    </div>
  );
}

export default Home;
