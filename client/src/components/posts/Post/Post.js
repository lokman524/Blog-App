import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ( {post, setCurrentId } ) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deletePost(post._id));
    }

    return (
        <Card 
            sx={{ display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '15px',
                    height: '100%',
                    maxWidth: 345,
                    position: 'relative',}}
        >
            <CardMedia
                sx={{height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',}}
                title={post.title}
                image={post.selectedFile}
            />
            <Box sx={{position: 'absolute',
                top: '20px',
                left: '20px',
                color: 'white',}}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2" color="text.secondary">{moment(post.createdAt).fromNow()}</Typography>
            </Box>
            <Box 
                sx={{position: 'absolute',
                top: '20px',
                right: '20px',
                color: 'white',}}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </Box>
            <Box sx={{display: 'flex',
                        justifyContent: 'space-between',
                        margin: '20px'}}
            >
                <Typography variant="body2" color="text.secondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </Box>
            <Typography sx={{padding: '0 16px'}} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent sx={{ overflow: 'hidden',}}>
                <Typography variant="body2" color="text.secondary" component="p" >{post.message}</Typography>
            </CardContent>
            <CardActions sx={{padding: '0 16px 8px 16px',
                            display: 'flex',
                            justifyContent: 'space-between',}}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={handleDelete}>
                    <DeleteIcon fontSize="small" /> Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;
