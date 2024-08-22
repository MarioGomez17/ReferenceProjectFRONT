async function RequestPOST(Route: URL, Body: Object) {
  let Data = null
  try {
    await fetch(Route, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(Body)
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

export default RequestPOST
