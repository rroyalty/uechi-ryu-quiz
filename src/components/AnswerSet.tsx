import AnswerButton from './AnswerButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import { IAnswersNumbered, IAnswerSetProps } from '../interface/interface'
import { shuffleArray } from '../utils/utils'

const AnswerSet: React.FC<IAnswerSetProps> = (props): JSX.Element => {

    const answerArray: Array<IAnswersNumbered> = [];

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
