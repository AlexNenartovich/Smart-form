FROM openjdk:8
ADD demo-0.0.1-SNAPSHOT.jar demo-0.0.1-SNAPSHOT.jar
EXPOSE 5000
ENTRYPOINT ["java", "-jar", "demo-0.0.1-SNAPSHOT.jar"]