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
              icon,
              title,
              content,
              userRole,
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
                 < img src={IMAGES.REVIEWS_QUOTES} alt="Quotes"/>
                <div className="review-1-body">
                  <div className="review-1-top">
                    <h1 className="review-1-top-heading">{title}</h1>
                    <p className="review-1-top-body">{content}</p>
                  </div>
                  <div className="review-1-bottom">
                    <div className="review-1-profile-info">
                      <img src={profile} alt={`${username}'s Profile`} />
                      <div className="review-1-details">
                        <h3 className="review-1-profile-name">{username}</h3>
                        <p className="review-1-profile-details">{userRole}</p>
                      </div>
                    </div>
                    <div className="review-1-bottom-ratings">
                      {stars.map((star, index) => (
                        <img src={star} alt="Star" key={index} />
                      ))}
                    </div>
                  </div>
                </div>
                {index < 1 && (
                <img src={IMAGES.VERTICAL_LINE} alt="Vertical Line" className="vertical-line"/>
             
                )}
              </div>
            );
          })}
        </div>
        <div className="reviews-button">
          <div id="arrow-button" onClick={handleLeftArrowClick}>
            < img src={IMAGES.LEFT_ARROW_BLACK} alt="Left Arrow"/> 
          </div>
          <div id="arrow-button" onClick={handleRightArrowClick}>
            < img src={IMAGES.RIGHT_ARROW_DARK} alt="Right Arrow"/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;





