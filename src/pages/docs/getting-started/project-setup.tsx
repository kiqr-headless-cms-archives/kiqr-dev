import { DocsLayout } from '~organisms/DocsLayout'
import { CommandBlock } from '~atoms/CommandBlock'
import Link from 'next/link'
import Head from 'next/head'

export default function ProjectSetupPage() {
  return (
    <DocsLayout>
      <Head>
        <title>Initialize your first project - KIQR</title>
      </Head>

      <div className="wrapper">
        <header>
          <h1>Create your first project</h1>
          <p>Docs {'>'} Getting started {'>'} Setup a project locally</p>
        </header>

        <div className="buttons-group">
          <Link href="/docs/getting-started" className="button md primary">Installing the CLI</Link>
        </div>
      </div>
    </DocsLayout>
  )
}
