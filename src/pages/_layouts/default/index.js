import React from 'react'
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    },
}));

export default function DefaultLayout({ children }) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        </IconButton>
                        <Typography variant="h4" className={classes.title} href="/">
                            Menu
                        </Typography>
                        <Link color="inherit" href="/">
                            MAIN
                        </Link>
                        <Link color="inherit" href="/cadastrar">
                            ADD
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
            <div>{children}</div>
        </>
    )
}
