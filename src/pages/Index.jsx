import { useState } from 'react';
import ReactConfetti from 'react-confetti';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const funnyMessages = [
  "You're confetti-bly awesome!",
  "Sprinkle joy like it's your job!",
  "Life's too short not to party with pixels!",
  "You've unleashed happiness confetti!",
  "Congratulations! You've won at clicking buttons!",
  "Warning: Excessive fun detected!",
  "You're the confetti to my party!",
  "Boom! Instant happiness delivered!",
  "You've discovered the secret confetti stash!",
  "Achievement unlocked: Master of Confetti!",
];

const Index = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const { toast } = useToast();

  const handleConfettiClick = () => {
    setIsConfettiActive(true);
    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    toast({
      title: "Confetti Party!",
      description: randomMessage,
      duration: 3000,
    });
    setTimeout(() => setIsConfettiActive(false), 5000);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <h1 className="text-4xl font-bold mb-8 text-white shadow-lg">Funny Confetti App</h1>
      <Button
        onClick={handleConfettiClick}
        className="px-6 py-3 text-lg font-semibold bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Click for Joy!
      </Button>
      {isConfettiActive && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
        />
      )}
    </div>
  );
};

export default Index;
