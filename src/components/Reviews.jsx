import React from "react";

const reviews = [
  "Anirudh is a dedicated and hardworking professional.",
  "Great problem-solving skills and team player.",
  "Consistently delivers high-quality work and exceeds expectations.",
];

function Reviews() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column", // Add this
        justifyContent: "center",
        alignItems: "center",
      }}
      className="text-white"
    >
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-center">Reviews</h2>
        <div className="mt-4 flex flex-col items-center">
          {reviews.map((review) => (
            <p key={review} className="bg-gray-700 p-4 rounded my-2 w-full">
              {review}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
