import { parseArgs } from 'node:util'

import SSG from './index.js'

const options = {
  clear: {
    type: 'boolean',
    default: false,
  },
  root: {
    type: 'string',
    default: process.cwd(),
    short: 'r'
  }
}

const { values: args } = parseArgs({ options })

const server = new SSG({
  root: args.root,
  clear: args.clear
})

server.start()
