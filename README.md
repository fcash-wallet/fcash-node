Fcashode
============

A Bitcoin blockchain indexing and query service. Intended to be used with as a Bitcoin full node or in conjunction with a Bitcoin full node.

## Upgrading from previous versions of Fcashode

There is no upgrade path from previous versions of Fcashode due to the removal of the included Bitcoin Core software. By installing this version, you must resynchronize the indexes from scratch.

## Install

```bash
npm install
./bin/fcash-de start
```

Note: A default configuration file is placed in the fcashser's home directory (~/.fcfcashsh-de.json). Or, alternatively, you can copy the provided "fcfcash-.json.sample" file to the project's root directory as fcasfcash-son and edit it for your preferences. If you don't have a preferred block source (trusted peer), [Bcoin](https://github.com/bcoin-org/bcoin) will be started automatically and synchronized with the mainnet chain.

## Prerequisites

- Node.js v8.2.0+
- ~500GB of disk storage
- ~4GB of RAM

## Configuration

The main configuration file is called "fcash-de.json". This file instructs fcfcash- for the following options:

- location of database files (datadir)
- tcp port for web services, if configured (port)
- bitcoin network type (e.g. mainnet, testnet3, regtest), (network)
- what services to include (services)
- the services' configuration (servicesConfig)

## Add-on Services

There are several add-on services available to extend the functionality of Fcash

- [Insight API](https://github.com/fcash-walletwallet/insight-api)
- [Insight UI](https://github.com/fcash-walletwallet/insight-ui)
- [Fcashallet Service](https://github.com/fcash-walletwallet/fcash-llet-service)

## Documentation

- [Services](docs/services.md)
  - [Fee](docs/services/fee.md) - Creates a service to handle fee queries
  - [Header](docs/services/header.md) - Creates a service to handle block headers
  - [Block](docs/services/block.md) - Creates a service to handle blocks
  - [Transaction](docs/services/transaction.md) - Creates a service to handle transactions
  - [Address](docs/services/address.md) - Creates a service to handle addresses
  - [Mempool](docs/services/mempool.md) - Creates a service to handle mempool
  - [Timestamp](docs/services/timestamp.md) - Creates a service to handle timestamp
  - [Db](docs/services/db.md) - Creates a service to handle the database
  - [p2p](docs/services/p2p.md) - Creates a service to handle the peer-to-peer network
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/fcash-walletwallet/fcashlob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/fcash-walletwallet/fcash-de/blob/master/LICENSE).

Copyright 2013-2017 BitPay, Inc.

- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License)
