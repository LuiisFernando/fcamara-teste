import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { toast } from "react-toastify";
import { format } from 'date-fns'

import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';


import api from '../../services/api';

import {
    Container,
    ButtonContainer
} from './styles';

export default function Cadastrar() {
    const [id, setID] = useState(0);
    const [assuntos, setAssuntos] = useState([]);

    const initialValues = {
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
    }

    const schema = Yup.object().shape({
        nome: Yup.string()
            .trim()
            .matches(/^[a-z]+$/)
            .required('Nome é um campo obrigatório.'),
        email: Yup.string()
            .email()
            .required('E-mail é um campo obrigatório.'),
        telefone: Yup.number()
            .required(),
        assunto: Yup.number()
            .required(),
        mensagem: Yup.string()
            .min(1, "Digite algo na mensagem")
            .max(500, "Maximo de 500 caracteres apenas")
            .required()
    });

    async function proximoID() {
        const response = await api.get('/mensagens');

        const ultimaMensagem = response.data[response.data.length - 1];
    
        setID(ultimaMensagem.id + 1);
    }

    async function carregarAssuntos() {
        const response = await api.get('/assuntos');

        setAssuntos(response.data);
    }

    useEffect(() => {
        proximoID();
        carregarAssuntos();
    }, [])

    async function handleSubmit({
        nome,
        email,
        telefone,
        assunto,
        mensagem
    }) {
        
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

        toast.success("Mensagem adicionada!");
    }

    return (
        <Container>
            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            <FormControl>
                                <Field
                                    className="input-teste"
                                    name="nome"
                                    placeholder="Nome"
                                />
                                <ErrorMessage
                                    name="nome"
                                    className="hasError"
                                    component="div"
                                />
                            </FormControl>
                            
                            <FormControl>
                                <Field
                                    className="input-teste"
                                    name="email"
                                    placeholder="E-mail"
                                />
                                <ErrorMessage
                                    name="email"
                                    className="hasError"
                                    component="div"
                                />
                            </FormControl>

                            <FormControl>
                                <Field
                                    className="input-teste"
                                    name="telefone"
                                    placeholder="Telefone"
                                />
                                <ErrorMessage
                                    name="telefone"
                                    className="hasError"
                                    component="div"
                                />
                            </FormControl>

                            <FormControl>
                                <Field
                                    className="input-teste"
                                    name="assunto"
                                    placeholder="Assunto"
                                    render={({ field, form }) => (
                                        <>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            {...field}
                                            placeholder="Assunto"
                                            
                                            onChange={e => {
                                                debugger;
                                                if (e) {
                                                    form.setFieldValue('assunto', e.target.value);
                                                } else {
                                                    form.setFieldValue('assunto', "");
                                                    field.value = "";
                                                }
                                                }}
                                        >
                                            {assuntos && assuntos.map(assunto => (
                                                <MenuItem 
                                                    key={assunto.id}
                                                    value={assunto.id}
                                                >
                                                    {assunto.descricao}
                                                </MenuItem>))}
                                        </Select>
                                        </>
                                    )}
                                />
                                <ErrorMessage
                                    name="assunto"
                                    className="hasError"
                                    component="div"
                                />
                            </FormControl>


                            <FormControl>
                                <Field
                                    className="input-teste"
                                    name="mensagem"
                                    placeholder="Mensagem"
                                />
                                <ErrorMessage
                                    name="mensagem"
                                    className="hasError"
                                    component="div"
                                />
                            </FormControl>

                            <ButtonContainer>
                                <button type="submit">Enviar</button>
                            </ButtonContainer>
                        </Form>
                    )}
                    
                </Formik>
            </div>
        </Container>
    );
}
