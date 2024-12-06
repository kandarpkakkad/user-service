FROM node:14-alpine3.16

WORKDIR /app/user-service

COPY . /app/user-service/

RUN npm i

COPY . /app/user-service/

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

CMD node ${FILE_PATH}

EXPOSE ${PORT}
EXPOSE ${NODE_ENV}
