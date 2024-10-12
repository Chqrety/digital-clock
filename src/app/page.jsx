"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
    const [time, setTime] = useState("");
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            setTime(`${hours}:${minutes}:${seconds}`);
        };

        updateClock(); // Panggil sekali saat mount
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="flex w-full justify-center items-center h-screen">
            <span className="text-8xl md:text-[10rem] lg:text-[20rem]">{time}</span>
        </div>
    );
}
