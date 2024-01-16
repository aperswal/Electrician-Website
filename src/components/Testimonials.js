import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar, faStarHalfAlt, faStar as farFaStar } from '@fortawesome/free-solid-svg-icons';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GlobalStyle = createGlobalStyle`
  .slick-slide {
    padding: 15px; // Adjust as needed for spacing
  }
`;

export default function Testimonials() {
    const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow(window.innerWidth));

    function getSlidesToShow(width) {
        if (width < 600) return 1;
        if (width >= 600 && width < 900) return 2;
        return 3;
    }

    useEffect(() => {
        function handleResize() {
            setSlidesToShow(getSlidesToShow(window.innerWidth));
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", left: "30px", zIndex: 1 }}
                onClick={onClick}
            >
                {"<"} {/* Arrow character for visibility */}
            </div>
        );
    }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", right: "10px" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        centerMode: true, // Enable center mode
        centerPadding: '60px', // Adjust as needed
        speed: 500,
        slidesToShow, // Dynamically set slides to show
        slidesToScroll: 1, // Scroll the same number of slides
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    

    const reviews = [
        {
            name: "Jane Smith",
            weeksAgo: 3,
            rating: 4.5,
            review: "The team was punctual and professional. They resolved our wiring issue quickly and efficiently, with minimal disruption."
        },
        {
            name: "Michael Johnson",
            weeksAgo: 5,
            rating: 5,
            review: "Exceptional service! The electrician was knowledgeable and courteous, and the customer service was outstanding from start to finish."
        },
        {
            name: "Emily Davis",
            weeksAgo: 2,
            rating: 4,
            review: "Great work on our home renovation project. They installed new lighting fixtures and outlets, all perfectly done and looking great."
        },
        {
            name: "Chris Brown",
            weeksAgo: 8,
            rating: 3.5,
            review: "Good service overall, but scheduling was a bit challenging. The work done was top-notch, though."
        },
        {
            name: "Laura Wilson",
            weeksAgo: 1,
            rating: 5,
            review: "Impressed with their quick response to an emergency electrical issue. They ensured our safety and fixed the problem efficiently."
        }
    ];
    

    return (
    <>
        <GlobalStyle />
        <TestimonialsWrapper>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <ReviewCard key={index}>
                        <ReviewerName>{review.name}</ReviewerName>
                        <ReviewInfo>
                            <StarRating rating={review.rating} />
                            <WeeksAgo>{review.weeksAgo} weeks ago</WeeksAgo>
                        </ReviewInfo>
                        <ReviewText>{review.review}</ReviewText>
                    </ReviewCard>
                ))}
            </Slider>
        </TestimonialsWrapper>
    </>
    );
}

const TestimonialsWrapper = styled.div`
    position: relative;
    width: 90%;
    margin: auto;
    padding: 20px;
`;

const ReviewCard = styled.div`
    background: #f8f8f8;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    text-align: center;
    
    width: 300px; // Adjust width as needed
    height: auto; // Height adjusts to content

    margin: 30px; // Increase margin for more white space

    // Responsive adjustments (optional)
    @media (max-width: 768px) {
        width: 250px;
        margin: 20px; // Slightly smaller margin on smaller screens
    }

    @media (max-width: 480px) {
        width: 200px;
        margin: 15px; // Even smaller margin on very small screens
    }
`;



const ReviewerName = styled.h3`
    color: #333;
    margin-bottom: 5px;
`;

const ReviewInfo = styled.div`
    margin-bottom: 10px;
`;

const WeeksAgo = styled.span`
    display: block;
    color: #666;
    font-size: 0.9em;
`;

const ReviewText = styled.p`
    color: #555;
`;

const StarRating = ({ rating }) => {
    const totalStars = 5;
    let stars = [];

    for (let i = 1; i <= totalStars; i++) {
        if (i <= Math.floor(rating)) {
            // Full stars (filled)
            stars.push(
                <FontAwesomeIcon key={i} icon={fasFaStar} style={{ color: '#fcb700' }} />
            );
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            // Half star logic
            stars.push(
                <FontAwesomeIcon key={i} icon={faStarHalfAlt} style={{ color: '#fcb700' }} />
            );
        } else {
            // Empty stars (unfilled)
            stars.push(
                <FontAwesomeIcon key={i} icon={farFaStar} style={{ color: 'lightgray' }} />
            );
        }
    }

    return <div>{stars}</div>;
};