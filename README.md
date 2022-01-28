<h1 align="center">My Movies 🍿</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Typescript web application to search for, add to list and favorite movies

## How to run?

You can run it by using docker, docker-compose or your local environment:

### Configure keys

```sh
cp .env.example .env
nano .env
```

### Using Docker?

To build the image:
```sh
docker build -t [your-tagname-here] .
```

To run the image:
```sh
docker run -it --rm -v ${PWD}:/app -v /app/node_modules \
  -p [your-configured-port-here]:[your-configured-port-here] \
  -e CHOKIDAR_USEPOLLING=true \
  [your-tagname-here]
```

### Using Docker compose?

```sh
docker-compose up --build
```
### Install

```sh
yarn install
```

## Local usage

```sh
yarn start
```

## Tests

```sh
# regular test
yarn test

# test in watch mode
yarn test:watch

# coverage
yarn test:cov
```

## E2E tests

```sh
# headless browser
yarn test:e2e

# running on chrome
yarn test:e2e:browser
```

## Build

```sh
# build for production
yarn build

# analyzing bundle size
yarn analyze
```

## Lint

```sh
# check lint issues
yarn lint

# fix lint issues
yarn lint:fix
```

## TODO

- [] Add storybook
- [] Add "x" to clear input
- [] Clear input after search

## Author

🦊 **William G.**

- Github: [@rap0so](https://github.com/rap0so)
- LinkedIn:
  [@william-godoy-4bb919b5](https://linkedin.com/in/william-godoy-4bb919b5)
  
## 📝 License

Copyright © 2020 [William G.](https://github.com/rap0so).<br /> This project is
[MIT](https://opensource.org/licenses/MIT) licensed.

---

_This README was generated with ❤️ by
[readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
