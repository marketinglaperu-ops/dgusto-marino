// Carta compartida por la web del cliente (index.html) y el panel (panel.html).
// precio null = "a consultar" (no se lee en la carta).
const WHATSAPP = "51983431333";
const YAPE = "983 431 333";
const MESAS = 5;
const TUPPER = 1; // S/ adicional por cada plato para llevar

const PESCADOS = [
  {id:"cabrilla", n:"Cabrilla", p:20},
  {id:"colanegra", n:"Cola negra", p:20},
  {id:"trucha", n:"Trucha", p:16},
  {id:"truchasal", n:"Trucha salmonada", p:17},
  {id:"sierra", n:"Sierra", p:17},
  {id:"tilapia", n:"Tilapia", p:15},
  {id:"merluza", n:"Merluza", p:16},
  {id:"lomonegro", n:"Lomo negro", p:null},
  {id:"pampano", n:"Pámpano norteño", p:20},
  {id:"doncella", n:"Doncella", p:18},
  {id:"senorita", n:"Señorita", p:17},
  {id:"picado", n:"Picado", p:null},
  {id:"bonito", n:"Bonito", d:"2 filetes", p:15},
  {id:"chiclula", n:"Chicharrón de lula", p:16},
  {id:"chicpota", n:"Chicharrón de pota", p:13},
  {id:"huevera", n:"Huevera", p:18},
  {id:"cherlo", n:"Cherlo", p:20},
  {id:"chita", n:"Chita", ops:[{t:"S/ 18",p:18},{t:"S/ 20",p:20}]},
  {id:"cachema", n:"Cachema", p:null},
  {id:"mero", n:"Mero", p:null},
  {id:"cojinova", n:"Cojinova", p:null},
];
const BEBIDAS = [
  {id:"chicha", n:"Chicha morada", ico:"🍇", bebida:true, ops:[{t:"Vaso S/ 2",p:2},{t:"1 litro S/ 6",p:6}]},
  {id:"cebada", n:"Cebada", ico:"🌾", bebida:true, ops:[{t:"Vaso S/ 2",p:2},{t:"1 litro S/ 6",p:6}]},
];
const STOCK_API = null; // {url, key} de Supabase: se llena al conectar el stock con la web
