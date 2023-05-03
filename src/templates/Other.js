import { ReactNode } from 'react'

const Other = ({meta, children}) => (
  <div className="antialiased w-full bg-bg-grey relative">
    {meta}
    {children}
  </div>
)

export { Other }
