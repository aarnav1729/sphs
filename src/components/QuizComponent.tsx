import React, { useState } from 'react';

// Quiz data
const quizData = [
    {
        question: "Match the animals with their sounds:",
        items: [
            { animal: "Bats", sound: "Screech" },
            { animal: "Bears", sound: "Growl" },
            { animal: "Bees", sound: "Buzz" },
            { animal: "Dogs", sound: "Bark" },
            { animal: "Ducks", sound: "Quack" },
            { animal: "Frogs", sound: "Croak" },
            { animal: "Lions", sound: "Roar" },
            { animal: "Owls", sound: "Hoot" },
            { animal: "Pigs", sound: "Oink" },
            { animal: "Sheep", sound: "Baa" },
        ]
    },
    {
        question: "Match the animals with their Male, Female, and Young:",
        items: [
            { animal: "Cat", male: "Tom", female: "Queen", young: "Kitten" },
            { animal: "Dog", male: "Dog", female: "Bitch", young: "Puppy" },
            { animal: "Cow", male: "Bull", female: "Cow", young: "Calf" },
            { animal: "Horse", male: "Stallion", female: "Mare", young: "Foal" },
            { animal: "Sheep", male: "Ram", female: "Ewe", young: "Lamb" },
            { animal: "Goose", male: "Gander", female: "Goose", young: "Gosling" },
            { animal: "Lion", male: "Lion", female: "Lioness", young: "Cub" },
            { animal: "Tiger", male: "Tiger", female: "Tigress", young: "Cub" },
            { animal: "Whale", male: "Bull", female: "Cow", young: "Calf" },
            { animal: "Elephant", male: "Bull", female: "Cow", young: "Calf" },
        ]
    }
];

const QuizComponent: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
    const [score, setScore] = useState<number | null>(null); // Added state for score

    const handleMatch = (animal: string, sound: string) => {
        setUserAnswers(prev => ({ ...prev, [animal]: sound }));
    };

    const checkAnswers = () => {
        let scoreCount = 0;
        quizData[currentQuestion].items.forEach(item => {
            if (userAnswers[item.animal] === item.sound) {
                scoreCount++;
            }
        });
        setScore(scoreCount); // Store the score
    };

    const nextQuestion = () => {
        setUserAnswers({});
        setScore(null);
        setCurrentQuestion(currentQuestion + 1 < quizData.length ? currentQuestion + 1 : 0);
    };

    return (
        <div className="quiz-container p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
            {score !== null ? (
                <div className="text-center">
                    <h3 className="text-2xl font-semibold">Quiz Completed!</h3>
                    <p className="text-lg mt-4">Your Score: {score} out of {quizData[currentQuestion].items.length}</p>
                    <button onClick={nextQuestion} className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Next Question
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="text-xl font-medium mb-4">{quizData[currentQuestion].question}</h3>
                    <div className="flex flex-col space-y-4">
                        {quizData[currentQuestion].items.map(item => (
                            <div key={item.animal} className="flex items-center">
                                <span className="mr-2 font-bold">{item.animal}</span>
                                <select
                                    value={userAnswers[item.animal] || ""}
                                    onChange={e => handleMatch(item.animal, e.target.value)}
                                    className="p-2 border border-gray-300 rounded"
                                >
                                    <option value="">Select Sound</option>
                                    {quizData[currentQuestion].items.map(soundItem => (
                                        <option key={soundItem.sound} value={soundItem.sound}>
                                            {soundItem.sound}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={checkAnswers}
                        className="mt-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Submit Answers
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;