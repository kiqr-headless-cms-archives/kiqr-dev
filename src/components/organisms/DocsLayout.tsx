import Link from 'next/link'
import { ReactNode } from 'react'

export const DocsLayout: React.FC<{
  children?: ReactNode
}> = ({children}) => {
  return (
    <div id="appshell" className="w-full min-h-screen flex">
      <section id="sidebar" className="flex w-2/5 lg:w-1/5 flex-grow">
        <div id="logo-section" className="h-nav flex items-center justify-between">
          <Link className="logo" href="/">KIQR</Link>
          <Link className="p-4 rounded-full -mr-4 text-neutral-400 hover:text-primary-700 transition" href="/notifications">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><path d="M21,17.5A1.5,1.5,0,0,1,19.5,16V11.14A8,8,0,0,0,13,3.07V1a1,1,0,0,0-2,0V3.07a8,8,0,0,0-6.5,8.07V16A1.5,1.5,0,0,1,3,17.5a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" fill="currentColor"></path><path d="M14.24,21H9.76a.25.25,0,0,0-.24.22,2.64,2.64,0,0,0,0,.28,2.5,2.5,0,0,0,5,0,2.64,2.64,0,0,0,0-.28A.25.25,0,0,0,14.24,21Z" fill="currentColor"></path></g></svg>
          </Link>      
        </div>
        <div id="navigations" className="py-8">
          <nav id="content-type-navigation">
            <h5>Getting started</h5>
            <ul>
              <li><Link href="/docs/getting-started">Install the CLI</Link></li>
              <li><Link href="/docs/getting-started/project-setup">Setup a project locally</Link></li>
              <li><Link href="/docs/getting-started/content-types">Create a content type</Link></li>
              <li><Link href="/docs/getting-started/pushing-schemas">Push your schema</Link></li>
            </ul>
          </nav>
        </div>
      </section>
      
      <section id="right" className="flex w-4/5 flex-col relative">
        <div className="flex">
          <div className="flex w-2/3">
            {children}
          </div>
        </div>
      </section>
    </div>
  )
}
