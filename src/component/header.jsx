import React from "react"
import { makeStyles, Paper, Typography } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 390,
    margin: '50px auto',
    marginBottom: '20px',
    padding: '0 20px',
    backgroundColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 630,
      marginTop: '60px',
    },
  },
  textDeco: {
    textAlign: 'center',
  },
}))
const Header = () => {
  const classes = useStyle()
  return (
    <>
      <Paper elevation={0} className={classes.root}>
        <Typography variant='h2' className={classes.textDeco}>
         Extract Me Clone
        </Typography>
      </Paper>
    </>
  )
}

export default Header
