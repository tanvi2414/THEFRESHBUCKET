import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const likeStyle = { color: "red", fontSize: "3rem" };

  return (
    <div>
      <p onClick={toggleLike} style={{ cursor: "pointer" }}>
        {isLiked ? (
          <AiFillHeart style={likeStyle} />
        ) : (
          <AiOutlineHeart style={{ fontSize: "2rem" }} />
        )}
      </p>
    </div>
  );
}
