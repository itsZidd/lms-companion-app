"use client"

import React from 'react'
import LandingPageNavBar from './_components/navbar';

type Props = {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col px-5'>
      <LandingPageNavBar />
      {children}
    </div>
  )
}

export default layout