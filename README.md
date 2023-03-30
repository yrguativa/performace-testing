Performace Test
===============

This repository have content of course [Curso de performace Testing en Node.js con K6](https://platzi.com/cursos/performance-testing-nodejs/)

![First test result](./asset/first-test-result.png)

> This repository using next [api FakeApi Platzi](https://fakeapi.platzi.com/)

## Run Test

```console
docker pull grafana/k6
docker run --rm -i grafana/k6 run --vus 10 --duration 30s - < test.js
```

## Content

* [First Test ](./first-test.js) 




