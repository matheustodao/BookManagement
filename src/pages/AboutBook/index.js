import ReactDOM from 'react-dom';
import {
  useHistory,
  useParams,
  useLocation,
  Link,
} from 'react-router-dom';

import { BsArrowLeft, BsBoxArrowInUpRight } from 'react-icons/bs';
// import { BsBoxArrowInUpRight } from 'react-icons/bs';

import { books } from '../../mock/books';

import {
  Container,
  ButtonGoBack,
  Wrapper,
  Image,
  InformationBook,
  Title,
  Heading,
  Genres,
  BookSpine,
  Synopsis,
} from './styles';

export default function AboutBook() {
  const { id } = useParams();
  const history = useHistory();
  const { pathname } = useLocation();

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
          <ButtonGoBack to="/books">
            <BsArrowLeft size={24} />
            Voltar
          </ButtonGoBack>
        </div>
      </header>

      <section>
        <Wrapper>
          <Image>
            <img
              src={book.image}
              alt={`Capa do livro ${book.title}`}
            />
          </Image>

          <InformationBook>
            <Title>
              <Heading>title</Heading>
              <small>{book.title}</small>
            </Title>

            <Genres>
              <Heading>genres</Heading>
              <div>
                {book.genres.map((genre) => (
                  <button type="button" key={genre}>
                    {genre}
                  </button>
                ))}
              </div>
            </Genres>

            <BookSpine>
              <div>
                <Heading>author</Heading>
                <small>{book.author}</small>
              </div>

              <div>
                <Heading>published by</Heading>
                <small>{book.published}</small>
              </div>
            </BookSpine>

            <Synopsis>
              <Heading>Synopsis</Heading>
              <p>
                {book.synopsis}
                <Link to={`${pathname}/show-more-synopsis`}>
                  show more
                  <BsBoxArrowInUpRight size={18} />
                </Link>
              </p>
            </Synopsis>
          </InformationBook>
        </Wrapper>
      </section>
    </Container>,
    document.getElementById('about-book'),
  );
}
