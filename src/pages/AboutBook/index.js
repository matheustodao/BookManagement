import ReactDOM from 'react-dom';
import { useHistory, useParams } from 'react-router-dom';

import { books } from '../../mock/books';

import { Container } from './styles';

export default function AboutBook() {
  const { id } = useParams();
  const history = useHistory();

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
          <a to="/books">Voltar</a>
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
            <div>{genre}</div>
          ))}
        </div>

        <div>
          <div>
            <span>author</span>
            <strong id="author">{book.author}</strong>
          </div>

          <div>
            <span>published</span>
            <strong id="author">{book.published}</strong>
          </div>

        </div>
      </div>
    </Container>,
    document.getElementById('about-book'),
  );
}
