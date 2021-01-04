import React, { useCallback } from 'react';
import { FaHatWizard } from 'react-icons/fa';

import { useTheme } from '../../hooks/Theme';

import { Container } from './styles';

const Main: React.FC = () => {
  const { changeTheme, theme } = useTheme();

  const handleChangeTheme = useCallback(() => {
    changeTheme(theme === 'light' ? 'dark' : 'light');
  }, [changeTheme, theme]);

  return (
    <Container>
      <h1>
        <FaHatWizard />
        Hello World from Mystical Land
      </h1>
      <button type="button" onClick={handleChangeTheme}>
        Magic Theme Button
      </button>
    </Container>
  );
};

export default Main;
