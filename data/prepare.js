import fs from 'fs'
import _ from 'lodash'
import data from './data.json' assert { type: 'json' }

const test = _(data).map('permissions').sortBy().uniq().value()
console.log(test)
console.log(test.length)

_.each(data, item => {
  const { id, serialNumber, type, model, arrivalDate, location, functionalStatus, usagePermissions, origin, legalStatus, certification, note } = item
})

// fs.writeFileSync('data.json', JSON.stringify(data))