FROM node:19.3.0

RUN apt-get update && apt-get install -y

ADD /score_api /app
WORKDIR /app
RUN npm install

RUN export TZ=UTC

ENTRYPOINT ["npm", "start"]
EXPOSE 3000/tcp

HEALTHCHECK --interval=10s --timeout=3s CMD curl --fail http://localhost:3000/healthcheck || exit 1