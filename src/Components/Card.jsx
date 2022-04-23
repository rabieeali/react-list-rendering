import { v4 as uuidv4 } from 'uuid';


const Card = ({ books }) => {
  return (
    <div className="container">
      <div className="row">
        {books.map((book) => (
          <div key={uuidv4()} className="col-md-4 mt-4 shadow card">
            <img src={book.img} className="card-img-top" alt="book" />
            <div className="card-body">
              <h5 className="card-title text-secondary">{book.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
