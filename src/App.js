import {Component} from 'react'
import styled from 'styled-components'
import './App.css'

const Container = styled.div`
  height: 100vh;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  align-items: center;
`

const Heading = styled.h1`
  font-size: 2rem;
  color: darkblue;
  font-weight: bold;
`

const TabContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.5rem;
`

const TabButton = styled.button`
  background-color: ${props => (props.isActive ? 'red' : 'white')};
  color: ${props => (props.isActive ? 'white' : 'red')};
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid ${props => (props.isActive ? 'white' : 'red')};
`
const ImageContainer = styled.div`
  height: 30rem;
  width: 100%;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
`

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTab: languageGreetingsList[0].id}

  onUpdateActiveTab = id => {
    this.setState({activeTab: id})
  }

  onRenderActiveImage = () => {
    const {activeTab} = this.state

    const activeImage = languageGreetingsList.find(
      each => each.id === activeTab,
    )

    return <Image src={activeImage.imageUrl} alt={activeImage.imageAltText} />
  }

  render() {
    const {activeTab} = this.state

    return (
      <Container>
        <MainContainer>
          <Heading>Multilingual Greetings</Heading>
          <TabContainer>
            {languageGreetingsList.map(each => (
              <li key={each.id}>
                <TabButton
                  isActive={each.id === activeTab}
                  onClick={() => this.onUpdateActiveTab(each.id)}
                >
                  {each.buttonText}
                </TabButton>
              </li>
            ))}
          </TabContainer>
          <ImageContainer>{this.onRenderActiveImage()}</ImageContainer>
        </MainContainer>
      </Container>
    )
  }
}

export default App
