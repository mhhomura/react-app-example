import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 4rem;
    > input {
        width: 100%;
        height: 90%;
        border: 1px solid #ebebeb;
        background: #F1F1F1F1;
        border-radius: 25px;
        padding: 15px; /* Increased padding for better look */
        font-size: 1rem;
        color: #656565;
        transition: border-color 0.2s;

        &:focus {
            border-color: #2473d1;
            outline: none;
            background: #eaf2fb; /* Light blue on focus */
        }
    }
`;

export const Label = styled.div`
    padding-bottom: 0.8rem;
    font-size: 1rem;
    color: #999999;
    font-weight: 400;
`;