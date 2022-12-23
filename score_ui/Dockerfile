FROM node:19.3.0

RUN apt-get update && apt-get install -y

ADD /score_ui /app
WORKDIR /app
RUN yarn install

RUN export TZ=UTC

ENTRYPOINT ["yarn", "start"]
EXPOSE 1024/tcp