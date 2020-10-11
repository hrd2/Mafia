FROM node:12.7 AS frontendbuild
USER root
WORKDIR /frontend
RUN npm install -g @angular/cli
ADD ./frontend .
RUN mkdir /frontend/copy-assets
COPY /frontend/src/assets/* /frontend/copy-assets/
RUN ng build --prod

FROM gradle:jdk11 as backendbuild
USER root
WORKDIR /backend
ADD ./backend .
RUN mkdir src/main/resources/static/assets
COPY --from=frontendbuild /frontend/copy-assets/* src/main/resources/static/assets/
COPY --from=frontendbuild /frontend/dist/mafia/* src/main/resources/static/
RUN gradle build

FROM openjdk:11
WORKDIR /app
EXPOSE 8080
COPY --from=backendbuild /backend/build/libs/mafia-0.0.1-SNAPSHOT.jar ./mafia.jar
CMD ["java", "-jar", "mafia.jar"]