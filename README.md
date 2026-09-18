# Dionisys

## Descripción

Dionisys es una aplicación móvil desarrollada con React Native y Expo, orientada a la gestión y control del inventario de ambientes de formación.

El proyecto busca digitalizar el proceso de verificación de los elementos presentes en los ambientes, permitiendo registrar el estado del inventario y las novedades encontradas durante las sesiones de formación.

## Tecnologías

* React Native
* Expo
* JavaScript
* Expo Router
* NativeWind
* Bun
* PostgreSQL *(en desarrollo)*
* Docker *(entorno de desarrollo)*

## Estructura del proyecto

El proyecto está organizado utilizando Expo Router y componentes reutilizables para mantener una estructura modular y facilitar el mantenimiento de la aplicación.

Entre los componentes desarrollados se encuentran:

* `CustomLogo`
* `CustomLogotipo`
* `CustomAvatar`
* `CustomTarget`
* `CustomSeparador`
* `CustomButton`
* `CustomInput`
* `CustomSelect`

La navegación principal de la aplicación está compuesta por:

* Inicio
* Inventario
* Novedades
* Perfil

La selección del ambiente se realiza desde la pantalla de Inicio.

## Funcionalidades implementadas

* Configuración inicial del proyecto con React Native y Expo.
* Implementación de Expo Router.
* Configuración de NativeWind.
* Definición de identidad visual y paleta de colores.
* Configuración de tipografías.
* Desarrollo de componentes reutilizables.
* Implementación de la pantalla de Inicio.
* Selector de ambiente de trabajo.
* Definición de ambientes de formación.
* Estructura inicial de las secciones de Inventario, Novedades y Perfil.
* Diseño inicial del flujo de verificación del inventario.
* Definición del concepto de novedades.
* Definición inicial de la arquitectura de datos.
* Diseño conceptual del modelo relacional.
* Planeación de PostgreSQL como sistema gestor de base de datos.

## Funcionalidades en desarrollo

* Implementación completa del módulo de Inventario.
* Implementación del registro y consulta de novedades.
* Autenticación de usuarios.
* Gestión de usuarios, roles y permisos.
* Conexión con la base de datos PostgreSQL.
* Desarrollo de API/backend.
* Persistencia de información.
* Gestión de ambientes.
* Gestión de fichas y grupos de formación.
* Registro de instructores.
* Asociación entre instructores, ambientes y sesiones.
* Registro del estado de los elementos del inventario.
* Implementación completa del flujo de verificación del ambiente.
* Pruebas funcionales e integración.

## Modelo funcional

El flujo principal planteado para Dionisys es:

```text
Instructor
    │
    ▼
Inicio
    │
    ▼
Seleccionar ambiente
    │
    ▼
Consultar inventario
    │
    ▼
Verificar elementos
    │
    ├───────────────┐
    │               │
 Coincide       Diferencia
    │               │
    ▼               ▼
Confirmar       Registrar
inventario      novedad
    │               │
    └───────┬───────┘
            ▼
        Historial
```

## Estado del proyecto

**En desarrollo**

Dionisys cuenta actualmente con una base inicial de interfaz móvil, navegación, componentes reutilizables, definición funcional y diseño preliminar de la arquitectura de datos.

El siguiente objetivo principal es consolidar la base de datos y posteriormente conectar la aplicación móvil con los datos reales del sistema.

## Instalación

```bash
bun create expo@latest
name
cd name
code . (VS)

```

Para iniciar el proyecto:

```bash
bun start
bun start -c
```


Para configurar mi entorno de acuerdo a la documentacion de NativeWind

https://www.nativewind.dev/docs/getting-started/installation

```bash
bunx expo install nativewind@4.2.7 react-native-reanimated react-native-safe-area-context
bunx expo install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11 babel-preset-expo

npx tailwindcss init
tailwind.config.js

bunx expo customize

```
