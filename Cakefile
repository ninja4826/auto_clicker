fs = require 'fs'
{spawn} = require 'child_process'

js = (callback) ->
    coffee = spawn 'coffee.cmd', ['-o', 'js', '-c', 'src']
    coffee.stderr.on 'data', (data) ->
        process.stderr.write data.toString()
    coffee.stdout.on 'data', (data) ->
        console.log data.toString()
    coffee.on 'exit', (code) ->
        callback?() if code is 0

    oldSpawn = coffee.spawn
    mySpawn = ->
        console.log 'spawn called'
        console.log arguments
        result = oldSpawn.apply this, arguments
        return result
    coffee.spawn = mySpawn

task 'build', 'Build js/ from src/', ->
    build()

task 'watch', 'Watch src/ for changes', ->
    coffee = spawn 'coffee.cmd', ['-w', '-o', 'js', '-c', 'src']
    coffee.stderr.on 'data', (data) ->
        process.stderr.write data.toString()
    coffee.stdout.on 'data', (data) ->
        console.log data.toString()
