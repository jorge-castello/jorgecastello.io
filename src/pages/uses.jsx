import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Jorge Castello</title>
        <meta
          name="description"
          content="The tools and gadgets I rely on, plus other favorites."
        />
      </Head>
      <SimpleLayout
        title="The tools and gadgets I rely on, plus other favorites."
        intro="I am often asked about the tools and products I use to build software, stay productive, or distract myself from procrastination. Here is a list of some of my favorites that I hope might be helpful to others."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M1 Max, 32GB RAM (2021)">
            I absolutely love my M1 MacBook Pro! I used to have a Mac Mini 2018, but the difference between the two is like night and day. 
            With the M1, I've never once heard the fans turn on, even when I'm using it for heavy workloads. 
            Plus, the MacBook Pro is so much more portable than the Mac Mini, which makes it perfect for working on the go.
            </Tool>
            <Tool title="AirPods Max">
            The AirPods Max are my favorite headphones because they are incredibly comfortable, have excellent sound quality, and are extremely convenient to use. 
            I love the noise-canceling feature, which makes it easy to focus on my music or podcasts without any distractions.
            </Tool>
            <Tool title="iPhone 14 Pro Max">
            The iPhone 14 Pro Max is my favorite phone because it has an impressive camera, a long-lasting battery, and a beautiful design. 
            </Tool>
          </ToolsSection>
          <ToolsSection title="Software">
          <Tool title="Linear">
            Check out <Link href="https://linear.app/" target="_blank" className='text-teal-500 font-bold hover:text-teal-700'>Linear</Link> 
            {' '}and you'll see why I use their project management software for every project
            </Tool>
            <Tool title="Spotify">
            I love using Spotify while working because it helps me stay focused and motivated.
            </Tool>
            <Tool title="Visual Studio Code">
            VSCode is a fantastic code editor that I love using for all my coding projects
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
