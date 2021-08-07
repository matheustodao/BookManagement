import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

import { Container, SearchBox } from './styles';

export default function Header({ placeholder, children }) {
  return (
    <Container>
      <SearchBox>
        <button type="submit">
          <FiSearch size={24} style={{ transform: 'scaleX(-1)' }} />
        </button>
        <input
          type="search"
          placeholder={placeholder}
        />
      </SearchBox>
      {children}
    </Container>
  );
}

Header.propTypes = {
  placeholder: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};
