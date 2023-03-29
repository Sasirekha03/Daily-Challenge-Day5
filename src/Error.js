
  import * as React from 'react'


function ErrorHandler({e}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{e.message}</pre>
    </div>
  )
}

function City({name}) {
  try {
    return <div>Hello, visit {name.toUpperCase()}</div>
  } catch (error) {
    return <ErrorHandler e={error} />
  }
}

function Country({capital}) {
  try {
    return <div>Hello, visit {capital.toUpperCase()}</div>
  } catch (error) {
    return <ErrorHandler e={error} />
  }
}

function Error() {
  return (
    <div>
      <Country />
      <City />
    </div>
  )
}

export default Error