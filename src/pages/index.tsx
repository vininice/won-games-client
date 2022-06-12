import type { NextPage } from 'next'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg};

  display: flex;
  align-items: center;
  justify-content: center;
`

const Home: NextPage = () => {
  return (
    <Wrapper>
      <h1>home</h1>
    </Wrapper>
  )
}

export default Home
