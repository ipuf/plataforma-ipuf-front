export function loadCss (url) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = url
  document.head.appendChild(link)

  return link
}

export function getPopupContent (feature) {
  let content = ''
  const entries = Object.entries(feature.properties)
  for (const [field, value] of entries) {
    content += `<tr><th scope="row">${field}</th><td>${value[0]}</td></tr>`
  }
  return `<table>${content}</table>`
}

export function makeFeature (obj, lat, lng) {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [lat, lng]
    },
    properties: obj
  }
}

export function makeFeatCol (firebaseData) {
  // receive firebase data, convert to feature collection
  return {
    type: 'FeatureCollection',
    features: firebaseData ? Object.values(firebaseData) : ''
  }
}

function base36encode (integer) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const sign = integer < 0 ? '-' : ''
  integer = Math.abs(integer)
  let result = ''
  let remainder

  while (integer > 0) {
    [integer, remainder] = [Math.trunc(integer / 36), integer % 36]
    result = chars[remainder] + result
  }

  return sign + result
}

export function encodeCoords (coords) {
  const latCode = base36encode(coords[0] * 10 ** 6) // encode -27597493
  const lngCode = base36encode(coords[1] * 10 ** 6) // encode -48549741
  return latCode + '_' + lngCode
}
