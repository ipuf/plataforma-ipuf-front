<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import { map, mode, marker } from "../utils/stores.js";

  function addMarker(e) {
    if (!$marker) {
      $marker = L.marker(e.latlng);
      $marker.addTo($map);
    } else {
      $marker.setLatLng(e.latlng);
    }
    setTimeout(() => ($mode = false), 200);
  }

  onMount(() => {
    const cursor = document.createElement("style");
    cursor.type = "text/css";
    cursor.innerHTML = "* { cursor: crosshair !important; }";
    document.head.appendChild(cursor);
    $map.on("click", e => addMarker(e));

    return () => {
      $map.off("click");
      cursor.parentNode.removeChild(cursor);
    };
  });
</script>
