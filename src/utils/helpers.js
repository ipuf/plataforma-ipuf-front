function loadStyles (url) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = url
  document.head.appendChild(link)

  return link
}

function getPopupContent (feature) {
  let content = ''
  const entries = Object.entries(feature.properties)
  for (let [field, value] of entries) {
    if (field === 'id') { value = [value] }
    content += `<tr><th scope="row">${field}</th><td>${value[0]}</td></tr>`
  }
  return `<table>${content}</table>`
}

function makePtFeature (obj, lat, lng) {
  return {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [lat, lng]
    },
    properties: obj
  }
}

function makeFeatCol (arrayOfFeatures) {
  // receive firebase data, convert to feature collection
  return {
    type: 'FeatureCollection',
    crs: {
      type: 'name',
      properties: {
        name: 'EPSG:4326'
      }
    },
    features: arrayOfFeatures ? Object.values(arrayOfFeatures) : ''
  }
}

async function postObj (url, obj) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    console.log('Success:', JSON.stringify(json))
  } catch (err) {
    console.error('Error:', err)
  }
}

export { loadStyles, getPopupContent, makePtFeature, makeFeatCol, postObj }
