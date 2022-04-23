import "bootstrap/dist/css/bootstrap.min.css";

import Card from "./Components/Card";

const App = () => {
  const books = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/51MT0MbpD7L.jpg",
      title: "The Subtle Art of Not Giving a F*ck",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/51DZeZw7K0L.jpg",
      title: "Greenlights ",
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg",
      title: "Atomic Habits",
    },
  ];

  return (
    <>
      <Card books={books} />
    </>
  );
};

export default App;
