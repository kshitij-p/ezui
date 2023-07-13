"use client"

import React from 'react'
import { Calendar } from '../ui/Calendar/Calendar'

const DemoCalendar = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
 
    return (
        <div className='w-full flex items-center justify-center'>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      </div>
    )   
}

export default DemoCalendar