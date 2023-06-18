import { NavBar, ContentWrapper } from './components'
import { HomeView } from './views'
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      <ContentWrapper header={'Header Two'}>
        <HomeView/>
      </ContentWrapper>
    </>    
  )
}

export default App
