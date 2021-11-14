# get base image 
FROM scratch

MAINTAINER sandra ashipala <sajustsmile@gmail.com>

RUN apt-get update

LABEL org.opencontainers.image.source="https://github.com/sajustsmile/acuppacoffee"

CMD ["echo", "Hello World...! a cuppa coffee on us"]
