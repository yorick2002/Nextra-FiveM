'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { blue } from '@mui/material/colors'

interface LinkButtonProps {
  text: string
  image: string
}

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  boxShadow: 24,
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, image }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <code
        onClick={handleOpen}
        style={{
          cursor: 'pointer',
          color: blue[500],
          textDecoration: 'underline',
          padding: '0.12em 0.25em',
          borderRadius: '0.375em',
          fontSize: '0.9em',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        {text}
      </code>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 700 }}>
          <img src={image} alt={text} style={{ width: '100%', height: '100%' }} />
        </Box>
      </Modal>
    </>
  )
}

export default LinkButton