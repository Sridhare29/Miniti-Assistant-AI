'use client'; // <--- important

import Lottie from "lottie-react";
import catAnimation from "./img/MenSpeak.json"; // adjust path if needed

export default function LottiePlayer() {
  return (
    <div style={{ width: 300 }}>
      <Lottie animationData={catAnimation} loop autoplay />
    </div>
  );
}
