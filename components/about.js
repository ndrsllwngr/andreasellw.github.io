import React from 'react'

const AboutLink = ({children, href}) => {
  return (
    <a
      href={href}
      className="hover:text-blue-700 font-bold"
    >
      {children}
    </a>
  )
}

export const About = () => {
  return (
    <div>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row flex-wrap container items-center justify-between py-16">
        <p className="font-sans text-lg">
          Andreas is a postgraduate student, currently pursuing a Masters&apos; degree of Computer Sciences at LMU
          Munich, Germany. In 2018 he studied abroad at Leiden University, The Netherlands. He graduated in April 2018
          at the LMU Munich with a Bachelor of Science in Media Informatics and Human-Computer Interaction. In 2020
          Andreas joined <AboutLink href="https://www.celonis.com/">Celonis</AboutLink>, the market leader in Process
          Mining, as Junior Software Engineer in the Core - Event
          Collection department. Before that, he worked remotely for a Berlin-based startup called <AboutLink
          href="https://aiderly.de/">Aiderly</AboutLink> as a
          Full Stack Developer / UX Researcher. Since 2018 he is part of the <AboutLink
          href="https://tech.4germany.org/ueber-uns/">Tech4Germany</AboutLink> fellowship, Germany’s first
          e-Government fellowship with Germany’s Chief of Staff Prof. Helge Braun as a patron, working for three months
          as a UX Researcher as well as a Frontend Developer for the German government in Berlin. Together with eight
          other fellows, they worked on topics related to digitalisation and e-government.
        </p>
      </div>
      <div className="container max-w-2xl mx-auto pb-16 px-4 flex flex-col items-start">
        <a className="text-black hover:text-my-blue w-6 h-6" href="mailto:contact@andreasellwanger.com">
          Email
        </a>
        <a className="text-black hover:text-my-blue w-6 h-6" href="https://de.linkedin.com/in/ellwanger/en/">
          LinkedIn
        </a>
        <a className="text-black hover:text-my-blue w-6 h-6" href="https://twitter.com/ndrsllwngr/">
          Twitter
        </a>
        <a className="text-black hover:text-my-blue w-6 h-6" href="https://github.com/ndrsllwngr">
          GitHub
        </a>
        <a className="text-black hover:text-my-blue w-6 h-6" href="https://stackoverflow.com/users/story/7640933">
          StackOverflow
        </a>
      </div>
    </div>
  )
}
