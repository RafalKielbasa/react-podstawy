import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles"

import { grey } from "@material-ui/core/colors"
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople"
import ButtonBase from "@material-ui/core/ButtonBase"
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"
import ExposureIcon from "@material-ui/icons/Exposure"
import SettingsInputHdmiIcon from "@material-ui/icons/SettingsInputHdmi"
import FingerprintIcon from "@material-ui/icons/Fingerprint"
import picture1 from "../../Images/picture1.jpg"

const FirstPart = styled.div`
  width: 100%;
  height: 56.3%;
  background-image: url(${picture1});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  color: #0c2934;
  font-family: "Pacifico", cursive;
  font-size: xxx-large;
  margin-top: 0;
  margin-bottom: 10px;
`
const Text = styled.h2`
  color: #0c2934;
  margin-top: 0;
`
const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
})
const useStylesButton = makeStyles({
  root: {
    color: "#f5f9e4",
    backgroundColor: "#0c2934",
    padding: "10px",
    fontWeight: 900,
    paddingLeft: "20px",
    paddingRight: "20px",
    borderRadius: 6,
    marginBottom: "110px",
  },
})

const useStylesTextField = makeStyles({
  root: {
    backgroundColor: "#0c2934",
    fontFamily: "Pacifico, cursive",
    borderRadius: 6,
    marginBottom: "5px",
    "& .MuiInputBase-root": {
      color: "#f5f9e4",
      fontFamily: "Pacifico, cursive",
    },
    "& .MuiFormLabel-root": {
      color: "#f5f9e4",
      fontFamily: "Pacifico, cursive",
    },
  },
})

function ButtonStyled() {
  const classes = useStylesButton()
  return (
    <Button
      onClick={() => {
        alert("Hello!")
      }}
      className={classes.root}
      variant="contained"
    >
      Get in!
    </Button>
  )
}

function TextFieldStyled() {
  const classes = useStylesTextField()
  return (
    <TextField
      className={classes.root}
      variant="outlined"
      label="Search field"
      type="search"
      color="primary"
    ></TextField>
  )
}

const SecondPart = styled.div`
  width: 100%;
  height: 50%;
  background-color: #0c2934;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`

const useStylesIcon = makeStyles({
  root: {
    color: grey[50],
    fontSize: 60,
    marginBottom: 0,
  },
})

function IconStyled({ Icon }) {
  const classes = useStylesIcon()
  return <Icon className={classes.root} />
}
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  transition: background-color 1s, border 1s;
  &:hover {
    background-color: #3b7e99;
    border: solid, 1px;
  }
`
const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 3%;
`
const ButtonTitle = styled.h2`
  color: #f5f9e4;
  margin: 2%;
`
const TextDiv = styled.div`
  color: #f5f9e4;
  width: 10em;
  text-align: center;
`
function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <FirstPart>
        <Title>Open your mind, my friend ! </Title>
        <Text>Are you ready for a journey?</Text>
        <TextFieldStyled />
        <ButtonStyled />
      </FirstPart>
      <SecondPart>
        <ContainerDiv>
          <ButtonBase href="/about-me">
            <ButtonDiv>
              <IconStyled Icon={EmojiPeopleIcon} />
              <ButtonTitle>About me </ButtonTitle>
              <TextDiv>
                This part contains some information about my life
              </TextDiv>
            </ButtonDiv>
          </ButtonBase>
          <ButtonBase href="/characters">
            <ButtonDiv>
              <IconStyled Icon={EmojiEmotionsIcon} />
              <ButtonTitle>Characters</ButtonTitle>
              <TextDiv>List of characters you may now</TextDiv>
            </ButtonDiv>
          </ButtonBase>
          <ButtonBase href="/counter">
            <ButtonDiv>
              <IconStyled Icon={ExposureIcon} />
              <ButtonTitle>Counter</ButtonTitle>
              <TextDiv>Count some sheeps before going to sleep :)</TextDiv>
            </ButtonDiv>
          </ButtonBase>
        </ContainerDiv>
        <ContainerDiv>
          <ButtonBase href="/stoper">
            <ButtonDiv>
              <IconStyled Icon={AccessAlarmIcon} />
              <ButtonTitle>Stoper </ButtonTitle>
              <TextDiv>Here time stops for a while</TextDiv>
            </ButtonDiv>
          </ButtonBase>
          <ButtonBase href="/registration">
            <ButtonDiv>
              <IconStyled Icon={SettingsInputHdmiIcon} />
              <ButtonTitle>Registration</ButtonTitle>
              <TextDiv>Come and meet us</TextDiv>
            </ButtonDiv>
          </ButtonBase>
          <ButtonBase href="/log-in">
            <ButtonDiv>
              <IconStyled Icon={FingerprintIcon} />
              <ButtonTitle>Log in </ButtonTitle>
              <TextDiv>Welcome back</TextDiv>
            </ButtonDiv>
          </ButtonBase>
        </ContainerDiv>
      </SecondPart>
    </ThemeProvider>
  )
}

export default MainPage
