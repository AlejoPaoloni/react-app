import Card from 'react-bootstrap/Card';
import localMauri from '../../assets/local-mauri.png';

import "./AboutUs.css";

const AboutUs = () => {
    return (
        <>
        <title>Mauri Sport | Nosotros</title>
            <Card className='card-container-about'>
                <Card.Img className='card-img' variant="top" src={localMauri} />
                <Card.Body className='card-body'>
                    <Card.Text className='card-text'>
                        Somos una tienda de indumentaria deportiva y de moda úbicada en la ciudad de Totoras, Santa Fe, Argentina.<a className='ubication' href='https://goo.gl/maps/oKQM1NPJd1M9gmyx6' target={'_blank'} rel="noreferrer" >Ver Ubicación</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default AboutUs;