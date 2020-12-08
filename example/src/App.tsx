import React from 'react'

import { ExampleComponent, Button } from 'poc-tailwindcss-library'
import 'poc-tailwindcss-library/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button label={'asdasd'} />
    </>
  )
}

export default App
