import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@mui/material/Avatar';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { connect, useDispatch } from "react-redux";
import { fetchArticleRequest } from '../../redux/blog/actions';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    section: {
        padding: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "95%",
        fontWeight: '900',
        fontSize: '3rem',
        color: "#243E63",
        letterSpacing: '0',
        textAlign: "justify"
    },
    subtitle: {
        fontWeight: '700',
        fontSize: '2rem',
        color: "#243E63",
        letterSpacing: '0'
    },
    foot: {
        fontSize: '1rem',
        fontWeight: '700',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',
        color: "#243E63"
    },
    footer: {
        fontSize: '0.8rem',
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',
        color: "#243E63"
    },
    header: {
        fontWeight: '900',
        fontSize: '2rem',
        color: "#243E63",
        letterSpacing: '0'
    },
    resume: {
        fontWeight: '700',
        fontSize: '1.3rem',
        color: "#243E63",
        textAlign: "justify"
    },
    image: {
        width: "95%",
        height: '300px',
        borderRadius: '8px',
        objectFit: "cover"
    },
    postRecent: {
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: "#4299e1",
            borderRadius: '8px'
        },
    },

    titleResponsive: {
        fontWeight: '900',
        fontSize: '1.5rem',
        color: "#243E63",
        letterSpacing: '0',
    },
    imageResponsive: {
        width: "100%",
        height: '200px',
        borderRadius: '8px',
        objectFit: "cover"
    },
    resumeResponsive: {
        fontWeight: '600',
        fontSize: '1rem',
        color: "#243E63",
    },
    subtitleResponsive: {
        fontWeight: '700',
        fontSize: '1.5rem',
        color: "#243E63",
        letterSpacing: '0'
    },

}));


const Article = ({ match, articles }) => {
    const classes = useStyles();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const { id } = useParams();


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticleRequest(id));
        console.log('dispatch(fetchArticleRequest(id))');
    }, [dispatch, id]);

    return (
        <>

            {isMatch ? (
                <>
                
                    <Box className={classes.section}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Stack container spacing={2}>
                                <Box item xs={8}>
                                    <Box className={classes.titleResponsive}>
                                        {articles.title}
                                    </Box>
                                    <Stack direction="row" spacing={2} marginTop='3rem'>
                                        <Avatar alt="author"
                                            src= {articles.profile}
                                            sx={{ width: 70, height: 70 }} />
                                        <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                                            <Box className={classes.foot}>{articles.author}</Box>
                                            <Box className={classes.footer} >{articles.profession}</Box>
                                            <Box className={classes.footer} style={{ marginTop: "0.5rem" }}>{articles.datePublication}</Box>
                                        </Box>
                                    </Stack>
                                    <Box spacing={2} marginTop='3rem'>
                                        <img
                                            src={articles.imageArticle}
                                            alt='article'
                                            className={classes.imageResponsive}
                                        />
                                    </Box>
                                    <Stack direction='row' spacing={2} marginTop='2rem'>
                                        <Box style={{ border: '2px solid #243E63' }} />
                                        <Box className={classes.resumeResponsive}>
                                            {articles.preambule}
                                        </Box>
                                    </Stack>
                                    <Stack direction='column' spacing={2} marginTop='2rem'>
                                        <Box className={classes.subtitleResponsive}>
                                            {articles.title}
                                        </Box>
                                        <Box>
                                            {articles.description}
                                        </Box>
                                    </Stack>
                                </Box>


                            </Stack>
                        </Box>
                    </Box>
              
                </>
            ) : (
                <>
                    <Box className={classes.title}>
                        Tips on how to travel safely in foreign countries.
                    </Box>
                    <Stack direction="row" spacing={2} marginTop='3rem'>
                        <Avatar alt="Remy Sharp"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80"
                            sx={{ width: 70, height: 70 }} />
                        <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Box className={classes.foot}>Charlotte Delos</Box>
                            <Box className={classes.footer} >Travel Advocate</Box>
                            <Box className={classes.footer} style={{ marginTop: "0.5rem" }}>14/04/2023</Box>
                        </Box>
                    </Stack>
                    <Box spacing={2} marginTop='3rem'>
                        <img
                            src="https://www.travelmarvel.com.au/-/media/apt-responsive-website/miscellaneous/hero-panel-12-5/generic-12-5/hc-a-generic-map-travel-destinations-419995780-s-12-5.jpg"
                            alt='article'
                            className={classes.image}
                        />
                    </Box>
                    <Stack direction='row' spacing={2} marginTop='2rem' width="95%">
                        <Box style={{ border: '4px solid #243E63' }} />
                        <Box className={classes.resume}>
                            Qu'est-ce qu'une offre publique initiale ? Dans cet article vous trouverez une explication complète de
                            la définition de la médécine grâce à une introduction en bourse.
                        </Box>
                    </Stack>
                    <Stack direction='column' spacing={2} marginTop='2rem' width="95%" textAlign="justify">
                        <Box className={classes.subtitle}>
                            Tips on how to travel safely in foreign countries.
                        </Box>
                        <Box>
                            La médecine (du latin : medicina, qui signifie « art de guérir, remède, potion »1), au sens de pratique (art),
                            est la science témoignant de l'organisation du corps (anatomie), son fonctionnement normal (physiologie), et
                            cherchant à préserver la santé (physique comme mentale) par la prévention (prophylaxie) et le traitement (thérapie)
                            des maladies. La médecine humaine est complémentaire et en synergie avec la médecine vétérinaire. La médecine contemporaine
                            utilise l'examen clinique, les soins de santé, la recherche et les technologies biomédicales pour diagnostiquer et traiter
                            les blessures et les maladies, habituellement à travers la prescription de médicaments, la chirurgie ou d'autres formes de
                            thérapies. Certains chercheurs réhabilitent de même certains aspects de la médecine médiévale occidentale. Ainsi l'historien
                            de la médecine Roger Dachez qui met en valeur l'aspect préventif et la vision globale qu'avait de la médecine le Moyen Âge.
                        </Box>
                    </Stack>
                </>
            )}
        </>
    );
}
const mapStateToProps = ({ BlogReducer }) => ({
    articles: BlogReducer.blogs,
    loading: BlogReducer.loading
  });
  
  export default connect(mapStateToProps)(Article);
