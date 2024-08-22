async function RequestGET(Route: URL) {
  let Data = null
  try {
    await fetch(Route, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      }
    })
      .then((Result) => Result.json())
      .then((Response) => {
        Data = Response
      })
    return Data
  } catch {
    return null
  }
}

export default RequestGET
