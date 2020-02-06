import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { format } from 'date-fns'
import * as Yup from "yup";

import api from '../../services/api';

import {
    Container,
    ButtonContainer
} from './styles';

export default function Cadastrar() {
    const [id, setID] = useState(0);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function proximoID() {
        const response = await api.get('/mensagens');

        const ultimaMensagem = response.data[response.data.length - 1];
    
        setID(ultimaMensagem.id + 1);
    }

    useEffect(() => {
        proximoID();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        
        await api.post('/mensagens', {
            id,
            nome,
            email,
            telefone,
            assunto,
            mensagem,
            data: format(new Date(), 'dd/MM/yyyy HH:MM')
        });

        proximoID();
        setNome('');
        setEmail('');
        setTelefone('');
        setAssunto('');
        setMensagem('');

        toast.success("Mensagem adicionada!");
    }

    return (
        <Container>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)} 
                    />

                    <input
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        placeholder="Telefone"
                        value={telefone}
                        onChange={e => setTelefone(e.target.value)}
                    />

                    <input
                        placeholder="Assunto"
                        value={assunto}
                        onChange={e => setAssunto(e.target.value)}
                    />

                    <textarea
                        placeholder="Mensagem"
                        value={mensagem}
                        onChange={e => setMensagem(e.target.value)}
                    />

                    <ButtonContainer>
                        <button>Enviar</button>
                    </ButtonContainer>
                </form>
            </div>
        </Container>
    );
}
