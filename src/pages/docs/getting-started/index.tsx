import { DocsLayout } from '~organisms/DocsLayout'
import { CommandBlock } from '~atoms/CommandBlock'
import Link from 'next/link'
import Head from 'next/head'

export default function GettingStartedPage() {
  return (
    <DocsLayout>
      <Head>
        <title>Install the command line application - KIQR</title>
      </Head>

      <div className="wrapper">
        <header>
          <h1>Getting started with KIQR</h1>
          <p>Docs {'>'} Getting started {'>'} Installation</p>
        </header>

        <h2>Introduction</h2>
        <p>Welcome to KIQR Headless CMS, the modern CMS solution that empowers developers and content editors to create, manage, and publish content with ease. We&apos;re delighted to have you join our community and explore all that KIQR has to offer.</p>
        <p>KIQR Headless CMS is comprised of two powerful apps: <Link href="https://kiqr.cloud" target="_blank" rel="nofollow noopener" className="text-primary-700 hover:underline">kiqr.cloud</Link> and kiqr.dev. The kiqr.cloud app is tailored for content editors, offering an intuitive interface to manage content, while the kiqr.dev app is specifically designed for developers, providing a CLI for managing content types and schemas.</p>
        <p>With KIQR, you can use the CLI to create content types and schemas, which are automatically generated as YAML files and published to our API. These files can be version controlled using popular tools like Git, giving you full control over your content.</p>
        <p>Our step-by-step tutorials on kiqr.dev will guide you through the process of creating new projects, content types, and schemas, and you can easily manage content for each type using the kiqr.cloud interface.</p>
        <p>Whether you&apos;re a developer looking for an efficient way to manage content or a content editor seeking a user-friendly CMS solution, KIQR Headless CMS has everything you need to succeed.</p>
      
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
