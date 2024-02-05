'use client';

import React, { useState, useEffect } from 'react';
import userData from "@constants/data";

import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// const defaultLayoutPluginInstance = defaultLayoutPlugin();


export default function Portfolio() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Portfolio
        </h1>
        {/* <Viewer
          fileUrl='/portfolio.pdf'
          // plugins={[

          //     defaultLayoutPluginInstance,
              
          // ]}
      /> */}
        {/* <Viewer fileUrl='/portfolio.pdf' /> */}
      </div>
      {/* Grid starts here */}
    </section>
  );
}
