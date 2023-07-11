"use client";

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: 6000,
  },
  {
    name: "Feb",
    total: 6600,
  },
  {
    name: "Mar",
    total: 6000,
  },
  {
    name: "Apr",
    total: 3000,
  },
  {
    name: "May",
    total: 1000,
  },
  {
    name: "Jun",
    total: 500,
  },
  {
    name: "Jul",
    total: 1500,
  },
  {
    name: "Aug",
    total: 4000,
  },
  {
    name: "Sep",
    total: 4000,
  },
  {
    name: "Oct",
    total: 5700,
  },
  {
    name: "Nov",
    total: 4000,
  },
  {
    name: "Dec",
    total: 7000,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />

        <Area type="monotone" dataKey="total" stroke="#0d968b" fill="#14b8aa80" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
