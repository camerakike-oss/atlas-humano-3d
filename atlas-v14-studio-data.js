/**
 * NeuroStudio V14 — rutas educativas esquemáticas ancladas a estructuras 3D.
 * Cada punto usa el nombre de una malla comprobada en los modelos abiertos
 * de SeemaBansal1/3d-human-body-anatomy. Las curvas entre puntos NO
 * representan axones, tractos, conexiones sinápticas ni trayectos vasculares
 * exactos: son líneas de orientación didáctica.
 */
export const STUDIO_ROUTES=[
{
 id:"vision",icon:"👁️",name:"De la visión a la corteza",accent:"#77d9ef",side:true,
 lead:"Cómo se transmite la información visual hacia el cerebro",
 description:"La señal visual parte de la retina, pasa por el nervio óptico, el quiasma y el tracto óptico. Continúa por estaciones no representadas aquí, como el cuerpo geniculado lateral y las radiaciones ópticas, antes de alcanzar la corteza visual.",
 note:"El modelo no representa retina, cuerpo geniculado lateral ni radiaciones ópticas como parte de esta ruta. Las líneas conectan referencias visibles, no el trayecto real de los axones.",
 nodes:[
  {layer:"nerves",match:/^optic nerve \(II\)\.[lr]$/i,label:"Nervio óptico",desc:"Conduce señales visuales desde el ojo."},
  {layer:"nerves",match:/^optic chiasm\.[lr]$/i,label:"Quiasma óptico",desc:"En esta región se cruzan parte de las fibras de la vía visual."},
  {layer:"nerves",match:/^optic tract\.[lr]$/i,label:"Tracto óptico",desc:"Continúa hacia estaciones de relevo visual."},
  {layer:"organs",match:/^calcarine sulcus\.[lr]$/i,label:"Región calcarina",desc:"La corteza visual primaria se sitúa alrededor del surco calcarino."}
 ]
},
{
 id:"hearing",icon:"👂",name:"Del oído a la corteza auditiva",accent:"#f0bf8c",side:true,
 lead:"Cómo llega la información auditiva a regiones temporales",
 description:"Las señales del oído interno viajan por el nervio vestibulococlear hacia el tronco encefálico. Recorren varias estaciones auditivas, incluidas vías que no están modeladas, hasta llegar a regiones del lóbulo temporal.",
 note:"La conexión dibujada es una simplificación. No muestra núcleos cocleares, colículos inferiores, cuerpo geniculado medial ni radiaciones auditivas.",
 nodes:[
  {layer:"nerves",match:/^vestibulocochlear nerve \(VIII\)\.[lr]$/i,label:"Nervio vestibulococlear",desc:"Transporta información auditiva y vestibular."},
  {layer:"organs",match:/^pons\.[lr]$/i,label:"Puente troncoencefálico",desc:"Región del tronco encefálico próxima a estaciones iniciales de la vía auditiva."},
  {layer:"organs",match:/^superior temporal gyrus \(lateral part\)\.[lr]$/i,label:"Giro temporal superior",desc:"En el lóbulo temporal hay áreas importantes para procesar sonidos."}
 ]
},
{
 id:"motor",icon:"⚡",name:"De la corteza al tronco",accent:"#f5a984",side:true,
 lead:"Descenso esquemático de señales motoras",
 description:"El giro precentral contiene gran parte de la corteza motora primaria. Las vías motoras descendentes pasan por distintas regiones del encéfalo y el tronco antes de continuar hacia la médula espinal.",
 note:"La curva no reproduce la trayectoria de la vía corticoespinal ni sus decusaciones. Se señalan regiones anatómicas de referencia.",
 nodes:[
  {layer:"organs",match:/^precentral gyrus\.[lr]$/i,label:"Giro precentral",desc:"Región de la corteza motora primaria."},
  {layer:"organs",match:/^midbrain\.[lr]$/i,label:"Mesencéfalo",desc:"Región atravesada por importantes vías descendentes."},
  {layer:"organs",match:/^pons\.[lr]$/i,label:"Puente",desc:"Contiene haces descendentes y conexiones con otras estructuras."},
  {layer:"organs",match:/^medulla oblongata\.[lr]$/i,label:"Bulbo raquídeo",desc:"Continúa con la médula espinal y contiene vías motoras."}
 ]
},
{
 id:"callosal",icon:"↔",name:"Comunicación entre hemisferios",accent:"#d4b9ff",side:false,
 lead:"Relación entre cortezas de ambos lados y cuerpo calloso",
 description:"El cuerpo calloso es una gran comisura que conecta áreas de los hemisferios. Las conexiones motoras interhemisféricas son parte de una red mucho más amplia.",
 note:"Las líneas muestran la relación conceptual entre regiones homólogas y el cuerpo calloso; no representan fascículos individuales ni puntos de inserción precisos.",
 nodes:[
  {layer:"organs",match:/^precentral gyrus\.l$/i,label:"Giro precentral izquierdo",desc:"Región motora del hemisferio izquierdo."},
  {layer:"organs",match:/^corpus callosum$/i,label:"Cuerpo calloso",desc:"Comisura de sustancia blanca que conecta ambos hemisferios."},
  {layer:"organs",match:/^precentral gyrus\.r$/i,label:"Giro precentral derecho",desc:"Región motora del hemisferio derecho."}
 ]
},
{
 id:"vascular",icon:"🩸",name:"Circulación posterior",accent:"#f08796",side:true,
 lead:"De las arterias vertebrales hacia el territorio cerebral posterior",
 description:"Las arterias vertebrales se unen para formar la arteria basilar. Sus ramas terminales contribuyen a las arterias cerebrales posteriores, que irrigan territorios del encéfalo.",
 note:"Los puntos se ubican sobre vasos modelados, pero la curva es un esquema y no sigue el lumen ni la ramificación exacta.",
 nodes:[
  {layer:"arteries",match:/^vertebral artery\.[lr]$/i,label:"Arteria vertebral",desc:"Aporta sangre a la circulación posterior."},
  {layer:"arteries",match:/^basilar artery$/i,label:"Arteria basilar",desc:"Se forma por la unión de las arterias vertebrales."},
  {layer:"arteries",match:/^posterior cerebral artery\.[lr]$/i,label:"Arteria cerebral posterior",desc:"Irriga territorios del encéfalo posterior."}
 ]
}
];
export const STUDIO_LAB_PRESETS=[
{id:"closed",name:"Cerebro completo",description:"Hemisferios y estructuras profundas en su posición anatómica.",explode:0,zone:"brain"},
{id:"split",name:"Separar hemisferios",description:"Desplazamiento lateral ilustrativo para observar superficies mediales y estructuras profundas.",explode:65,zone:"brain"},
{id:"deep",name:"Revelar estructuras centrales",description:"Separación amplia para explorar cuerpo calloso, cerebelo y tronco encefálico.",explode:100,zone:"brain"},
{id:"callosum",name:"Aislar cuerpo calloso",description:"Muestra el cuerpo calloso en su posición anatómica, sin desplazarlo.",explode:0,zone:"callosum"},
{id:"cerebellum",name:"Aislar cerebelo",description:"Muestra las piezas disponibles del cerebelo en posición anatómica.",explode:0,zone:"cerebellum"}
];
export function routeMatches(route,raw,layer,side="left"){
if(!route)return false;
return route.nodes.some(n=>n.layer===layer&&n.match.test(raw)&&(!route.side||/\.[lr]$/i.test(raw)&&raw.toLowerCase().endsWith(side==="left"?".l":".r")||!/\.[lr]$/i.test(raw)));
}
export function routeNodeCandidates(route,raw,layer,side="left"){
return route.nodes.filter(n=>n.layer===layer&&n.match.test(raw)&&(!route.side||!/\.[lr]$/i.test(raw)||raw.toLowerCase().endsWith(side==="left"?".l":".r")));
}
