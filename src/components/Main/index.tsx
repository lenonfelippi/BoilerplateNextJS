import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/coding.svg"
      alt="Imagem de um monitor com o símbolo < / > representando um código de programação."
    />
    <S.Title>Boilerplate NextJS</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/coffee.svg"
      alt="imagem de uma pessoa carregando uma enorme xícara de café, quase maior que ele mesmo"
    />
  </S.Wrapper>
)

export default Main
