"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const POMODORO_TIME = 25 * 60;

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

export default function PomodoroTimer() {
  const [time, setTime] = useState(POMODORO_TIME);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, time]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTime(POMODORO_TIME);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-6xl font-extrabold text-gray-800">
        {formatTime(time)}
      </h1>
      <div className="flex space-x-4">
        <Button
          className="bg-green-700 hover:bg-green-600"
          onClick={startTimer}
          disabled={isActive}
        >
          Start
        </Button>
        <Button
          className="bg-yellow-600 hover:bg-yellow-600"
          onClick={pauseTimer}
          disabled={!isActive}
        >
          Pause
        </Button>
        <Button className="bg-red-700 hover:bg-red-600" onClick={resetTimer}>
          Reset
        </Button>
      </div>
    </div>
  );
}
