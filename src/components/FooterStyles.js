import styled from "styled-components";

export const Box = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: black;
    padding: 20px 0;
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between; /* Added to separate logo and phone icon */
    align-items: center; /* Center content vertically */
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px; /* Added padding to create space between elements */
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center; /* Center text horizontally */
    margin-bottom: 20px;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap to the next row */
    justify-content: space-between; /* Separate columns with space */
    gap: 20px;
`;

export const FooterLink = styled.a`
    color: #fff;
    margin: 10px 0; /* Add equal top and bottom margin */
    font-size: 16px; /* Increase font size */
    text-decoration: none;
    padding: 0px 20px; /* Add padding between the words */

    @media (max-width: 768px) {
        /* Adjust spacing for smaller screens */
        padding: 0px 10px;
        font-size: 14px;
    }

    &:hover {
        color: #fcb700;
        transition: 200ms ease-in;
    }
`;

export const LogoImage = styled.img`
    max-height: 50px; /* Set the maximum height for the logo */
`;

export const PhoneContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1rem;
`;

export const PhoneIcon = styled.img`
    max-width: 20px; /* Set the maximum width for the phone icon */
    margin-top: 5px;
    margin-right: 10px;
`;

export const PhoneNumber = styled.span`
    color: #fff;
    &:hover {
        color: #fcb700;
        transition: 200ms ease-in;
    }
`;