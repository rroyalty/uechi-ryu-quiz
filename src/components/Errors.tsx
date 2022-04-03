import styled from '@emotion/styled';

const ErrorsDiv = styled.div`
`
interface IProps {
    error: string,
};

const Errors: React.FC<IProps> = (props): JSX.Element => {

    return (
        <ErrorsDiv>
           {props.error};
        </ErrorsDiv>
    )
};

export default Errors;
