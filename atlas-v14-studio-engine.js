/**
 * Motor visual de NeuroStudio V14.
 * Usa geometría GLB existente. La separación y las líneas son recursos
 * didácticos: no modifican el archivo fuente ni representan conexiones reales.
 */
export class NeuroStudioEngine{
 constructor(THREE,scene,root){
  this.THREE=THREE;this.scene=scene;this.root=root;
  this.origins=new WeakMap();this.displaced=[];
  this.routeGroup=null;this.routeCurves=[];this.pulses=[];this.elapsed=0;
 }
 resetExplode(){
  for(const m of this.displaced){const original=this.origins.get(m);if(original)m.position.copy(original)}
  this.displaced=[];this.root.updateMatrixWorld(true);
 }
 explode(meshes,level){
  const T=this.THREE;this.resetExplode();
  const amount=Math.max(0,Math.min(1,Number(level)||0));
  if(amount===0||!meshes.length)return;
  const box=new T.Box3();for(const m of meshes)box.expandByObject(m);
  if(box.isEmpty())return;
  const size=box.getSize(new T.Vector3());
  const width=Math.max(.08,size.x),height=Math.max(.08,size.y),depth=Math.max(.08,size.z);
  const temp=new T.Vector3();
  this.root.updateMatrixWorld(true);
  for(const m of meshes){
   if(!m.isMesh||!m.parent)continue;
   const raw=String(m.userData.atlasName||"").toLowerCase();
   let delta=new T.Vector3();
   const cerebellum=/cerebell|quadrangular lobule|biventral lobule|central lobule|culmen|declive|flocculus|folium of vermis|gracile lobule|semilunar lobule|lingula of cerebellum|nodule of vermis|peduncle of flocculus|pyramis of vermis|tonsil of cerebellum|tuber of vermis|uvula of vermis|wing of central lobule/.test(raw);
   const brainstem=/^pons|medulla oblongata|midbrain|base of peduncle|interpeduncular fossa/.test(raw);
   if(cerebellum)delta.set(0,-height*.40,-depth*.45);
   else if(brainstem)delta.set(0,-height*.43,-depth*.14);
   else if(/\.l$/i.test(raw))delta.set(-width*.52,0,0);
   else if(/\.r$/i.test(raw))delta.set(width*.52,0,0);
   else continue; // Cuerpo calloso y estructuras medias permanecen en su lugar.
   delta.multiplyScalar(amount);
   if(!this.origins.has(m))this.origins.set(m,m.position.clone());
   const world=m.getWorldPosition(temp.clone());
   const local=m.parent.worldToLocal(world.add(delta));
   m.position.copy(local);
   this.displaced.push(m);
  }
  this.root.updateMatrixWorld(true);
 }
 clearRoute(){
  if(!this.routeGroup)return;
  this.scene.remove(this.routeGroup);
  this.routeGroup.traverse(o=>{
   if(o.geometry)o.geometry.dispose();
   if(o.material){
    if(Array.isArray(o.material))o.material.forEach(m=>m.dispose());
    else o.material.dispose();
   }
  });
  this.routeGroup=null;this.routeCurves=[];this.pulses=[];this.elapsed=0;
 }
 createRoute(nodes,color){
  this.clearRoute();
  if(!Array.isArray(nodes)||nodes.length<2)return false;
  const T=this.THREE,group=new T.Group();
  const points=[];
  for(const node of nodes){
   const box=new T.Box3().setFromObject(node.mesh);
   if(box.isEmpty())return false;
   points.push(box.getCenter(new T.Vector3()));
  }
  const bounds=new T.Box3().setFromPoints(points),size=bounds.getSize(new T.Vector3());
  const radius=Math.max(.0012,Math.max(size.x,size.y,size.z)*.007);
  const tint=new T.Color(color||"#9de7db");
  const curves=[];
  const lineMat=new T.MeshBasicMaterial({color:tint,transparent:true,opacity:.88,depthTest:false,depthWrite:false});
  const dotMat=new T.MeshBasicMaterial({color:tint,transparent:true,opacity:1,depthTest:false,depthWrite:false});
  for(let i=0;i<points.length-1;i++){
   const a=points[i],b=points[i+1],mid=a.clone().lerp(b,.5);
   const distance=a.distanceTo(b);
   mid.z+=Math.max(radius*6,distance*.20); // curva exterior para legibilidad
   const curve=new T.CatmullRomCurve3([a.clone(),mid,b.clone()]);
   const tube=new T.Mesh(new T.TubeGeometry(curve,Math.max(20,Math.ceil(distance*160)),radius,6,false),lineMat.clone());
   tube.renderOrder=35;group.add(tube);
   curves.push(curve);
  }
  for(const p of points){
   const ring=new T.Mesh(new T.SphereGeometry(radius*2.2,12,10),dotMat.clone());
   ring.position.copy(p);ring.renderOrder=38;group.add(ring);
  }
  const pulses=[];
  for(let i=0;i<Math.min(3,curves.length+1);i++){
   const dot=new T.Mesh(new T.SphereGeometry(radius*2.8,12,10),new T.MeshBasicMaterial({color:tint,depthTest:false,depthWrite:false,transparent:true,opacity:.98}));
   dot.renderOrder=40;group.add(dot);pulses.push(dot);
  }
  this.scene.add(group);
  this.routeGroup=group;this.routeCurves=curves;this.pulses=pulses;this.elapsed=0;
  this.update(.001,true,1);
  return true;
 }
 update(dt,playing=true,speed=1){
  if(!this.routeCurves.length)return;
  if(playing)this.elapsed+=Math.max(0,Math.min(.08,dt||0))*Math.max(.25,Math.min(2,speed||1));
  const count=this.routeCurves.length;
  for(let i=0;i<this.pulses.length;i++){
   const phase=(this.elapsed*.32+i/this.pulses.length)%1;
   const segment=Math.min(count-1,Math.floor(phase*count));
   const t=(phase*count)-segment;
   this.pulses[i].position.copy(this.routeCurves[segment].getPointAt(t));
  }
 }
}
