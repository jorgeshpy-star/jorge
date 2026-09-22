# Plantilla de estructura: "Compra directa" (todo en la ficha de compra)

Estructura de ficha de producto centrada en la conversión inmediata: el
visitante encuentra todo lo necesario para decidir y comprar sin salir del
bloque de compra (título, valoración, confianza, beneficios, packs, botón,
medios de pago, testimonio, garantías), y solo después — para quien quiera
profundizar — vienen reseñas, FAQ, cierre y garantía extendida.

Basada en el análisis de la estructura real de magicstars.store/products/varita
(capturas de pantalla proporcionadas por el usuario), adaptada con contenido
propio y honesto.

## Cuándo usarla

Cuando se quiera priorizar la compra rápida sobre el storytelling largo. A
diferencia de la plantilla "Escaparate + PAS" (`estructura-escaparate-pas.md`),
aquí **no hay** tramo narrativo Problema → Agitación → Solución con fotos
alternadas: toda la persuasión vive dentro del propio bloque de compra, y el
resto de la página es más corto.

La portada (home) no cambia respecto a Escaparate + PAS: sigue siendo un único
escaparate (imagen + titular + botón "Ver más" a la ficha de producto).

## Ficha de producto (orden de secciones)

**Dentro del bloque de compra** (todo como bloques nativos anidados en la
sección de producto, no como secciones aparte):

1. Galería de medios (fotos/vídeo reales del producto).
2. Título del producto.
3. Valoración — estrellas + cifra + frase social corta.
4. Banner de confianza/USP corto (envío, garantía, característica top). Nunca
   cuenta atrás ni "solo hoy" falso, aunque la referencia lo tenga.
5. Gancho — una frase que resume la propuesta de valor real del producto.
6. Viñetas — 2-3 beneficios concretos con emoji.
7. Selector de packs/cantidad con precio real por opción — si hay descuento
   por volumen tiene que ser un ahorro real (variantes reales con precio
   real), nunca un precio "antes" inflado.
8. Precio, reactivo a la variante elegida.
9. Botón de compra nativo + aceleradores de pago (Shop Pay, etc.).
10. Iconos de los medios de pago realmente habilitados en la tienda (bloque
    nativo `payment-icons`, no una imagen estática).
11. Testimonio destacado — una reseña, dentro de la propia ficha de compra.
12. Acordeón de confianza (envío + garantía), plegado, dentro de la ficha de
    compra (bloque nativo `accordion` + `_accordion-row`).

**Después del bloque de compra**, secciones aparte:

13. Reseñas — resumen de valoración media + tarjetas.
14. FAQ.
15. Cierre — titular + frase corta, sin foto necesaria.
16. Confianza extendida — insignia de garantía + grid de 4 iconos (pago
    seguro, envío, devolución, atención).

## Reglas de contenido

- Nunca copiar cronómetros de cuenta atrás, cifras de reseñas infladas ni
  avisos de "se está agotando/volviéndose viral" de la tienda de referencia,
  aunque los tenga — son urgencia inventada.
- Si la referencia usa un selector de packs con descuento, crear variantes
  reales con precio real en la plataforma; el ahorro mostrado debe ser
  matemáticamente cierto (precio normal × unidades − precio del pack).
- Antes de meter cualquier foto "de más", confirmar que es el mismo producto
  físico que se vende (mismo mecanismo, mismos materiales) — una foto de un
  producto parecido de otra marca es mostrarle al cliente algo que no va a
  recibir.
- Adaptar el texto a la voz de la marca — nunca copiar literalmente de la
  tienda de referencia, solo su estructura.
- Usar siempre los colores y la tipografía propios de la marca.
- Dejar claro qué reseñas son reales y cuáles son de ejemplo mientras la
  tienda no tiene ventas todavía.

## Componentes reutilizables (Shopify, tema Horizon)

A diferencia de Escaparate + PAS, aquí casi todo el bloque de compra se
construye con **bloques nativos de Horizon** anidados dentro de la sección
`product-information` / bloque estático `_product-details`, en vez de
secciones `tw-*` a medida:

- `group` + `text` — título, valoración, banner, gancho, viñetas, testimonio.
- `variant-picker` — selector de packs/cantidad.
- `price`, `buy-buttons` (con `quantity`, `add-to-cart`,
  `accelerated-checkout` como bloques estáticos hijos).
- `payment-icons` — iconos de pago reales de la tienda.
- `accordion` + `_accordion-row` (+ `text` dentro de cada fila) — acordeón de
  confianza plegado.

Solo hace falta una sección a medida nueva para el cierre final:

- `tw-cta-final.liquid` — titular + texto centrado, sin foto.

El resto de secciones (reseñas, FAQ, confianza extendida) reutilizan
`tw-resenas.liquid`, `tw-faq.liquid` y `tw-confianza.liquid`, ya existentes en
la plantilla Escaparate + PAS.

## Notas técnicas (Shopify) descubiertas al construirla

- Un bloque con hijos **todos estáticos** (p. ej. `buy-buttons` con
  `quantity`/`add-to-cart`/`accelerated-checkout`) no debe llevar la clave
  `block_order` en absoluto — ni vacía (`[]`) ni con los IDs listados. Ambas
  formas son rechazadas por la validación de escritura de temas.
- El bloque nativo `text` exige que el HTML de nivel superior use siempre una
  etiqueta de bloque (`<p>`, `<ul>`, `<ol>`, `<h1>`-`<h6>`) — texto suelto sin
  envolver falla la subida.
- Los packs con descuento por cantidad se implementan como una opción de
  producto real (`productOptionsCreate` con `variantStrategy: CREATE`), no
  como un componente visual aislado — así el precio y el checkout son
  honestos y funcionan de verdad.
