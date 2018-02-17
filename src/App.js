
import React, { Component } from 'react'
import { css } from 'glamor'
import primitives from './primitives';
import theme from './theme'
import viaFerrata from './me-via-ferrata-loen.jpg'

const { Text, Heading, Link, List } = primitives

css.global('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

export default () =>
  <div
    css={{
      backgroundImage: `url(${viaFerrata})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      display: 'inline-block',
      width: '100%',
      height: '100vh',
    }}
  >
    <div
      css={{
        backgroundColor: theme.color.darkTransparent,
        height: '100vh',
        paddingTop: theme.spacing[4],
        paddingLeft: theme.spacing[2],
        paddingRight: theme.spacing[2],
        transition: 'all 400ms',
        [theme.breakpoints.lg]: {
          backgroundColor: theme.color.lightTransparent,
          height: 'auto',
          width: 480,
          marginTop: theme.spacing[4],
          marginLeft: theme.spacing[4],
          padding: theme.spacing[2],
        }
      }}
    >
      <Heading>Christofer</Heading>
      <Text>
        Developer based in Stockholm, Sweden. Currently working at Mentimeter were we are building an easy-to-use presentation software.
      </Text>
      <nav>
        <List>
          <li><Link href="mailto:christofer.ps.olaison@gmail.com">Mail</Link></li>
          <li><Link href="https://github.com/christoferolaison">Github</Link></li>
          <li><Link href="https://www.linkedin.com/in/christofer-olaison-a4053461/">Linkedin</Link></li>
          <li><Link href="https://twitter.com/tossetosse">Twitter</Link></li>
        </List>
      </nav>
    </div>
  </div>
