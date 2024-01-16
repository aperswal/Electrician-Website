import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/navbar_logo.png";
import phoneIcon from "../img/telephone_icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const scrollThreshold = documentHeight - windowHeight - 100;

            if (scrollY > scrollThreshold) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box show={showFooter}>
            <FooterContainer>
                <Row>
                    <Column>
                        <LogoImage src={logo} alt="Logo" />
                    </Column>
                    <Column>
                        <FooterLink href="#">About Us</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">Services</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <FooterLink href="#">Contact Us</FooterLink>
                    </Column>
                    <Column>
                        {/* Grouping phone, hours, and location together */}
                        <PhoneContainer>
                            <FontAwesomeIcon icon={faPhone} style={{ color: '#fff', marginRight: '10px' }} /> {/* Use FontAwesome icon */}
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
        </Box>
    );
}

const Box = styled.div`
    display: ${({ show }) => (show ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    background: gray;
    padding: 10px 0; // Reduced padding
    width: 100%;
    position: fixed;
    bottom: 0;
`;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10px; // Adjusted padding

    @media (max-width: 768px) {
        flex-direction: column;
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
    margin-right: 20px; // Add right margin to each column

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 15px;
        margin-right: 0; // Remove right margin on smaller screens
    }

    &:last-child {
        margin-right: 0; // Remove right margin for the last column
    }
`;

const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 5px; // Reduced margin
    font-size: 14px; // Adjusted font-size
    text-decoration: none;

    @media (max-width: 768px) {
        font-size: 12px;
        margin-bottom: 4px;
    }

    &:hover {
        color: #fcb700;
        transition: 200ms ease-in;
    }
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px; // Add gap between flex items

    @media (max-width: 768px) {
        gap: 10px; // Smaller gap on smaller screens
    }
`;


const LogoImage = styled.img`
    max-height: 40px; // Reduced height
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
    font-size: 0.8rem; // Adjusted font-size
    margin-top: 10px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 0.7rem;
        margin-bottom: 4px;
    }
`;

const PhoneIcon = styled.img`
    max-width: 20px;
    margin-right: 10px;

    @media (max-width: 768px) {
        max-width: 15px;
        margin-right: 5px;
    }
`;

const PhoneNumber = styled.span`
    color: #fff;
    white-space: nowrap; // Prevents wrapping of the phone number

    &:hover {
        color: #fcb700;
        transition: 200ms ease-in;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px; // Increased bottom margin

    &:hover {
        color: #fcb700;
        transition: 200ms ease-in;
    }
`;

const Icon = styled.img`
    max-width: 20px;
    margin-right: 10px;
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
