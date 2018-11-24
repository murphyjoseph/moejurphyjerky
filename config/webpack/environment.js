// https://github.com/rails/webpacker/blob/master/docs/webpack.md
// https://github.com/rails/webpacker/issues/371
// https://hype.codes/how-assemble-rails-frontend-using-webpacker

const { environment } = require('@rails/webpacker')

const jsonLoader = require('./loaders/json')

// Insert json loader at the top of list
environment.loaders.prepend('json', jsonLoader)

// Insert json loader after/before a given loader
environment.loaders.insert('json', jsonLoader, { after: 'style'} )
environment.loaders.insert('json', jsonLoader, { before: 'babel'} )

const url = require('./loaders/url')
const typescript = require('./loaders/typescript')

environment.loaders.prepend('url', url)
environment.loaders.prepend('typescript', typescript)

// avoid using both file and url loaders
environment.loaders.get('file').test = /\.(tiff|ico|svg|eot|otf|ttf|woff|woff2)$/i

module.exports = environment
