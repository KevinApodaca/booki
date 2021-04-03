export default function(context,inject) {
  const appId = '7C3A29AHIT'
  const apiKey = '311f68154c006577fc0044311ee4a288'
  const headers = {
    'X-Algolia-API-Key': apiKey,
    'X-Algolia-Application-Id': appId,
  }

  inject('dataApi', {
    getHome,
    getReviewsByHomeId,
  })
  async function getHome(homeId) {
    try {
      return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, { headers }))
    } catch (error) {
      return getErrorResponse(error)
    }
  }

  async function getReviewsByHomeId(homeId) {
    try {
      return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/reviews/query`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
          filters: `homeId:${homeId}`,
          hitsPerPage: 6, /* only this many reviews per page */
          attributesToHighlight: []
        })
      }))
    } catch(error) {
      return getErrorResponse(error)
    }
  }

  async function unWrap(response) {
    const json = await response.json()
    const { ok, status, statusText } = response
    return {
      json,
      ok,
      status,
      statusText
    }
  }
  function getErrorResponse(error) {
    return {
      ok: false,
      status: 500,
      statusText: error.message,
      json: {}
    }
  }
}
