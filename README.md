![Build status](https://travis-ci.com/samuelcsantana/desafio-luizalabs.svg?token=iG2xRybfkb9yunYCdUQT&branch=master)
# Desafio Luizalabs

- [Introdução](#st1)
- [A Aplicação](#st2)
- [Executando a Aplicação](#st3)
  - [Configurando variáveis de ambiente](#st4)
  - [Iniciando a Aplicação](#st5)
- [Link da Aplicação](#st6)

<div id='st1' />

## Introdução

Esta aplicação é parte do processo de seleção na Luizalabs, foi solicitado o desenvolvimento de uma aplicação web (single page app) para consulta de endereço a partir do CEP.

<div id='st2' />

## A Aplicação

A aplicação foi desenvolvida em javascript, utilizando :
- [React](https://pt-br.reactjs.org/) ( [Hooks](https://react-redux.js.org/next/api/hooks) e [Redux](https://github.com/reduxjs/redux-thunk) )
- [customize-cra](https://github.com/arackaf/customize-cra)
- [Antd](https://ant.design/docs/react/introduce)
- [Travis](https://docs.travis-ci.com/user/tutorial/)
- [Heroku](https://www.heroku.com/what) (continuous deployment)
- [Jest](https://jestjs.io/docs/en/tutorial-react)
- [Arquitetura](https://www.treinaweb.com.br/blog/flux-descubra-o-motivo-do-sucesso-dessa-arquitetura-em-grandes-empresas/) [Flux](https://www.treinaweb.com.br/blog/flux-descubra-o-motivo-do-sucesso-dessa-arquitetura-em-grandes-empresas/)



<div id='st3' />

## Executando a Aplicação

```sh
  git clone https://github.com/samuelcsantana/desafio-luizalabs.git
```
```sh
  cd desafio-luizalabs
```
```sh
  yarn ou npm i
```

<div id='st4' />

Crie um arquivo .env e coloque os valores abaixo.
```sh
REACT_APP_URL_API_VIACEP=https://viacep.com.br/ws/
REACT_APP_URL_API_GMAPS=https://maps.googleapis.com/maps/api/
REACT_APP_URL_API_KEY_GOOGLEMAPS="MINHA_API_KEY_GOOGLE"
```
Não esqueça de ativar o serviço de [geocodificação](https://developers.google.com/maps/documentation/geocoding/start?hl=pt&utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_351280161054-ADGP_Hybrid+%7C+AW+SEM+%7C+SKWS+~+Places+%7C+BMM+%7C+Geocoding-KWID_43700044401405919-kwd-341556977164-userloc_1031776&utm_term=KW_%2Bgeocoding-ST_%2Bgeocoding&gclid=CjwKCAiA35rxBRAWEiwADqB376Qca1xmA-sRwVfrmH2VVkvKC53zreURT7n1sHXQ6qsTMz3S7wKTMBoCmCwQAvD_BwE) do google.

<div id='st5' />
Ao final,

```sh
  yarn/npm start
```

<div id='st6' />

# Link da Aplicação

A Aplicação está disponível no Heroku atráves deste [Link](https://myaddress-luizalabs.herokuapp.com/).
