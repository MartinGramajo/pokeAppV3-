# Proyecto PokeAppV3 - Redux Toolkit

### ¡Bienvenido a PokeAppV3! 🎉

Esta aplicación desarrollada en React utiliza Redux Toolkit para gestionar el estado de manera eficiente. Hemos creado una experiencia envolvente para los amantes de Pokémon, permitiendo buscar, filtrar y visualizar detalles de tus Pokémon favoritos. La aplicación consume datos de la API PokeAPI para ofrecer una experiencia rica y dinámica.

## Funcionalidades Principales:

### Home 🏠

- Listado de Pokémon: Visualiza un listado inicial de 20 cartas de Pokémon, con la opción de cargar más.

- Búsqueda y Filtro: Filtra los Pokémon por nombre o tipo. Si no se encuentran resultados, se muestra una carta informativa.

![Estructura](https://res.cloudinary.com/dtbfspso5/image/upload/v1720718478/Captura_de_pantalla_2024-07-11_134751_czdyyd.png)

### Detalle 📚

-Información Completa: Visualiza detalles exhaustivos de cada Pokémon, incluyendo su descripción y estadísticas base mediante gráficos creados con Recharts.

![Estructura](https://res.cloudinary.com/dtbfspso5/image/upload/v1720718701/Captura_de_pantalla_2024-07-11_142431_ebhzxr.png)

### Favoritos 🌟

En esta vista, se mapea una lista de pokemon que guardo en localStorage, que el usuario en la vista del home le dio al boton agregar a favoritos.
En caso de no tener todavia una lista de pokemon favorito muestro el siguiente mensaje:
![Estructura](https://res.cloudinary.com/dtbfspso5/image/upload/v1720718741/Captura_de_pantalla_2024-07-11_142532_ry80zg.png)

## Tecnologias / Herramientas ⚙

- React
- Redux Toolkit
- React-Redux
- React Bootstrap
- React Router DOM
- Recharts

## Requisitos 💻

Este proyecto es una excelente oportunidad para poner a prueba tus habilidades en peticiones asíncronas utilizando Redux.

Funcionalidades:

Búsqueda de Pokémon:

1. Permitir a los usuarios buscar Pokémon por su nombre. Mostrar una lista de Pokémon que coincida con la búsqueda.

2. Detalle de Pokémon: Muestra detalles completos al hacer clic en un Pokémon de la lista.

3. Filtrado por Tipo: Filtra Pokémon por tipo (agua, fuego, planta, etc.).

Endpoints:

- Todos: https://pokeapi.co/api/v2/pokemon?limit=100

- Pokémon especifico: https://pokeapi.co/api/v2/pokemon/${name}

## Como Clonar el repositorio 💻

```bash
Agrego el link de mi repo [repositorio](https://github.com/MartinGramajo/pokeAppV3-.git)

git clone https://github.com/MartinGramajo/pokeAppV3-.git
```

## Como contribuir con el repositorio 🤝

Si deseas contribuir al proyecto, por favor contacta a través del siguiente correo: **martingramajo08@gmail.com**

## Autores 🤺

1. Martin Gramajo ( 🎩 Mago )

## Licencia 📃

copyright (c) 2024
