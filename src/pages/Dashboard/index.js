import React from 'react';

import { Aside, MessageInfo, Message } from './styles';

export default function Dashboard() {
    return (
        <div id="app">
            <Aside>
                <ul>
                    <li className="mensagem-box">
                        <MessageInfo className="mensagem-info">
                            <h1>Titulo da Mensagem</h1>
                            <h5>Horário da Mensagem</h5>
                        </MessageInfo>
                    </li>

                    <li className="mensagem-box">
                        <MessageInfo>
                            <h1>Titulo da Mensagem2</h1>
                            <h5>Horário da Mensagem2</h5>
                        </MessageInfo>
                    </li>

                    <li className="mensagem-box">
                        <MessageInfo className="mensagem-info">
                            <h1>Titulo da Mensagem3</h1>
                            <h5>Horário da Mensagem3</h5>
                        </MessageInfo>
                    </li>
                </ul>
            </Aside>
            <Message>
                <div>
                    <h1>ola</h1>
                </div>
            </Message>
        </div>
    );
}
