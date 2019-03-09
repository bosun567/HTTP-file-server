//////////////////////////////////////////////////////
//
// Write an HTTP server that serves the same html file 
// for each request it receives.
//
//////////////////////////////////////////////////////
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  // - 200 is the return code
  // - "text/plain" menas the the file a text file.
  res.writeHead(200, { 'content-type': 'html' })

  // Argument 2 is the location of the file
  //       c:/temp/abc.txt
  fs.createReadStream(process.argv[3]).pipe(res)
})

// Argument 1 is the port number
server.listen(Number(process.argv[2]))
