import React from 'react'

interface AppProps {
  name: string
}
export const SignedIn: React.FC<AppProps> = ({
  name
}) => {
  console.log({ name })
  return <p>Signed In. Hello {name}!</p>
}
