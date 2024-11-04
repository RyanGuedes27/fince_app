'use client';

import React from 'react';
import CardIndicator from '../home/components/CardIndicator';
import { CARD_INDICATORS } from '../home/utils/constants';
import { ChartOne } from '../home/components/ChartOne';
import { ChartTwo } from '../home/components/ChartTwo';
import { ChartThree } from '../home/components/ChartThree';
import { TickerFIIs } from '../home/components/TickerFIIs';

function Transaction() {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div>
        <h2 className='font-bold text-2xl'>Dashboard</h2>
      </div>
      <div className='flex mb-2 justify-between gap-3'>
        {CARD_INDICATORS.map(card => (
          <CardIndicator
            description={card.description}
            title={card.title}
            value={card.value}
            proft={card.proft}
            key={card.id}
          />
        ))}
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
      <div>
        <h2 className='font-bold my-3'>FIIs</h2>
        <TickerFIIs />
      </div>
    </div>
  );
}

export default Transaction;
