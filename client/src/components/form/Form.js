import React, { use, useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const dispatch = useDispatch();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            // Update existing post
            dispatch(updatePost(currentId, postData));
            clear();
        } else {
            // Create new post
            dispatch(createPost(postData));
            clear();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        
        if (!file) {
            return; // No file selected, exit early
        }
        
        const reader = new FileReader();
        reader.onloadend = () => {
            setPostData({ ...postData, selectedFile: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: ''});
        
        // Clear the file input
        const fileInput = document.getElementById('fileUpload');
        if (fileInput) {
            fileInput.value = '';
        }
    }

    
 
    return (
        <Box sx={{ marginTop: '20px' }}>
            <Paper sx={{ padding: '20px' }}>
                <Box component="form" autoComplete="off" noValidate onSubmit={handleSubmit} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Post</Typography>
                    <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                    <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
                    <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                    <input
                        style={{ width: '97%', margin: '10px 0' }}
                        id="fileUpload"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFileChange}
                    />
                    <Button sx={{ marginBottom: '10px' }} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" onClick={clear} size="small" fullWidth>Clear</Button>
                </Box> 
            </Paper>
        </Box>
        
    )
}

export default Form;