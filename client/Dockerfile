FROM node:alpine as build-stage
WORKDIR /app
COPY ./ ./
RUN npm install && npm run build

FROM nginx:1.23
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY --from=build-stage /app/default.conf /etc/nginx/conf.d/

EXPOSE 80
