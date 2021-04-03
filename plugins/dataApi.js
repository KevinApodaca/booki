export default function(context,inject) {
  const appId = '7C3A29AHIT'
  const apiKey = '311f68154c006577fc0044311ee4a288'

  inject('dataApi', {
    getHome
  })
  async function getHome(homeId) {
    const response = await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
      headers: {
        'X-Algolia-API-Key': apiKey,
        'X-Algolia-Application-Id': appId,
      }
    })
    const json = await response.json()
    return json
  }
}
