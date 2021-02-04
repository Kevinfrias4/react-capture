import React from 'react';
//Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
//Styles 
import { About, Description, Image } from '../styles';
import styled from 'styled-components';

const ServicesSection = () => {
    return(
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="camera"/>
            </Image>
        </Services>
    );
}

const Services =  styled(About)`
    h2 {
        padding-bottom: 3rem;
    }
    h3{
        font-size: 1rem;
    }
    p {
        font-size: 0.9rem;
        width: 70%;
        padding: 1.5rem 0rem 2.5rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const Card = styled.div`
    flex-basis: 12rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 0.3rem;
        }
    }
`;

export default ServicesSection;