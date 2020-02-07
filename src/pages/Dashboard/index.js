import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { 
    Aside,
    MessageInfo,
    Message,
    MessageTitle,
    MessageContent,
    MessageTime,
    ButtonContainer,
    MainContainer
} from './styles';

export default function Dashboard() {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [assuntos, setAssuntos] = useState(null);

    async function loadMensagens() {
        const response = await api.get('/mensagens');
        const responseAssunto = await api.get('/assuntos');

        const mensagens = response.data.map(mensagem => {
            return {
                id: mensagem.id,
                assunto: responseAssunto.data.find(x => x.id === mensagem.assunto).descricao,
                mensagem: mensagem.mensagem,
                data: mensagem.data
            }
        });

        setMessages(mensagens);
    }

    async function loadAssuntos() {
        const responseAssunto = await api.get('/assuntos');

        setAssuntos(responseAssunto.data);
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

    async function handleDelete() {
        await api.delete(`mensagens/${selectedMessage.id}`);

        await loadMensagens();
        setSelectedMessage(null);
    }

    return (
        <div id="app">
            <Aside>
                <ul>
                    {(messages) && messages.map((message, index) => (
                        <li
                            key={index} className="mensagem-box"
                            onClick={() => setSelectedMessage(message)}
                        >
                            <MessageInfo selecionado={handleSelecionado(message)}>
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
                    <button onClick={handleDelete}>EXCLUIR MENSAGEM</button>
                </ButtonContainer>
            </MainContainer>
        </div>
    );
}
