import React from 'react'
import { Container } from 'react-bootstrap'

export const FooterDefault = () => {
  return (
    <div>
        <Container>
            <span className='fixed-bottom text-center'>
            <hr className='container'></hr>
                Copyright &copy; Muhammad Faruq 2022
            </span>
        </Container>
    </div>
  )
}
