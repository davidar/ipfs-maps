# OSM vector tiles on IPFS

```bash
mb-util --image_format=pbf world.mbtiles world
find world -empty -delete
gzip -d -r -S .pbf world
ipfs add -r world
```
