var gulp = require('gulp')
var fs   = require('fs')
var del  = require('del')
var path = require('path')

var replaceFiles = function (cb) {
  var temp = path.resolve(process.env.PWD, GULP_CONFIG.root.dest)
  var dest = path.resolve(process.env.PWD, GULP_CONFIG.root.finalDest)
  del.sync([ dest ], { force: true })
  fs.renameSync(temp, dest)
  del.sync([ temp ])
  cb()
}

gulp.task('replaceFiles', replaceFiles)

module.exports = replaceFiles