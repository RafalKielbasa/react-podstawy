import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react"
import AboutMe, { rafalKielbasa } from "./Components/Pages/AboutMe"
import Counter from "./Components/Pages/Counter"
import MainPage from "./Components/Pages/MainPage"
import Stoper from "./Components/Pages/Stoper"
import Characters from "./Components/Pages/Characters/Characters"
import Registration from "./Components/Pages/Registration"
import LogIn from "./Components/Pages/LogIn"
import CharacterInformation from "./Components/Pages/Characters/CharacterInformation"

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
const rk = rafalKielbasa()

function App() {
  const [data, takeData] = useState(null)
  const [page, changePage] = useState(1)
  const [status, changeStatus] = useState("")
  useEffect(
    () =>
      axios
        .get(
          `https://rickandmortyapi.com/api/character/?page=${page}&status=${status}`
        )
        .then((response) => takeData(response)),
    [page, status]
  )
  useEffect(() => changePage(1), [status])

  if (!data) {
    return <div className="App">Brak danych z backendu</div>
  }
  if (page < 1) {
    changePage(page + 1)
  }
  if (page > data.data.info.pages) {
    return changePage(page - 1)
  }
  console.log("status", status)
  return (
    <Router>
      <Navigation>
        <Logo to="/">kielb-IT</Logo>
        <Pages>
          <StyledLink to="/about-me">About Me</StyledLink>
          <StyledLink to="/stoper">Stoper</StyledLink>
          <StyledLink to="/counter">Counter</StyledLink>
          <StyledLink to="/characters">Characters</StyledLink>
          <StyledLink to="/registration">Registration</StyledLink>
          <StyledLink to="/log-in">Log in</StyledLink>
        </Pages>
      </Navigation>
      <Content>
        <Switch>
          <Content exact path="/">
            <MainPage />
          </Content>
          <Route exact path="/about-me">
            <AboutMe object={rk} />
          </Route>
          <Route exact path="/stoper">
            <Stoper start={10} increment={10} />
          </Route>
          <Route exact path="/counter">
            <Counter />
          </Route>
          <Route exact path="/characters">
            <Characters
              data={data}
              page={page}
              funct={changePage}
              status={status}
              statusFun={changeStatus}
            />
          </Route>
          <Route path="/characters/:id">
            <CharacterInformation data={data} />
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
