import React from 'react'

interface Props {
  name: string
}

const Hello = (props: Props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Hello
