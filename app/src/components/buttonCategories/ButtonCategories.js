import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import "./ButtonCategories.css";


const ButtonCategories = () => {

    const [setCategoryName] = useState("")

    const changeCategoryTodos = () => {
        setCategoryName("Todos los productos")
    }

    const changeCategoryIndumentaria = () => {
        setCategoryName("Indumentaria")
    }

    const changeCategoryCalzado = () => {
        setCategoryName("Calzado")
    }

    const changeCategoryAccesorios = () => {
        setCategoryName("Accesorios")
    }

    return (
        <div>
            <ButtonGroup className='button-container'>
                <Button onClick={changeCategoryTodos} className='button-category'>Todos los productos</Button>
                <Button onClick={changeCategoryIndumentaria} className='button-category'>Indumentaria</Button>
                <Button onClick={changeCategoryCalzado} className='button-category'>Calzado</Button>
                <Button onClick={changeCategoryAccesorios} className='button-category'>Accesorios</Button>
            </ButtonGroup>
        </div>
    )
};

export default ButtonCategories;
