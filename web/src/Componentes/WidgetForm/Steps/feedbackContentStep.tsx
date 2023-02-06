import { ArrowLeft, Camera } from "phosphor-react";
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from '../index';

interface FeedbackTypeProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep(props: FeedbackTypeProps ){

    const feedbackTypesInfo = feedbackTypes[props.feedbackType];

    return (
            <>
                <header>
                    <button 
                        type="button" 
                        className="top-5 left-5 absolute"
                        onClick={props.onFeedbackRestartRequested}
                        title="Setinha de Voltar no Feedback"
                    >
                        <ArrowLeft weight="bold" className="w-4 h-4"></ArrowLeft>
                    </button>
                    <span className="text-xl leading-6 flex items-center gap-2 ">
                        <img src={feedbackTypesInfo.image.source} 
                        alt={feedbackTypesInfo.image.alt} 
                        className="w-6 h-6"/>
                        {feedbackTypesInfo.title}
                    </span>
                    <CloseButton></CloseButton>
                </header>

                <form className="my-4 w-full ">
                    <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md
                    focus:border-brand-500 focus:ring-brand-500 focus-ring-1 resize-none
                    focus-outline-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent "
                    placeholder="Conte com detalhes oq esta acontecendo..."
                    />
                </form>

                <footer className="flex gap-2 mt-2">
                    <button
                    title="screenshot"
                    type="button"
                    className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                    >
                        <Camera className="w-6 h-6" />
                    </button>
                    
                    <button
                    title="enviar feedback"
                    type="submit"
                    className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center itens-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </>
    );
}