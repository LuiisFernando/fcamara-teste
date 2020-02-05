import styled from 'styled-components';
import { darken } from 'polished';

export const Aside = styled.aside`
    width: 420px;
    background: #FFF;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    padding: 0 20px;

    ul {
        display: grid;
        list-style: none;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
    }

    li {
        border: 1px solid #999;
    }
`;

export const MessageInfo = styled.div `
    display: flex;
    flex: 1;
    max-height: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: ${props => (props.selecionado ? 'rgba(209, 209, 209, 0.9)': 'white')};

    h1 {
            color: #999;
    }

    h5 {
        color: #999;
    }

    :hover {
        background: rgba(209, 209, 209, 0.9);
    }
`;

export const Message = styled.div`
    height: 600px;
    /* margin-left: 30px; */
    border: 1px solid #eee;
    width: 100%;

    .no-message-selected {
        height: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #999;
        font-size: 8px;
    }
`;

export const MessageTitle = styled.h1`

    padding: 20px 30px 5px;
    font-size: 50px;
    color: #999;
`;

export const MessageSubject = styled.h2`
    padding: 0 35px 10px;
    font-size: 21px;
    color: #999;
`;

export const MessageTime = styled.h3`
    padding: 0 35px 40px;
    color: #999;
`;

export const MessageContent = styled.p`
    padding: 0 30px;
    font-size: 15px;
    color: #999;
`;

export const ButtonContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
        margin: 5px 0 0;
        height: 44px;
        background: #f64c75;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;
        padding: 0 10px;

        &:hover {
            background: ${darken(0.03, "#f52b5c")};
        }
    }
`;

export const MainContainer = styled.div`
    width: 100%;
`;