import { Container, InputSearchContainer, Logo } from './styles';

import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <Logo src={logo} alt="MyContacts" />
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome..."
        />
      </InputSearchContainer>
    </Container>
  );
}
