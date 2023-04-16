FROM node:16.13.0-alpine3.11 as node
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

#stage 2
FROM nginx:alpine
COPY --from=node /usr/local/app/dist/pfafront-end /usr/share/nginx/html
EXPOSE 80

