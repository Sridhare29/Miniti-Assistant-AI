import LottiePlayer from "./LottiePlayer"; // correct path

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl  font-bold mb-6">Miniti Assistant</h1>
      <h2 className="text-2xl font-semibold mb-4">Hey Guys!</h2>
      <p className="text-lg mb-4">I am your personal assistant</p>
      <LottiePlayer />
    </div>
  );
}

