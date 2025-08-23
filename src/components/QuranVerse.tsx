import React, { useState, useEffect } from 'react';
import { BookOpen, RefreshCw } from 'lucide-react';

interface Verse {
  arabic: string;
  english: string;
  reference: string;
}

const QuranVerse: React.FC = () => {
  const [currentVerse, setCurrentVerse] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const verses: Verse[] = [
    {
      arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
      english: "And whoever fears Allah - He will make for him a way out.",
      reference: "Quran 65:2"
    },
    {
      arabic: "وَاللَّهُ خَيْرٌ حَافِظًا ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
      english: "But Allah is the best guardian, and He is the most merciful of the merciful.",
      reference: "Quran 12:64"
    },
    {
      arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
      english: "And whoever relies upon Allah - then He is sufficient for him.",
      reference: "Quran 65:3"
    },
    {
      arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      english: "Indeed, with hardship comes ease.",
      reference: "Quran 94:6"
    },
    {
      arabic: "وَاذْكُرُوا اللَّهَ كَثِيرًا لَّعَلَّكُمْ تُفْلِحُونَ",
      english: "And remember Allah often that you may succeed.",
      reference: "Quran 8:45"
    }
  ];

  const nextVerse = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextVerse();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const verse = verses[currentVerse];

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <BookOpen className="text-teal-600" size={24} />
          <h3 className="text-lg font-semibold text-gray-800">Daily Verse</h3>
        </div>
        <button
          onClick={nextVerse}
          className="p-2 rounded-full bg-teal-100 hover:bg-teal-200 transition-colors"
          disabled={isAnimating}
        >
          <RefreshCw 
            size={18} 
            className={`text-teal-600 ${isAnimating ? 'animate-spin' : ''}`} 
          />
        </button>
      </div>

      <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-center mb-6">
          <p className="text-2xl md:text-3xl font-arabic text-gray-800 leading-relaxed mb-4 font-medium">
            {verse.arabic}
          </p>
          <p className="text-lg text-gray-700 italic leading-relaxed">
            "{verse.english}"
          </p>
        </div>
        <div className="text-center">
          <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
            {verse.reference}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuranVerse;