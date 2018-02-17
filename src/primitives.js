
import React from 'react'
import deepmerge from 'deepmerge'
import theme from './theme'

const primitives = {
  Text: {
    is: 'p',
    style: {
      fontFamily: "-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif",
      fontSize: theme.fontSize[0],
      color: theme.color.light,
      lineHeight: theme.lineHeight[1],
      [theme.breakpoints.lg]: {
        color: theme.color.dark,
        fontSize: theme.fontSize[1]
      }
    }
  },
  Heading: {
    is: 'h1',
    composes: 'Text',
    style: {
      fontSize: theme.fontSize[2],
      lineHeight: theme.lineHeight[0],
      fontWeight: theme.fontWeight[1],
      letterSpacing: '0.04em',
      marginBottom: theme.spacing[1],
      [theme.breakpoints.lg]: {
        fontWeight: theme.fontWeight[0],
        letterSpacing: 0.0825,
      }
    }
  },
  Link: {
    composes: 'Text',
    is: 'a',
    style: {
      fontSize: theme.fontSize[1],
      letterSpacing: '0.15625em',
      textTransform: 'uppercase',
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline',
        color: theme.color.primary,
      },
      [theme.breakpoints.lg]: {
        fontSize: theme.fontSize[0],
      }
    }
  },
  List: {
    is: 'ul',
    style: {
      listStyleType: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      marginTop: 20,
    }

  }
}

const toArray = a => Array.isArray(a) ? a : [a]

export default Object.keys(primitives).reduce(
  (prims, name) => {
    const { is: Component, style, composes  } = primitives[name]
    return {
      ...prims,
      [name]: (props) => {
        return (
          <Component
            css={typeof composes !== 'undefined' ? deepmerge(primitives[composes].style, style) : style}
            {...props}
          />
        )
      }
    }}, {})
