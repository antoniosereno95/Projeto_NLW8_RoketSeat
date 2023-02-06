import { ArrowArcLeft, ArrowLeft } from "phosphor-react";
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
            </>
    );
}