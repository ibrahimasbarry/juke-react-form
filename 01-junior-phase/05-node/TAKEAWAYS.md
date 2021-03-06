# Main Takeaways

* Concepts of program execution
  * A program is data / text in storage
  * A process is a program loaded into memory and executed by the CPU
    * A thread is a sequence of steps executed by the CPU
    * A process consists of one or more threads which share memory (variables)
    * Multiple processes can be spawned from the same program
    * Processes do not share memory
    * The Operating System (OS) schedules jumps between all active threads
    * Every process has a PID (Process ID)
* UNIX basics
  * Every UNIX command is really a small, single-purpose program
  * `man _____` is a UNIX command for reading the **man**ual pages for a given command
  * UNIX programs accept data from STDIN and output data to STDOUT (normally) or STDERR (if something went wrong)
  * Many UNIX programs accept an argument (e.g. a filename to run on)
  * The STDOUT stream of one program can be "piped" (via `|`) to the STDIN of another program, and so on
  * If STDOUT is not explicitly piped, the default is for that data to end up in the terminal as text
* Node.js
  * A process for executing JavaScript on a machine, in a non-web-browser context
  * Consists of the V8 JS runtime (a single-threaded compiler), event loop, thread pool, and other C/C++ components
  * Has APIs and variables for interacting with the machine, such as the filesystem and network
    * Asynchronous, synchronous, blocking, and non-blocking
    * Node-style error-first callbacks ("errbacks") for asynchronous functions
    * Specific examples including `fs.readdir`, `fs.readFile`
    * Has global and module variables for specific information
      * `__dirname`: directory the module is located in
      * `process.pwd()`: directory the user initiated the node process from
      * `process.argv`: arguments user wrote to initiate the node process
      * `process.env`: object containing environment variables as properties
  * Uses the CommonJS module system
    * Definition of a module: JS or JSON file
    * Requiring modules
      * Runs the file the first time, and caches the result (if required again, simply uses the old value): "singleton"
      * The result is the `module.exports` value (JS) or JSON object (JSON) of that module
      * The `require` statement
        * Used with built-in modules: fetches by module name, e.g. `var fs = require('fs')`
        * Used with installed npm packages: fetches by module name, e.g. `var chalk = require('chalk')`
        * Used with custom-written modules (JS files): fetches by relative path, e.g. `var myCommands = require('./commands/index.js')`
          * Assumes the `js` extension, e.g. `var myCommands = require('./commands/index')`
          * Assumes an `index.js` file, e.g. `var myCommands = require('./commands/')` or `require('./commands')`

# Questions

* using a timeout instead of functions
  * callback functions are very difficult, and they're also kind of like black holes: once you go in, there is no escape
* uniq
  * Sets are cool!
  ```
const mySet = new Set()
  const someObj = {}
mySet.add(2)
mySet.add('asdf')
mySet.add(someObj).add(someObj)
  ```
