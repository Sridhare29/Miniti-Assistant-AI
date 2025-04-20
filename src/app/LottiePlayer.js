'use client';

import { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import catAnimation from './img/MenSpeak.json';

export default function LottiePlayer() {
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    chunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      chunksRef.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
      const url = URL.createObjectURL(blob);
      setAudioURL(url);

      // Play back automatically
      const audio = new Audio(url);
      audio.play();
    };

    mediaRecorderRef.current.start();

    // Auto stop after 3 seconds
    setTimeout(() => {
      mediaRecorderRef.current?.stop();
    }, 3000);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Lottie animationData={catAnimation} loop autoplay style={{ height: 300 }} />
      <button onClick={startRecording} className='btn btn-primary' style={{ marginTop: 20, borderRadius: 5, padding: 10, backgroundColor: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer' }}>
        🎤 Speak
      </button>
      {audioURL && (
        <p style={{ marginTop: 10 }}>
          Hey Guys is repeating you!
        </p>
      )}
    </div>
  );
}
