import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'
import { GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, TWITTER_LINK } from '@/constants/social-links'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jorge Castello</title>
        <meta
          name="description"
          content="I’m Jorge Castello. I live in San Diego, where I redefine the meaning of ship."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm Jorge Castello from California
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
              My name is Jorge Castello and I am a software engineer at Amazon. I received my Bachelor's degree in Finance from the University of Southern California, and have been working in the tech industry for the past 5 years. My career has been split between two technical disciplines: finance and software engineering. As a finance analyst, I contributed to projects such as the Uber IPO and numerous M&A transactions. My experience in finance has given me a unique perspective on the software engineering field, allowing me to bring a financial mindset to my work as a software engineer.
              </p>
              <p>
              At Amazon, I have worked on the fintech team, where I have contributed to the development of innovative financial products. Prior to Amazon, I worked as a software engineer at BaseCap Analytics, where I developed and maintained financial applications.
              </p>
              <p>
              In my free time, I enjoy hiking and traveling. My goal is to continue to develop cutting-edge technology and make a positive impact on the world.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={TWITTER_LINK} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href={INSTAGRAM_LINK} icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href={GITHUB_LINK} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={LINKEDIN_LINK} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:me@jorgecastello.io"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                me@jorgecastello.io
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
