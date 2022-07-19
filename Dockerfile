FROM node:alpine
WORKDIR /home/app
ADD . /home/app/
RUN npm install --save
CMD [ "npm","start" ]
EXPOSE 9999