# OSM vector tiles on IPFS

```sh
git submodule update --init
wget https://osm2vectortiles-downloads.os.zhdk.cloud.switch.ch/v2.0/planet.mbtiles
mbutil/mb-util planet.mbtiles planet
ipfs add -r planet
```

```sh
npm install
npm run build
ipfs add -r pub
```
