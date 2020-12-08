import * as React from 'react'
import './index.css'

export type ExampleComponentProps = {
  text: string
}

export const ExampleComponent = ({ text }: ExampleComponentProps) => {
  return <div className='bg-red-50 pis-8 plb-10'>Example: {text}</div>
}

export { default as Button } from './ui/atoms/Button'
