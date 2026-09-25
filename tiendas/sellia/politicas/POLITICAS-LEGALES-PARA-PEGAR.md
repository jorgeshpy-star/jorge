# Políticas legales de Sellia — para pegar en Shopify

No pude escribirlas yo directamente: la API de esta sesión tiene permiso para
**leer** políticas (`read_legal_policies`) pero no para **escribirlas**
(`write_legal_policies` denegado). Hay que pegarlas a mano, una vez, desde:

**Shopify Admin → Configuración → Políticas**

Para cada política: pega el HTML de abajo en el campo de texto correspondiente
(en el editor, cambia a modo "Ver HTML" / `</>` antes de pegar, para que las
etiquetas `<h2>`, `<p>`, etc. se apliquen y no se vean como texto plano) y
guarda.

---

## 1. Política de privacidad (Privacy policy)

Ya existía una, generada automáticamente por Shopify, pero decía **"Aquora"**
en vez de "Sellia" en dos sitios (arrastrado de otro proyecto). Aquí está el
mismo texto con la marca corregida — sustituye el contenido actual por este:

```html
<div>
  <p>Última actualización: 18 de agosto de 2026</p>
  <p>Sellia gestiona esta tienda y este sitio web, incluidos los datos, el contenido, las funciones, las herramientas, los productos y los servicios para ofrecerle a usted, el cliente, una experiencia de compra seleccionada (los "Servicios"). Sellia cuenta con tecnología de Shopify que nos permite ofrecerle los Servicios. Esta Política de privacidad describe cómo recopilamos, utilizamos y divulgamos su información personal cuando visita, utiliza o realiza una compra u otra transacción a través de los Servicios o cuando se comunica con nosotros por cualquier otro medio. En caso de conflicto entre nuestros Términos del Servicio y esta Política de privacidad, prevalecerá esta Política de privacidad en lo que respecta a la recopilación, el tratamiento y la divulgación de su información personal.</p>
  <p>[... el resto del texto original de la política de privacidad no cambia — solo se corrigió "Aquora" → "Sellia" en el primer párrafo y en el apartado de Contacto al final. El archivo completo, listo para copiar tal cual, está en <code>privacy-policy-fixed.html</code> en esta misma carpeta.]</p>
</div>
```

**El texto completo y exacto está en el archivo `privacy-policy-fixed.html`
de esta carpeta — cópialo entero de ahí, no de este resumen.**

---

## 2. Política de reembolsos (Refund policy) — nueva

```html
<div>
  <p>Última actualización: 25 de septiembre de 2026</p>
  <p>En Sellia queremos que compres con total tranquilidad. Si el producto no cumple tus expectativas, dispones de <strong>30 días naturales desde la recepción del pedido</strong> para solicitar su devolución y el reembolso completo del importe pagado por el producto.</p>
  <h2>Cómo solicitar una devolución</h2>
  <p>Escríbenos a <a href="mailto:jorgeshpy@gmail.com">jorgeshpy@gmail.com</a> o llámanos al +34 601 10 81 35 indicando tu número de pedido y el motivo de la devolución. Te confirmaremos por email los pasos a seguir y, cuando corresponda, la dirección a la que enviar el producto.</p>
  <h2>Condiciones de la devolución</h2>
  <ul>
    <li>El plazo de 30 días se cuenta desde la fecha en que recibiste el pedido.</li>
    <li>El producto debe devolverse en el mismo estado en que se recibió, a poder ser con su embalaje original.</li>
    <li>Los gastos de envío de la devolución corren por cuenta del cliente, salvo que el producto haya llegado defectuoso, dañado o sea distinto al pedido — en ese caso, la devolución no tiene coste alguno para ti.</li>
  </ul>
  <h2>Producto defectuoso o incorrecto</h2>
  <p>Si tu Sellia llega defectuoso, dañado durante el transporte o no corresponde con lo que pediste, contáctanos dentro de los 30 días siguientes a la recepción y te enviaremos un producto de sustitución o te reembolsaremos el importe completo, incluidos los gastos de envío originales, sin coste para ti.</p>
  <h2>Plazo del reembolso</h2>
  <p>Una vez recibida y verificada la devolución, procesaremos el reembolso en un plazo máximo de 14 días naturales, utilizando el mismo método de pago que usaste en la compra.</p>
  <h2>Contacto</h2>
  <p>Para cualquier consulta sobre tu devolución, escríbenos a <a href="mailto:jorgeshpy@gmail.com">jorgeshpy@gmail.com</a>, llámanos al +34 601 10 81 35, o escríbenos a Sellia, Calle de Magallanes, 17, 45210 Yuncos, Toledo, España.</p>
</div>
```

---

## 3. Política de envío (Shipping policy) — nueva

```html
<div>
  <p>Última actualización: 25 de septiembre de 2026</p>
  <h2>Plazo de envío</h2>
  <p>Preparamos y enviamos todos los pedidos de Sellia en un plazo de <strong>7 a 14 días laborables</strong> desde la confirmación de la compra. Este plazo incluye la preparación del pedido y el tiempo de tránsito hasta tu dirección.</p>
  <h2>Seguimiento</h2>
  <p>Todos los pedidos incluyen número de seguimiento. En cuanto tu Sellia salga hacia su destino, recibirás un email con el enlace para seguir el envío en tiempo real.</p>
  <h2>Zona de envío</h2>
  <p>Enviamos a la práctica totalidad de países. Si tu país de destino no aparece disponible al finalizar la compra, contáctanos y te confirmamos si podemos gestionar el envío igualmente.</p>
  <h2>Precios y moneda</h2>
  <p>Todos los precios de la tienda se muestran en euros (€) e incluyen los impuestos aplicables. El coste de envío, si lo hay, se calcula y muestra antes de confirmar el pedido, sin cargos ocultos posteriores.</p>
  <h2>Retrasos</h2>
  <p>En fechas de alta demanda o por causas ajenas a nosotros (aduanas, incidencias del transportista), el envío puede tardar algo más del plazo indicado. Si tu pedido se retrasa significativamente, contáctanos y lo revisamos contigo.</p>
  <h2>Contacto</h2>
  <p>Para cualquier duda sobre tu envío, escríbenos a <a href="mailto:jorgeshpy@gmail.com">jorgeshpy@gmail.com</a>, llámanos al +34 601 10 81 35, o escríbenos a Sellia, Calle de Magallanes, 17, 45210 Yuncos, Toledo, España.</p>
</div>
```

---

## 4. Términos del servicio (Terms of service) — nueva

```html
<div>
  <p>Última actualización: 25 de septiembre de 2026</p>
  <p>Estos Términos del Servicio regulan el acceso y uso de esta tienda online, gestionada por Sellia con tecnología de Shopify. Al visitar o comprar en esta tienda, aceptas estos términos en su totalidad.</p>
  <h2>Sobre la tienda</h2>
  <p>Sellia vende directamente al consumidor a través de este sitio web. Todos los pedidos están sujetos a disponibilidad y a la confirmación del precio de venta.</p>
  <h2>Precios y pagos</h2>
  <p>Todos los precios se muestran en euros (€) e incluyen los impuestos aplicables, salvo que se indique lo contrario. Nos reservamos el derecho a modificar los precios en cualquier momento, sin que ello afecte a los pedidos ya confirmados. Aceptamos pago con tarjeta, PayPal y Bizum a través de pasarelas de pago seguras; no almacenamos los datos de tu tarjeta.</p>
  <h2>Pedidos</h2>
  <p>Al realizar un pedido, recibirás un email de confirmación. Nos reservamos el derecho a cancelar o rechazar un pedido en caso de error evidente en el precio o la descripción, falta de stock, o sospecha razonable de fraude, notificándotelo y reembolsando cualquier cargo ya realizado.</p>
  <h2>Envíos y devoluciones</h2>
  <p>Las condiciones de envío y devolución se detallan en nuestra <a href="/policies/shipping-policy">Política de envío</a> y nuestra <a href="/policies/refund-policy">Política de reembolsos</a>, que forman parte de estos Términos del Servicio.</p>
  <h2>Uso del sitio</h2>
  <p>Te comprometes a utilizar esta tienda de forma lícita y a no interferir con su funcionamiento normal. El contenido del sitio (textos, imágenes, marca Sellia) es propiedad nuestra o de nuestros proveedores de contenido y no puede reproducirse sin permiso.</p>
  <h2>Limitación de responsabilidad</h2>
  <p>Sellia no será responsable de daños indirectos derivados del uso del producto fuera de las instrucciones indicadas. Nada en estos términos limita los derechos que la legislación de consumidores te reconoce de forma obligatoria.</p>
  <h2>Legislación aplicable</h2>
  <p>Estos términos se rigen por la legislación española. Cualquier disputa se someterá a los juzgados y tribunales competentes según la normativa de protección de consumidores aplicable.</p>
  <h2>Cambios en estos términos</h2>
  <p>Podemos actualizar estos Términos del Servicio ocasionalmente. La versión vigente es siempre la publicada en esta página, con su fecha de "Última actualización".</p>
  <h2>Contacto</h2>
  <p>Para cualquier consulta sobre estos términos, escríbenos a <a href="mailto:jorgeshpy@gmail.com">jorgeshpy@gmail.com</a>, llámanos al +34 601 10 81 35, o escríbenos a Sellia, Calle de Magallanes, 17, 45210 Yuncos, Toledo, España.</p>
</div>
```

---

## Nota

Estos textos son un punto de partida sólido (mismo formato que la política de
privacidad que Shopify ya había generado), no una revisión de un abogado. Para
una tienda que va a vender de verdad, conviene que alguien con conocimiento
legal les eche un vistazo, sobre todo a los Términos del Servicio.
