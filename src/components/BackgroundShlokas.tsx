import { useState, useEffect } from "react";
import bgData from "../data/bgData.json";

const BackgroundShlokas = () => {
  const [shlokas, setShlokas] = useState<string[]>([]);

  useEffect(() => {
    // Set all shlokas immediately
    setShlokas(bgData);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shlokas.map((shloka, index) => {
        // Random positions
        const top = Math.random() * 100; // Random top position
        const left = Math.random() * 100; // Random left position
        const duration = 60 + Math.random() * 60; // Random duration between 60-120s (slower)
        const delay = Math.random() * 20; // Random delay between 0-20s
        const scale = 0.6 + Math.random() * 0.6; // Random scale between 0.6-1.2
        const opacity = 0.2 + Math.random() * 0.3; // Random opacity between 0.2-0.5

        // Generate random movement values
        const moveX1 = (Math.random() - 0.5) * 200;
        const moveY1 = (Math.random() - 0.5) * 200;
        const moveX2 = (Math.random() - 0.5) * 200;
        const moveY2 = (Math.random() - 0.5) * 200;
        const moveX3 = (Math.random() - 0.5) * 200;
        const moveY3 = (Math.random() - 0.5) * 200;
        const moveX4 = (Math.random() - 0.5) * 200;
        const moveY4 = (Math.random() - 0.5) * 200;

        const rotate1 = Math.random() * 180;
        const rotate2 = Math.random() * 360;
        const rotate3 = Math.random() * 540;
        const rotate4 = Math.random() * 720;

        const scale1 = 0.8 + Math.random() * 0.4;
        const scale2 = 0.7 + Math.random() * 0.6;
        const scale3 = 0.6 + Math.random() * 0.8;
        const scale4 = 0.7 + Math.random() * 0.6;

        return (
          <div
            key={index}
            className="absolute text-saffron/40 dark:text-saffron/50 font-garamond text-base sm:text-lg md:text-xl lg:text-2xl"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              transform: `rotate(0deg) scale(${scale})`,
              opacity,
              maxWidth: "250px",
              textAlign: "center",
              animation: `floatSlow${index} ${duration}s ease-in-out ${delay}s infinite, fadeSlow ${
                duration * 1.2
              }s ease-in-out ${delay}s infinite`,
              filter: "blur(0.5px)",
            }}>
            {shloka}
            <style>
              {`
                @keyframes floatSlow${index} {
                  0% {
                    transform: translate(0, 0) rotate(0deg) scale(${scale});
                  }
                  20% {
                    transform: translate(${moveX1}px, ${moveY1}px) rotate(${rotate1}deg) scale(${scale1});
                  }
                  40% {
                    transform: translate(${moveX2}px, ${moveY2}px) rotate(${rotate2}deg) scale(${scale2});
                  }
                  60% {
                    transform: translate(${moveX3}px, ${moveY3}px) rotate(${rotate3}deg) scale(${scale3});
                  }
                  80% {
                    transform: translate(${moveX4}px, ${moveY4}px) rotate(${rotate4}deg) scale(${scale4});
                  }
                  100% {
                    transform: translate(0, 0) rotate(0deg) scale(${scale});
                  }
                }
              `}
            </style>
          </div>
        );
      })}
      <style>
        {`
          @keyframes fadeSlow {
            0% {
              opacity: 0.1;
            }
            25% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.5;
            }
            75% {
              opacity: 0.3;
            }
            100% {
              opacity: 0.1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BackgroundShlokas;
