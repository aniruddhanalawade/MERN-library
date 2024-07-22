import React, { useEffect, useState } from 'react'
import {Box,Button,Checkbox,FormLabel,FormControlLabel,TextField} from '@mui/material';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast'


const BookDetails = () => {

  const {id} = useParams();

  const [input,setInput] = useState({});

  const [ checked,setChecked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
  const fetchBoks = async () => {
    await axios.get(`http://localhost:5000/books/${id}`)
    .then((res) => res.data)
    .then(data => setInput(data))
  }  

  fetchBoks()
  },[id])

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const sendRequest = async () => {
    await axios.put(`http://localhost:5000/books/${id}`, {
      bName: String(input.bName),
      author: String(input.author),
      description: String(input.description),
      price: Number(input.price),
      image: String(input.image),
      available: Boolean(checked)
    }).then((res) => res.data)

    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
    .then(()=> toast.success('Book updated successfullyy'))
    .then(()=> navigate('/books'))
  }


  return (
    <>
    <Toaster/>
      <form onSubmit={handleSubmit}>

        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          maxWidth={700}
          alignContent={'center'}
          marginLeft={'auto'}
          marginRight={'auto'}
          marginTop={10}>


          <FormLabel>Book Name:</FormLabel>
          <TextField
            value={input.bName}
            variant='outlined'
            onChange={handleChange}
            name='bName'
            fullWidth
          />

          <FormLabel>Book Author:</FormLabel>
          <TextField
            value={input.author}
            variant='outlined'
            onChange={handleChange}
            name='author'
            fullWidth
          />

          <FormLabel>Book Description:</FormLabel>
          <TextField
            value={input.description}
            variant='outlined'
            onChange={handleChange}
            name='description'
            fullWidth
          />

          <FormLabel>Book Price:</FormLabel>
          <TextField
            value={input.price}
            variant='outlined'
            onChange={handleChange}
            name='price'
            fullWidth
          />

          <FormLabel>Book Image:</FormLabel>
          <TextField
            value={input.image}
            variant='outlined'
            onChange={handleChange}
            name='image'
            fullWidth
          />

          <FormControlLabel control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          } label="Availabel" />

          <Button type='submit' variant='outlined'>Add Book</Button>

        </Box>

      </form>

    
    
    
    </>
  )
}

export default BookDetails