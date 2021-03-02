import { createContext, ReactNode, useState} from 'react';

import challanges from '../../challenges.json';

interface Challange {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallangesContextData {
    level: number;
    levelUp: () => void;
    currentExperience: number;
    challangesCompleted: number;
    startNewChallange: () => void;
    activeChallange: Challange;
    resetChallange: () => void;
    completeChallange: () => void;
    experienceToNextLevel: number;
}

interface ChallangesProviderProps {
    children: ReactNode;
}

export const ChallangesContext = createContext({} as ChallangesContextData);

export function ChallangesProvider({children}: ChallangesProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challangesCompleted, setChallangesCompleted] = useState(0);

    const experienceToNextLevel = Math.pow((level + 1 )* 4, 2)

    const [activeChallange, setActiveChallange] = useState(null);

    function levelUp(){
        setLevel(level + 1);
    }

    function startNewChallange(){
        const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
        const challange = challanges[randomChallangeIndex]

        setActiveChallange(challange);
    }

    function resetChallange(){
        setActiveChallange(null);
    }

    function completeChallange(){
        if(!activeChallange){
            return;
        }

        const { amount } = activeChallange;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallange(null);
        setChallangesCompleted(challangesCompleted + 1);
    }

    return (
        <ChallangesContext.Provider value={
            {
                level, 
                levelUp,
                currentExperience, 
                experienceToNextLevel,
                challangesCompleted,
                startNewChallange,
                activeChallange,
                resetChallange,
                completeChallange
            
            }}>
            {children}
        </ChallangesContext.Provider>
    )
}

