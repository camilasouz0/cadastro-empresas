Requisitos

Docker
node 20

Instalação
```
docker-compose up -d
```
```
npm install
```
Para rodar o back-end
```
npm start
```

Alguns Curls da API:

Pegar uma empresa
```
curl 'http://localhost:3000/api/v1/companies' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6' \
  -H 'Connection: keep-alive' \
  -H 'Origin: http://localhost:4200' \
  -H 'Referer: http://localhost:4200/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"'
```

Criar empresa
```
curl 'http://localhost:3000/api/v1/companies' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:4200' \
  -H 'Referer: http://localhost:4200/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  --data-raw '{"id":null,"nome":"Nome empresa","cnpj":"4448985300331","endereco":"Rua 123 PS.","email":"email@email.com","telefone":"9131190912"}'
```