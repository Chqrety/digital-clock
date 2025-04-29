"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState([]);
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime({ hours: hours, minutes: minutes, seconds: seconds });
    };

    updateClock(); // Panggil sekali saat mount
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex items-center justify-center w-full h-screen text-8xl md:text-[10rem] lg:text-[20rem]">
      <span className="w-[2ch] flex justify-end">{time.hours}</span>
      <span>:</span>
      <span className="w-[2ch] flex justify-center">{time.minutes}</span>
      <span>:</span>
      <span className="w-[2ch] flex justify-start">{time.seconds}</span>
    </div>
  );
}
