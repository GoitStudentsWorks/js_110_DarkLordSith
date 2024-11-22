import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_URL = 'https://portfolio-js.b.goit.study/api/reviews';

let currentIndex = 0; 
let reviewsData = []; 
let visibleCount = getVisibleCount(); 

const reviewsContainer = document.querySelector('.reviews-list');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const prevIcon = prevButton.querySelector('.icon-button-swipe');
const nextIcon = nextButton.querySelector('.icon-button-swipe');

async function fetchReviews() {
  try {
    const response = await axios.get(API_URL);
    reviewsData = response.data;
    renderReviews(reviewsData);
    updateSliderState();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load reviews. Please try again later.',
    });
    renderPlaceholder();
  }
}

function getVisibleCount() {
  const width = window.innerWidth;
  if (width >= 1280) return 2; 
  if (width >= 768) return 1; 
  return 1; 
}

function renderReviews(reviews) {
  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount);
  const markup = visibleReviews
    .map(
      (review) => `
      <li class="review-item">
          <p class="author-feedback">${review.review}</p>
            <div class="avatar-text-container">
             <img class="review-avatar" src="${review.avatar_url}" alt="${review.author}" />
             <h3 class="name-author">${review.author}</h3>
          </div>
        </div>
      </li>
    `
    )
    .join('');

  reviewsContainer.innerHTML = markup;
}

function renderPlaceholder() {
  reviewsContainer.innerHTML = '<p class="no-reviews">Not found</p>';
}

function updateSliderState() {
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + visibleCount >= reviewsData.length;

  prevButton.disabled = isPrevDisabled;
  nextButton.disabled = isNextDisabled;

  prevButton.classList.toggle('disabled', isPrevDisabled);
  nextButton.classList.toggle('disabled', isNextDisabled);

  prevIcon.classList.toggle('icon-disabled', isPrevDisabled);
  nextIcon.classList.toggle('icon-disabled', isNextDisabled);
}



// ------------------------------------------------

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= visibleCount; 
    renderReviews(reviewsData);
    updateSliderState();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex + visibleCount < reviewsData.length) {
    currentIndex += visibleCount; 
    renderReviews(reviewsData);
    updateSliderState();
  }
});

window.addEventListener('resize', () => {
  const newVisibleCount = getVisibleCount();
  if (newVisibleCount !== visibleCount) {
    visibleCount = newVisibleCount;
    currentIndex = 0; 
    renderReviews(reviewsData);
    updateSliderState();
  }
});

fetchReviews();