# OSM vector tiles on IPFS

```bash
git submodule update --init
wget https://osm2vectortiles-downloads.os.zhdk.cloud.switch.ch/v2.0/planet.mbtiles
mbutil/mb-util --image_format=pbf planet.mbtiles planet
ipfs add -r planet
```
