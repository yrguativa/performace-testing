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
* [Stages](./stages.js) This test using VUs and stages, run test with 10 user in 10s.
* [Smoke](/smoke.js) The smoke test is test with few users.
* [Stress] (./stress.js) The stress test is test with maximum amount of users and requests.
* [Spike](./spike.js) The spike test is a test that increases the number of users in a short time..


