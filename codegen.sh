#!/bin/bash
curl -s https://strvtestprojectv2.docs.apiary.io/api-description-document -o ./apiary_docs.apib
apib2swagger -i ./apiary_docs.apib -o ./eventio.yaml
orval --config ./orval.config.js
rm ./apiary_docs.apib