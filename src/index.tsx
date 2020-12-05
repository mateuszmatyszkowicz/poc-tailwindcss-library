import * as React from 'react'
import './index.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={`bg-red-50 pis-8 plb-10`}>Example: {text}</div>
}
