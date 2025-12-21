FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

COPY ./Sugawadev.Client/Sugawadev.Client.csproj ./Sugawadev.Client/
COPY ./Sugawadev/Sugawadev.csproj ./Sugawadev/

RUN dotnet restore ./Sugawadev.Client/Sugawadev.Client.csproj

COPY ./Sugawadev.Client ./Sugawadev.Client
COPY ./Sugawadev ./Sugawadev

WORKDIR /app/Sugawadev.Client
RUN dotnet publish -c Release -o /publish

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

COPY --from=build /publish/wwwroot .

EXPOSE 80