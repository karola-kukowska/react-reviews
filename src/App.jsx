import { useState } from "react";
import Review from "./Review";
import reviews from "./data.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const App = () => {
  const [people, setPeople] = useState(reviews);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    currentIndex < people.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0);
  };

  const showPrev = () => {
    currentIndex == 0
      ? setCurrentIndex(people.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const showRandom = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === currentIndex) {
      newIndex++;
    }
    setCurrentIndex(newIndex % people.length);
  };

  return (
    <main>
      <div className="title">
        <h1>Random Reviews</h1>
        <div className="title-underline"></div>
      </div>
      <article className="review">
        {people
          .filter((rev, index) => index == currentIndex)
          .map((rev) => {
            return <Review key={rev.id} {...rev} />;
          })}
        <div className="btn-container">
          <button type="button" className="prev-btn">
            <FaChevronLeft onClick={() => showPrev()} />
          </button>
          <button type="button" className="next-btn" onClick={() => showNext()}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={() => showRandom()}
        >
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
