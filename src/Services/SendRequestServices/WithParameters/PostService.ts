async function RequestPOST(Route: URL, Parameter: number, Body: Body) {
  let Data = null
  try {
    const CompleteRoute = new URL(Route + '/' + Parameter)
    await fetch(CompleteRoute, {
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
