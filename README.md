# typescript-solid-mvc-template

This project is a template to MVC project in typescript with implementation of SOLID patteners, besides other patters like Factory pattern.

## Table of Contents
  - [PRE-REQUISITES](##PRE-REQUISITES)
  - [Install](#Install)
  - [Configure](#Configure)
  - [Execute](#Execute)
  - [Update swagger](#Update-swagger)
  - [ROUTES-DOC](#ROUTES-DOC)
  - [DOC](#Update-swagger)
  - [Structure](#Structure)

## PRE-REQUISITES

node 12+
npm 6+

# Install

start with clone of project in your machine.
create a repository and clone the project

```
git clone 'project'
```

install all dependencies with npm or yarn
```
npm install
```
# Configure
```
At this moment you don't need configure anything but you can change the PORT of aplication on .env, default is 3333
```
# Execute
```
npm run start
```

# Update-swagger 
```
npm run swagger-autogen
```

# ROUTES-DOC
```
You can see the swagger doc of aplication on http://localhost:4444/doc/ after run the aplication..
```

# Structure
### Folder

```
src 
    -config                        // responsible for validate all enviropment variables and disponibilize defaults if possible
    -entities                      // 
    -factoriess                      // 
    -providers                     //
    -repositorys                   // 
    -useCases                      // conteins all useCases 
        -CreatePost                    //
    app.ts                         // inicialize the aplication 
    routes.ts                      // configure all routes of aplication
    server.ts                      // configure server
```

