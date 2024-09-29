// O MODEL VAI DEFINIR AS REGRAS DA CRIAÇÃO DE UM LIVRO, VIRA UMA CLASSE PRA SER INSTANCIADA E CRIAR A REGRA DE COMO A COLLETION SERÁ CRIADA LÁ NO MONGO

import { model, Schema } from "mongoose";
// um livro é um documento
// uma coleçaõ de livros = colection
//Qundo a primeira chamada de criar um livro acontecer, a colection será criada automáticamente no mongodb
//Não precisamos criar id, ele cria automaticamento quando um document é criado

//método de schema

const BookSchema = new Schema({
    title: {
        type: String,
        require: true
    },

    author: {
        type: String,
        require: true
    },
    isbn: {
        type: String,
        require: true
    },
    publisher: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    cover: {
        type: String,
        require: false
    },
    status: {
        type: String,
        require: true
    },
    createdAt: {
        type: String,
        require: true,
    }
    
})

export const BookModel = model('books', BookSchema)

