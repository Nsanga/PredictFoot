import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { styled, useTheme } from '@mui/material/styles';
import { Button } from "@material-ui/core";
import logo from '../../assets/PredictFoot_logo.png';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
} from "@mui/material";


const useStyles = makeStyles((theme) => ({
    root: {
        textDecoration: "none",
        fontSize: '1rem', 
        margin: '1rem 0', 
        fontWeight: 600, 
        color: "#243E63",
        letterSpacing: '0.025em', 
        transition: 'all 0.3s ease', 
        paddingBottom: '0.1rem', 
        borderBottomWidth: '3px', 
        borderBottomStyle: 'solid', 
        borderBottomColor: 'transparent', 
    },
    title: {
        flexGrow: 1,
      },
}));

const DrawerComp = () => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <DrawerHeader>
                    <Link variant="h6" className={classes.title}>
                        <img src={logo} alt="logo" style={{ maxWidth: "250px" }} />
                    </Link>
                    <Stack marginLeft="3rem">
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <CloseIcon /> : <ChevronRightIcon />}
                    </IconButton></Stack>
                </DrawerHeader>

                <List>
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <Link to="/home" className={classes.root} style={{ background: "transparent" }}>Accueil</Link>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <Link to="/blog" className={classes.root} style={{ background: "transparent" }}> Blog</Link>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <Link to="/home#about" className={classes.root} style={{ background: "transparent" }}>A propos de nous</Link>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    <Button variant="contained" style={{ fontWeight: 500, background: "#4299e1", color: "#f7fafc", textTransform: "none", margin: "16px 2rem 4px 8px" }}>Télécharger l'application</Button>
                </List>

            </Drawer>
            <IconButton
                sx={{ color: "#243E63", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon color="white" />
            </IconButton>
        </React.Fragment>
    );
};

export default DrawerComp;