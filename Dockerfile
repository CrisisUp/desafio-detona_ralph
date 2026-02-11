# Usa uma imagem leve do Nginx para servir arquivos estáticos
FROM nginx:alpine

# Copia todos os arquivos do seu jogo para a pasta do servidor
COPY . /usr/share/nginx/html

# Expõe a porta 80 para acesso
EXPOSE 80