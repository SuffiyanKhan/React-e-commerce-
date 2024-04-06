// import React from 'react';

// const StarRating = ({ rating }) => {
//   // Calculate number of full stars
//   const fullStars = Math.floor(rating);
//   // Calculate whether there is a half star
//   const halfStar = rating - fullStars >= 0.5 ? true : false;

//   // Create an array to store JSX for stars
//   const stars = [];
//   // Add full stars
//   for (let i = 0; i < fullStars; i++) {
//     stars.push(<span key={i}>&#9733;</span>);
//   }
//   // Add half star if exists
//   if (halfStar) {
//     stars.push(<span key={stars.length}>&#9734;</span>);
//   }
//   // Add remaining empty stars
//   const totalStars = 5;
//   const remainingStars = totalStars - stars.length;
//   for (let i = 0; i < remainingStars; i++) {
//     stars.push(<span key={stars.length}>&#9734;</span>);
//   }

//   return (
//     <div>
//         <p>rating : {stars}</p>
//         {/* {stars && `rating ${stars}`} */}
//     </div>
//   );
// };

// export default StarRating;


import React, { memo } from 'react';

const StarRating = ({ rating }) => {
  // Calculate number of full stars
  const fullStars = Math.floor(rating);
  // Calculate whether there is a half star
  const halfStar = rating - fullStars >= 0.5 ? true : false;

  // Create an array to store JSX for stars
  const stars = [];
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i}>&#9733;</span>);
  }
  // Add half star if exists
  if (halfStar) {
    stars.push(<span key={stars.length}>&#9734;</span>);
  }
  // Add remaining empty stars
  const totalStars = 5;
  const remainingStars = totalStars - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<span key={stars.length}>&#9734;</span>);
  }

  return (
    <div>Rating :  {stars} 
    </div>
  );
};

export default memo(StarRating);
