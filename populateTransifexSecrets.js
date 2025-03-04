// ./populateTransifexSecrets.js
// Do not commit this file to your repository
import {getCliClient} from 'sanity/cli'
const client = getCliClient({apiVersion: '2023-02-15'})
client.createOrReplace({
  // The `.` in this _id will ensure the document is private
  // even in a public dataset!
  _id: 'transifex.secrets',
  _type: 'transifexSettings',
  // Replace these with your values
  organization: 'colvera',
  project: 'sanity_test',
  token: '1/039028a75ab660639ae3b7730ea423d0b1814768'
})