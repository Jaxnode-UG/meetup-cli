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
$ npm install -g meetup-cli
$ meetup COMMAND
running command...
$ meetup (-v|--version|version)
meetup-cli/0.0.0 darwin-x64 node-v10.9.0
$ meetup --help [COMMAND]
USAGE
  $ meetup COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`meetup help [COMMAND]`](#meetup-help-command)
* [`meetup search TEXT`](#meetup-search-text)
* [`meetup whoami`](#meetup-whoami)

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

## `meetup search TEXT`

search meetup.com

```
USAGE
  $ meetup search TEXT

OPTIONS
  -h, --help     show CLI help
  -z, --zip=zip  zipcode to search in
```

_See code: [src/commands/search.ts](https://github.com/mwoods79/meetup-cli/blob/v0.0.0/src/commands/search.ts)_

## `meetup whoami`

search meetup.com

```
USAGE
  $ meetup whoami
```

_See code: [src/commands/whoami.ts](https://github.com/mwoods79/meetup-cli/blob/v0.0.0/src/commands/whoami.ts)_
<!-- commandsstop -->
