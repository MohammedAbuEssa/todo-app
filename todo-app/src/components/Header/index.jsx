import React from 'react'
import { Container } from '@mantine/core'; 

export default function header({incomplete}) {
  return (<>
<Container style={{ backgroundColor: '#1C7ED6' ,maxWidth: '100%' }}>
    <header>
    <h1>To Do List: {incomplete} items pending</h1>
    </header>
    </Container></>
  )
}