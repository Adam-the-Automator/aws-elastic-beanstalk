# Get nginx base image
FROM nginx 

# add the index file to nginx
ADD index.html /usr/share/nginx/html/

# expose port to enable elastic beanstalk connect to the docker container
EXPOSE 80 