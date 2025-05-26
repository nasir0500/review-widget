document.addEventListener('DOMContentLoaded', () => {
    const reviewsData = [
        {
            reviewerImg: 'https://via.placeholder.com/50/574b90/FFFFFF?text=OF', // Replace with actual Shopify asset URL if needed
            reviewerName: 'Omar Farooq',
            date: '2 hours ago',
            rating: 5,
            content: "As a regular customer from Bangladesh, I can confidently say this is my go-to store for premium seafood. The Ahi Tuna Steaks are consistently sashimi-grade, vibrant in color, and perfect for a quick sear. Their dedication to quality and reliable delivery service makes them stand out. Always a fantastic experience!"
        },
        {
            reviewerImg: 'https://via.placeholder.com/50/e7721b/FFFFFF?text=RS',
            reviewerName: 'Rajeev Sharma',
            date: '2 hours ago',
            rating: 4,
            content: "Ordering from this store was a breeze, and the delivery to my doorstep in Mumbai was surprisingly fast. The shrimp I ordered were fresh and tasted great. The packaging was good too, keeping everything chilled. I'm satisfied with my purchase and will likely order again."
        },
        {
            reviewerImg: 'https://via.placeholder.com/50/2e2e2e/FFFFFF?text=AK',
            reviewerName: 'Ayesha Khan',
            date: '2 hours ago',
            rating: 5,
            content: "I was so impressed with the Fresh Atlantic Salmon Fillet! It arrived perfectly chilled and looked incredibly fresh. It cooked beautifully and tasted amazing, very rich and flaky. This is definitely a new favorite and I highly recommend it for anyone looking for quality salmon."
        },
        {
            reviewerImg: 'https://via.placeholder.com/50/574b90/FFFFFF?text=FH',
            reviewerName: 'Fatima Al-Hassan',
            date: '2 hours ago',
            rating: 5,
            content: "These Wild-Caught Cod Loins are a game-changer for our family meals. The loins were thick, boneless, and cooked up perfectly flaky and tender. The taste was very clean and fresh. My kids even loved them! This is a must-try for healthy and delicious dinners."
        },
        {
            reviewerImg: 'https://via.placeholder.com/50/e7721b/FFFFFF?text=ZA',
            reviewerName: 'Zoya Ahmed',
            date: '2 hours ago',
            rating: 5,
            content: "I've ordered the Fresh Atlantic Salmon multiple times, and the quality is consistently exceptional. What truly makes them stand out is their dedication to ensuring every fillet is perfectly handled. The delivery is always on time, and the fish is always pristine. Highly recommended!"
        },
        {
            reviewerImg: 'https://via.placeholder.com/50/2e2e2e/FFFFFF?text=AD',
            reviewerName: 'Aman Das',
            date: '3 hours ago',
            rating: 4,
            content: "The sea bass fillets were of good quality, and the delivery was prompt. They were well-packaged and arrived fresh. I found them easy to cook and they tasted good, though perhaps a little less firm than I expected. Overall, a decent purchase."
        },
        {
            reviewerImg: 'https://via.placeholder.com/50/574b90/FFFFFF?text=PK',
            reviewerName: 'Priya Kumari',
            date: '3 hours ago',
            rating: 5,
            content: "Excellent quality prawns! They were large, fresh, and tasted fantastic in my curry. The ordering process was smooth, and they arrived exactly when expected. I'm very happy with this purchase and will definitely be buying more seafood from here."
        },
        {
            reviewerImg: 'https://via.placeholder.com/50/e7721b/FFFFFF?text=SK',
            reviewerName: 'Sameer Kapoor',
            date: '4 hours ago',
            rating: 3,
            content: "The crab claws arrived in good condition, but I felt they were a bit small for the price. The taste was fine, but nothing exceptional. Delivery was quick, which was a plus. I might try other products next time."
        },
        {
            reviewerImg: 'https://via.placeholder.com/50/2e2e2e/FFFFFF?text=NK',
            reviewerName: 'Neha Kumari',
            date: '4 hours ago',
            rating: 5,
            content: "Absolutely loved the scallops! They were plump, sweet, and cooked beautifully. Perfect for a quick gourmet meal at home. The packaging kept them fresh until I was ready to use them. Highly recommend for a special treat!"
        },
        {
            reviewerImg: 'https://via.placeholder.com/50/574b90/FFFFFF?text=RM',
            reviewerName: 'Rahul Mehra',
            date: '5 hours ago',
            rating: 4,
            content: "The squid rings were quite good, fresh and tender after cooking. They worked well in my stir-fry. The only minor issue was that some pieces were a bit irregular in size. Otherwise, a solid purchase for seafood lovers."
        },
        {
            reviewerImg: 'https://via.placeholder.com/50/e7721b/FFFFFF?text=SA',
            reviewerName: 'Sara Ali',
            date: '5 hours ago',
            rating: 5,
            content: "Fantastic quality hake fillets! They were firm, white, and had a lovely mild flavor. Cooked them simply with lemon and herbs, and they were delicious. This store has quickly become my go-to for fresh fish. Always reliable and top-notch."
        }
    ];

    const reviewsContainer = document.querySelector('.reviews-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const reviewPopupOverlay = document.querySelector('.review-popup-overlay');
    const popupContent = document.querySelector('.review-popup .popup-content');
    const popupCloseBtn = document.querySelector('.popup-close-btn');

    const CHAR_LIMIT = 110; // Character limit for visible review content

    // Function to render reviews
    function renderReviews() {
        reviewsContainer.innerHTML = ''; // Clear existing reviews
        reviewsData.forEach(review => {
            const reviewCard = document.createElement('div');
            reviewCard.classList.add('review-card');

            const shortContent = review.content.length > CHAR_LIMIT
                ? review.content.substring(0, CHAR_LIMIT) + '...'
                : review.content;

            const fullContent = review.content;

            reviewCard.innerHTML = `
                <div class="reviewer-info">
                    <img src="${review.reviewerImg}" alt="${review.reviewerName}" class="reviewer-img">
                    <div class="reviewer-details">
                        <div class="reviewer-name">
                            ${review.reviewerName}
                            <span class="verified-icon">&#10003;</span>
                        </div>
                        <div class="review-date">${review.date}</div>
                    </div>
                </div>
                <div class="rating-stars">
                    ${'<span class="star">&#9733;</span>'.repeat(review.rating)}
                </div>
                <div class="review-content">
                    <span class="review-content-short">${shortContent}</span>
                    <span class="review-content-full" style="display: none;">${fullContent}</span>
                    ${review.content.length > CHAR_LIMIT ? '<a href="#" class="read-more-btn">Read more</a>' : ''}
                </div>
            `;
            reviewsContainer.appendChild(reviewCard);
        });
        addReadMoreListeners(); // Add listeners after rendering
    }

    // Add event listeners for "Read more" buttons
    function addReadMoreListeners() {
        document.querySelectorAll('.read-more-btn').forEach(button => {
            button.removeEventListener('click', handleReadMoreClick); // Prevent duplicate listeners
            button.addEventListener('click', handleReadMoreClick);
        });
    }

    // Handle "Read more" click
    function handleReadMoreClick(event) {
        event.preventDefault(); // Prevent default link behavior

        const reviewCard = event.target.closest('.review-card');
        if (!reviewCard) return;

        const reviewerImg = reviewCard.querySelector('.reviewer-img').src;
        const reviewerName = reviewCard.querySelector('.reviewer-name').firstChild.textContent.trim();
        const reviewDate = reviewCard.querySelector('.review-date').textContent;
        const ratingStarsHtml = reviewCard.querySelector('.rating-stars').innerHTML;
        const fullReviewText = reviewCard.querySelector('.review-content-full').textContent;

        popupContent.innerHTML = `
            <div class="reviewer-info">
                <img src="${reviewerImg}" alt="${reviewerName}" class="reviewer-img">
                <div class="reviewer-details">
                    <div class="reviewer-name">
                        ${reviewerName}
                        <span class="verified-icon">&#10003;</span>
                    </div>
                    <div class="review-date">${reviewDate}</div>
                </div>
            </div>
            <div class="rating-stars">
                ${ratingStarsHtml}
            </div>
            <p class="full-review-text">${fullReviewText}</p>
        `;
        reviewPopupOverlay.classList.add('visible');
    }

    // Close popup
    popupCloseBtn.addEventListener('click', () => {
        reviewPopupOverlay.classList.remove('visible');
    });

    // Close popup if clicking outside
    reviewPopupOverlay.addEventListener('click', (event) => {
        if (event.target === reviewPopupOverlay) {
            reviewPopupOverlay.classList.remove('visible');
        }
    });

    // Slider functionality
    leftArrow.addEventListener('click', () => {
        reviewsContainer.scrollBy({
            left: -reviewsContainer.offsetWidth / 2, // Scroll by half visible width
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        reviewsContainer.scrollBy({
            left: reviewsContainer.offsetWidth / 2, // Scroll by half visible width
            behavior: 'smooth'
        });
    });

    // Initial render of reviews
    renderReviews();
});
