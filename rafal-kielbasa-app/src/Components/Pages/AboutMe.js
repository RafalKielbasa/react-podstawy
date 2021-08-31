import React from "react"
import styled from "styled-components"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"
import Collapse from "@material-ui/core/Collapse"
import rafalkielbasa from "../../Images/rafal-kielbasa.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    fontWeight: 700,
    color: "#f5f9e4",

    "& .MuiListItemText-root": {
      color: "#f5f9e4",
      textAlign: "center",
    },
    "& .MuiListItemText-primary": {
      fontWeight: 700,
      fontFamily: "Pacifico, cursive",
      fontSize: "2em",
    },

    "& .MuiListItemText-secondary": {
      color: "#f5f9e4",
      fontWeight: 700,
      fontFamily: "Pacifico, cursive",
      fontSize: "1.5em",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const Container = styled.div`
  width: 100%;
  height: 90.3%;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #0c2934;
`

const CircleImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%; ;
`

function AboutMe() {
  const [open, setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  const classes = useStyles()
  const myData = {
    Name: "Rafał",
    Surname: "Kiełbasa",
    Age: 29,
    Career: "Chef",
    Hobbys: "Definitely too much",
  }

  const array = Object.keys(myData)

  return (
    <Container>
      <CircleImage alt="Rafał Kiełbasa" src={rafalkielbasa} />
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemText primary="About me :)" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <div>
          {array.map((element) => {
            return (
              <Collapse key={element} in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemText
                      primary={element}
                      secondary={myData[element]}
                    />
                  </ListItem>
                </List>
              </Collapse>
            )
          })}
        </div>
      </List>
    </Container>
  )
}

export default AboutMe
