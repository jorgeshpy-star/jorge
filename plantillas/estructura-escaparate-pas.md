# Plantilla de estructura: "Escaparate + ficha PAS"

Estructura de tienda de un solo producto, pensada para reutilizar en futuras
tiendas. Se basa en el patrón Problema → Agitación → Solución (PAS), separando
la portada (solo un escaparate) de la ficha de producto (donde ocurre toda la
venta).

## Cuándo usarla

Tiendas de un único producto (o producto estrella), tipo dropshipping o nicho,
donde el objetivo es que el visitante llegue del anuncio a la portada, haga
clic en "Ver más" y aterrice en una ficha de producto que venda por sí sola.

## Portada (home)

Solo dos elementos, nada más:

1. **Escaparate** — imagen grande del producto en uso + titular corto +
   botón ("Ver más") que enlaza directo a la ficha de producto.
2. Pie de página (ver más abajo).

No lleva beneficios, cómo-se-usa, FAQ ni reseñas — todo eso vive en la ficha
de producto, para no repetir contenido ni diluir el mensaje.

## Ficha de producto (orden de secciones)

1. **Compra** (galería + selector de variante + precio + botón nativo de la
   plataforma).
2. **Valoración** — estrellas + cifra + frase social corta, justo debajo del
   título ("★★★★★ 4,8/5 · más de 500 familias...").
3. **Gancho** — una frase que resume la propuesta de valor.
4. **Viñetas** — 2-3 líneas cortas con emoji, cada una un beneficio concreto.
5. **Acordeón de confianza** — 3 preguntas plegables: cómo se usa / garantía /
   envío.
6. **Problema** — foto (o icono si no hay foto segura) + texto que describe
   el problema real del cliente, en su propio lenguaje.
7. **Agitación** — mismo formato que Problema, insistiendo en que no es un
   caso puntual sino algo que se repite.
8. **Preguntas frecuentes** — dudas objetivas de compra.
9. **Solución** — foto real del producto resolviendo el problema descrito.
10. **Comparativa** — tabla "Tú vs Otros" con 3-4 criterios y check/cruz.
11. **Confianza** — insignia circular de garantía + grid de 4 iconos de
    confianza (pago seguro, envío, devolución, atención).
12. **Reseñas** — resumen de valoración media + tarjetas (estrellas, comilla
    decorativa, texto, nombre).

## Pie de página (global, todas las páginas)

- Franja con el color de acento de la marca (no genérico): nombre + frase de
  marca, y una columna "Información" con enlaces a Contacto, Política de
  reembolso, Política de privacidad, Términos del servicio y Quiénes somos.
- Debajo, en fondo neutro: copyright + lista de políticas (automática, tira
  de las políticas reales configuradas en la plataforma) + redes sociales.

## Reglas de contenido (para no perder la confianza del cliente)

- Nunca inventar descuentos ni urgencia falsa ("solo hoy", "última unidad")
  si no es real.
- Adaptar el texto a la voz de la marca — nunca copiar literalmente de una
  tienda de referencia, solo su estructura.
- Usar siempre los colores y la tipografía propios de la marca, nunca los de
  la tienda que se tomó como referencia.
- Antes de publicar, verificar que la foto de cada variante corresponde
  exactamente a esa variante — es el fallo más fácil de cometer y el más caro
  de cara al cliente.
- Dejar claro qué reseñas son reales y cuáles son de ejemplo mientras la
  tienda no tiene ventas todavía.

## Componentes reutilizables (Shopify, tema Horizon)

- `nb-hero-teaser.liquid` — escaparate de portada (imagen + titular + botón).
- `nb-historia.liquid` — bloque foto+texto reutilizable para Problema/
  Agitación/Solución; admite un color de acento por instancia y cae a un
  icono si no se le da imagen.
- `nb-acordeon.liquid` — acordeón de 3 preguntas para la ficha de compra.
- `nb-comparativa.liquid` — tabla "Tú vs Otros" configurable por bloques.
- `nb-confianza.liquid` — insignia de garantía + grid de iconos de confianza.
- `nb-resenas.liquid` — resumen de valoración + tarjetas de reseña.
- `nb-faq.liquid` — acordeón de preguntas frecuentes.

Todos comparten `assets/nb-styles.css` (variables de marca en `:root`) y
`assets/nb-scripts.js` (scroll-reveal + acordeones, agrupados por
`.nb-faq-list` para que varios acordeones en la misma página no interfieran
entre sí).
