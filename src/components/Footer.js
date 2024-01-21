import React from 'react';
import styled from 'styled-components';
import logo from '../img/navbar_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <FooterContainer>
            <Row>
                <Column>
                    <LogoImage src={logo} alt="Logo" />
                </Column>
                <Column>
                    <FooterLink href="#about">About Us</FooterLink>
                </Column>
                <Column>
                    <FooterLink href="#services">Services</FooterLink>
                </Column>
                <Column>
                    <FooterLink href="#gallery">Testimonials</FooterLink>
                </Column>
                
                <Column>
                    <PhoneContainer>
                        <FontAwesomeIcon icon={faPhone} style={{ color: '#fff', marginRight: '10px' }} />
                        <PhoneNumber>+1 234 567 8900</PhoneNumber>
                    </PhoneContainer>
                    <InfoContainer>
                        <FontAwesomeIcon icon={faClock} style={{ color: '#fff', marginRight: '10px' }} />
                        <InfoText>Mon-Fri: 9am - 5pm</InfoText>
                    </InfoContainer>
                    <InfoContainer>
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#fff', marginRight: '10px' }} />
                        <InfoText>123 Main St, City, Country</InfoText>
                    </InfoContainer>
                </Column>
            </Row>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    max-width: 100%;
    margin: 0 auto;
    padding: 20px 10px;
    background: gray;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px) {
        gap: 10px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    flex: 1;
    margin-right: 20px;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 15px;
        margin-right: 0;
    }

    &:last-child {
        margin-right: 0;
    }
`;

const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 5px;
    font-size: 14px;
    text-decoration: none;

    &:hover {
        color: #fcb700;
        transition: 200ms ease-in;
    }
`;

const LogoImage = styled.img`
    max-height: 40px;
    margin-bottom: 5px;

    @media (max-width: 768px) {
        max-height: 30px;
        margin-bottom: 4px;
    }
`;

const PhoneContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 0.8rem;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 0.7rem;
        margin-bottom: 4px;
    }
`;

const PhoneNumber = styled.span`
    color: #fff;
    white-space: nowrap;

    &:hover {
        color: #fcb700;
        transition: 200ms ease-in;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    &:hover {
        color: #fcb700;
        transition: 200ms ease-in;
    }
`;

const InfoText = styled.span`
    color: #fff;
    white-space: nowrap;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px;
    }

    &:hover {
        color: #fcb700;
        transition: 200ms ease-in;
    }
`;
