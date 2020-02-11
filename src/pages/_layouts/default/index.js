import React, { useEffect, useState } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemText
 } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import api from '../../../services/api';

const drawerWidth = 240;

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
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      }
}));

export default function DefaultLayout({ children }) {
    const [open, setOpen] = useState(false);
    const [menus, setMenus] = useState([]);
    const classes = useStyles();
    const theme = useTheme();

    async function loadRotas() {
        const response = await api.get('/rotas');

        setMenus(response.data);
    }

    useEffect(() => {
        loadRotas();
    }, [])

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" className={classes.title}>
                            Menu
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {menus && menus.map(menu => (
                            <ListItem button component="a" href={menu.caminho} key={menu.id}>
                                <ListItemText primary={menu.nome} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
            <div>{children}</div>
        </>
    )
}
