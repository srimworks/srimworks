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
          <hr className="reviews-aside-tag-hr" />
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
            console.log(stars)

            return (
              <div className="review-1" key={id}>
                < IMAGES.QUOTES className="icon-fill"/>
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
                  <IMAGES.VERTICAL_LINE className="vertical-line" id="icon-50" />
                )}
              </div>
            );
          })}
        </div>
        <div className="reviews-button">
          <div className="primary-button" onClick={handleLeftArrowClick}>
            <IMAGES.LEFT_ARROW className="icon-dark" />
          </div>
          <div className="primary-button" onClick={handleRightArrowClick}>
            <IMAGES.RIGHT_ARROW className="icon-dark"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;





