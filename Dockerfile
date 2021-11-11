FROM node:14.18.1-buster

ADD script/ /opt/resource/
RUN chmod -R 777 /opt/resource
RUN cd /opt/resource && npm install

RUN apt install git -y