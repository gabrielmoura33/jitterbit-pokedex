# Use uma imagem oficial do Node.js como base
FROM node:20

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código do projeto
COPY . .

# Expõe a porta do serviço
EXPOSE 4200

# Comando padrão para o container
CMD ["npm", "start"]
