# Services
Fcash Node has a service module system that can start up additional services that can include additional:
- Blockchain indexes (e.g. querying balances for addresses)
- API methods
- HTTP routes
- Event types to publish and subscribe

The `fcash-node.json` file describes which services will load for a node:

```json
{
  "services": [
    "bitcoind", "web"
  ]
}
```

Services correspond with a Node.js module as described in 'package.json', for example:

```json
{
  "dependencies": {
    "fcash-lib": "^8.0.4",
    "fcash-node": "^8.0.4",
    "insight-api": "^8.0.4"
  }
}
```

_Note:_ If you already have a fcash-node database, and you want to query data from previous blocks in the blockchain, you will need to reindex. Reindexing right now means deleting your fcash-node database and resyncing.

## Using Services Programmatically
If, instead, you would like to run a custom node, you can include services by including them in your configuration object when initializing a new node.

```js
//Require fcash
var fcash = require('fcash-node');

//Services
var Bitcoin = fcash.services.Bitcoin;
var Web = fcash.services.Web;

var myNode = new fcash.Node({
  network: 'regtest'
  services: [
    {
      name: 'bitcoind',
      module: Bitcoin,
      config: {
        spawn: {
          datadir: '/home/<username>/.fcash',
          exec: '/home/<username>/fcash-node/bin/fcashd'
        }
      }
    },
    {
      name: 'web',
      module: Web,
      config: {
        port: 3001
      }
    }
  ]
});
```

Now that you've loaded your services you can access them via `myNode.services.<service-name>.<method-name>`. For example if you wanted to check the balance of an address, you could access the address service like so.

```js
myNode.services.bitcoind.getAddressBalance('1HB5XMLmzFVj8ALj6mfBsbifRoD4miY36v', false, function(err, total) {
  console.log(total.balance); //Satoshi amount of this address
});
```

## Writing a Service
A new service can be created by inheriting from `Node.Service` and implementing these methods and properties:
- `Service.dependencies` -  An array of services that are needed, this will determine the order that services are started on the node.
- `Service.prototype.start()` - Called to start up the service.
- `Service.prototype.stop()` - Called to stop the service.
- `Service.prototype.blockHandler()` - Will be called when a block is added or removed from the chain, and is useful for updating a database view/index.
- `Service.prototype.getAPIMethods()` - Describes which API methods that this service includes, these methods can then be called over the JSON-RPC API, as well as the command-line utility.
- `Service.prototype.getPublishEvents()` - Describes which events can be subscribed to for this service, useful to subscribe to events over the included web socket API.
- `Service.prototype.setupRoutes()` - A service can extend HTTP routes on an express application by implementing this method.

The `package.json` for the service module can either export the `Node.Service` directly, or specify a specific module to load by including `"fcashNode": "lib/fcash-node.js"`.

Please take a look at some of the existing services for implementation specifics.

