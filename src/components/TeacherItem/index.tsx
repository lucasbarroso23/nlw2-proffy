import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/55262061?s=460&u=afd5e36a1928c45b184a72081834fe19a88b7046&v=4" alt="Lucas Barroso" />
                <div>
                    <strong>Lucas Barroso</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiata das melhores tecnologias de química avançada.
            <br />
            Apaixonado por explodir coisas em laboratório e por mudar a vidas das pessoas através de experiências.Mais de 200.00 pessoas já passaram por uma das minhas explosões
        </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Wahtsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;