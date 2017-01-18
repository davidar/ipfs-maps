# OSM vector tiles on IPFS

```sh
git submodule update --init
wget https://openmaptiles.os.zhdk.cloud.switch.ch/v3.3/planet_z0_z14.mbtiles
mbutil/mb-util planet_z0_z14.mbtiles planet_z0_z14
ipfs add -r planet_z0_z14
```

```sh
npm install
npm run build
ipfs add -r pub
```
