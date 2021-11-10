FROM node:buster

ADD script/ /opt/resource/

RUN cd /opt/resource && yarn install

RUN apt install git -y