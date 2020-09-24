import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import "./style.css"
function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://pbs.twimg.com/profile_images/1244718251336241154/cMqiCblX_400x400.jpg"
             alt="João Gabriel e Marley"/>
             <div>
                 <strong>João Gabriel</strong>
                 <span>Química</span>
             </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /> <br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas 
            através de experiências. Mais de 200.000 pessoas já pasaram por uma das minhas
            explosões.
        </p>

        <footer>
            <p>
                preço/hora
                <strong>R$80.00</strong>
            </p>

            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>

    </article>
    )
}

export default TeacherItem;