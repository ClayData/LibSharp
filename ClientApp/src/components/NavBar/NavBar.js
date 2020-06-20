import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import MenuButton from './MenuButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function NavBar() {
    const classes = useStyles();

    return(
        <AppBar position="static">
        <Toolbar>
            <MenuButton />
            <Typography variant="h6" className={classes.title}>
            LibSharp
            </Typography>
        </Toolbar>
        </AppBar>
    )
}