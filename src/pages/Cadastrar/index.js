import React from 'react';

import {
    Container,
    ButtonContainer
} from './styles';

export default function Cadastrar() {

    function handleSubmit() {

    }

    return (
        <Container>
            <div>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Nome" />

                    <input placeholder="E-mail" />

                    <input placeholder="E-mail" />

                    <input placeholder="Tefone" />

                    <input placeholder="Assunto" />

                    <textarea placeholder="Mensagem" />

                    <ButtonContainer>
                        <button>Enviar</button>
                    </ButtonContainer>
                </form>
            </div>
        </Container>
    );
}
