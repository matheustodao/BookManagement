import { useHistory } from 'react-router-dom';

import { ImBooks } from 'react-icons/im';
import { AiOutlineArrowDown } from 'react-icons/ai';

import Header from '../../components/Header';
import { ButtonAnchor } from '../../components/Buttons';

import {
  Container,
  BookCard,
  InfoBook,
  WrapperBookCard,
} from './styles';

import { books } from '../../mock/books';

export default function Books() {
  const history = useHistory();

  function handleGoAboutBook(item) {
    const { id } = item;
    const title = item.title
      .split(' ')
      .join('-')
      .toLowerCase();
    const author = item.author[0]
      .split(' ')
      .join('')
      .toLowerCase();
    history.push(`/books/${id}/${author}/${title}`);
  }

  return (
    <>
      <Header
        placeholder="Search by: title, author or genre"
      >
        <ButtonAnchor to="/" padding="1.2rem 2.4rem">
          <ImBooks size={24} />
          new book
        </ButtonAnchor>
      </Header>

      <Container>
        <div className="titleSection">
          <AiOutlineArrowDown size={28} />
          <h1>books</h1>
        </div>

        <WrapperBookCard>
          {books.map((book) => (
            <BookCard
              key={book.id}
              onClick={() => handleGoAboutBook(book)}
            >
              <div className="containerImage">
                <img
                  src={book.image}
                  alt={`Capa do livro ${book.title}`}
                />
              </div>

              <InfoBook>
                <span>{book.author[0]}</span>
                <h3>{book.title}</h3>
                <span>{book.published}</span>
              </InfoBook>
            </BookCard>
          ))}
        </WrapperBookCard>
      </Container>
    </>
  );
}
