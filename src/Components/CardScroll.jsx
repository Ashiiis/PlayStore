import React from "react";
import "./CardScroll.css"; // If you're using custom CSS

const cards = [
  {
    title: "Photo & Video Editor - Canva",
    rating: "4.6",
    img: "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBb8YkqrmoFjcMUJULGOJelB2xofORzok428pzl5FOCZ1jR6d6AlsapO6I1.UnqojcWdNNZUQOxtY.YjIfJF3TqY-&format=source",
  },
  {
    title: "Snapseed",
    rating: "4.4",
    img: "https://animationvisarts.com/wp-content/uploads/2024/01/image.png",
  },
  {
    title: "Adobe Lightroom",
    rating: "4.3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYGK1sj6Ybm8uhae8QSfgNzGHLbTQWqaTnQ&s",
  },
  // Add more cards...
];

const CardScroll = () => {
  return (
    <div className="card-title">
        <h2>Top Trending</h2>
    <div className="card-scroll-container">
        
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.img} alt={card.title} />
          <div className="card-title">{card.title}</div>
          <div className="card-rating">{card.rating} </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardScroll;
