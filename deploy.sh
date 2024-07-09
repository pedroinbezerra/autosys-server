#!/bin/bash

# Atualiza o projeto com a branch main, remove os containers antigos e rebuilda o projeto

echo "Atualizando projeto: Autosys - Server"

git pull && npm i && docker-compose down --remove-orphans && docker-compose up -d --build