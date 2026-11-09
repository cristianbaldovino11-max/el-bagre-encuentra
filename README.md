# El Bagre Encuentra

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#103c32">

<title>El Bagre Encuentra | Compra, arrienda y alquila</title>

<style>
:root {
    --verde: #103c32;
    --verde2: #176b50;
    --dorado: #f2bd55;
    --fondo: #f5f7f4;
    --texto: #23332d;
    --blanco: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: var(--fondo);
    color: var(--texto);
    line-height: 1.6;
}

header {
    background: var(--verde);
    color: white;
    padding: 16px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.logo {
    font-size: 25px;
    font-weight: 900;
    color: var(--dorado);
}

.logo span {
    color: white;
}

nav {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
}

nav a:hover {
    color: var(--dorado);
}

.hero {
    min-height: 490px;
    padding: 80px 7%;
    display: flex;
    align-items: center;
    background:
    linear-gradient(90deg, rgba(9,43,34,.97),
    rgba(9,43,34,.72)),
    url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85")
    center/cover;
    color: white;
}

.hero-content {
    max-width: 760px;
}

.etiqueta {
    color: var(--dorado);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 13px;
}

h1 {
    font-size: clamp(36px, 6vw, 62px);
    line-height: 1.12;
    margin: 18px 0;
}

.hero p {
    max-width: 620px;
    font-size: 18px;
    color: #e9f1ec;
}

.botones {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 28px;
}

.btn {
    display: inline-block;
    text-decoration: none;
    border: none;
    cursor: pointer;
    padding: 13px 21px;
    border-radius: 9px;
    font-weight: bold;
    font-size: 15px;
    transition: .2s;
}

.btn:hover {
    transform: translateY(-2px);
}

.btn-dorado {
    background: var(--dorado);
    color: #263328;
}

.btn-blanco {
    background: white;
    color: var(--verde);
}

.btn-verde {
    background: var(--verde2);
    color: white;
}

section {
    padding: 65px 7%;
}

.titulo {
    text-align: center;
    margin-bottom: 32px;
}

.titulo h2 {
    color: var(--verde);
    font-size: clamp(26px, 4vw, 38px);
}

.titulo p {
    margin-top: 8px;
    color: #64736b;
}

.categorias {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 15px;
}

.categoria {
    background: white;
    padding: 23px 12px;
    text-align: center;
    border-radius: 14px;
    border: 1px solid #e1e9e2;
    cursor: pointer;
    transition: .2s;
}

.categoria:hover,
.categoria.activa {
    background: var(--verde);
    color: white;
    transform: translateY(-4px);
}

.categoria .emoji {
    display: block;
    font-size: 35px;
    margin-bottom: 8px;
}

.categoria strong {
    font-size: 14px;
}

#catalogo {
    background: white;
}

.busqueda {
    max-width: 950px;
    margin: 0 auto 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

input, select, textarea {
    width: 100%;
    padding: 13px;
    border: 1px solid #d7e0d9;
    border-radius: 8px;
    font: inherit;
    background: white;
}

.busqueda input {
    flex: 2;
    min-width: 200px;
}

.busqueda select {
    flex: 1;
    min-width: 180px;
}

.tarjetas {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 22px;
}

.tarjeta {
    background: white;
    border: 1px solid #e1e8e1;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 5px 18px #193b2410;
    display: flex;
    flex-direction: column;
}

.imagen-tarjeta {
    height: 190px;
    display: grid;
    place-items: center;
    background: linear-gradient(135deg, #e5eee5, #cbdccf);
    font-size: 65px;
}

.contenido-tarjeta {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.tag {
    display: inline-block;
    align-self: flex-start;
    background: #e5f3e9;
    color: var(--verde2);
    border-radius: 5px;
    padding: 5px 9px;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
}

.contenido-tarjeta h3 {
    color: var(--verde);
    margin-bottom: 7px;
}

.contenido-tarjeta p {
    font-size: 14px;
    color: #66746b;
    margin-bottom: 15px;
}

.contenido-tarjeta .btn {
    text-align: center;
    margin-top: auto;
}

.precio {
    font-size: 19px;
    font-weight: bold;
    color: var(--verde2);
    margin: 0 0 12px;
}

.aviso {
    text-align: center;
    font-size: 13px;
    color: #6b766e;
    margin-top: 22px;
}

.vacio {
    grid-column: 1 / -1;
    text-align: center;
    padding: 30px;
    color: #68756c;
}

.beneficios {
    background: #eaf1e9;
}

.beneficios-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 20px;
}

.beneficio {
    background: white;
    padding: 25px;
    border-radius: 12px;
    text-align: center;
}

.beneficio span {
    font-size: 38px;
}

.beneficio h3 {
    color: var(--verde);
    margin: 10px 0;
}

.beneficio p {
    color: #64736b;
    font-size: 14px;
}

.detalle {
    background: var(--verde);
    color: white;
    text-align: center;
}

.detalle h2 {
    color: var(--dorado);
    font-size: 32px;
    margin-bottom: 15px;
}

.detalle p {
    max-width: 760px;
    margin: auto;
}

.formulario {
    max-width: 760px;
    margin: auto;
    background: white;
    padding: 28px;
    border-radius: 15px;
    box-shadow: 0 5px 22px #193b2410;
}

.formulario label {
    display: block;
    margin: 13px 0 6px;
    font-weight: bold;
}

.formulario .btn {
    width: 100%;
    margin-top: 20px;
}

.contacto {
    background: #eaf1e9;
    text-align: center;
}

.contacto p {
    margin: 10px 0 20px;
}

footer {
    padding: 28px 7%;
    background: #09281f;
    color: #e2ebe5;
    text-align: center;
    font-size: 13px;
}

footer strong {
    color: var(--dorado);
}

.whatsapp-flotante {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 10;
    border-radius: 50px;
    background: #20b85a;
    color: white;
    text-decoration: none;
    padding: 14px 18px;
    font-weight: bold;
    box-shadow: 0 4px 15px #0003;
}

@media (max-width: 850px) {
    .categorias {
        grid-template-columns: repeat(3, 1fr);
    }

    .tarjetas {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .beneficios-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 560px) {
    header {
        justify-content: center;
        text-align: center;
    }

    nav {
        justify-content: center;
        gap: 12px;
    }

    .hero {
        padding: 60px 6%;
    }

    section {
        padding: 45px 6%;
    }

    .categorias {
        grid-template-columns: repeat(2, 1fr);
    }

    .tarjetas {
        grid-template-columns: 1fr;
    }

    .formulario {
        padding: 20px;
    }
}








    

EL BAGRE ENCUENTRA 📍



    
        Inicio
        Servicios
        Anuncios
        Asesoría
        Contacto
    






    


        Tu municipio, tus oportunidades

        

¡El Bagre encuentra lo que necesitas!



        


            ¿Buscas casa, arriendo, herramientas, carro o moto?
            Estamos aquí para ayudarte a encontrar lo que necesitas
            con buena asesoría, atención cercana y un detalle especial
            para nuestros clientes.
        



        


            
                🔎 Explorar servicios
            

            
                🤝 Recibir asesoría
            
        


    






    


        

¿Qué estás buscando?


        

Todo en un solo lugar, al servicio de nuestra gente.


    



    


        


            🏘️
            Todos
        



        


            🏠
            Casas en venta
        



        


            🔑
            Arriendos
        



        


            🛠️
            Herramientas
        



        


            🚗
            Carros y motos
        


    






    


        

Encuentra tu próxima oportunidad


        

Consulta, pregunta y recibe orientación personalizada.


    



    


        

        
            Todas las categorías
            Casas en venta
            Arriendos
            Herramientas
            Carros y motos
        
    



    



    


        Importante: los espacios de este catálogo son ejemplos de demostración.
        Antes de publicar, agrega ofertas reales, fotos autorizadas, precios
        y disponibilidad confirmada.
    






    


        

¿Por qué elegirnos?


        

Queremos ser una marca reconocida y querida en El Bagre.


    



    


        


            🤝
            

Buena asesoría


            

Te escuchamos, resolvemos tus dudas y te orientamos
            para que puedas elegir la opción que mejor se adapte a ti.


        



        


            🎁
            

Un detalle especial


            

Queremos agradecer tu confianza con un pequeño detalle
            en las condiciones anunciadas por nuestro negocio.


        



        


            📍
            

Orgullo bagreño


            

Un espacio pensado para conectar a compradores,
            propietarios, arrendadores y personas que necesitan alquilar.


        


    






    

Tu confianza vale mucho ❤️


    


        En El Bagre Encuentra no queremos ofrecerte solamente un servicio.
        Queremos brindarte una experiencia agradable, atención honesta
        y acompañamiento para que encuentres lo que estás buscando.
        ¡Nuestro propósito es crecer contigo y con nuestro municipio!
    






    


        

Cuéntanos qué necesitas


        

Completa el formulario y prepara tu solicitud para WhatsApp.


    



    


        Tu nombre
        

        ¿Qué servicio necesitas?
        
            Selecciona una opción
            Comprar una casa
            Arrendar una vivienda
            Alquilar herramientas
            Alquilar un carro
            Alquilar una moto
            Publicar una propiedad
            Otra consulta
        

        Presupuesto aproximado (opcional)
        

        Cuéntanos un poco más
        

        
            Enviar solicitud por WhatsApp
        
    






    


        

¡Hagamos negocios en El Bagre!


        


            ¿Tienes una casa para vender, una vivienda para arrendar
            o herramientas y vehículos para alquilar?
        


    



    
        Quiero publicar mi anuncio
    

    


        📍 El Bagre, Antioquia, Colombia
    


    

El lugar donde tus necesidades encuentran oportunidades.






    

EL BAGRE ENCUENTRA


    

Compra, arrienda, alquila y encuentra nuevas oportunidades.


    

©  El Bagre Encuentra. Todos los derechos reservados.



💬 WhatsApp





dame esta pagina web actualizada con todo lo que tiene una pagina con sus requisitos para que tenga exito que funcione el whasa facebo intagan twuiter  y agregar algo mas que las casas y motos carros y herramientas sean en 3d colores pulidoss

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/dc135970-236a-5b19-92d4-070a90096492).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
