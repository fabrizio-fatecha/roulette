import React, { useState } from 'react';
import { styles } from './styles';
import confetti from 'canvas-confetti';

const PRIZES = [
  { name: "Stickers", color: '#c3ecf6', prob: 15 },
  { name: "Stickers", color: '#ffe7a5', prob: 18 },
  { name: "Stickers", color: '#f8d8d8', prob: 20 },
  { name: "Stickers", color: '#ccf6c5', prob: 20 },
  { name: "Stickers", color: '#c3ecf6', prob: 20 },
  { name: "Remera", color: '#ffe7a5', prob: 2 },
  { name: "Creditos", color: '#f8d8d8', prob: 0.5 },
  { name: "Termito", color: '#ccf6c5', prob: 5 }
];

const Roulette: React.FC = () => {

  const [rotation, setRotation] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [spinCount, setSpinCount] = useState<number>(0);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const currentSpinCount = spinCount + 1;
    setSpinCount(currentSpinCount);

    let winnerIndex = 0;

    if (currentSpinCount === 51) {
      winnerIndex = PRIZES.findIndex(p => p.name === "Termito");
    } else {
      const rand = Math.random() * 100;
      let cumulative = 0;

      for (let i = 0; i < PRIZES.length; i++) {
        if (PRIZES[i].name === "Termito") continue;

        cumulative += PRIZES[i].prob;
        if (rand <= cumulative) {
          winnerIndex = i;
          break;
        }
      }
    }

    const sliceAngle = 360 / PRIZES.length;
    const randomOffset = (Math.random() * (sliceAngle * 0.6)) - (sliceAngle * 0.3);
    const targetAngle = 360 - (winnerIndex * sliceAngle + (sliceAngle / 2)) + randomOffset;
    const extraSpins = (Math.floor(Math.random() * 5) + 5) * 360;

    const currentMod = rotation % 360;
    const rotationDiff = targetAngle - currentMod;
    const totalRotation = rotation + extraSpins + rotationDiff + (rotationDiff < 0 ? 360 : 0);

    setRotation(totalRotation);

    setTimeout(() => {
      setIsSpinning(false);

      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });

    }, 4000);
  };

  const generateConicGradient = () => {
    const slicePercentage = 100 / PRIZES.length;

    let gradientParts: string[] = [];

    for (let i = 0; i < PRIZES.length; i++) {
      const start = slicePercentage * i;
      const end = slicePercentage * (i + 1);

      gradientParts.push(`${PRIZES[i].color} ${start}% ${end}%`);
    }

    return `conic-gradient(${gradientParts.join(', ')})`;
  };

  return (
    <div style={styles.container}>
      <div style={{ position: 'relative' }}>
        <div style={styles.pointer}></div>

        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: isSpinning ? 'not-allowed' : 'pointer',
            opacity: isSpinning ? 0.7 : 1
          }}
          onClick={spinWheel}
          disabled={isSpinning}
        >
          <div style={styles.rouletteWrapper}>
            <div
              style={{
                ...styles.wheel,
                transform: `rotate(${rotation}deg)`,
                background: generateConicGradient(),
                position: 'relative'
              }}
            >
              {PRIZES.map((prize, i) => {
                const sliceAngle = 360 / PRIZES.length;
                const textRotation = (i * sliceAngle) + (sliceAngle / 2);

                return (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${textRotation - 90}deg) translateX(85px)`,
                      color: '#000000',
                      fontFamily: '"Google Sans Bold", sans-serif',
                      fontSize: '16px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {prize.name}
                  </div>
                );
              })}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Roulette;