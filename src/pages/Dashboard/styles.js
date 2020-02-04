import styled from 'styled-components';

export const Aside = styled.aside`
    width: 320px;
    background: #FFF;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
    border-radius: 2px;
    padding: 30px 20px;

    ul {
        margin-top: 30px;
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
    margin-left: 30px;
    border: 1px solid red;
    width: 100%;
`;