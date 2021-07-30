const test = require('tape')
const { parse, fragment, serialize } = require('.')

test('parse should exist', t => {
  t.ok(parse)
  t.end()
})

test('fragment should exist', t => {
  t.ok(fragment)
  t.end()
})

test('serialize should exist', t => {
  t.ok(serialize)
  t.end()
})
