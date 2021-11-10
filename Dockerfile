FROM node:buster

ADD script/ /opt/resource/
RUN chmod -R 777 /opt/resource
RUN cd /opt/resource && yarn install

RUN apt install git -y