import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { 
    Aside,
    MessageInfo,
    Message,
    MessageTitle,
    MessageContent,
    MessageSubject,
    MessageTime,
    ButtonContainer,
    MainContainer
} from './styles';

export default function Dashboard() {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    async function loadMensagens() {
        const response = await api.get('/mensagens');

        setMessages(response.data)
    }

    useEffect(() => {
        loadMensagens();
    }, []);

    function handleSelecionado(currentMessage) {
        if (selectedMessage && currentMessage.id === selectedMessage.id) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div id="app">
            <Aside>
                <ul>
                    {messages && messages.map((message, index) => (
                        <li
                            key={index} className="mensagem-box"
                            onClick={() => setSelectedMessage(message)}
                        >
                            <MessageInfo className="mensagem-info" selecionado={handleSelecionado(message)}>
                                <h1>{message.assunto}</h1>
                                <h5>{message.data}</h5>
                            </MessageInfo>
                        </li>
                    ))}
                </ul>
            </Aside>
            <MainContainer>
                <Message>
                    {selectedMessage 
                    ? (
                        <div>
                            <MessageTitle>{selectedMessage.assunto}</MessageTitle>
                            {/* <MessageSubject>Assunto da Mensagem</MessageSubject> */}
                            <MessageTime>{selectedMessage.data}</MessageTime>
                            <MessageContent>{selectedMessage.mensagem}</MessageContent>
                        </div>
                    )
                    : (
                        <div className="no-message-selected">
                            <h1>Selecione uma mensagem</h1>
                        </div>
                    )}
                </Message>
                <ButtonContainer>
                    <button>EXCLUIR MENSAGEM</button>
                </ButtonContainer>
            </MainContainer>
        </div>
    );
}
