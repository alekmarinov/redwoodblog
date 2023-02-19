import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <p>
        My default route is named <code>about</code>
      </p>
    </>
  )
}

export default AboutPage
