# This application interacts with ar.io SDK to query mIO balance.

https://build.herculesnode.xyz

![image](https://github.com/HerculesNode/Ario-mIO-balance/assets/101635385/63de4c00-8501-425c-b61a-338ddfcf4d65)

ar.io Sdk uses api
```
const arIO = ArIO.init();
// the balance will be returned in mIO as a value
const balance = await arIO.getBalance({
  address: 'INSERT_WALLET_ADDRESS',
});
```

- @ar.io/sdk
- arweave
- body-parser
- express

- 3333 port
- You can redirect with nginx


### Linkler
 * [Hercules Telegram](https://t.me/HerculesNode)
 * [Hercules Twitter](https://twitter.com/Herculesnode)
 * [Hercules web](https://herculesnode.xyz)

## Install Clone repo

```shell
git clone https://github.com/HerculesNode/Ario-mIO-balance.git
```

```shell
cd Ario-mIO-balance
```

```shell
sudo ufw allow 3333
```

## NPM install

```shell
npm install
```

## @ar.io/sdk 

```shell
npm install @ar.io/sdk
```

## start

```shell
npm start
```

- Check

```shell
http://server-ip:3333
```
