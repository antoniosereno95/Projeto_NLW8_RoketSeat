import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.png"
import ideiaImageUrl from "../../assets/idea.png"
import thoughtImageUrl from "../../assets/thought.png"
import { useState } from "react";
import { FeedbackTypeStep } from './Steps/feedbackTypeStep';
import { FeedbackContentStep } from './Steps/feedbackContentStep';


export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image:{
            source: bugImageUrl,
            alt: "imagem de um inseto"
        },
    },
    IDEA: {
        title: "Ideia",
        image:{
            source: ideiaImageUrl,
            alt: "imagem de um lampada"
        },
    },
    OTHER: {
        title: "Outro",
        image:{
            source: thoughtImageUrl,
            alt: "imagem de um valao de pensamento"
        },
    }
}; 

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

            {!feedbackType ? (<FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}  />) : (<FeedbackContentStep 
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}
             />)}
            
            <footer className="text-xs text-neutral-400">
                Feito com S2 por <a className="underline underline-offset-2" href="https://github.com/antoniosereno95">Antonio Sereno</a>
            </footer>
        </div>
    );

}





