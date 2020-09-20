const { connect } = require('mongoose')
const { MONGODB_URI } = process.env

module.exports = async () => {
  try {
    const {
      connection: { host, port },
    } = await connect(MONGODB_URI, {
      // https://mongoosejs.com/docs/deprecations.html
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })

    console.log(`MongoDB Connected: ${host}:${port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
