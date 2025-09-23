import { React, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import years from './images/years.JPG';
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

const App = () => {
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]);

    return (
        <Container maxWidth="lg">
            <AppBar 
                position="static" 
                color="inherit"
                sx={{
                    borderRadius: 5,
                    margin: '30px 0',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography 
                    variant="h2" 
                    align="center"
                    sx={{ color: 'rgba(0,183,255, 1)', marginBottom: '10px', marginTop: '10px' }}
                >
                    Blog
                </Typography>
            </AppBar>
            <Grow in>
                <Container maxWidth="xl">
                    <Grid 
                        container 
                        spacing={3} 
                        direction={{ xs: 'column-reverse', sm: 'row' }}
                        sx={{ alignItems: 'flex-start' }}
                    >
                        {/* Posts - Left side on desktop, bottom on mobile */}
                        <Grid 
                            item
                            xs={12} 
                            sm={8}
                            sx={{ width: '100%' }}
                        >
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        
                        {/* Form - Right side on desktop, top on mobile */}
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            sx={{ 
                                maxWidth: '400px',
                                position: { sm: 'sticky' },
                                top: { sm: 20 },
                                height: { sm: 'fit-content' },
                                maxWidth: '400px',
                            }}
                        >
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;