import AnswerButton from './AnswerButton';
import ButtonGroup from '@mui/material/ButtonGroup';

interface IProps {
    answers: Array<string>,
    questionId: number
};

interface IAnswersNumbered {
    element: string,
    index: number
};

function shuffleArray(array: Array<IAnswersNumbered>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * array.length);
        [array[i], array[j]] = [array[j], array[i]];
    };
};

const AnswerSet: React.FC<IProps> = (props): JSX.Element => {

    let answerArray: Array<IAnswersNumbered> = [];

    props.answers.forEach((element, index) => {
        answerArray.push({element, index});
    });

    shuffleArray(answerArray);

    return (
        <ButtonGroup orientation='vertical' sx={{width: 260, height: 200}}>
            {answerArray.map((element: IAnswersNumbered) => {
                return(
                    <AnswerButton key={element.index} answer={element.element} index={element.index} questionId = {props.questionId} />
                );
            })}
        </ButtonGroup>
    );
};

export default AnswerSet;
