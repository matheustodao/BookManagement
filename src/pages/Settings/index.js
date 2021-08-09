import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, Mode } from './styles';

export default function Settings() {
  const { onSelectTheme } = useContext(ThemeContext);
  return (
    <Container>
      <Mode
        type="button"
        onClick={() => onSelectTheme('default')}
        bg="#FF7B5C"
        color="#fff"
      >
        Default
      </Mode>

      <Mode
        type="button"
        onClick={() => onSelectTheme('purple')}
        bg="#846EA8"
        color="#fff"
      >
        Purple
      </Mode>

      <Mode
        type="button"
        onClick={() => onSelectTheme('dark')}
        bg="#2c3e50"
        color="#fff"
      >
        Dark
      </Mode>

      <Mode
        type="button"
        onClick={() => onSelectTheme('darkWhite')}
        bg="#5536"
        color="#fff"
      >
        Dark White
      </Mode>

    </Container>
  );
}
