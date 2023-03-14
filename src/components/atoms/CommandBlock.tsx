import { ReactNode } from 'react'

const CommandBlock = ({children} : {children?: ReactNode}) => {
  return (
    <pre className="bg-primary-900 text-white rounded p-5">
      {children}
    </pre>
  )
}

const Command: React.FC<{children?: ReactNode}> = ({children}) => {
  return (
    <div className="flex items-center">
      <div className="font-semibold text-neutral-400 mr-5 text-center">$</div>
      <div>{children}</div>
    </div>
  )
}

const Result: React.FC<{children?: ReactNode}> = ({children}) => {
  return (
    <div className="flex items-center">
            <div className="font-semibold text-neutral-400 mr-2.5 text-center">=&gt;</div>

      <div className="text-neutral-400">{children}</div>
    </div>
  )
}


CommandBlock.Command = Command
CommandBlock.Result = Result

export { CommandBlock }