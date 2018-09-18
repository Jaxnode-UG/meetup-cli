meetup
======

meetup.com cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/meetup.svg)](https://npmjs.org/package/meetup)
[![Downloads/week](https://img.shields.io/npm/dw/meetup.svg)](https://npmjs.org/package/meetup)
[![License](https://img.shields.io/npm/l/meetup.svg)](https://github.com/mwoods79/meetup/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g meetup
$ meetup COMMAND
running command...
$ meetup (-v|--version|version)
meetup/0.0.0 darwin-x64 node-v10.9.0
$ meetup --help [COMMAND]
USAGE
  $ meetup COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`meetup hello [FILE]`](#meetup-hello-file)
* [`meetup help [COMMAND]`](#meetup-help-command)
* [`meetup search [FILE]`](#meetup-search-file)

## `meetup hello [FILE]`

describe the command here

```
USAGE
  $ meetup hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ meetup hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/mwoods79/meetup/blob/v0.0.0/src/commands/hello.ts)_

## `meetup help [COMMAND]`

display help for meetup

```
USAGE
  $ meetup help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_

## `meetup search [FILE]`

describe the command here

```
USAGE
  $ meetup search [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/search.ts](https://github.com/mwoods79/meetup/blob/v0.0.0/src/commands/search.ts)_
<!-- commandsstop -->
