import React, { useState, useEffect } from "react";
import styles from "../style";
import { JoinCourse } from "../components";
const Discount = () => {
  const initialTime = { days: 6, hours: 18, minutes: 24, seconds: 12 };
  const [time, setTime] = useState(
    JSON.parse(localStorage.getItem("discountTimer")) || initialTime
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return initialTime;
        }
        let newSeconds = seconds - 1,
          newMinutes = minutes,
          newHours = hours,
          newDays = days;
        if (newSeconds === -1) {
          newSeconds = 59;
          newMinutes--;
        }
        if (newMinutes === -1) {
          newMinutes = 59;
          newHours--;
        }
        if (newHours === -1) {
          newHours = 23;
          newDays--;
        }
        const newTime = {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
        localStorage.setItem("discountTimer", JSON.stringify(newTime));
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <div className="bg-primary/20 rounded p-6 sm:py-8 sm:px-10 flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-6">
          <h2 className="text-3xl text-gray900 font-black">
            20% discount for early birds!
          </h2>
          <div className="flex justify-end items-center gap-4 sm:gap-6">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center gap-1"
              >
                <span className="text-xl text-gray900 font-black">
                  {time[unit.toLowerCase()]}
                </span>
                <p className="text-sm text-gray900">{unit}:</p>
              </div>
            ))}
          </div>
        </div>
        <JoinCourse />
      </div>
    </section>
  );
};

export default Discount;
