# Node.js

- [General concepts](#general-concepts)
- [Event emitters](#event-emitters)
- [Modules](#modules)
- [File System](#file-system) 
  - [fs module](#fs-module)
    - [Reading a file](#reading-a-file)
    - [Writing a file](#writing-a-file)
    - [Watching files](#watching-files)
  - [path module](#path-module)
- [Streams](#streams)
  - [Readable streams](#readable-streams)
  - [Writable streams](#writable-streams)
- [HTTP](#http)

# General concepts

* Event driven
* Single thread
* Non-blocking I/O
* The event loop

# Event emitters

EventEmitter is synchronous, and that means the callback is called on every cycle of the for loop

```js
const EventEmitter = require('events').EventEmitter
let emitter = new EventEmitter()
emitter.on('numberAdded', n => console.log(n * 2))
for (let i = 0; i < 10; i++) {
  emitter.emit('numberAdded', i)
}
```

Asynchronous version is `emitter.on('numberAdded', n => setImmediate(() => console.log(n * 2)))`

# Modules

```js
// file: person.js
module.exports = {
  name: 'alexey',
  surname: 'semidotsky',
  getFullName: function(){ return `${this.name} ${this.surname}` }
}

// file: index.js
var user = require('./person' )
console.log(user.name); // alexey
console.log(user.getFullName()); //alexey semidotsky
```

# File System 

## fs module

### Reading a file
```js
const fs = require('fs' )
fs.readFile('/path/to/file', (err, data) => {
   // do something with data
})
```

Synchronous

```js
const fs = require('fs' )
const data = fs.readFileSync('/path/to/file')
```

### Writing a file

```js
const fs = require('fs' )
fs.writeFile('/path/to/file', data, (err) => {
  // check error
})
```    
// `writeFileSync` - sync version

### Watching files

```js
const fs = require('fs')
const watcher = fs.watch( '/path/to/folder')
watcher.on(' change' , function(event, filename) {
  console.log(`${event} on file ${filename}`)
})
```

## path module

```js
const path = require('path')
const fullPath = path.join('/path/to/folder', 'README.md')
// const fullPath = path.join(__dirname, 'README.md')
```

Decomposing a full path in parts:

```js
const path = require('path')
const parts = path.parse('/path/to/a/file.txt')
console.log(parts)
```

# Streams

## Readable streams

```js
const fs = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {
   response.writeHead( 200, {'Content-Type': 'text/html'});
   var stream = fs.createReadStream( './index.html' );
   stream.pipe(response);
});
server.listen(8000);
```

## Writable streams

```js
const fs = require('fs');
var sourceFile = fs.createReadStream('path/to/source.txt');
var destinationFile = fs.createWriteStream('path/to/dest.txt');
  sourceFile.on('data', function(chunk) {
  destinationFile.write(chunk);
});
```

# HTTP
