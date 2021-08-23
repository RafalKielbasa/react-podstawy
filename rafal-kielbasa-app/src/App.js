import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import styled from "styled-components"

import { useState, useEffect } from "react"
import AboutMe from "./Components/Pages/AboutMe"
import Counter from "./Components/Pages/Counter"
import MainPage from "./Components/Pages/MainPage"
import Stoper from "./Components/Pages/Stoper"
import Characters from "./Components/Pages/Characters/Characters"
import Registration from "./Components/Pages/Registration"
import LogIn from "./Components/Pages/LogIn"
import CharacterInformation from "./Components/Pages/Characters/CharacterInformation"
import useFetch from "./hooks/useFetch"

const Content = styled.div`
  height: 94%;
`

const StyledLink = styled(Link)`
  color: #f5f9e4;
  text-decoration: none;
  transition: font-size 1s;
  &:hover {
    color: #3b7e99;
    font-size: 1.5rem;
  }
`
const Logo = styled(Link)`
  color: #f5f9e4;
  text-decoration: none;
  margin-left: 5%;
  font-family: "Press Start 2P", cursive;
  font-size: 1.5rem;
  &:hover {
    color: #3b7e99;
  }
`
const Navigation = styled.div`
  height: 6%;
  background-color: #0c2934;
  padding-top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  position: sticky;
  top: 0;
`

const Pages = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  padding-right: 3%;
  font-family: "Pacifico", cursive;
  font-size: 1.2rem;
`

function App() {
  const [page, changePage] = useState(1)
  const [status, changeStatus] = useState("")
  const [switchState, setSwitch] = useState(false)
  const { response, error, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&status=${status}`,
    [page, status]
  )
  useEffect(() => changePage(1), [status])
  if (isLoading) {
    return <div className="App">Is loading...</div>
  }
  if (!response) {
    return <div className="App">Brak danych z backendu</div>
  }

  if (page < 1) {
    changePage(page + 1)
  }
  if (page > response.data.info.pages) {
    return changePage(page - 1)
  }
  const linksArray = [
    {
      id: 1,
      path: "/about-me",
      outcome: "About Me",
    },
    {
      id: 2,
      path: "/stoper",
      outcome: "Stoper",
    },
    {
      id: 3,
      path: "/counter",
      outcome: "Counter",
    },
    {
      id: 4,
      path: "/characters",
      outcome: "Characters",
    },
    {
      id: 5,
      path: "/registration",
      outcome: "Registration",
    },
    {
      id: 6,
      path: "/log-in",
      outcome: "Log in",
    },
  ]
  return (
    <Router>
      <Navigation>
        <Logo to="/">kielb-IT</Logo>
        <Pages>
          {linksArray.map((e) => {
            return (
              <StyledLink key={e.id} to={e.path}>
                {e.outcome}
              </StyledLink>
            )
          })}
        </Pages>
      </Navigation>
      <Content>
        <Switch>
          <Content exact path="/">
            <MainPage />
          </Content>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
          <Route exact path="/stoper">
            <Stoper start={10} increment={10} />
          </Route>
          <Route exact path="/counter">
            <Counter />
          </Route>
          <Route exact path="/characters">
            <Characters
              data={response}
              page={page}
              funct={changePage}
              status={status}
              statusFun={changeStatus}
              switchState={switchState}
              switchFunction={setSwitch}
            />
          </Route>
          <Route path="/characters/:id">
            <CharacterInformation data={response} />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/log-in">
            <LogIn />
          </Route>
        </Switch>
      </Content>
    </Router>
  )
}

export default App
