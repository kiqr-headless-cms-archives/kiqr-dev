import { DocsLayout } from '~organisms/DocsLayout'
import { CommandBlock } from '~atoms/CommandBlock'
import Link from 'next/link'
import Head from 'next/head'

export default function GettingStartedPage() {
  return (
    <DocsLayout>
      <Head>
        <title>Initialize your first project - KIQR</title>
      </Head>

      <div className="wrapper">
        <header>
          <h1>Setup your first project</h1>
          <p>Docs {'>'} Getting Started {'>'} Setup a project locally</p>
        </header>

        <h2>Installing the CLI</h2>
        <p>To install the KIQR CLI, you can use your preferred Node package manager (npm, yarn, pnpm, etc.) and run the following command in your terminal:</p>
      
        <CommandBlock>
          <CommandBlock.Command>npm install -g kiqr</CommandBlock.Command>
        </CommandBlock>

        <p>This will install the KIQR CLI globally on your machine, allowing you to use it in any project. Once the installation is complete, you can verify that the CLI is installed correctly by running the following command:</p>
      
        <CommandBlock>
          <CommandBlock.Command>kiqr --version</CommandBlock.Command>
          <CommandBlock.Result>
            1.0.0
          </CommandBlock.Result>
        </CommandBlock>

        <p>This command should return the version number of the KIQR CLI, indicating that it has been installed successfully.</p>
        <p>Now that you have the KIQR CLI installed, you&apos;re ready to start creating content types and schemas using the CLI. You can find more information on how to use the CLI in our documentation on kiqr.dev.</p>
      
        <div className="buttons-group">
          <Link href="/docs/getting-started/project-setup" className="button md primary">Setup a project locally</Link>
        </div>
      </div>
    </DocsLayout>
  )
}
