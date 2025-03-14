# syntax=docker/dockerfile:1

FROM ubuntu:noble
WORKDIR /app
COPY . .
RUN bash run.sh
CMD ["bash", "exec.sh"]
EXPOSE 3000
EXPOSE 3200
EXPOSE 27017