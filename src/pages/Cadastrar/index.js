import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { toast } from "react-toastify";
import { format } from 'date-fns'

import { Select, MenuItem, FormControl, TextField, TextareaAutosize } from '@material-ui/core';


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
            .matches(/[a-zA-Z]+/, 'O campo nome deve conter apenas letras.')
            .required('Nome é um campo obrigatório.'),
        email: Yup.string()
            .email('O campo deve ser um e-mail válido.')
            .required('E-mail é um campo obrigatório.'),
        telefone: Yup.number()
            .required('Telefone é um campo obrigatório'),
        assunto: Yup.number()
            .required('Assunto é um campo obrigatório'),
        mensagem: Yup.string()
            .min(1, "Digite algo na mensagem")
            .max(500, "Maximo de 500 caracteres apenas")
            .required('Mensagem é um campo obrigatório')
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
    }, { resetForm }) {
        await api.post('/mensagens', {
            id,
            nome,
            email,
            telefone,
            assunto,
            mensagem,
            data: format(new Date(), 'dd/MM/yyyy HH:MM')
        });

        resetForm({});

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
                    {({ values, isValid, dirty, errors }) => (
                        <Form>
                            <FormControl>
                                <Field
                                    className="generic-input"
                                    name="nome"
                                    children={({ field }) => (
                                        <TextField  {...field} label="Nome" />
                                    )}
                                />
                                <ErrorMessage
                                    name="nome"
                                    className="hasError"
                                    component="div"
                                />
                            </FormControl>
                            
                            <FormControl>
                                <Field
                                    className="generic-input"
                                    name="email"
                                    children={({ field }) => (
                                        <TextField  {...field} label="E-mail" />
                                    )}
                                />
                                <ErrorMessage
                                    name="email"
                                    className="hasError"
                                    component="div"
                                />
                            </FormControl>

                            <FormControl>
                                <Field
                                    className="generic-input"
                                    name="telefone"
                                    children={({ field }) => (
                                        <TextField  {...field} label="Telefone" />
                                    )}
                                />
                                <ErrorMessage
                                    name="telefone"
                                    className="hasError"
                                    component="div"
                                />
                            </FormControl>

                            <FormControl>
                                <Field
                                    className="generic-input"
                                    name="assunto"
                                    placeholder="Assunto"
                                    children={({ field, form }) => (
                                        <Select
                                            {...field}
                                            label="Assunto"
                                            onChange={e => {
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
                                    className="generic-input areaText"
                                    name="mensagem"
                                    children={({ field }) => (
                                        <>
                                        {/* {console.log(isValid)}
                                        {console.log(dirty)} */}
                                        {console.log(errors)}
                                            <TextareaAutosize rowsMin={10}  {...field} label="Mensagem" />
                                            <label className="contador">{values.mensagem ?
                                                values.mensagem.length + '/500'
                                                : '0/200'
                                            }</label>
                                        </>
                                    )}
                                />
                                <ErrorMessage
                                    name="mensagem"
                                    className="hasError"
                                    component="div"
                                />
                            </FormControl>

                            <ButtonContainer>
                                <button type="submit" disabled={dirty && errors.length === 0}>Enviar</button>
                            </ButtonContainer>
                        </Form>
                    )}
                    
                </Formik>
            </div>
        </Container>
    );
}
