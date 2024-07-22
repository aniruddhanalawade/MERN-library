import React, { useState } from 'react';
import { TextField, Box, Button, FormLabel, FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';
import { useActionData, useNavigate } from 'react-router-dom';
import toast ,{Toaster}  from 'react-hot-toast'


const AddBook = () => {

  const [checked, setChecked] = useState();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    bName: "",
    author: "",
    description: "",
    price: "",
    available: "",
    image: ""
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    sendData().then(() => toast.success("Book Added...")).then(() => navigate('/books'))


  }

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }

  const sendData = async () => {
    await axios.post('http://localhost:5000/books', {

      bName: String(input.bName),
      author: String(input.author),
      description: String(input.description),
      price: Number(input.price),
      image: String(input.image),
      available: Boolean(checked)
    })
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
          } label="Available" />

          <Button type='submit' variant='outlined'>Add Book</Button>

        </Box>

      </form>


    </>
  )
}

export default AddBook