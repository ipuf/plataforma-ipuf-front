# Svelte Dash

This project is based on [Svelte](https://svelte.dev), [Leaflet](https://leafletjs.com) and [jexcel](https://bossanova.uk/jexcel/v3/). 

The idea here is to create a 'WebGIS-light' solution for geospatial data management. The app expects geojson data, which it renders through Leaflet, populating popups with properties of features, and giving the user a high-level view of the data with an (editable) attribute table. 

This was made for users that do not have enough familiarity with tools such as ArcGIS or QGIS, but still need to manage spatial data safely, intuitively and in a visually pleasant manner. Doing so through a webapp allows them to display it anywhere they go with no extra training required beyond basic internet use, and allows the data to be formatted before any CRUD operations happen.

## Get started
*Note that you will need to have [Node.js](https://nodejs.org) installed.*

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start webpack:

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and the page should reload with your changes.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
