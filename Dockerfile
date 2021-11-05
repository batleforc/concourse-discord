FROM node:17-alpine

ADD script/ /opt/resource/

RUN cd /opt/resource && yarn install

RUN apk --update add git