<script>
  import { onMount } from 'svelte'
  import L from 'leaflet'
  import { map } from '../utils/stores.js'

  let mousePos
  
  function changeCursor () {
    const css = document.createElement("style")
    css.type = "text/css"
    css.innerHTML = "* { cursor: crosshair !important; }"
    document.body.appendChild(css)
  }

  L.Control.MousePosition = L.Control.extend({
    options: {
      position: 'bottomleft',
      separator: ' : ',
      emptyString: 'Unavailable',
      lngFirst: false,
      numDigits: 6,
      lngFormatter: undefined,
      latFormatter: undefined,
      prefix: ""
    },

    onAdd: function (map) {
      this._container = L.DomUtil.create('div', 'leaflet-control-mouseposition')
      L.DomEvent.disableClickPropagation(this._container)
      map.on('mousemove', this._onMouseMove, this)
      this._container.innerHTML=this.options.emptyString
      return this._container
    },

    onRemove: function (map) {
      map.off('mousemove', this._onMouseMove)
    },

    _onMouseMove: function (e) {
      var lng = this.options.lngFormatter ? this.options.lngFormatter(e.latlng.lng) : L.Util.formatNum(e.latlng.lng, this.options.numDigits)
      var lat = this.options.latFormatter ? this.options.latFormatter(e.latlng.lat) : L.Util.formatNum(e.latlng.lat, this.options.numDigits)
      var value = this.options.lngFirst ? lng + this.options.separator + lat : lat + this.options.separator + lng
      var prefixAndValue = this.options.prefix + ' ' + value
      this._container.innerHTML = prefixAndValue
      console.log(lng, lat)
    }
  })

  /* L.Map.mergeOptions({
    positionControl: false
  })

  L.Map.addInitHook(function () {
    if (this.options.positionControl) {
      this.positionControl = new L.Control.MousePosition()
      this.addControl(this.positionControl)
    }
  }) */

  L.control.mousePosition = function (options) {
    return new L.Control.MousePosition(options)
  }

  onMount(() => {
    changeCursor()
    L.control.mousePosition().addTo($map)
  })
</script>

<div bind:this={mousePos}/>
