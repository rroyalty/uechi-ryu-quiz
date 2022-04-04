import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

interface IProps {
    question: string,
    questionId: number
};

const QuestionCard: React.FC<IProps> = (props): JSX.Element => {

    return (
        <Card sx={{width: 260, height: 300}}>
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>Question #{props.questionId+1}</Typography>
                <Typography sx={{ fontSize: 16 }} variant="body2">{props.question}</Typography>
            </CardContent>
        </Card>
    )
};

export default QuestionCard;
