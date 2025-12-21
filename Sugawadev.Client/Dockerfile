FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# copy csproj files for restore
COPY ./Sugawadev/Sugawadev.csproj ./Sugawadev/
COPY ./Sugawadev.Client/Sugawadev.Client.csproj ./Sugawadev.Client/

RUN dotnet restore ./Sugawadev/Sugawadev.csproj

# copy all sources
COPY ./Sugawadev ./Sugawadev
COPY ./Sugawadev.Client ./Sugawadev.Client

WORKDIR /src/Sugawadev
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:8080
COPY --from=build /app/publish .

EXPOSE 8080
ENTRYPOINT ["dotnet", "Sugawadev.dll"]