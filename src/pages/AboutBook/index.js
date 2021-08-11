import ReactDOM from 'react-dom';
import {
  useHistory,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';

import { books } from '../../mock/books';

import { Container } from './styles';

export default function AboutBook() {
  const { id } = useParams();
  const history = useHistory();
  const { pathname } = useLocation();
  console.log(pathname);

  const book = books.find((item) => (
    item.id === Number(id) && item
  ));

  if (!book) {
    history.push('/books');
  }
  return ReactDOM.createPortal(
    <Container>
      <header>
        <div>
          <Link to="/books">Voltar</Link>
        </div>
      </header>

      <div>
        <div>
          <img
            src={book.image}
            alt={`Capa do livro ${book.title}`}
          />
        </div>

        <div>
          <span>Title Of book</span>
          <strong>{book.title}</strong>
        </div>

        <div>
          <span>Genre(s)</span>
          {book.genres.map((genre) => (
            <div key={genre}>{genre}</div>
          ))}
        </div>

        <div>
          <div>
            <span>author</span>
            <strong>{book.author}</strong>
          </div>

          <div>
            <span>published by</span>
            <strong>{book.published}</strong>
          </div>
        </div>

        <div>
          <span>synopsis of the book</span>
          <div>
            <p>{book.synopsis}</p>
            <Link to={`${pathname}/show-more-synopsis`}>show more</Link>
          </div>
        </div>
      </div>
    </Container>,
    document.getElementById('about-book'),
  );
}
