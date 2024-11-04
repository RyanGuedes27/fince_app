import { Percentage } from '@/components/percentage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

interface Props {
  title: string;
  description: string;
  value: string;
  proft?: number;
}

export default function CardIndicator(props: Props) {
  return (
    <Card className='flex-1'>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className='flex gap-2'>
        <h2 className='text-2xl font-semibold leading-none tracking-tight'>{props.value}</h2>
        {props.proft && <Percentage value={props.proft} size='sm' />}
      </CardContent>
    </Card>
  );
}
