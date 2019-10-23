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

async function getFeatures (url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Erro na conexão')
    }
    const features = await response.json()
    return features
  } catch (e) {
    console.error(e)
    throw new Error('Erro na obtenção de features')
  }
}

export { loadStyles, getPopupContent, makePtFeature, postObj, getFeatures }
