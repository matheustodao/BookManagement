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

import { books } from './books';

export default function Books() {
  return (
    <>
      <Header
        placeholder="Search by: title, author or genre"
      >
        <ButtonAnchor to="/">
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
            >
              <div className="containerImage">
                <img
                  src={book.image}
                  alt={`Capa do livro ${book.title}`}
                />
              </div>

              <InfoBook>
                <span>{book.author}</span>
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
