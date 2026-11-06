// Atlas Humano V9 — datos de exploración de cabeza y cuello.
// Las estructuras proceden de modelos 3D educativos; la disponibilidad depende de la geometría cargada.
// Los nombres en español y descripciones son explicaciones anatómicas resumidas.
export const HEAD_VIEWS=[
{id:"full",icon:"👤",label:"Cabeza completa",title:"Cabeza y cuello",desc:"Explorá la anatomía desde la piel hasta el cráneo, el encéfalo y los sistemas nervioso y vascular. Las capas comparten la misma posición 3D.",layers:["skin"],re:/.*/,focus:.89},
{id:"face",icon:"🙂",label:"Rostro y piel",title:"Rostro y tejidos superficiales",desc:"La piel del rostro, las orejas, los párpados y las regiones faciales protegen los tejidos profundos y participan en la expresión.",layers:["skin"],re:/frontal region|temporal region|parietal region|occipital region|auricular region|orbital region|eyelid|eyebrow|eyelash|cheek|nose|nasal region|lip|mouth|chin|mental region|forehead|scalp|hair|head|face|neck|cervical region|infraorbital|zygomatic|buccal|submandibular/i,focus:.91},
{id:"muscles",icon:"💪",label:"Músculos faciales",title:"Músculos de expresión y masticación",desc:"Los músculos faciales producen expresiones; el masetero y el temporal intervienen en la masticación. El esternocleidomastoideo ayuda a mover el cuello.",layers:["muscles"],re:/masseter|temporalis|orbicularis|zygomaticus|buccinator|frontalis|occipitalis|corrugator|procerus|nasalis|mentalis|depressor|levator labii|risorius|platysma|sternocleidomastoid|pterygoid|digastric|mylohyoid|geniohyoid|stylohyoid|genioglossus|hyoglossus|splenius capitis|longus capitis|scalenus/i,focus:.89},
{id:"skull",icon:"💀",label:"Cráneo",title:"Cráneo y huesos faciales",desc:"Los huesos del neurocráneo protegen el encéfalo. La mandíbula y los maxilares forman parte de la estructura de la cara.",layers:["skeleton"],re:/frontal bone|parietal bone|temporal bone|occipital bone|sphenoid|ethmoid|maxilla|mandible|zygomatic bone|nasal bone|lacrimal bone|palatine bone|vomer|nasal concha|malleus|incus|stapes|atlas \(c1\)|vertebra c2|sinus of frontal bone|hyoid bone|upper canine|lower canine|upper molar|lower molar|upper incisor|lower incisor|nasal septal cartilage/i,focus:.91},
{id:"brain",icon:"🧠",label:"Encéfalo",title:"Encéfalo y estructuras cerebrales",desc:"Los hemisferios cerebrales, el cerebelo y el tronco encefálico forman una unidad que integra sensibilidad, movimiento y funciones vitales.",layers:["organs"],re:/cerebr|gyrus|sulcus|insula|corpus callosum|cerebell|pons|medulla oblongata|midbrain|hypophysis|adenohypophysis|neurohypophysis|pineal|thalam|brain|cuneus|lobule|opercular part|triangular part/i,focus:.94},
{id:"eyes",icon:"👁️",label:"Ojos",title:"Ojos y estructuras de la visión",desc:"La córnea y el cristalino enfocan la luz; el iris regula su entrada. El nervio óptico lleva la información hacia el cerebro.",layers:["organs","nerves"],re:/cornea|sclera|iris|lens|eyeball|retina|optic nerve|optic chiasm|optic tract|oculomotor nerve|trochlear nerve|abducens nerve/i,focus:.91},
{id:"ears",icon:"👂",label:"Oído",title:"Oído y audición",desc:"Se muestran los huesecillos del oído medio y el nervio vestibulococlear. La cóclea y los canales semicirculares no están detallados en este modelo integrado.",layers:["skeleton","nerves"],re:/malleus|incus|stapes|vestibulocochlear nerve|auricular region/i,focus:.91},
{id:"nerves",icon:"⚡",label:"Nervios craneales",title:"Nervios craneales y faciales",desc:"Los nervios craneales transmiten información sensitiva y motora entre el encéfalo, los sentidos y diferentes regiones de la cabeza y el cuello.",layers:["nerves"],re:/olfactory nerve|optic nerve|oculomotor nerve|trochlear nerve|trigeminal nerve|inferior alveolar nerve|lingual nerve|abducens nerve|facial nerve|vestibulocochlear nerve|glossopharyngeal nerve|vagus nerve|accessory nerve|hypoglossal nerve/i,focus:.91},
{id:"vessels",icon:"🩸",label:"Circulación",title:"Vasos de cabeza y cuello",desc:"Las carótidas, arterias vertebrales, arterias cerebrales, venas yugulares y senos venosos participan en el riego y drenaje de la cabeza.",layers:["arteries","veins"],re:/carotid|facial artery|facial vein|temporal artery|ophthalmic artery|ophthalmic vein|maxillary artery|meningeal artery|occipital artery|vertebral artery|vertebral vein|basilar artery|cerebral artery|cerebellar artery|communicating artery|jugular vein|sagittal sinus|transverse sinus|sigmoid sinus|cavernous sinus|petrosal sinus|straight sinus|retromandibular vein|pharyngeal artery/i,focus:.90},
{id:"jaw",icon:"🦷",label:"Mandíbula",title:"Mandíbula, maxilar y masticación",desc:"La mandíbula se articula con los huesos temporales y se mueve gracias a los músculos masticadores. Los maxilares sostienen los dientes superiores.",layers:["skeleton","muscles"],re:/mandible|maxilla|masseter|temporalis muscle|pterygoid|upper canine|lower canine|upper molar|lower molar|upper incisor|lower incisor|palatine bone|zygomatic bone/i,focus:.85}
];
export const HEAD_TOUR=[
{view:"face",re:/frontal region|nasal region|cheek|eyebrow/i,title:"1. Rostro y superficie",text:"Comenzamos por la piel: protege la cara y contiene regiones especializadas alrededor de los ojos, la nariz y la boca."},
{view:"muscles",re:/orbicularis oculi|masseter/i,title:"2. Expresión y masticación",text:"El orbicular de los ojos ayuda a cerrar los párpados; el masetero es uno de los principales músculos de la masticación."},
{view:"skull",re:/frontal bone|parietal bone/i,title:"3. Protección ósea",text:"El cráneo protege el encéfalo. Los huesos frontal, parietales y temporales contribuyen a su estructura."},
{view:"jaw",re:/mandible/i,title:"4. Mandíbula",text:"La mandíbula es el principal hueso móvil de la cara; permite masticar y participa en el habla."},
{view:"brain",re:/precentral gyrus|corpus callosum|cerebell/i,title:"5. Interior del encéfalo",text:"La corteza participa en percepción y movimiento; el cuerpo calloso conecta hemisferios y el cerebelo coordina acciones."},
{view:"eyes",re:/cornea|sclera|optic nerve/i,title:"6. Visión",text:"La córnea ayuda a enfocar la luz y el nervio óptico transmite información visual hacia el encéfalo."},
{view:"ears",re:/malleus|incus|stapes|vestibulocochlear nerve/i,title:"7. Audición y equilibrio",text:"Los huesecillos del oído medio transmiten vibraciones; el nervio vestibulococlear conduce señales auditivas y vestibulares."},
{view:"nerves",re:/trigeminal nerve|facial nerve/i,title:"8. Nervios craneales",text:"El trigémino transmite gran parte de la sensibilidad facial; el facial controla numerosos músculos de la expresión."},
{view:"vessels",re:/internal carotid artery|vertebral artery|internal jugular vein/i,title:"9. Circulación de la cabeza",text:"Las arterias carótidas y vertebrales aportan sangre al encéfalo; las venas yugulares contribuyen al retorno venoso."}
];
const TERMS=[
[/^frontal bone$/i,"Hueso frontal","Forma la frente y parte superior de las órbitas."],
[/^parietal bone/i,"Hueso parietal","Contribuye a la bóveda superior y lateral del cráneo."],
[/^temporal bone/i,"Hueso temporal","Participa en la pared lateral del cráneo y aloja estructuras del oído."],
[/^occipital bone$/i,"Hueso occipital","Forma la región posterior e inferior del cráneo."],
[/^sphenoid bone$/i,"Esfenoides","Hueso de la base del cráneo que participa en las órbitas."],
[/^ethmoid bone$/i,"Etmoides","Participa en la cavidad nasal y en las paredes internas de las órbitas."],
[/^mandible$/i,"Mandíbula","Hueso móvil de la cara; interviene en la masticación y el habla."],
[/^maxilla/i,"Maxilar","Sostiene los dientes superiores y participa en el paladar y la cavidad nasal."],
[/^zygomatic bone/i,"Hueso cigomático","Forma la prominencia del pómulo y parte de la órbita."],
[/^nasal bone/i,"Hueso nasal","Contribuye a la estructura ósea del puente de la nariz."],
[/^malleus/i,"Martillo","Primer huesecillo del oído medio, unido al tímpano."],
[/^incus/i,"Yunque","Huesecillo del oído medio entre el martillo y el estribo."],
[/^stapes/i,"Estribo","Huesecillo que transmite vibraciones hacia la ventana oval del oído interno."],
[/^masseter/i,"Masetero","Eleva la mandíbula durante la masticación."],
[/^temporalis muscle/i,"Músculo temporal","Eleva y retrae la mandíbula."],
[/^orbital part of orbicularis oculi/i,"Orbicular de los ojos","Participa en el cierre de los párpados."],
[/^orbicularis oris/i,"Orbicular de la boca","Ayuda a cerrar y protruir los labios."],
[/^frontalis muscle/i,"Músculo frontal","Eleva las cejas y arruga la frente."],
[/^sternocleidomastoid/i,"Esternocleidomastoideo","Participa en la flexión y rotación de la cabeza."],
[/^superficial part of masseter/i,"Masetero superficial","Porción del masetero que contribuye a elevar la mandíbula."],
[/^cornea/i,"Córnea","Superficie transparente que refracta la luz y protege el ojo."],
[/^sclera/i,"Esclerótica","Capa externa resistente y blanquecina del globo ocular."],
[/^iris/i,"Iris","Regula el diámetro de la pupila y la cantidad de luz que entra."],
[/^optic nerve/i,"Nervio óptico (II)","Transmite información visual desde la retina hacia el encéfalo."],
[/^olfactory nerve/i,"Nervio olfatorio (I)","Conduce información relacionada con el olfato."],
[/^trigeminal nerve/i,"Nervio trigémino (V)","Transporta gran parte de la sensibilidad facial y participa en la masticación."],
[/^facial nerve/i,"Nervio facial (VII)","Controla músculos de la expresión facial y participa en el gusto."],
[/^vestibulocochlear nerve/i,"Nervio vestibulococlear (VIII)","Conduce información auditiva y del equilibrio."],
[/^vagus nerve/i,"Nervio vago (X)","Participa en funciones sensitivas, motoras y autónomas de distintas regiones."],
[/^precentral gyrus/i,"Giro precentral","Contiene una parte importante de la corteza motora primaria."],
[/^postcentral gyrus/i,"Giro poscentral","Contiene la corteza somatosensitiva primaria."],
[/^corpus callosum/i,"Cuerpo calloso","Conjunto de fibras nerviosas que conecta los hemisferios cerebrales."],
[/^pons/i,"Puente troncoencefálico","Conecta distintas regiones del sistema nervioso central."],
[/^medulla oblongata/i,"Bulbo raquídeo","Participa en la regulación de funciones vitales automáticas."],
[/^midbrain/i,"Mesencéfalo","Región del tronco encefálico relacionada con movimiento y reflejos."],
[/^cerebell/i,"Cerebelo","Coordina movimientos, postura y equilibrio."],
[/^internal carotid artery/i,"Arteria carótida interna","Aporta sangre a gran parte de la circulación cerebral anterior."],
[/^external carotid artery/i,"Arteria carótida externa","Irriga gran parte de las estructuras externas de cabeza y cuello."],
[/^common carotid artery/i,"Arteria carótida común","Se bifurca en las arterias carótidas interna y externa."],
[/^vertebral artery/i,"Arteria vertebral","Contribuye a la circulación posterior del encéfalo."],
[/^basilar artery/i,"Arteria basilar","Arteria de la base del encéfalo formada por la unión de las vertebrales."],
[/^internal jugular vein/i,"Vena yugular interna","Drena gran parte de la sangre venosa del encéfalo."],
[/^facial artery/i,"Arteria facial","Irriga distintas estructuras superficiales de la cara."],
[/^superior sagittal sinus/i,"Seno sagital superior","Canal venoso dural que recoge sangre del encéfalo."],
[/^frontal region/i,"Región frontal","Área superficial de la frente."],
[/^auricular region/i,"Región auricular","Área superficial correspondiente a la oreja."],
[/^eyebrow/i,"Ceja","Protege parcialmente los ojos frente a sudor y partículas."],
[/^eyelashes/i,"Pestañas","Ayudan a proteger los ojos de partículas."],
[/^carotid triangle/i,"Triángulo carotídeo","Región cervical donde se encuentran importantes vasos y nervios."]
];
function sideOf(raw){return /\.l$/i.test(raw)||/\bleft\b/i.test(raw)?"izquierda":/\.r$/i.test(raw)||/\bright\b/i.test(raw)?"derecha":""}
export function headInfo(raw){
const name=String(raw||"Estructura");
for(const [pattern,es,description] of TERMS){
 if(!pattern.test(name))continue;
 const side=sideOf(name);
 const label=side?es+" ("+side+")":es;
 return {label,description,original:name};
}
return null;
}
