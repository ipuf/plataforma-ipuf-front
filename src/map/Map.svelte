<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import Marker from "./components/Marker.svelte";
  import { map, features } from "../utils/stores.js";
  import { loadStyles } from "../utils/helpers.js";

  export let lat;
  export let lon;
  export let zoom;

  let container;

  async function getFeatures() {
    const features = [];

    try {
      const response = await fetch("http://localhost:5000/eivs/data"); //development
      const data = await response.json();
      for (let feature of data) {
        feature.geometry.coordinates.reverse();
        features.push(feature);
      }
      return features;
    } catch (e) {
      return console.error(e);
    }
  }

  onMount(async () => {
    const link = loadStyles("https://unpkg.com/leaflet@1.5.1/dist/leaflet.css");

    link.onload = () => {
      $map = L.map(container, {
        zoomControl: false,
        doubleClickZoom: false
      });
      $map.setView([lat, lon], zoom);

      const cartoDB = L.tileLayer(
        "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19
        }
      ).addTo($map);
    };

    $features = await getFeatures();
    console.log($features);

    return () => {
      $map.remove();
      link.parentNode.removeChild(link);
    };
  });
</script>

<style>
  div {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
  }
</style>

<div bind:this={container}>
  {#if $map}
    {#if $features}
      {#each $features as feature}
        <Marker {feature} />
      {/each}
    {/if}
  {/if}
</div>
