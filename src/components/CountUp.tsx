"use client";

import React from "react";
import CountUpFromLibrary from "react-countup";

interface CountUpProps {
  to: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ to, suffix = "", duration = 2.0 }: CountUpProps) {
  return (
    <CountUpFromLibrary
      end={to}
      duration={duration}
      suffix={suffix}
      enableScrollSpy
      scrollSpyOnce
      className="font-display font-black text-primary-900"
    />
  );
}
