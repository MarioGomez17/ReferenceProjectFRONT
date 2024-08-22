async function RequestGET(Route: URL, Parameter: number) {
  let Data = null
  try {
    const CompleteRoute = new URL(Route + '/' + Parameter)
    await fetch(CompleteRoute, {
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
