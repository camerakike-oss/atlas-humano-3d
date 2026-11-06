// Atlas V8: material anatomico educativo con microdetalle procedural en coordenadas 3D.
// Sin texturas de fotografias clinicas ni simulacion histologica.
const PALETTE={
 skin:{color:"#ba8e7b",rough:.86,coat:.025,freq:410,coarse:18,amp:.13,fiber:0},
 muscle:{color:"#a95255",rough:.72,coat:.025,freq:530,coarse:22,amp:.16,fiber:.55},
 tendon:{color:"#c7b7a2",rough:.8,coat:.01,freq:450,coarse:17,amp:.10,fiber:.72},
 bone:{color:"#d6cbb7",rough:.75,coat:.01,freq:260,coarse:16,amp:.12,fiber:0},
 cartilage:{color:"#9baeb3",rough:.67,coat:.08,freq:230,coarse:15,amp:.10,fiber:0},
 tooth:{color:"#e4dfcf",rough:.46,coat:.15,freq:310,coarse:12,amp:.055,fiber:0},
 heart:{color:"#a84e5b",rough:.58,coat:.10,freq:210,coarse:14,amp:.15,fiber:.12},
 lung:{color:"#bd8f9c",rough:.72,coat:.05,freq:300,coarse:20,amp:.18,fiber:0},
 brain:{color:"#c4a1a3",rough:.69,coat:.045,freq:290,coarse:22,amp:.12,fiber:0},
 liver:{color:"#82484a",rough:.58,coat:.1,freq:230,coarse:16,amp:.11,fiber:0},
 kidney:{color:"#99565d",rough:.62,coat:.08,freq:240,coarse:15,amp:.12,fiber:0},
 gut:{color:"#c2a091",rough:.67,coat:.07,freq:270,coarse:18,amp:.13,fiber:0},
 pancreas:{color:"#c6a180",rough:.72,coat:.03,freq:250,coarse:17,amp:.11,fiber:0},
 spleen:{color:"#8d576c",rough:.65,coat:.07,freq:240,coarse:15,amp:.10,fiber:0},
 organ:{color:"#b98287",rough:.67,coat:.055,freq:270,coarse:19,amp:.11,fiber:0},
 eye:{color:"#c9c6c1",rough:.42,coat:.25,freq:300,coarse:12,amp:.04,fiber:0},
 artery:{color:"#b45c5b",rough:.5,coat:.12,freq:190,coarse:12,amp:.09,fiber:0},
 vein:{color:"#667d9e",rough:.54,coat:.1,freq:180,coarse:12,amp:.08,fiber:0},
 nerve:{color:"#d0bb8c",rough:.72,coat:.02,freq:260,coarse:17,amp:.08,fiber:.15}
};
function tissueKind(key,name,source){
 const t=(name+" "+source).toLowerCase();
 if(key==="skeleton")return /cartilage|intervertebral disc|meniscus/.test(t)?"cartilage":/tooth|teeth|incisor|molar/.test(t)?"tooth":"bone";
 if(key==="muscles")return /tendon|fascia|aponeurosis|ligament/.test(t)?"tendon":"muscle";
 if(key==="skin")return /sclera|cornea|iris/.test(t)?"eye":"skin";
 if(key==="organs")return /cornea|sclera|lens|iris/.test(t)?"eye":/lung|bronch/.test(t)?"lung":/brain|cerebr|gyrus|sulcus|cerebell/.test(t)?"brain":/heart|cardiac|atrium|ventricle|papillary|valve|leaflet/.test(t)?"heart":/liver/.test(t)?"liver":/kidney|renal/.test(t)?"kidney":/stomach|colon|intestin|duodenum|jejunum/.test(t)?"gut":/pancrea/.test(t)?"pancreas":/spleen/.test(t)?"spleen":"organ";
 return key==="arteries"?"artery":key==="veins"?"vein":"nerve";
}
function stableTone(raw){
 let h=2166136261;
 for(let i=0;i<raw.length;i++){h^=raw.charCodeAt(i);h=Math.imul(h,16777619)}
 return (h>>>0)%4;
}
const HEADER=[
"varying vec3 vAtlasLocal;",
"uniform float uAtlasDetail;",
"float atlasHash(vec3 q){q=fract(q*0.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}",
"float atlasNoise(vec3 q){",
"vec3 i=floor(q),f=fract(q);f=f*f*(3.0-2.0*f);",
"float a=mix(atlasHash(i),atlasHash(i+vec3(1.,0.,0.)),f.x);",
"float b=mix(atlasHash(i+vec3(0.,1.,0.)),atlasHash(i+vec3(1.,1.,0.)),f.x);",
"float c=mix(atlasHash(i+vec3(0.,0.,1.)),atlasHash(i+vec3(1.,0.,1.)),f.x);",
"float d=mix(atlasHash(i+vec3(0.,1.,1.)),atlasHash(i+vec3(1.,1.,1.)),f.x);",
"return mix(mix(a,b,f.y),mix(c,d,f.y),f.z);",
"}"
].join("\n");
function addSurfaceShader(material,tissue,style){
 const p=PALETTE[tissue];
 const frag=[
 "#include <color_fragment>",
 "float atlasN=0.5;",
 "if(uAtlasDetail>0.5){",
 "atlasN=atlasNoise(vAtlasLocal*"+p.freq.toFixed(1)+");",
 "float atlasBroad=atlasNoise(vAtlasLocal*"+p.coarse.toFixed(1)+");",
 "float atlasFib=0.5+0.5*sin(vAtlasLocal.y*460.0+atlasBroad*6.283);",
 "float atlasFine=mix(atlasN,atlasFib,"+p.fiber.toFixed(2)+");",
 "diffuseColor.rgb*=0.90+0.20*atlasBroad+(atlasFine-0.5)*"+p.amp.toFixed(3)+";",
 "}"
 ].join("\n");
 material.onBeforeCompile=shader=>{
  shader.uniforms.uAtlasDetail={value:style==="realista"?1:0};
  material.userData.detailUniform=shader.uniforms.uAtlasDetail;
  shader.vertexShader=shader.vertexShader.replace("#include <common>","#include <common>\nvarying vec3 vAtlasLocal;");
  shader.vertexShader=shader.vertexShader.replace("#include <begin_vertex>","#include <begin_vertex>\nvAtlasLocal=position;");
  shader.fragmentShader=shader.fragmentShader.replace("#include <common>","#include <common>\n"+HEADER);
  shader.fragmentShader=shader.fragmentShader.replace("#include <color_fragment>",frag);
  shader.fragmentShader=shader.fragmentShader.replace("#include <roughnessmap_fragment>","#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor+(atlasN-0.5)*0.10,0.18,1.0);");
 };
 material.customProgramCacheKey=()=>"atlas-v8-"+tissue;
}
export function materialIdentity(key,raw,source){
 const tissue=tissueKind(key,raw,source);
 return {tissue,tone:stableTone(raw)};
}
export function createTissueMaterial(THREE,key,raw,source,tone,atlasColor,style){
 const tissue=tissueKind(key,raw,source),p=PALETTE[tissue];
 const color=new THREE.Color(p.color);color.offsetHSL(0,0,(tone-1.5)*.011);
 const m=new THREE.MeshPhysicalMaterial({color,metalness:0,roughness:p.rough,clearcoat:p.coat,clearcoatRoughness:.67,side:THREE.DoubleSide});
 m.userData.realColor=color.clone();
 m.userData.atlasColor=new THREE.Color(atlasColor);
 m.userData.realRough=p.rough;
 m.userData.tissue=tissue;
 addSurfaceShader(m,tissue,style);
 return m;
}
export function setTissueStyle(m,style){
 if(!m?.userData?.realColor)return;
 m.color.copy(style==="realista"?m.userData.realColor:m.userData.atlasColor);
 m.roughness=style==="realista"?m.userData.realRough:.73;
 if(m.userData.detailUniform)m.userData.detailUniform.value=style==="realista"?1:0;
}
