import React, { useState } from "react";
import {
  RESOURCE_REVIEWS,
  REVIEW_HEAD,
  REVIEW_TITLE,
} from "../utils/reviewConfig";
import "../styles/review.css";
import { IMAGES } from "../utils/images";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ITEMS_PER_PAGE = 2;
  const handleLeftArrowClick = (e) => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? RESOURCE_REVIEWS.length - ITEMS_PER_PAGE
        : prevIndex - ITEMS_PER_PAGE
    );
    e.stopPropagation();
  };

  const handleRightArrowClick = (e) => {
    setCurrentIndex((prevIndex) =>
      prevIndex + ITEMS_PER_PAGE < RESOURCE_REVIEWS.length
        ? prevIndex + ITEMS_PER_PAGE
        : 0
    );
    e.stopPropagation();
  };

  const visibleReviews = RESOURCE_REVIEWS?.slice(
    currentIndex,
    currentIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="reviews-section">
      <div className="reviews-section-top">
        <div className="reviews-aside-tag">
          <h2 className="reviews-aside-tag-heading">{REVIEW_TITLE}</h2>
        </div>
        <h1 className="reviews-slider-heading">{REVIEW_HEAD}</h1>
      </div>
      <div className="reviews-section-body">
        <div className="reviews-collection">
          {visibleReviews?.map((item, index) => {
            const {
              id,
              title,
              content,
              userRole,
              company,
              username,
              profile,
              rate,
              userRating,
            } = item;

            const stars = [
              ...Array(userRating).fill(IMAGES.FULL_STAR),
              ...Array(rate - userRating).fill(IMAGES.EMPTY_STAR),
            ];

            return (
              <div className="review-1" key={id}>
                <img src={IMAGES.REVIEWS_QUOTES} alt="Quotes" className="review-quote-icon" />
                <div className="review-1-body">
                  <div className="review-1-top">
                    <h3 className="review-1-top-heading">{title}</h3>
                    <p className="review-1-top-body">{content}</p>
                  </div>
                  <div className="review-1-bottom">
                    <div className="review-1-profile-info">
                      <img src={profile} alt={`${username}'s Profile`} className="review-profile-avatar" />
                      <div className="review-1-details">
                        <h4 className="review-1-profile-name">{username}</h4>
                        <p className="review-1-profile-details">
                          <strong>{userRole}</strong>
                          {company && <span className="review-1-company"> — {company}</span>}
                        </p>
                      </div>
                    </div>
                    <div className="review-1-bottom-ratings" aria-label={`Rating: ${userRating} out of 5 stars`}>
                      {stars.map((star, starIdx) => (
                        <img src={star} alt="Star" key={starIdx} />
                      ))}
                    </div>
                  </div>
                </div>
                {index < visibleReviews.length - 1 && (
                  <img src={IMAGES.VERTICAL_LINE} alt="Divider" className="vertical-line" />
                )}
              </div>
            );
          })}
        </div>
        <div className="reviews-button">
          <button 
            type="button" 
            id="arrow-button" 
            onClick={handleLeftArrowClick} 
            aria-label="Previous testimonials"
          >
            <img src={IMAGES.LEFT_ARROW_BLACK} alt="Previous" />
          </button>
          <button 
            type="button" 
            id="arrow-button" 
            onClick={handleRightArrowClick} 
            aria-label="Next testimonials"
          >
            <img src={IMAGES.RIGHT_ARROW_DARK} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
