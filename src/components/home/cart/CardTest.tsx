
'use client';

import { Card } from 'flowbite-react';
import { Products } from '../HomeComponent';

export default function CardTestComponent({title, image, price}: Products) {
  return (
    <Card
    className="max-w-sm"
    imgSrc={image}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {price} Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  );
}
