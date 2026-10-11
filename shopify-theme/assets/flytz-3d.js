/*! Flytz 3D scenes. Includes three.js r186.

The MIT License

Copyright © 2010-2026 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(()=>{var Em=Object.defineProperty;var Tm=(n,e)=>{for(var t in e)Em(n,t,{get:e[t],enumerable:!0})};var $c=0,Xl=1,Qc=2;var Br=1,jc=2,Ar=3,Xi=0,Pt=1,Ht=2,Gi=0,Wn=1,Kt=2,ql=3,Yl=4,ef=5;var Xn=100,tf=101,nf=102,rf=103,of=104,sf=200,af=201,lf=202,cf=203,na=204,ra=205,ff=206,uf=207,hf=208,df=209,pf=210,mf=211,Af=212,gf=213,xf=214,Yo=0,Zo=1,Jo=2,qn=3,Ko=4,$o=5,Qo=6,jo=7,Or=0,_f=1,vf=2,wi=0,oa=1,sa=2,aa=3,Gr=4,la=5,ca=6,fa=7;var Zl=300,qi=301,yn=302,ua=303,ha=304,Yn=306,Qi=1e3,Fi=1001,es=1002,Vt=1003,Mf=1004;var ts=1005;var Wt=1006,da=1007;var ji=1008;var ti=1009,pa=1010,ma=1011,bn=1012,zr=1013,ui=1014,si=1015,hi=1016,Hr=1017,Vr=1018,wn=1020,Aa=35902,ga=35899,xa=1021,_a=1022,di=1023,Ei=1026,en=1027,kr=1028,Wr=1029,zi=1030,Xr=1031;var qr=1033,Yr=33776,Zr=33777,Jr=33778,Kr=33779,is=35840,ns=35841,rs=35842,os=35843,ss=36196,as=37492,ls=37496,cs=37488,fs=37489,gr=37490,us=37491,hs=37808,ds=37809,ps=37810,ms=37811,As=37812,gs=37813,xs=37814,_s=37815,vs=37816,Ms=37817,Ss=37818,ys=37819,bs=37820,ws=37821,Es=36492,Ts=36494,Rs=36495,Cs=36283,Ps=36284,xr=36285,Ls=36286;var Sf=3200;var _r=0,yf=1,Yi="",$t="srgb",vr="srgb-linear",Mr="linear",xt="srgb";var va=7680;var bf=519,wf=512,Ef=513,Tf=514,$r=515,Rf=516,Cf=517,Qr=518,Pf=519,Lf=35044;var Jl="300 es",Ti=2e3,En=2001;function If(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Uf(){let n=eo("canvas");return n.style.display="block",n}var Df={},jr=null;function Kl(...n){let e="THREE."+n.shift();jr?jr("log",e,...n):console.log(e,...n)}function Nf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pe(...n){n=Nf(n);let e="THREE."+n.shift();if(jr)jr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=Nf(n);let e="THREE."+n.shift();if(jr)jr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function hn(...n){let e=n.join(" ");e in Df||(Df[e]=!0,Pe(...n))}function Ff(n,e,t){return new Promise(function(i,r){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}var Bf={[Yo]:Zo,[Jo]:Qo,[Ko]:jo,[qn]:$o,[Zo]:Yo,[Qo]:Jo,[jo]:Ko,[$o]:qn};var _i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}};var vi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var to=Math.PI/180,Ds=180/Math.PI;function Zi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vi[n&255]+vi[n>>8&255]+vi[n>>16&255]+vi[n>>24&255]+"-"+vi[e&255]+vi[e>>8&255]+"-"+vi[e>>16&15|64]+vi[e>>24&255]+"-"+vi[t&63|128]+vi[t>>8&255]+"-"+vi[t>>16&255]+vi[t>>24&255]+vi[i&255]+vi[i>>8&255]+vi[i>>16&255]+vi[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function Of(n,e){return(n%e+e)%e}function Ma(n,e,t){return(1-t)*n+t*e}function io(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $l=class $l{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$l.prototype.isVector2=!0;var W=$l;var Ci=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,s,a){let c=i[r+0],l=i[r+1],f=i[r+2],h=i[r+3],u=o[s+0],d=o[s+1],m=o[s+2],v=o[s+3];if(h!==v||c!==u||l!==d||f!==m){let A=c*u+l*d+f*m+h*v;A<0&&(u=-u,d=-d,m=-m,v=-v,A=-A);let p=1-a;if(A<.9995){let S=Math.acos(A),E=Math.sin(S);p=Math.sin(p*S)/E,a=Math.sin(a*S)/E,c=c*p+u*a,l=l*p+d*a,f=f*p+m*a,h=h*p+v*a}else{c=c*p+u*a,l=l*p+d*a,f=f*p+m*a,h=h*p+v*a;let S=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=S,l*=S,f*=S,h*=S}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,o,s){let a=i[r],c=i[r+1],l=i[r+2],f=i[r+3],h=o[s],u=o[s+1],d=o[s+2],m=o[s+3];return e[t]=a*m+f*h+c*d-l*u,e[t+1]=c*m+f*u+l*h-a*d,e[t+2]=l*m+f*d+a*u-c*h,e[t+3]=f*m-a*h-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,c=Math.sin,l=a(i/2),f=a(r/2),h=a(o/2),u=c(i/2),d=c(r/2),m=c(o/2);switch(s){case"XYZ":this._x=u*f*h+l*d*m,this._y=l*d*h-u*f*m,this._z=l*f*m+u*d*h,this._w=l*f*h-u*d*m;break;case"YXZ":this._x=u*f*h+l*d*m,this._y=l*d*h-u*f*m,this._z=l*f*m-u*d*h,this._w=l*f*h+u*d*m;break;case"ZXY":this._x=u*f*h-l*d*m,this._y=l*d*h+u*f*m,this._z=l*f*m+u*d*h,this._w=l*f*h-u*d*m;break;case"ZYX":this._x=u*f*h-l*d*m,this._y=l*d*h+u*f*m,this._z=l*f*m-u*d*h,this._w=l*f*h+u*d*m;break;case"YZX":this._x=u*f*h+l*d*m,this._y=l*d*h+u*f*m,this._z=l*f*m-u*d*h,this._w=l*f*h-u*d*m;break;case"XZY":this._x=u*f*h-l*d*m,this._y=l*d*h-u*f*m,this._z=l*f*m+u*d*h,this._w=l*f*h+u*d*m;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],c=t[9],l=t[2],f=t[6],h=t[10],u=i+a+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-c)*d,this._y=(o-l)*d,this._z=(s-r)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(f-c)/d,this._x=.25*d,this._y=(r+s)/d,this._z=(o+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(o-l)/d,this._x=(r+s)/d,this._y=.25*d,this._z=(c+f)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(s-r)/d,this._x=(o+l)/d,this._y=(c+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,c=t._y,l=t._z,f=t._w;return this._x=i*f+s*a+r*l-o*c,this._y=r*f+s*c+o*a-i*l,this._z=o*f+s*l+i*c-r*a,this._w=s*f-i*a-r*c-o*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+o*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var jl=class jl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,c=e.w,l=2*(s*r-a*i),f=2*(a*t-o*r),h=2*(o*i-s*t);return this.x=t+c*l+s*h-a*f,this.y=i+c*f+a*l-o*h,this.z=r+c*h+o*f-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,c=t.z;return this.x=r*c-o*a,this.y=o*s-i*c,this.z=i*a-r*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jl.prototype.isVector3=!0;var T=jl,Ql=new T,Gf=new Ci;var tc=class tc{constructor(e,t,i,r,o,s,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l)}set(e,t,i,r,o,s,a,c,l){let f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=o,f[5]=c,f[6]=i,f[7]=s,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],c=i[6],l=i[1],f=i[4],h=i[7],u=i[2],d=i[5],m=i[8],v=r[0],A=r[3],p=r[6],S=r[1],E=r[4],_=r[7],b=r[2],y=r[5],C=r[8];return o[0]=s*v+a*S+c*b,o[3]=s*A+a*E+c*y,o[6]=s*p+a*_+c*C,o[1]=l*v+f*S+h*b,o[4]=l*A+f*E+h*y,o[7]=l*p+f*_+h*C,o[2]=u*v+d*S+m*b,o[5]=u*A+d*E+m*y,o[8]=u*p+d*_+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],f=e[8];return t*s*f-t*a*l-i*o*f+i*a*c+r*o*l-r*s*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=f*s-a*l,u=a*c-f*o,d=l*o-s*c,m=t*h+i*u+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=h*v,e[1]=(r*l-f*i)*v,e[2]=(a*i-r*s)*v,e[3]=u*v,e[4]=(f*t-r*c)*v,e[5]=(r*o-a*t)*v,e[6]=d*v,e[7]=(i*c-l*t)*v,e[8]=(s*t-i*o)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){let c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*s+l*a)+s+e,-r*l,r*c,-r*(-l*s+c*a)+a+t,0,0,1),this}scale(e,t){return hn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(e,t)),this}rotate(e){return hn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return hn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tc.prototype.isMatrix3=!0;var Ze=tc,ec=new Ze;var zf=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hf=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rm(){let n={enabled:!0,workingColorSpace:vr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===xt&&(r.r=tn(r.r),r.g=tn(r.g),r.b=tn(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===xt&&(r.r=Sr(r.r),r.g=Sr(r.g),r.b=Sr(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?Mr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return hn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return hn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[vr]:{primaries:e,whitePoint:i,transfer:Mr,toXYZ:zf,fromXYZ:Hf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:zf,fromXYZ:Hf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),n}var lt=Rm();function tn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var no,Sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{no===void 0&&(no=eo("canvas")),no.width=e.width,no.height=e.height;let r=no.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=no}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=eo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=tn(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tn(t[i]/255)*255):t[i]=tn(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}};var Cm=0,Zn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(ic(r[s].image)):o.push(ic(r[s]))}else o=ic(r);i.url=o}return t||(e.images[this.uuid]=i),i}};function ic(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var Pm=0,nc=new T,Xt=class n extends _i{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Fi,r=Fi,o=Wt,s=ji,a=di,c=ti,l=n.DEFAULT_ANISOTROPY,f=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Zi(),this.name="",this.source=new Zn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Zl;Xt.DEFAULT_ANISOTROPY=1;var rc=class rc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o,c=e.elements,l=c[0],f=c[4],h=c[8],u=c[1],d=c[5],m=c[9],v=c[2],A=c[6],p=c[10];if(Math.abs(f-u)<.01&&Math.abs(h-v)<.01&&Math.abs(m-A)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+v)<.1&&Math.abs(m+A)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,_=(d+1)/2,b=(p+1)/2,y=(f+u)/4,C=(h+v)/4,g=(m+A)/4;return E>_&&E>b?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=y/i,o=C/i):_>b?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=y/r,o=g/r):b<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(b),i=C/o,r=g/o),this.set(i,r,o,t),this}let S=Math.sqrt((A-m)*(A-m)+(h-v)*(h-v)+(u-f)*(u-f));return Math.abs(S)<.001&&(S=1),this.x=(A-m)/S,this.y=(h-v)/S,this.z=(u-f)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rc.prototype.isVector4=!0;var Et=rc;var ya=class extends _i{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},o=new Xt(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zn(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ai=class extends ya{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}};var ro=class extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends Xt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ea=class Ea{constructor(e,t,i,r,o,s,a,c,l,f,h,u,d,m,v,A){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,s,a,c,l,f,h,u,d,m,v,A)}set(e,t,i,r,o,s,a,c,l,f,h,u,d,m,v,A){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=c,p[2]=l,p[6]=f,p[10]=h,p[14]=u,p[3]=d,p[7]=m,p[11]=v,p[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ea().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),o=1/oo.setFromMatrixColumn(e,1).length(),s=1/oo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),f=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){let u=s*f,d=s*h,m=a*f,v=a*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=d+m*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=m+d*l,t[10]=s*c}else if(e.order==="YXZ"){let u=c*f,d=c*h,m=l*f,v=l*h;t[0]=u+v*a,t[4]=m*a-d,t[8]=s*l,t[1]=s*h,t[5]=s*f,t[9]=-a,t[2]=d*a-m,t[6]=v+u*a,t[10]=s*c}else if(e.order==="ZXY"){let u=c*f,d=c*h,m=l*f,v=l*h;t[0]=u-v*a,t[4]=-s*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=s*f,t[9]=v-u*a,t[2]=-s*l,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let u=s*f,d=s*h,m=a*f,v=a*h;t[0]=c*f,t[4]=m*l-d,t[8]=u*l+v,t[1]=c*h,t[5]=v*l+u,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let u=s*c,d=s*l,m=a*c,v=a*l;t[0]=c*f,t[4]=v-u*h,t[8]=m*h+d,t[1]=h,t[5]=s*f,t[9]=-a*f,t[2]=-l*f,t[6]=d*h+m,t[10]=u-v*h}else if(e.order==="XZY"){let u=s*c,d=s*l,m=a*c,v=a*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=u*h+v,t[5]=s*f,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*f,t[10]=v*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lm,e,Dm)}lookAt(e,t,i){let r=this.elements;return Hi.subVectors(e,t),Hi.lengthSq()===0&&(Hi.z=1),Hi.normalize(),Jn.crossVectors(i,Hi),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Hi.x+=1e-4:Hi.z+=1e-4,Hi.normalize(),Jn.crossVectors(i,Hi)),Jn.normalize(),wa.crossVectors(Hi,Jn),r[0]=Jn.x,r[4]=wa.x,r[8]=Hi.x,r[1]=Jn.y,r[5]=wa.y,r[9]=Hi.y,r[2]=Jn.z,r[6]=wa.z,r[10]=Hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],c=i[8],l=i[12],f=i[1],h=i[5],u=i[9],d=i[13],m=i[2],v=i[6],A=i[10],p=i[14],S=i[3],E=i[7],_=i[11],b=i[15],y=r[0],C=r[4],g=r[8],w=r[12],P=r[1],D=r[5],B=r[9],O=r[13],I=r[2],F=r[6],X=r[10],k=r[14],ae=r[3],q=r[7],Q=r[11],re=r[15];return o[0]=s*y+a*P+c*I+l*ae,o[4]=s*C+a*D+c*F+l*q,o[8]=s*g+a*B+c*X+l*Q,o[12]=s*w+a*O+c*k+l*re,o[1]=f*y+h*P+u*I+d*ae,o[5]=f*C+h*D+u*F+d*q,o[9]=f*g+h*B+u*X+d*Q,o[13]=f*w+h*O+u*k+d*re,o[2]=m*y+v*P+A*I+p*ae,o[6]=m*C+v*D+A*F+p*q,o[10]=m*g+v*B+A*X+p*Q,o[14]=m*w+v*O+A*k+p*re,o[3]=S*y+E*P+_*I+b*ae,o[7]=S*C+E*D+_*F+b*q,o[11]=S*g+E*B+_*X+b*Q,o[15]=S*w+E*O+_*k+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],c=e[9],l=e[13],f=e[2],h=e[6],u=e[10],d=e[14],m=e[3],v=e[7],A=e[11],p=e[15],S=c*d-l*u,E=a*d-l*h,_=a*u-c*h,b=s*d-l*f,y=s*u-c*f,C=s*h-a*f;return t*(v*S-A*E+p*_)-i*(m*S-A*b+p*y)+r*(m*E-v*b+p*C)-o*(m*_-v*y+A*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],r=e[8],o=e[1],s=e[5],a=e[9],c=e[2],l=e[6],f=e[10];return t*(s*f-a*l)-i*(o*f-a*c)+r*(o*l-s*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],c=e[6],l=e[7],f=e[8],h=e[9],u=e[10],d=e[11],m=e[12],v=e[13],A=e[14],p=e[15],S=t*a-i*s,E=t*c-r*s,_=t*l-o*s,b=i*c-r*a,y=i*l-o*a,C=r*l-o*c,g=f*v-h*m,w=f*A-u*m,P=f*p-d*m,D=h*A-u*v,B=h*p-d*v,O=u*p-d*A,I=S*O-E*B+_*D+b*P-y*w+C*g;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return e[0]=(a*O-c*B+l*D)*F,e[1]=(r*B-i*O-o*D)*F,e[2]=(v*C-A*y+p*b)*F,e[3]=(u*y-h*C-d*b)*F,e[4]=(c*P-s*O-l*w)*F,e[5]=(t*O-r*P+o*w)*F,e[6]=(A*_-m*C-p*E)*F,e[7]=(f*C-u*_+d*E)*F,e[8]=(s*B-a*P+l*g)*F,e[9]=(i*P-t*B-o*g)*F,e[10]=(m*y-v*_+p*S)*F,e[11]=(h*_-f*y-d*S)*F,e[12]=(a*w-s*D-c*g)*F,e[13]=(t*D-i*w+r*g)*F,e[14]=(v*E-m*b-A*S)*F,e[15]=(f*b-h*E+u*S)*F,this}scale(e){let t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,c=e.z,l=o*s,f=o*a;return this.set(l*s+i,l*a-r*c,l*c+r*a,0,l*a+r*c,f*a+i,f*c-r*s,0,l*c-r*a,f*c+r*s,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,o=t._x,s=t._y,a=t._z,c=t._w,l=o+o,f=s+s,h=a+a,u=o*l,d=o*f,m=o*h,v=s*f,A=s*h,p=a*h,S=c*l,E=c*f,_=c*h,b=i.x,y=i.y,C=i.z;return r[0]=(1-(v+p))*b,r[1]=(d+_)*b,r[2]=(m-E)*b,r[3]=0,r[4]=(d-_)*y,r[5]=(1-(u+p))*y,r[6]=(A+S)*y,r[7]=0,r[8]=(m+E)*C,r[9]=(A-S)*C,r[10]=(1-(u+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let s=oo.set(r[0],r[1],r[2]).length(),a=oo.set(r[4],r[5],r[6]).length(),c=oo.set(r[8],r[9],r[10]).length();o<0&&(s=-s),nn.copy(this);let l=1/s,f=1/a,h=1/c;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=f,nn.elements[5]*=f,nn.elements[6]*=f,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,t.setFromRotationMatrix(nn),i.x=s,i.y=a,i.z=c,this}makePerspective(e,t,i,r,o,s,a=Ti,c=!1){let l=this.elements,f=2*o/(t-e),h=2*o/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),m,v;if(c)m=o/(s-o),v=s*o/(s-o);else if(a===Ti)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===En)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,s,a=Ti,c=!1){let l=this.elements,f=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),d=-(i+r)/(i-r),m,v;if(c)m=1/(s-o),v=s/(s-o);else if(a===Ti)m=-2/(s-o),v=-(s+o)/(s-o);else if(a===En)m=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ea.prototype.isMatrix4=!0;var tt=Ea,oo=new T,nn=new tt,Lm=new T(0,0,0),Dm=new T(1,1,1),Jn=new T,wa=new T,Hi=new T;var Vf=new tt,kf=new Ci,Bi=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,o=r[0],s=r[4],a=r[8],c=r[1],l=r[5],f=r[9],h=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kf.setFromEuler(this),this.setFromQuaternion(kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var Kn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var Im=0,Wf=new T,so=new Ci,Tn=new tt,Ta=new T,Is=new T,Um=new T,Nm=new Ci,Xf=new T(1,0,0),qf=new T(0,1,0),Yf=new T(0,0,1),Zf={type:"added"},Fm={type:"removed"},ao={type:"childadded",child:null},oc={type:"childremoved",child:null},vt=class n extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new T,t=new Bi,i=new Ci,r=new T(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ze}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.multiply(so),this}rotateOnWorldAxis(e,t){return so.setFromAxisAngle(e,t),this.quaternion.premultiply(so),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis(qf,e)}rotateZ(e){return this.rotateOnAxis(Yf,e)}translateOnAxis(e,t){return Wf.copy(e).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis(qf,e)}translateZ(e){return this.translateOnAxis(Yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ta.copy(e):Ta.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Is,Ta,this.up):Tn.lookAt(Ta,Is,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),so.setFromRotationMatrix(Tn),this.quaternion.premultiply(so.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zf),ao.child=e,this.dispatchEvent(ao),ao.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fm),oc.child=e,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zf),ao.child=e,this.dispatchEvent(ao),ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Nm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,r=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*r,o[13]+=i-o[1]*t-o[5]*i-o[9]*r,o[14]+=r-o[2]*t-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let o=this.children;for(let s=0,a=o.length;s<a;s++)o[s].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){let h=c[l];o(e.shapes,h)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(o(e.animations,c))}}if(t){let a=s(e.geometries),c=s(e.materials),l=s(e.textures),f=s(e.images),h=s(e.shapes),u=s(e.skeletons),d=s(e.animations),m=s(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(a){let c=[];for(let l in a){let f=a[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vt.DEFAULT_UP=new T(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}};var Bm={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(let v of e.hand.values()){let A=t.getJointPose(v,i),p=this._getHandJoint(l,v);A!==null&&(p.matrix.fromArray(A.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=A.radius),p.visible=A!==null}let f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Qe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function sc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=Of(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=sc(s,o,e+1/3),this.g=sc(s,o,e),this.b=sc(s,o,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,t=$t){function i(o){o!==void 0&&parseFloat(o)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let i=Jf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tn(e.r),this.g=tn(e.g),this.b=tn(e.b),this}copyLinearToSRGB(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return lt.workingToColorSpace(Mi.copy(this),e),Math.round(ot(Mi.r*255,0,255))*65536+Math.round(ot(Mi.g*255,0,255))*256+Math.round(ot(Mi.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Mi.copy(this),t);let i=Mi.r,r=Mi.g,o=Mi.b,s=Math.max(i,r,o),a=Math.min(i,r,o),c,l,f=(a+s)/2;if(a===s)c=0,l=0;else{let h=s-a;switch(l=f<=.5?h/(s+a):h/(2-s-a),s){case i:c=(r-o)/h+(r<o?6:0);break;case r:c=(o-i)/h+2;break;case o:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Mi.copy(this),t),e.r=Mi.r,e.g=Mi.g,e.b=Mi.b,e}getStyle(e=$t){lt.workingToColorSpace(Mi.copy(this),e);let t=Mi.r,i=Mi.g,r=Mi.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Ra);let i=Ma($n.h,Ra.h,t),r=Ma($n.s,Ra.s,t),o=Ma($n.l,Ra.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mi=new le;le.NAMES=Jf;var Us=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var rn=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};var on=new T,Rn=new T,ac=new T,Cn=new T,co=new T,fo=new T,Kf=new T,lc=new T,cc=new T,fc=new T,uc=new Et,hc=new Et,dc=new Et,dn=class n{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),on.subVectors(e,t),r.cross(on);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){on.subVectors(r,t),Rn.subVectors(i,t),ac.subVectors(e,t);let s=on.dot(on),a=on.dot(Rn),c=on.dot(ac),l=Rn.dot(Rn),f=Rn.dot(ac),h=s*l-a*a;if(h===0)return o.set(0,0,0),null;let u=1/h,d=(l*c-a*f)*u,m=(s*f-a*c)*u;return o.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,i,r,o,s,a,c){return this.getBarycoord(e,t,i,r,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Cn.x),c.addScaledVector(s,Cn.y),c.addScaledVector(a,Cn.z),c)}static getInterpolatedAttribute(e,t,i,r,o,s){return uc.setScalar(0),hc.setScalar(0),dc.setScalar(0),uc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,i),dc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(uc,o.x),s.addScaledVector(hc,o.y),s.addScaledVector(dc,o.z),s}static isFrontFacing(e,t,i,r){return on.subVectors(i,t),Rn.subVectors(e,t),on.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),on.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,o){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,o=this.c,s,a;co.subVectors(r,i),fo.subVectors(o,i),lc.subVectors(e,i);let c=co.dot(lc),l=fo.dot(lc);if(c<=0&&l<=0)return t.copy(i);cc.subVectors(e,r);let f=co.dot(cc),h=fo.dot(cc);if(f>=0&&h<=f)return t.copy(r);let u=c*h-f*l;if(u<=0&&c>=0&&f<=0)return s=c/(c-f),t.copy(i).addScaledVector(co,s);fc.subVectors(e,o);let d=co.dot(fc),m=fo.dot(fc);if(m>=0&&d<=m)return t.copy(o);let v=d*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(fo,a);let A=f*m-d*h;if(A<=0&&h-f>=0&&d-m>=0)return Kf.subVectors(o,r),a=(h-f)/(h-f+(d-m)),t.copy(r).addScaledVector(Kf,a);let p=1/(A+v+u);return s=v*p,a=u*p,t.copy(i).addScaledVector(co,s).addScaledVector(fo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Ji=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,sn):sn.fromBufferAttribute(o,s),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}let r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Pa.subVectors(this.max,Ns),uo.subVectors(e.a,Ns),ho.subVectors(e.b,Ns),po.subVectors(e.c,Ns),Qn.subVectors(ho,uo),jn.subVectors(po,ho),yr.subVectors(uo,po);let t=[0,-Qn.z,Qn.y,0,-jn.z,jn.y,0,-yr.z,yr.y,Qn.z,0,-Qn.x,jn.z,0,-jn.x,yr.z,0,-yr.x,-Qn.y,Qn.x,0,-jn.y,jn.x,0,-yr.y,yr.x,0];return!pc(t,uo,ho,po,Pa)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,uo,ho,po,Pa))?!1:(La.crossVectors(Qn,jn),t=[La.x,La.y,La.z],pc(t,uo,ho,po,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pn=[new T,new T,new T,new T,new T,new T,new T,new T],sn=new T,Ca=new Ji,uo=new T,ho=new T,po=new T,Qn=new T,jn=new T,yr=new T,Ns=new T,Pa=new T,La=new T,br=new T;function pc(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){br.fromArray(n,o);let a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),c=e.dot(br),l=t.dot(br),f=i.dot(br);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>a)return!1}return!0}var ri=new T,Da=new W,Om=0,ii=class extends _i{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Om++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lf,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix3(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.applyMatrix4(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.applyNormalMatrix(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ri.fromBufferAttribute(this,t),ri.transformDirection(e),this.setXYZ(t,ri.x,ri.y,ri.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=io(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ri(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=io(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ri(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=io(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ri(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=io(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ri(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=io(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ri(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ri(t,this.array),i=Ri(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ri(t,this.array),i=Ri(i,this.array),r=Ri(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Ri(t,this.array),i=Ri(i,this.array),r=Ri(r,this.array),o=Ri(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var mo=class extends ii{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ao=class extends ii{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Me=class extends ii{constructor(e,t,i){super(new Float32Array(e),t,i)}};var Gm=new Ji,Fs=new T,mc=new T,Pi=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Gm.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);let t=Fs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(mc)),this.expandByPoint(Fs.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var zm=0,Ki=new tt,Ac=new vt,go=new T,Vi=new Ji,Bs=new Ji,pi=new T,Ke=class n extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(If(e)?Ao:mo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new Ze().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ki.makeRotationFromQuaternion(e),this.applyMatrix4(Ki),this}rotateX(e){return Ki.makeRotationX(e),this.applyMatrix4(Ki),this}rotateY(e){return Ki.makeRotationY(e),this.applyMatrix4(Ki),this}rotateZ(e){return Ki.makeRotationZ(e),this.applyMatrix4(Ki),this}translate(e,t,i){return Ki.makeTranslation(e,t,i),this.applyMatrix4(Ki),this}scale(e,t,i){return Ki.makeScale(e,t,i),this.applyMatrix4(Ki),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,o=e.length;r<o;r++){let s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Me(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let o=t[i];Vi.setFromBufferAttribute(o),this.morphTargetsRelative?(pi.addVectors(this.boundingBox.min,Vi.min),this.boundingBox.expandByPoint(pi),pi.addVectors(this.boundingBox.max,Vi.max),this.boundingBox.expandByPoint(pi)):(this.boundingBox.expandByPoint(Vi.min),this.boundingBox.expandByPoint(Vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let i=this.boundingSphere.center;if(Vi.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){let a=t[o];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(pi.addVectors(Vi.min,Bs.min),Vi.expandByPoint(pi),pi.addVectors(Vi.max,Bs.max),Vi.expandByPoint(pi)):(Vi.expandByPoint(Bs.min),Vi.expandByPoint(Bs.max))}Vi.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)pi.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(pi));if(t)for(let o=0,s=t.length;o<s;o++){let a=t[o],c=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)pi.fromBufferAttribute(a,l),c&&(go.fromBufferAttribute(e,l),pi.add(go)),r=Math.max(r,i.distanceToSquared(pi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,o=t.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==i.count)&&(s=new ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",s));let a=[],c=[];for(let g=0;g<i.count;g++)a[g]=new T,c[g]=new T;let l=new T,f=new T,h=new T,u=new W,d=new W,m=new W,v=new T,A=new T;function p(g,w,P){l.fromBufferAttribute(i,g),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,P),u.fromBufferAttribute(o,g),d.fromBufferAttribute(o,w),m.fromBufferAttribute(o,P),f.sub(l),h.sub(l),d.sub(u),m.sub(u);let D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(D),A.copy(h).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(D),a[g].add(v),a[w].add(v),a[P].add(v),c[g].add(A),c[w].add(A),c[P].add(A))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let g=0,w=S.length;g<w;++g){let P=S[g],D=P.start,B=P.count;for(let O=D,I=D+B;O<I;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let E=new T,_=new T,b=new T,y=new T;function C(g){b.fromBufferAttribute(r,g),y.copy(b);let w=a[g];E.copy(w),E.sub(b.multiplyScalar(b.dot(w))).normalize(),_.crossVectors(y,w);let D=_.dot(c[g])<0?-1:1;s.setXYZW(g,E.x,E.y,E.z,D)}for(let g=0,w=S.length;g<w;++g){let P=S[g],D=P.start,B=P.count;for(let O=D,I=D+B;O<I;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let r=new T,o=new T,s=new T,a=new T,c=new T,l=new T,f=new T,h=new T;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),v=e.getX(u+1),A=e.getX(u+2);r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,v),s.fromBufferAttribute(t,A),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,A),a.add(f),c.add(f),l.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(A,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)r.fromBufferAttribute(t,u+0),o.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pi.fromBufferAttribute(e,t),pi.normalize(),e.setXYZ(t,pi.x,pi.y,pi.z)}toNonIndexed(){function e(a,c){let l=a.array,f=a.itemSize,h=a.normalized,u=new l.constructor(c.length*f),d=0,m=0;for(let v=0,A=c.length;v<A;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*f;for(let p=0;p<f;p++)u[m++]=l[d++]}return new ii(u,f,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let o=this.morphAttributes;for(let a in o){let c=[],l=o[a];for(let f=0,h=l.length;f<h;f++){let u=l[f],d=e(u,i);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let l=s[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},o=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],f=[];for(let h=0,u=l.length;h<u;h++){let d=l[h];f.push(d.toJSON(e.data))}f.length>0&&(r[c]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let f=r[l];this.setAttribute(l,f.clone(t))}let o=e.morphAttributes;for(let l in o){let f=[],h=o[l];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let l=0,f=s.length;l<f;l++){let h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gc=new T,Hm=new T,Vm=new Ze,gi=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=gc.subVectors(i,t).cross(Hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(gc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Vm.getNormalMatrix(e),r=this.coplanarPoint(gc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};var km=0,mi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Wn,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ra,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=va,this.stencilZFail=va,this.stencilZPass=va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let s=[];for(let a in o){let c=o[a];delete c.metadata,s.push(c)}return s}if(t){let o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new W().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new W().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ln=new T,xc=new T,Ia=new T,Ua=new T,pn=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xc.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),Ua.copy(this.origin).sub(xc);let o=e.distanceTo(t)*.5,s=-this.direction.dot(Ia),a=Ua.dot(this.direction),c=-Ua.dot(Ia),l=Ua.lengthSq(),f=Math.abs(1-s*s),h,u,d,m;if(f>0)if(h=s*c-a,u=s*a-c,m=o*f,h>=0)if(u>=-m)if(u<=m){let v=1/f;h*=v,u*=v,d=h*(h+s*u+2*a)+u*(s*h+u+2*c)+l}else u=o,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*c)+l;else u=-o,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*c)+l;else u<=-m?(h=Math.max(0,-(-s*o+a)),u=h>0?-o:Math.min(Math.max(-o,-c),o),d=-h*h+u*(u+2*c)+l):u<=m?(h=0,u=Math.min(Math.max(-o,-c),o),d=u*(u+2*c)+l):(h=Math.max(0,-(s*o+a)),u=h>0?o:Math.min(Math.max(-o,-c),o),d=-h*h+u*(u+2*c)+l);else u=s>0?-o:o,h=Math.max(0,-(s*u+a)),d=-h*h+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xc).addScaledVector(Ia,u),d}intersectSphere(e,t){if(e.radius<0)return null;Ln.subVectors(e.center,this.origin);let i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,o=e.radius*e.radius;if(r>o)return null;let s=Math.sqrt(o-r),a=i-s,c=i+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,c,l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),f>=0?(o=(e.min.y-u.y)*f,s=(e.max.y-u.y)*f):(o=(e.max.y-u.y)*f,s=(e.min.y-u.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-u.z)*h,c=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,c=(e.min.z-u.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,r,o){let s=this.origin,a=this.direction,c=a.x,l=a.y,f=a.z,h=e.x-s.x,u=e.y-s.y,d=e.z-s.z,m=t.x-s.x,v=t.y-s.y,A=t.z-s.z,p=i.x-s.x,S=i.y-s.y,E=i.z-s.z,_=Math.abs(c),b=Math.abs(l),y=Math.abs(f),C,g,w,P,D,B,O,I,F,X,k,ae;if(_>=b&&_>=y?(w=c,B=h,F=m,ae=p,c>=0?(C=l,g=f,P=u,D=d,O=v,I=A,X=S,k=E):(C=f,g=l,P=d,D=u,O=A,I=v,X=E,k=S)):b>=y?(w=l,B=u,F=v,ae=S,l>=0?(C=f,g=c,P=d,D=h,O=A,I=m,X=E,k=p):(C=c,g=f,P=h,D=d,O=m,I=A,X=p,k=E)):(w=f,B=d,F=A,ae=E,f>=0?(C=c,g=l,P=h,D=u,O=m,I=v,X=p,k=S):(C=l,g=c,P=u,D=h,O=v,I=m,X=S,k=p)),w===0)return null;let q=C/w,Q=g/w,re=1/w,Le=P-q*B,Re=D-Q*B,ct=O-q*F,rt=I-Q*F,ft=X-q*ae,K=k-Q*ae,te=ft*rt-K*ct,xe=Le*K-Re*ft,Ue=ct*Re-rt*Le;if(r){if(te<0||xe<0||Ue<0)return null}else if((te<0||xe<0||Ue<0)&&(te>0||xe>0||Ue>0))return null;let ye=te+xe+Ue;if(ye===0)return null;let Ne=re*(te*B+xe*F+Ue*ae);return(ye>0?Ne<0:Ne>0)?null:this.at(Ne/ye,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var qt=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $f=new tt,wr=new pn,Na=new Pi,Qf=new T,Fa=new T,Ba=new T,Oa=new T,_c=new T,Ga=new T,jf=new T,za=new T,de=class extends vt{constructor(e=new Ke,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(o&&a){Ga.set(0,0,0);for(let c=0,l=o.length;c<l;c++){let f=a[c],h=o[c];f!==0&&(_c.fromBufferAttribute(h,e),s?Ga.addScaledVector(_c,f):Ga.addScaledVector(_c.sub(t),f))}t.add(Ga)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Na.copy(i.boundingSphere),Na.applyMatrix4(o),wr.copy(e.ray).recast(e.near),!(Na.containsPoint(wr.origin)===!1&&(wr.intersectSphere(Na,Qf)===null||wr.origin.distanceToSquared(Qf)>(e.far-e.near)**2))&&($f.copy(o).invert(),wr.copy(e.ray).applyMatrix4($f),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,i){let r,o=this.geometry,s=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,f=o.attributes.uv1,h=o.attributes.normal,u=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,v=u.length;m<v;m++){let A=u[m],p=s[A.materialIndex],S=Math.max(A.start,d.start),E=Math.min(a.count,Math.min(A.start+A.count,d.start+d.count));for(let _=S,b=E;_<b;_+=3){let y=a.getX(_),C=a.getX(_+1),g=a.getX(_+2);r=Ha(this,p,e,i,l,f,h,y,C,g),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=A.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let A=m,p=v;A<p;A+=3){let S=a.getX(A),E=a.getX(A+1),_=a.getX(A+2);r=Ha(this,s,e,i,l,f,h,S,E,_),r&&(r.faceIndex=Math.floor(A/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let m=0,v=u.length;m<v;m++){let A=u[m],p=s[A.materialIndex],S=Math.max(A.start,d.start),E=Math.min(c.count,Math.min(A.start+A.count,d.start+d.count));for(let _=S,b=E;_<b;_+=3){let y=_,C=_+1,g=_+2;r=Ha(this,p,e,i,l,f,h,y,C,g),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=A.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let A=m,p=v;A<p;A+=3){let S=A,E=A+1,_=A+2;r=Ha(this,s,e,i,l,f,h,S,E,_),r&&(r.faceIndex=Math.floor(A/3),t.push(r))}}}};function Wm(n,e,t,i,r,o,s,a){let c;if(e.side===Pt?c=i.intersectTriangle(s,o,r,!0,a):c=i.intersectTriangle(r,o,s,e.side===Xi,a),c===null)return null;za.copy(a),za.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(za);return l<t.near||l>t.far?null:{distance:l,point:za.clone(),object:n}}function Ha(n,e,t,i,r,o,s,a,c,l){n.getVertexPosition(a,Fa),n.getVertexPosition(c,Ba),n.getVertexPosition(l,Oa);let f=Wm(n,e,t,i,Fa,Ba,Oa,jf);if(f){let h=new T;dn.getBarycoord(jf,Fa,Ba,Oa,h),r&&(f.uv=dn.getInterpolatedAttribute(r,a,c,l,h,new W)),o&&(f.uv1=dn.getInterpolatedAttribute(o,a,c,l,h,new W)),s&&(f.normal=dn.getInterpolatedAttribute(s,a,c,l,h,new T),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new T,materialIndex:0};dn.getNormal(Fa,Ba,Oa,u.normal),f.face=u,f.barycoord=h}return f}var xo=class extends Xt{constructor(e=null,t=1,i=1,r,o,s,a,c,l=Vt,f=Vt,h,u){super(null,s,a,c,l,f,r,o,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _o=class extends ii{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var vo=new tt,eu=new tt,Va=[],tu=new Ji,Xm=new tt,Os=new de,Gs=new Pi,Dn=class extends de{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _o(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Xm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vo),tu.copy(e.boundingBox).applyMatrix4(vo),this.boundingBox.union(tu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vo),Gs.copy(e.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(Gs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,s=e*o+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(i),e.ray.intersectsSphere(Gs)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,vo),eu.multiplyMatrices(i,vo),Os.matrixWorld=eu,Os.raycast(e,Va);for(let s=0,a=Va.length;s<a;s++){let c=Va[s];c.instanceId=o,c.object=this,t.push(c)}Va.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _o(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new xo(new Float32Array(r*this.count),r,this.count,kr,si));let o=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let a=this.geometry.morphTargetsRelative?1:1-s,c=r*e;return o[c]=a,o.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};var Er=new Pi,qm=new W(.5,.5),ka=new T,er=class{constructor(e=new gi,t=new gi,i=new gi,r=new gi,o=new gi,s=new gi){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti,i=!1){let r=this.planes,o=e.elements,s=o[0],a=o[1],c=o[2],l=o[3],f=o[4],h=o[5],u=o[6],d=o[7],m=o[8],v=o[9],A=o[10],p=o[11],S=o[12],E=o[13],_=o[14],b=o[15];if(r[0].setComponents(l-s,d-f,p-m,b-S).normalize(),r[1].setComponents(l+s,d+f,p+m,b+S).normalize(),r[2].setComponents(l+a,d+h,p+v,b+E).normalize(),r[3].setComponents(l-a,d-h,p-v,b-E).normalize(),i)r[4].setComponents(c,u,A,_).normalize(),r[5].setComponents(l-c,d-u,p-A,b-_).normalize();else if(r[4].setComponents(l-c,d-u,p-A,b-_).normalize(),t===Ti)r[5].setComponents(l+c,d+u,p+A,b+_).normalize();else if(t===En)r[5].setComponents(c,u,A,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);let t=qm.distanceTo(e.center);return Er.radius=.7071067811865476+t,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ka.x=r.normal.x>0?e.max.x:e.min.x,ka.y=r.normal.y>0?e.max.y:e.min.y,ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var In=class extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};var qa=new T,Ya=new T,iu=new tt,zs=new pn,Wa=new Pi,vc=new T,nu=new T,Za=class extends vt{constructor(e=new Ke,t=new In){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)qa.fromBufferAttribute(t,r-1),Ya.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=qa.distanceTo(Ya);e.setAttribute("lineDistance",new Me(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=o,e.ray.intersectsSphere(Wa)===!1)return;iu.copy(r).invert(),zs.copy(e.ray).applyMatrix4(iu);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){let d=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let v=d,A=m-1;v<A;v+=l){let p=f.getX(v),S=f.getX(v+1),E=Xa(this,e,zs,c,p,S,v);E&&t.push(E)}if(this.isLineLoop){let v=f.getX(m-1),A=f.getX(d),p=Xa(this,e,zs,c,v,A,m-1);p&&t.push(p)}}else{let d=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let v=d,A=m-1;v<A;v+=l){let p=Xa(this,e,zs,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Xa(this,e,zs,c,m-1,d,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function Xa(n,e,t,i,r,o,s){let a=n.geometry.attributes.position;if(qa.fromBufferAttribute(a,r),Ya.fromBufferAttribute(a,o),t.distanceSqToSegment(qa,Ya,vc,nu)>i)return;vc.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(vc);if(!(l<e.near||l>e.far))return{distance:l,point:nu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}var ru=new T,ou=new T,Tr=class extends Za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)ru.fromBufferAttribute(t,r),ou.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ru.distanceTo(ou);e.setAttribute("lineDistance",new Me(i,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ja=class extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var su=new tt,Mc=new pn,Ka=new Pi,$a=new T,mn=class extends vt{constructor(e=new Ke,t=new Ja){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(r),Ka.radius+=o,e.ray.intersectsSphere(Ka)===!1)return;su.copy(r).invert(),Mc.copy(e.ray).applyMatrix4(su);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){let u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let m=u,v=d;m<v;m++){let A=l.getX(m);$a.fromBufferAttribute(h,A),au($a,A,c,r,e,t,this)}}else{let u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let m=u,v=d;m<v;m++)$a.fromBufferAttribute(h,m),au($a,m,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){let a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function au(n,e,t,i,r,o,s){let a=Mc.distanceSqToPoint(n);if(a<t){let c=new T;Mc.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Mo=class extends Xt{constructor(e=[],t=qi,i,r,o,s,a,c,l,f){super(e,t,i,r,o,s,a,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Un=class extends Xt{constructor(e,t,i,r,o,s,a,c,l){super(e,t,i,r,o,s,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var an=class extends Xt{constructor(e,t,i=ui,r,o,s,a=Vt,c=Vt,l,f=Ei,h=1){if(f!==Ei&&f!==en)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:h};super(u,r,o,s,a,c,f,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};var Qa=class extends an{constructor(e,t=ui,i=qi,r,o,s=Vt,a=Vt,c,l=Ei){let f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,r,o,s,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};var So=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Tt=class n extends Ke{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};let a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);let c=[],l=[],f=[],h=[],u=0,d=0;m("z","y","x",-1,-1,i,t,e,s,o,0),m("z","y","x",1,-1,i,t,-e,s,o,1),m("x","z","y",1,1,e,i,t,r,s,2),m("x","z","y",1,-1,e,i,-t,r,s,3),m("x","y","z",1,-1,e,t,i,r,o,4),m("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(h,2));function m(v,A,p,S,E,_,b,y,C,g,w){let P=_/C,D=b/g,B=_/2,O=b/2,I=y/2,F=C+1,X=g+1,k=0,ae=0,q=new T;for(let Q=0;Q<X;Q++){let re=Q*D-O;for(let Le=0;Le<F;Le++){let Re=Le*P-B;q[v]=Re*S,q[A]=re*E,q[p]=I,l.push(q.x,q.y,q.z),q[v]=0,q[A]=0,q[p]=y>0?1:-1,f.push(q.x,q.y,q.z),h.push(Le/C),h.push(1-Q/g),k+=1}}for(let Q=0;Q<g;Q++)for(let re=0;re<C;re++){let Le=u+re+F*Q,Re=u+re+F*(Q+1),ct=u+(re+1)+F*(Q+1),rt=u+(re+1)+F*Q;c.push(Le,Re,rt),c.push(Re,ct,rt),ae+=6}a.addGroup(d,ae,w),d+=ae,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var tr=class n extends Ke{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let o=[],s=[],a=[],c=[],l=new T,f=new W;s.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){let d=i+h/t*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),s.push(l.x,l.y,l.z),a.push(0,0,1),f.x=(s[u]/e+1)/2,f.y=(s[u+1]/e+1)/2,c.push(f.x,f.y)}for(let h=1;h<=t;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(a,3)),this.setAttribute("uv",new Me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Ut=class n extends Ke{constructor(e=1,t=1,i=1,r=32,o=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),o=Math.floor(o);let f=[],h=[],u=[],d=[],m=0,v=[],A=i/2,p=0;S(),s===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(d,2));function S(){let _=new T,b=new T,y=0,C=(t-e)/i;for(let g=0;g<=o;g++){let w=[],P=g/o,D=P*(t-e)+e;for(let B=0;B<=r;B++){let O=B/r,I=O*c+a,F=Math.sin(I),X=Math.cos(I);b.x=D*F,b.y=-P*i+A,b.z=D*X,h.push(b.x,b.y,b.z),_.set(F,C,X).normalize(),u.push(_.x,_.y,_.z),d.push(O,1-P),w.push(m++)}v.push(w)}for(let g=0;g<r;g++)for(let w=0;w<o;w++){let P=v[w][g],D=v[w+1][g],B=v[w+1][g+1],O=v[w][g+1];(e>0||w!==0)&&(f.push(P,D,O),y+=3),(t>0||w!==o-1)&&(f.push(D,B,O),y+=3)}l.addGroup(p,y,0),p+=y}function E(_){let b=m,y=new W,C=new T,g=0,w=_===!0?e:t,P=_===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,A*P,0),u.push(0,P,0),d.push(.5,.5),m++;let D=m;for(let B=0;B<=r;B++){let I=B/r*c+a,F=Math.cos(I),X=Math.sin(I);C.x=w*X,C.y=A*P,C.z=w*F,h.push(C.x,C.y,C.z),u.push(0,P,0),y.x=F*.5+.5,y.y=X*.5*P+.5,d.push(y.x,y.y),m++}for(let B=0;B<r;B++){let O=b+B,I=D+B;_===!0?f.push(I,I+1,O):f.push(I+1,I,O),g+=3}l.addGroup(p,g,_===!0?1:2),p+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ln=class n extends Ut{constructor(e=1,t=1,i=32,r=1,o=!1,s=0,a=Math.PI*2){super(0,e,t,i,r,o,s,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:s,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ja=new T,el=new T,Sc=new T,tl=new dn,il=class extends Ke{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),o=Math.cos(to*t),s=e.getIndex(),a=e.getAttribute("position"),c=s?s.count:a.count,l=[0,0,0],f=["a","b","c"],h=new Array(3),u={},d=[];for(let m=0;m<c;m+=3){s?(l[0]=s.getX(m),l[1]=s.getX(m+1),l[2]=s.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:v,b:A,c:p}=tl;if(v.fromBufferAttribute(a,l[0]),A.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),tl.getNormal(Sc),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(A.x*r)},${Math.round(A.y*r)},${Math.round(A.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let S=0;S<3;S++){let E=(S+1)%3,_=h[S],b=h[E],y=tl[f[S]],C=tl[f[E]],g=`${_}_${b}`,w=`${b}_${_}`;w in u&&u[w]?(Sc.dot(u[w].normal)<=o&&(d.push(y.x,y.y,y.z),d.push(C.x,C.y,C.z)),u[w]=null):g in u||(u[g]={index0:l[S],index1:l[E],normal:Sc.clone()})}}for(let m in u)if(u[m]){let{index0:v,index1:A}=u[m];ja.fromBufferAttribute(a,v),el.fromBufferAttribute(a,A),d.push(ja.x,ja.y,ja.z),d.push(el.x,el.y,el.z)}this.setAttribute("position",new Me(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var rr={};Tm(rr,{ArcCurve:()=>nl,CatmullRomCurve3:()=>nr,CubicBezierCurve:()=>yo,CubicBezierCurve3:()=>rl,EllipseCurve:()=>ir,LineCurve:()=>bo,LineCurve3:()=>ol,QuadraticBezierCurve:()=>wo,QuadraticBezierCurve3:()=>Eo,SplineCurve:()=>To});var Qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Pe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),o=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),o+=i.distanceTo(r),t.push(o),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,o=i.length,s;t?s=t:s=e*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=i[r]-s,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,i[r]===s)return r/(o-1);let f=i[r],u=i[r+1]-f,d=(s-f)/u;return(r+d)/(o-1)}getTangent(e,t){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);let s=this.getPoint(r),a=this.getPoint(o),c=t||(s.isVector2?new W:new T);return c.copy(a).sub(s).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new T,r=[],o=[],s=[],a=new T,c=new tt;for(let d=0;d<=e;d++){let m=d/e;r[d]=this.getTangentAt(m,new T)}o[0]=new T,s[0]=new T;let l=Number.MAX_VALUE,f=Math.abs(r[0].x),h=Math.abs(r[0].y),u=Math.abs(r[0].z);f<=l&&(l=f,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],a),s[0].crossVectors(r[0],o[0]);for(let d=1;d<=e;d++){if(o[d]=o[d-1].clone(),s[d]=s[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ot(r[d-1].dot(r[d]),-1,1));o[d].applyMatrix4(c.makeRotationAxis(a,m))}s[d].crossVectors(r[d],o[d])}if(t===!0){let d=Math.acos(ot(o[0].dot(o[e]),-1,1));d/=e,r[0].dot(a.crossVectors(o[0],o[e]))>0&&(d=-d);for(let m=1;m<=e;m++)o[m].applyMatrix4(c.makeRotationAxis(r[m],d*m)),s[m].crossVectors(r[m],o[m])}return{tangents:r,normals:o,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};var ir=class extends Qt{constructor(e=0,t=0,i=1,r=1,o=0,s=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=s,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new W){let i=t,r=Math.PI*2,o=this.aEndAngle-this.aStartAngle,s=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(s?o=0:o=r),this.aClockwise===!0&&!s&&(o===r?o=-r:o=o-r);let a=this.aStartAngle+e*o,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*f-d*h+this.aX,l=u*h+d*f+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};var nl=class extends ir{constructor(e,t,i,r,o,s){super(e,t,i,i,r,o,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Ec(){let n=0,e=0,t=0,i=0;function r(o,s,a,c){n=o,e=a,t=-3*o+3*s-2*a-c,i=2*o-2*s+a+c}return{initCatmullRom:function(o,s,a,c,l){r(s,a,l*(a-o),l*(c-s))},initNonuniformCatmullRom:function(o,s,a,c,l,f,h){let u=(s-o)/l-(a-o)/(l+f)+(a-s)/f,d=(a-s)/f-(c-s)/(f+h)+(c-a)/h;u*=f,d*=f,r(s,a,u,d)},calc:function(o){let s=o*o,a=s*o;return n+e*o+t*s+i*a}}}var lu=new T,cu=new T,yc=new Ec,bc=new Ec,wc=new Ec,nr=class extends Qt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new T){let i=t,r=this.points,o=r.length,s=(o-(this.closed?0:1))*e,a=Math.floor(s),c=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,f;this.closed||a>0?l=r[(a-1)%o]:(cu.subVectors(r[0],r[1]).add(r[0]),l=cu);let h=r[a%o],u=r[(a+1)%o];if(this.closed||a+2<o?f=r[(a+2)%o]:(lu.subVectors(r[o-1],r[o-2]).add(r[o-1]),f=lu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),d),v=Math.pow(h.distanceToSquared(u),d),A=Math.pow(u.distanceToSquared(f),d);v<1e-4&&(v=1),m<1e-4&&(m=v),A<1e-4&&(A=v),yc.initNonuniformCatmullRom(l.x,h.x,u.x,f.x,m,v,A),bc.initNonuniformCatmullRom(l.y,h.y,u.y,f.y,m,v,A),wc.initNonuniformCatmullRom(l.z,h.z,u.z,f.z,m,v,A)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(l.x,h.x,u.x,f.x,this.tension),bc.initCatmullRom(l.y,h.y,u.y,f.y,this.tension),wc.initCatmullRom(l.z,h.z,u.z,f.z,this.tension));return i.set(yc.calc(c),bc.calc(c),wc.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new T().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tc(n,e,t,i,r){let o=(i-e)*.5,s=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+o+s)*c+(-3*t+3*i-2*o-s)*a+o*n+t}function Ym(n,e){let t=1-n;return t*t*e}function Zm(n,e){return 2*(1-n)*n*e}function Jm(n,e){return n*n*e}function Rr(n,e,t,i){return Ym(n,e)+Zm(n,t)+Jm(n,i)}function Km(n,e){let t=1-n;return t*t*t*e}function $m(n,e){let t=1-n;return 3*t*t*n*e}function Qm(n,e){return 3*(1-n)*n*n*e}function jm(n,e){return n*n*n*e}function Cr(n,e,t,i,r){return Km(n,e)+$m(n,t)+Qm(n,i)+jm(n,r)}var yo=class extends Qt{constructor(e=new W,t=new W,i=new W,r=new W){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new W){let i=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(Cr(e,r.x,o.x,s.x,a.x),Cr(e,r.y,o.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var rl=class extends Qt{constructor(e=new T,t=new T,i=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new T){let i=t,r=this.v0,o=this.v1,s=this.v2,a=this.v3;return i.set(Cr(e,r.x,o.x,s.x,a.x),Cr(e,r.y,o.y,s.y,a.y),Cr(e,r.z,o.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var bo=class extends Qt{constructor(e=new W,t=new W){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new W){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var ol=class extends Qt{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var wo=class extends Qt{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){let i=t,r=this.v0,o=this.v1,s=this.v2;return i.set(Rr(e,r.x,o.x,s.x),Rr(e,r.y,o.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Eo=class extends Qt{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,r=this.v0,o=this.v1,s=this.v2;return i.set(Rr(e,r.x,o.x,s.x),Rr(e,r.y,o.y,s.y),Rr(e,r.z,o.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var To=class extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new W){let i=t,r=this.points,o=(r.length-1)*e,s=Math.floor(o),a=o-s,c=r[s===0?s:s-1],l=r[s],f=r[s>r.length-2?r.length-1:s+1],h=r[s>r.length-3?r.length-1:s+2];return i.set(Tc(a,c.x,l.x,f.x,h.x),Tc(a,c.y,l.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new W().fromArray(r))}return this}};var sl=class extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rr[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),o=0;for(;o<r.length;){if(r[o]>=i){let s=r[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-s/c;return a.getPointAt(l,t)}o++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,o=this.curves;r<o.length;r++){let s=o[r],a=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,c=s.getPoints(a);for(let l=0;l<c.length;l++){let f=c[l];i&&i.equals(f)||(t.push(f),i=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new rr[r.type]().fromJSON(r))}return this}};var Hs=class extends sl{constructor(e){super(),this.type="Path",this.currentPoint=new W,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new bo(this.currentPoint.clone(),new W(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let o=new wo(this.currentPoint.clone(),new W(e,t),new W(i,r));return this.curves.push(o),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,o,s){let a=new yo(this.currentPoint.clone(),new W(e,t),new W(i,r),new W(o,s));return this.curves.push(a),this.currentPoint.set(o,s),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new To(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,o,s){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,o,s),this}absarc(e,t,i,r,o,s){return this.absellipse(e,t,i,i,r,o,s),this}ellipse(e,t,i,r,o,s,a,c){let l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+l,t+f,i,r,o,s,a,c),this}absellipse(e,t,i,r,o,s,a,c){let l=new ir(e,t,i,r,o,s,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var li=class extends Hs{constructor(e){super(e),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Hs().fromJSON(r))}return this}};function Pc(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,o=uu(n,0,r,t,!0),s=[];if(!o||o.next===o.prev)return s;let a,c,l;if(i&&(o=rA(n,e,o,t)),n.length>80*t){a=n[0],c=n[1];let f=a,h=c;for(let u=t;u<r;u+=t){let d=n[u],m=n[u+1];d<a&&(a=d),m<c&&(c=m),d>f&&(f=d),m>h&&(h=m)}l=Math.max(f-a,h-c),l=l!==0?32767/l:0}return ks(o,s,t,a,c,l,0),s}function uu(n,e,t,i,r){let o;if(r===mA(n,e,t,i)>0)for(let s=e;s<t;s+=i)o=fu(s/i|0,n[s],n[s+1],o);else for(let s=t-i;s>=e;s-=i)o=fu(s/i|0,n[s],n[s+1],o);return o&&Ro(o,o.next)&&(Xs(o),o=o.next),o}function Pr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Ro(t,t.next)||Yt(t.prev,t,t.next)===0)){if(Xs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ks(n,e,t,i,r,o,s){if(!n)return;!s&&o&&cA(n,i,r,o);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(o?tA(n,i,r,o):eA(n)){e.push(c.i,n.i,l.i),Xs(n),n=l.next,a=l.next;continue}if(n=l,n===a){s?s===1?(n=iA(Pr(n),e),ks(n,e,t,i,r,o,2)):s===2&&nA(n,e,t,i,r,o):ks(Pr(n),e,t,i,r,o,1);break}}}function eA(n){let e=n.prev,t=n,i=n.next;if(Yt(e,t,i)>=0)return!1;let r=e.x,o=t.x,s=i.x,a=e.y,c=t.y,l=i.y,f=Math.min(r,o,s),h=Math.min(a,c,l),u=Math.max(r,o,s),d=Math.max(a,c,l),m=i.next;for(;m!==e;){if(m.x>=f&&m.x<=u&&m.y>=h&&m.y<=d&&Vs(r,a,o,c,s,l,m.x,m.y)&&Yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function tA(n,e,t,i){let r=n.prev,o=n,s=n.next;if(Yt(r,o,s)>=0)return!1;let a=r.x,c=o.x,l=s.x,f=r.y,h=o.y,u=s.y,d=Math.min(a,c,l),m=Math.min(f,h,u),v=Math.max(a,c,l),A=Math.max(f,h,u),p=Rc(d,m,e,t,i),S=Rc(v,A,e,t,i),E=n.prevZ,_=n.nextZ;for(;E&&E.z>=p&&_&&_.z<=S;){if(E.x>=d&&E.x<=v&&E.y>=m&&E.y<=A&&E!==r&&E!==s&&Vs(a,f,c,h,l,u,E.x,E.y)&&Yt(E.prev,E,E.next)>=0||(E=E.prevZ,_.x>=d&&_.x<=v&&_.y>=m&&_.y<=A&&_!==r&&_!==s&&Vs(a,f,c,h,l,u,_.x,_.y)&&Yt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=v&&E.y>=m&&E.y<=A&&E!==r&&E!==s&&Vs(a,f,c,h,l,u,E.x,E.y)&&Yt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;_&&_.z<=S;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=A&&_!==r&&_!==s&&Vs(a,f,c,h,l,u,_.x,_.y)&&Yt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function iA(n,e){let t=n;do{let i=t.prev,r=t.next.next;!Ro(i,r)&&du(i,t,t.next,r)&&Ws(i,r)&&Ws(r,i)&&(e.push(i.i,t.i,r.i),Xs(t),Xs(t.next),t=n=r),t=t.next}while(t!==n);return Pr(t)}function nA(n,e,t,i,r,o){let s=n;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&hA(s,a)){let c=pu(s,a);s=Pr(s,s.next),c=Pr(c,c.next),ks(s,e,t,i,r,o,0),ks(c,e,t,i,r,o,0);return}a=a.next}s=s.next}while(s!==n)}function rA(n,e,t,i){let r=[];for(let o=0,s=e.length;o<s;o++){let a=e[o]*i,c=o<s-1?e[o+1]*i:n.length,l=uu(n,a,c,i,!1);l===l.next&&(l.steiner=!0),r.push(uA(l))}r.sort(oA);for(let o=0;o<r.length;o++)t=sA(r[o],t);return t}function oA(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function sA(n,e){let t=aA(n,e);if(!t)return e;let i=pu(t,n);return Pr(i,i.next),Pr(t,t.next)}function aA(n,e){let t=e,i=n.x,r=n.y,o=-1/0,s;if(Ro(n,t))return t;do{if(Ro(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>o&&(o=h,s=t.x<t.next.x?t:t.next,h===i))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,f=1/0;t=s;do{if(i>=t.x&&t.x>=c&&i!==t.x&&hu(r<l?i:o,r,c,l,r<l?o:i,r,t.x,t.y)){let h=Math.abs(r-t.y)/(i-t.x);Ws(t,n)&&(h<f||h===f&&(t.x>s.x||t.x===s.x&&lA(s,t)))&&(s=t,f=h)}t=t.next}while(t!==a);return s}function lA(n,e){return Yt(n.prev,n,e.prev)<0&&Yt(e.next,n,n.next)<0}function cA(n,e,t,i){let r=n;do r.z===0&&(r.z=Rc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,fA(r)}function fA(n){let e,t=1;do{let i=n,r;n=null;let o=null;for(e=0;i;){e++;let s=i,a=0;for(let l=0;l<t&&(a++,s=s.nextZ,!!s);l++);let c=t;for(;a>0||c>0&&s;)a!==0&&(c===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,a--):(r=s,s=s.nextZ,c--),o?o.nextZ=r:n=r,r.prevZ=o,o=r;i=s}o.nextZ=null,t*=2}while(e>1);return n}function Rc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function uA(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function hu(n,e,t,i,r,o,s,a){return(r-s)*(e-a)>=(n-s)*(o-a)&&(n-s)*(i-a)>=(t-s)*(e-a)&&(t-s)*(o-a)>=(r-s)*(i-a)}function Vs(n,e,t,i,r,o,s,a){return!(n===s&&e===a)&&hu(n,e,t,i,r,o,s,a)}function hA(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!dA(n,e)&&(Ws(n,e)&&Ws(e,n)&&pA(n,e)&&(Yt(n.prev,n,e.prev)||Yt(n,e.prev,e))||Ro(n,e)&&Yt(n.prev,n,n.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Ro(n,e){return n.x===e.x&&n.y===e.y}function du(n,e,t,i){let r=ll(Yt(n,e,t)),o=ll(Yt(n,e,i)),s=ll(Yt(t,i,n)),a=ll(Yt(t,i,e));return!!(r!==o&&s!==a||r===0&&al(n,t,e)||o===0&&al(n,i,e)||s===0&&al(t,n,i)||a===0&&al(t,e,i))}function al(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ll(n){return n>0?1:n<0?-1:0}function dA(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&du(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ws(n,e){return Yt(n.prev,n,n.next)<0?Yt(n,e,n.next)>=0&&Yt(n,n.prev,e)>=0:Yt(n,e,n.prev)<0||Yt(n,n.next,e)<0}function pA(n,e){let t=n,i=!1,r=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&r<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pu(n,e){let t=Cc(n.i,n.x,n.y),i=Cc(e.i,e.x,e.y),r=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function fu(n,e,t,i){let r=Cc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Xs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Cc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mA(n,e,t,i){let r=0;for(let o=e,s=t-i;o<t;o+=i)r+=(n[s]-n[o])*(n[o+1]+n[s+1]),s=o;return r}var cl=class{static triangulate(e,t,i=2){return Pc(e,t,i)}};var cn=class n{static area(e){let t=e.length,i=0;for(let r=t-1,o=0;o<t;r=o++)i+=e[r].x*e[o].y-e[o].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],o=[];mu(e),Au(i,e);let s=e.length;t.forEach(mu);for(let c=0;c<t.length;c++)r.push(s),s+=t[c].length,Au(i,t[c]);let a=cl.triangulate(i,r);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}};function mu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Au(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var An=class n extends Ke{constructor(e=new li([new W(.5,.5),new W(-.5,.5),new W(-.5,-.5),new W(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];s(l)}this.setAttribute("position",new Me(r,3)),this.setAttribute("uv",new Me(o,2)),this.computeVertexNormals();function s(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,A=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:AA,E,_=!1,b,y,C,g;if(p){E=p.getSpacedPoints(f),_=!0,u=!1;let ee=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(f,ee),y=new T,C=new T,g=new T}u||(A=0,d=0,m=0,v=0);let w=a.extractPoints(l),P=w.shape,D=w.holes;if(!cn.isClockWise(P)){P=P.reverse();for(let ee=0,Z=D.length;ee<Z;ee++){let ne=D[ee];cn.isClockWise(ne)&&(D[ee]=ne.reverse())}}function O(ee){let ne=10000000000000001e-36,se=ee[0];for(let fe=1;fe<=ee.length;fe++){let De=fe%ee.length,we=ee[De],We=we.x-se.x,$e=we.y-se.y,L=We*We+$e*$e,ut=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(se.x),Math.abs(se.y)),nt=ne*ut*ut;if(L<=nt){ee.splice(De,1),fe--;continue}se=we}}O(P),D.forEach(O);let I=D.length,F=P;for(let ee=0;ee<I;ee++){let Z=D[ee];P=P.concat(Z)}function X(ee,Z,ne){return Z||at("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(Z,ne)}let k=P.length;function ae(ee,Z,ne){let se,fe,De,we=ee.x-Z.x,We=ee.y-Z.y,$e=ne.x-ee.x,L=ne.y-ee.y,ut=we*we+We*We,nt=we*L-We*$e;if(Math.abs(nt)>Number.EPSILON){let R=Math.sqrt(ut),x=Math.sqrt($e*$e+L*L),G=Z.x-We/R,z=Z.y+we/R,J=ne.x-L/x,ue=ne.y+$e/x,me=((J-G)*L-(ue-z)*$e)/(we*L-We*$e);se=G+we*me-ee.x,fe=z+We*me-ee.y;let $=se*se+fe*fe;if($<=2)return new W(se,fe);De=Math.sqrt($/2)}else{let R=!1;we>Number.EPSILON?$e>Number.EPSILON&&(R=!0):we<-Number.EPSILON?$e<-Number.EPSILON&&(R=!0):Math.sign(We)===Math.sign(L)&&(R=!0),R?(se=-We,fe=we,De=Math.sqrt(ut)):(se=we,fe=We,De=Math.sqrt(ut/2))}return new W(se/De,fe/De)}let q=[];for(let ee=0,Z=F.length,ne=Z-1,se=ee+1;ee<Z;ee++,ne++,se++)ne===Z&&(ne=0),se===Z&&(se=0),q[ee]=ae(F[ee],F[ne],F[se]);let Q=[],re,Le=q.concat();for(let ee=0,Z=I;ee<Z;ee++){let ne=D[ee];re=[];for(let se=0,fe=ne.length,De=fe-1,we=se+1;se<fe;se++,De++,we++)De===fe&&(De=0),we===fe&&(we=0),re[se]=ae(ne[se],ne[De],ne[we]);Q.push(re),Le=Le.concat(re)}let Re;if(A===0)Re=cn.triangulateShape(F,D);else{let ee=[],Z=[];for(let ne=0;ne<A;ne++){let se=ne/A,fe=d*Math.cos(se*Math.PI/2),De=m*Math.sin(se*Math.PI/2)+v;for(let we=0,We=F.length;we<We;we++){let $e=X(F[we],q[we],De);xe($e.x,$e.y,-fe),se===0&&ee.push($e)}for(let we=0,We=I;we<We;we++){let $e=D[we];re=Q[we];let L=[];for(let ut=0,nt=$e.length;ut<nt;ut++){let R=X($e[ut],re[ut],De);xe(R.x,R.y,-fe),se===0&&L.push(R)}se===0&&Z.push(L)}}Re=cn.triangulateShape(ee,Z)}let ct=Re.length,rt=m+v;for(let ee=0;ee<k;ee++){let Z=u?X(P[ee],Le[ee],rt):P[ee];_?(C.copy(b.normals[0]).multiplyScalar(Z.x),y.copy(b.binormals[0]).multiplyScalar(Z.y),g.copy(E[0]).add(C).add(y),xe(g.x,g.y,g.z)):xe(Z.x,Z.y,0)}for(let ee=1;ee<=f;ee++)for(let Z=0;Z<k;Z++){let ne=u?X(P[Z],Le[Z],rt):P[Z];_?(C.copy(b.normals[ee]).multiplyScalar(ne.x),y.copy(b.binormals[ee]).multiplyScalar(ne.y),g.copy(E[ee]).add(C).add(y),xe(g.x,g.y,g.z)):xe(ne.x,ne.y,h/f*ee)}for(let ee=A-1;ee>=0;ee--){let Z=ee/A,ne=d*Math.cos(Z*Math.PI/2),se=m*Math.sin(Z*Math.PI/2)+v;for(let fe=0,De=F.length;fe<De;fe++){let we=X(F[fe],q[fe],se);xe(we.x,we.y,h+ne)}for(let fe=0,De=D.length;fe<De;fe++){let we=D[fe];re=Q[fe];for(let We=0,$e=we.length;We<$e;We++){let L=X(we[We],re[We],se);_?xe(L.x,L.y+E[f-1].y,E[f-1].x+ne):xe(L.x,L.y,h+ne)}}}ft(),K();function ft(){let ee=r.length/3;if(u){let Z=0,ne=k*Z;for(let se=0;se<ct;se++){let fe=Re[se];Ue(fe[2]+ne,fe[1]+ne,fe[0]+ne)}Z=f+A*2,ne=k*Z;for(let se=0;se<ct;se++){let fe=Re[se];Ue(fe[0]+ne,fe[1]+ne,fe[2]+ne)}}else{for(let Z=0;Z<ct;Z++){let ne=Re[Z];Ue(ne[2],ne[1],ne[0])}for(let Z=0;Z<ct;Z++){let ne=Re[Z];Ue(ne[0]+k*f,ne[1]+k*f,ne[2]+k*f)}}i.addGroup(ee,r.length/3-ee,0)}function K(){let ee=r.length/3,Z=0;te(F,Z),Z+=F.length;for(let ne=0,se=D.length;ne<se;ne++){let fe=D[ne];te(fe,Z),Z+=fe.length}i.addGroup(ee,r.length/3-ee,1)}function te(ee,Z){let ne=ee.length;for(;--ne>=0;){let se=ne,fe=ne-1;fe<0&&(fe=ee.length-1);for(let De=0,we=f+A*2;De<we;De++){let We=k*De,$e=k*(De+1),L=Z+se+We,ut=Z+fe+We,nt=Z+fe+$e,R=Z+se+$e;ye(L,ut,nt,R)}}}function xe(ee,Z,ne){c.push(ee),c.push(Z),c.push(ne)}function Ue(ee,Z,ne){Ne(ee),Ne(Z),Ne(ne);let se=r.length/3,fe=S.generateTopUV(i,r,se-3,se-2,se-1);qe(fe[0]),qe(fe[1]),qe(fe[2])}function ye(ee,Z,ne,se){Ne(ee),Ne(Z),Ne(se),Ne(Z),Ne(ne),Ne(se);let fe=r.length/3,De=S.generateSideWallUV(i,r,fe-6,fe-3,fe-2,fe-1);qe(De[0]),qe(De[1]),qe(De[3]),qe(De[1]),qe(De[2]),qe(De[3])}function Ne(ee){r.push(c[ee*3+0]),r.push(c[ee*3+1]),r.push(c[ee*3+2])}function qe(ee){o.push(ee.x),o.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return gA(t,i,e)}static fromJSON(e,t){let i=[];for(let o=0,s=e.shapes.length;o<s;o++){let a=t[e.shapes[o]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new rr[r.type]().fromJSON(r)),new n(i,e.options)}},AA={generateTopUV:function(n,e,t,i,r){let o=e[t*3],s=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[r*3],f=e[r*3+1];return[new W(o,s),new W(a,c),new W(l,f)]},generateSideWallUV:function(n,e,t,i,r,o){let s=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],f=e[i*3+1],h=e[i*3+2],u=e[r*3],d=e[r*3+1],m=e[r*3+2],v=e[o*3],A=e[o*3+1],p=e[o*3+2];return Math.abs(a-f)<Math.abs(s-l)?[new W(s,1-c),new W(l,1-h),new W(u,1-m),new W(v,1-p)]:[new W(a,1-c),new W(f,1-h),new W(d,1-m),new W(A,1-p)]}};function gA(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let o=n[i];t.shapes.push(o.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Co=class n extends Ke{constructor(e=[new W(0,-.5),new W(.5,0),new W(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ot(r,0,Math.PI*2);let o=[],s=[],a=[],c=[],l=[],f=1/t,h=new T,u=new W,d=new T,m=new T,v=new T,A=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:A=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-A,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:A=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-A,d.z=p*0,m.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(m)}for(let S=0;S<=t;S++){let E=i+S*f*r,_=Math.sin(E),b=Math.cos(E);for(let y=0;y<=e.length-1;y++){h.x=e[y].x*_,h.y=e[y].y,h.z=e[y].x*b,s.push(h.x,h.y,h.z),u.x=S/t,u.y=y/(e.length-1),a.push(u.x,u.y);let C=c[3*y+0]*_,g=c[3*y+1],w=c[3*y+0]*b;l.push(C,g,w)}}for(let S=0;S<t;S++)for(let E=0;E<e.length-1;E++){let _=E+S*e.length,b=_,y=_+e.length,C=_+e.length+1,g=_+1;o.push(b,y,g),o.push(C,g,y)}this.setIndex(o),this.setAttribute("position",new Me(s,3)),this.setAttribute("uv",new Me(a,2)),this.setAttribute("normal",new Me(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Oi=class n extends Ke{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let o=e/2,s=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,f=c+1,h=e/a,u=t/c,d=[],m=[],v=[],A=[];for(let p=0;p<f;p++){let S=p*u-s;for(let E=0;E<l;E++){let _=E*h-o;m.push(_,-S,0),v.push(0,0,1),A.push(E/a),A.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let E=S+l*p,_=S+l*(p+1),b=S+1+l*(p+1),y=S+1+l*p;d.push(E,_,y),d.push(_,b,y)}this.setIndex(d),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Po=class n extends Ke{constructor(e=.5,t=1,i=32,r=1,o=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:o,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);let a=[],c=[],l=[],f=[],h=e,u=(t-e)/r,d=new T,m=new W;for(let v=0;v<=r;v++){for(let A=0;A<=i;A++){let p=o+A/i*s;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,f.push(m.x,m.y)}h+=u}for(let v=0;v<r;v++){let A=v*(i+1);for(let p=0;p<i;p++){let S=p+A,E=S,_=S+i+1,b=S+i+2,y=S+1;a.push(E,_,y),a.push(_,b,y)}}this.setIndex(a),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var qs=class n extends Ke{constructor(e=new li([new W(0,.5),new W(-.5,-.5),new W(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],o=[],s=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let f=0;f<e.length;f++)l(e[f]),this.addGroup(a,c,f),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Me(r,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(s,2));function l(f){let h=r.length/3,u=f.extractPoints(t),d=u.shape,m=u.holes;cn.isClockWise(d)===!1&&(d=d.reverse());for(let A=0,p=m.length;A<p;A++){let S=m[A];cn.isClockWise(S)===!0&&(m[A]=S.reverse())}let v=cn.triangulateShape(d,m);for(let A=0,p=m.length;A<p;A++){let S=m[A];d=d.concat(S)}for(let A=0,p=d.length;A<p;A++){let S=d[A];r.push(S.x,S.y,0),o.push(0,0,1),s.push(S.x,S.y)}for(let A=0,p=v.length;A<p;A++){let S=v[A],E=S[0]+h,_=S[1]+h,b=S[2]+h;i.push(E,_,b),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return xA(t,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let s=t[e.shapes[r]];i.push(s)}return new n(i,e.curveSegments)}};function xA(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var Zt=class n extends Ke{constructor(e=1,t=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(s+a,Math.PI),l=0,f=[],h=new T,u=new T,d=[],m=[],v=[],A=[];for(let p=0;p<=i;p++){let S=[],E=p/i,_=s+E*a,b=e*Math.cos(_),y=Math.sqrt(e*e-b*b),C=0;p===0&&s===0?C=.5/t:p===i&&c===Math.PI&&(C=-.5/t);for(let g=0;g<=t;g++){let w=g/t,P=r+w*o;h.x=-y*Math.cos(P),h.y=b,h.z=y*Math.sin(P),m.push(h.x,h.y,h.z),u.copy(h).normalize(),v.push(u.x,u.y,u.z),A.push(w+C,1-E),S.push(l++)}f.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let E=f[p][S+1],_=f[p][S],b=f[p+1][S],y=f[p+1][S+1];(p!==0||s>0)&&d.push(E,_,y),(p!==i-1||c<Math.PI)&&d.push(_,b,y)}this.setIndex(d),this.setAttribute("position",new Me(m,3)),this.setAttribute("normal",new Me(v,3)),this.setAttribute("uv",new Me(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Li=class n extends Ke{constructor(e=1,t=.4,i=12,r=48,o=Math.PI*2,s=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:o,thetaStart:s,thetaLength:a},i=Math.floor(i),r=Math.floor(r);let c=[],l=[],f=[],h=[],u=new T,d=new T,m=new T;for(let v=0;v<=i;v++){let A=s+v/i*a;for(let p=0;p<=r;p++){let S=p/r*o;d.x=(e+t*Math.cos(A))*Math.cos(S),d.y=(e+t*Math.cos(A))*Math.sin(S),d.z=t*Math.sin(A),l.push(d.x,d.y,d.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),m.subVectors(d,u).normalize(),f.push(m.x,m.y,m.z),h.push(p/r),h.push(v/i)}}for(let v=1;v<=i;v++)for(let A=1;A<=r;A++){let p=(r+1)*v+A-1,S=(r+1)*(v-1)+A-1,E=(r+1)*(v-1)+A,_=(r+1)*v+A;c.push(p,S,_),c.push(S,E,_)}this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(f,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var fl=class n extends Ke{constructor(e=new Eo(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:o};let s=e.computeFrenetFrames(t,o);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let a=new T,c=new T,l=new W,f=new T,h=[],u=[],d=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Me(h,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(d,2));function v(){for(let E=0;E<t;E++)A(E);A(o===!1?t:0),S(),p()}function A(E){f=e.getPointAt(E/t,f);let _=s.normals[E],b=s.binormals[E];for(let y=0;y<=r;y++){let C=y/r*Math.PI*2,g=Math.sin(C),w=-Math.cos(C);c.x=w*_.x+g*b.x,c.y=w*_.y+g*b.y,c.z=w*_.z+g*b.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=f.x+i*c.x,a.y=f.y+i*c.y,a.z=f.z+i*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let E=1;E<=t;E++)for(let _=1;_<=r;_++){let b=(r+1)*(E-1)+(_-1),y=(r+1)*E+(_-1),C=(r+1)*E+_,g=(r+1)*(E-1)+_;m.push(b,y,g),m.push(y,C,g)}}function S(){for(let E=0;E<=t;E++)for(let _=0;_<=r;_++)l.x=E/t,l.y=_/r,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new rr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Nn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];if(gu(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(gu(r[0])){let o=[];for(let s=0,a=r.length;s<a;s++)o[s]=r[s].clone();e[t][i]=o}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Si(n){let e={};for(let t=0;t<n.length;t++){let i=Nn(n[t]);for(let r in i)e[r]=i[r]}return e}function gu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function xu(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ul(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var _u={clone:Nn,merge:Si};var vu=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Mu=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;var bt=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=Mu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nn(e.uniforms),this.uniformsGroups=xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new le().setHex(r.value);break;case"v2":this.uniforms[i].value=new W().fromArray(r.value);break;case"v3":this.uniforms[i].value=new T().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new tt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};var hl=class extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var _t=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ys=class extends mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_r,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Or,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var dl=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var pl=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var or=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Fn=class extends or{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};var Lc=new tt,Su=new T,yu=new T,Lo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Su.setFromMatrixPosition(e.matrixWorld),t.position.copy(Su),yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Lc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Lc,e.coordinateSystem,e.reversedDepth);let o=this._frameExtents,s=r?r.z/o.x:1,a=r?r.w/o.y:1,c=r?r.x/o.x:0,l=r?r.y/o.y:0;e.coordinateSystem===En||e.reversedDepth?t.set(.5*s,0,0,.5*s+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ml=new T,Al=new Ci,gn=new T,Do=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ml,Al,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,Al,gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ml,Al,gn),gn.x===1&&gn.y===1&&gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ml,Al,gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var sr=new T,bu=new W,wu=new W,Ft=class extends Do{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,t){return this.getViewBounds(e,bu,wu),t.subVectors(wu,bu)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,l=s.fullHeight;o+=s.offsetX*r/c,t-=s.offsetY*i/l,r*=s.width/c,i*=s.height/l}let a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var gl=class extends Lo{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}};var ar=class extends or{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var lr=class extends Do{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-e,s=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,s=o+l*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var xl=class extends Lo{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};var xn=class extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new xl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Io=-90,Uo=1,_l=class extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ft(Io,Uo,e,t);r.layers=this.layers,this.add(r);let o=new Ft(Io,Uo,e,t);o.layers=this.layers,this.add(o);let s=new Ft(Io,Uo,e,t);s.layers=this.layers,this.add(s);let a=new Ft(Io,Uo,e,t);a.layers=this.layers,this.add(a);let c=new Ft(Io,Uo,e,t);c.layers=this.layers,this.add(c);let l=new Ft(Io,Uo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,o,s,a,c]=t;for(let l of t)this.remove(l);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===En)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[o,s,a,c,l,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let A=!1;e.isWebGLRenderer===!0?A=e.state.buffers.depth.getReversed():A=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),A&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,r),A&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),A&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),A&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),A&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),A&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,u,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}};var vl=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Eu=new tt,Zs=class{constructor(e,t,i=0,r=1/0){this.ray=new pn(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Kn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):at("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eu),this}intersectObject(e,t=!0,i=[]){return Dc(e,this,i,t),i.sort(Tu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Dc(e[r],this,i,t);return i.sort(Tu),i}};function Tu(n,e){return n.distance-e.distance}function Dc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let o=n.children;for(let s=0,a=o.length;s<a;s++)Dc(o[s],e,t,!0)}}function Ic(n,e,t,i){let r=_A(i);switch(t){case xa:return n*e;case kr:return n*e/r.components*r.byteLength;case Wr:return n*e/r.components*r.byteLength;case zi:return n*e*2/r.components*r.byteLength;case Xr:return n*e*2/r.components*r.byteLength;case _a:return n*e*3/r.components*r.byteLength;case di:return n*e*4/r.components*r.byteLength;case qr:return n*e*4/r.components*r.byteLength;case Yr:case Zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ns:case os:return Math.max(n,16)*Math.max(e,8)/4;case is:case rs:return Math.max(n,8)*Math.max(e,8)/2;case ss:case as:case cs:case fs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ls:case gr:case us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ds:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ps:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ms:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case As:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gs:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xs:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _s:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vs:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ms:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ss:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ys:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bs:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ws:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Es:case Ts:case Rs:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cs:case Ps:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xr:case Ls:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _A(n){switch(n){case ti:case pa:return{byteLength:1,components:1};case bn:case ma:case hi:return{byteLength:2,components:1};case Hr:case Vr:return{byteLength:2,components:4};case ui:case zr:case si:return{byteLength:4,components:1};case Aa:case ga:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ml(){let n=null,e=!1,t=null,i=null;function r(o,s){i=n.requestAnimationFrame(r),t(o,s)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Ru(n){let e=new WeakMap;function t(a,c){let l=a.array,f=a.usage,h=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,f),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){let f=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,f);else{h.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<h.length;d++){let m=h[u],v=h[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++u,h[u]=v)}h.length=u+1;for(let d=0,m=h.length;d<m;d++){let v=h[d];n.bufferSubData(l,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function s(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:o,update:s}}var Cu=`
#ifdef USE_ALPHAHASH

	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;

#endif
`;var Pu=`
#ifdef USE_ALPHAHASH

	/**
	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html
	 */

	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.

	float hash2D( vec2 value ) {

		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );

	}

	float hash3D( vec3 value ) {

		return hash2D( vec2( hash2D( value.xy ), value.z ) );

	}

	float getAlphaHashThreshold( vec3 position ) {

		// Find the discretized derivatives of our coordinates
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );

		// Find two nearest log-discretized noise scales
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);

		// Compute alpha thresholds at our two noise scales
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);

		// Factor to interpolate lerp with
		float lerpFactor = fract( log2( pixScale ) );

		// Interpolate alpha threshold from noise at two scales
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;

		// Pass into CDF to compute uniformly distrib threshold
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);

		// Find our final, uniformly distributed alpha threshold (\u03B1\u03C4)
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;

		// Avoids \u03B1\u03C4 == 0. Could also do \u03B1\u03C4 =1-\u03B1\u03C4
		return clamp( threshold , 1.0e-6, 1.0 );

	}

#endif
`;var Lu=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;

#endif
`;var Du=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var Iu=`
#ifdef USE_ALPHATEST

	#ifdef ALPHA_TO_COVERAGE

	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;

	#else

	if ( diffuseColor.a < alphaTest ) discard;

	#endif

#endif
`;var Uu=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`;var Nu=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`;var Fu=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;var Bu=`
#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif

	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {

		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );

	}

	float getIndirectIndex( const in int i ) {

		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );

	}

#endif

#ifdef USE_BATCHING_COLOR

	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {

		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );

	}

#endif
`;var Ou=`
#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif
`;var Gu=`
vec3 transformed = vec3( position );

#ifdef USE_ALPHAHASH

	vPosition = vec3( position );

#endif
`;var zu=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;var Hu=`

float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

`;var Vu=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;

		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;

	}

	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`;var ku=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );

		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`;var Wu=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#ifdef ALPHA_TO_COVERAGE

		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			if ( clipOpacity == 0.0 ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			float unionClipOpacity = 1.0;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );

			}
			#pragma unroll_loop_end

			clipOpacity *= 1.0 - unionClipOpacity;

		#endif

		diffuseColor.a *= clipOpacity;

		if ( diffuseColor.a == 0.0 ) discard;

	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

		}
		#pragma unroll_loop_end

		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

			bool clipped = true;

			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

			}
			#pragma unroll_loop_end

			if ( clipped ) discard;

		#endif

	#endif

#endif
`;var Xu=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`;var qu=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`;var Yu=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;var Zu=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#endif
`;var Ju=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#endif
`;var Ku=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	varying vec4 vColor;

#endif
`;var $u=`
#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )

	vColor = vec4( 1.0 );

#endif

#ifdef USE_COLOR_ALPHA

	vColor *= color;

#elif defined( USE_COLOR )

	vColor.rgb *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.rgb *= instanceColor.rgb;

#endif

#ifdef USE_BATCHING_COLOR

	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );

#endif
`;var Qu=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

#ifdef USE_ALPHAHASH

	varying vec3 vPosition;

#endif

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

#define inverseTransformDirection transformDirectionByInverseViewMatrix // @deprecated r185

vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {

	// upper-left 3x3 of view matrix is assumed to be orthogonal

	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );

}

vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {

	// upper-left 3x3 of view matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated
`;var ju=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= cubeUV_r1 ) {

			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;

		} else if ( roughness >= cubeUV_r4 ) {

			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;

		} else if ( roughness >= cubeUV_r5 ) {

			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;

		} else if ( roughness >= cubeUV_r6 ) {

			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`;var eh=`

vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT

	vec3 transformedTangent = objectTangent;

#endif

#ifdef USE_BATCHING

	// this is in lieu of a per-instance normal-matrix
	// non-uniform scaling in the instance matrix is supported
	// shear transforms are not supported

	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = bm * transformedTangent;

	#endif

#endif

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// non-uniform scaling in the instance matrix is supported
	// shear transforms are not supported

	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;

	#ifdef USE_TANGENT

		transformedTangent = im * transformedTangent;

	#endif

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;

#endif
`;var th=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;var ih=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );

#endif
`;var nh=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );

	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		emissiveColor = sRGBTransferEOTF( emissiveColor );

	#endif

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`;var rh=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`;var oh=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;var sh=`

vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}

vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}

vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`;var ah=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );

		#ifdef ENVMAP_BLENDING_MULTIPLY

			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

		#elif defined( ENVMAP_BLENDING_MIX )

			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

		#elif defined( ENVMAP_BLENDING_ADD )

			outgoingLight += envColor.xyz * specularStrength * reflectivity;

		#endif

	#endif

#endif
`;var lh=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform mat3 envMapRotation;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif
`;var ch=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`;var fh=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`;var uh=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`;var hh=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`;var dh=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`;var ph=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`;var mh=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`;var Ah=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`;var gh=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`;var xh=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`;var _h=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`;var vh=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;

#if defined( USE_LIGHT_PROBES )

	uniform vec3 lightProbe[ 9 ];

#endif

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	// based upon Frostbite 3 Moving to Physically-based Rendering
	// page 32, equation 26: E[window1]
	// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

	if ( cutoffDistance > 0.0 ) {

		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

	}

	return distanceFalloff;

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_SUN_LIGHTS > 0

	struct SunLight {
		vec3 direction;
		vec3 color;
	};

	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];

	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {

		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;

	}

#endif


#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometryPosition;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif

#include <lightprobes_pars_fragment>
`;var Mh=`
#ifdef USE_ENVMAP

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#ifdef ENVMAP_TYPE_CUBE_UV

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );

			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	#ifdef USE_RETROREFLECTION

		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

				// The retroreflective lobe returns light toward its source, so the environment is sampled along the view direction
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );

				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );

				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );

				return envMapColor.rgb * envMapIntensity;

			#else

				return vec3( 0.0 );

			#endif

		}

	#endif

	#ifdef USE_ANISOTROPY

		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

			#ifdef ENVMAP_TYPE_CUBE_UV

			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

				return getIBLRadiance( viewDir, bentNormal, roughness );

			#else

				return vec3( 0.0 );

			#endif

		}

		#ifdef USE_RETROREFLECTION

			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {

				#ifdef ENVMAP_TYPE_CUBE_UV

				  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );

					return getIBLRetroRadiance( viewDir, bentNormal, roughness );

				#else

					return vec3( 0.0 );

				#endif

			}

		#endif

	#endif

#endif
`;var Sh=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`;var yh=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`;var bh=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`;var wh=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`;var Eh=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;

vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef USE_SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULAR_COLORMAP

			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;

		#endif

		#ifdef USE_SPECULAR_INTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_DISPERSION

	material.dispersion = dispersion;

#endif

#ifdef USE_RETROREFLECTION

	material.retroreflectivity = retroreflectivity;

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEEN_COLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );

	#ifdef USE_SHEEN_ROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;

	#endif

#endif

#ifdef USE_ANISOTROPY

	#ifdef USE_ANISOTROPYMAP

		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;

	#else

		vec2 anisotropyV = anisotropyVector;

	#endif

	material.anisotropy = length( anisotropyV );

	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}

	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );

	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;

#endif
`;var Th=`

uniform sampler2D dfgLUT;

struct PhysicalMaterial {

	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;

	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;

	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

	#ifdef IOR
		float ior;
	#endif

	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif

	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif

};

// temporary
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
#ifdef USE_ANISOTROPY

	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {

		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );

	}

	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {

		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;

		return RECIPROCAL_PI * a2 * pow2 ( w2 );

	}

#endif

#ifdef USE_CLEARCOAT

	// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {

		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = F_Schlick( f0, f90, dotVH );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {

	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	#ifdef USE_IRIDESCENCE

		F = mix( F, material.iridescenceFresnel, material.iridescence );

	#endif

	#ifdef USE_ANISOTROPY

		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );

		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );

		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );

	#else

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

	#endif

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see reference)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif

// This is a curve-fit approximation to the "Charlie sheen" BRDF integrated over the hemisphere from
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF".
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );

	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;

	float DG = exp( a * dotNV + b );

	return saturate( DG );

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif

	#ifdef USE_IRIDESCENCE

		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );

	#else

		vec3 Fr = specularColor;

	#endif

	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

		#ifdef USE_CLEARCOAT

			vec3 Ncc = geometryClearcoatNormal;

			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );

			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );

			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);

			// LTC Fresnel Approximation for clearcoat
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;

			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );

		#endif

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );

	#endif

	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif

	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );

	#ifdef USE_RETROREFLECTION

		// Minimal Retroreflective Microfacet Model:
		// https://jcgt.org/published/0015/01/04/
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );

		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );

	#endif

	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;

	// Light reflected by the specular interface is not available to the diffuse layer ( glTF fresnel_mix )
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );

	#ifdef USE_RETROREFLECTION

		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );

		F = mix( F, retroF, saturate( material.retroreflectivity ) );

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	// Energy reflected by the specular lobe is not available to the diffuse layer
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );

	#else

		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );

	#endif

	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );

	#ifdef USE_SHEEN

		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;

		diffuse *= sheenEnergyComp;

	#endif

	reflectedLight.indirectDiffuse += diffuse;

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;

 	#endif

	// Both indirect specular and indirect diffuse light accumulate here
	// Compute multiscattering separately for dielectric and metallic, then mix

	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );

	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );

	#else

		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );

	#endif

	// Mix based on metalness
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );

	// Diffuse energy conservation uses dielectric path
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );

	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;

	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;

	#ifdef USE_SHEEN

		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );

		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;

		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;

	#endif

	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`;var Rh=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

vec3 geometryClearcoatNormal = vec3( 0.0 );

#ifdef USE_CLEARCOAT

	geometryClearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometryViewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );

		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );

		// Iridescence F0 approximation
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );

	}

#endif

#ifdef STANDARD

	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );

	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;

	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )

		// Multi-scattering energy compensation for direct lighting
		// Based on "Practical Multiple Scattering Compensation for Microfacet Models"
		// https://blog.selfshadow.com/publications/turquin/ms_comp_final.pdf

		// Energy of the single-scattering lobe in a white furnace ( F0 = F90 = 1 )
		float EssMs = material.dfg.x + material.dfg.y;

		// Compensate for the energy lost to multiple scattering, tinting the added term by F0 ( equation 16 )
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );

	#endif

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometryPosition, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;

	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometryPosition, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif

		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif

		#undef SPOT_LIGHT_MAP_INDEX

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )

	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {

		sunLight = sunLights[ i ];

		getSunLightInfo( sunLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	#if defined( USE_LIGHT_PROBES )

		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );

	#endif

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );

		}
		#pragma unroll_loop_end

	#endif

	#ifdef USE_LIGHT_PROBES_GRID

		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`;var Ch=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )

		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )

			iblIrradiance += getIBLIrradiance( geometryNormal );

		#endif

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	#ifdef USE_ANISOTROPY

		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

	#else

		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );

	#endif

	#ifdef USE_RETROREFLECTION

		#ifdef USE_ANISOTROPY

			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );

		#else

			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );

		#endif

		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );

	#endif

	radiance += iblRadiance;

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`;var Ph=`
#if defined( RE_IndirectDiffuse )

	#if defined( LAMBERT ) || defined( PHONG )

		irradiance += iblIrradiance;

	#endif

	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );

#endif
`;var Lh=`
#ifdef USE_LIGHT_PROBES_GRID

// Single atlas 3D texture that stores all 7 SH sub-volumes stacked along Z.
// Atlas depth = 7 * ( nz + 2 ) where nz = probesResolution.z.
// Each sub-volume occupies ( nz + 2 ) slices: 1 padding + nz data + 1 padding.
// Padding is a copy of the first / last data slice and prevents color bleeding
// when the hardware linear filter reads across a sub-volume boundary.
uniform highp sampler3D probesSH;

uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;

vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {

	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;

	// Offset sample position along normal by half a probe spacing
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );

	// Remap to texel centers of the probe grid (XY and Z)
	uvw = uvw * resMinusOne / res + 0.5 / res;

	// Atlas UV mapping along Z:
	//   paddedSlices = nz + 2  (1 padding texel at each end of every sub-volume)
	//   atlasDepth   = 7 * paddedSlices
	//   For sub-volume t the first DATA texel sits at atlas slice t*paddedSlices + 1.
	//   Given probe-grid texel-centre UVZ = ( iz + 0.5 ) / nz the atlas UV is:
	//     atlasUvZ = ( uvw.z * nz + t * paddedSlices + 1 ) / atlasDepth
	//
	// uvZBase encodes the nz-scaled Z plus the intra-volume offset (+ 1 for padding),
	// so adding t*paddedSlices steps to each successive sub-volume.
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;

	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );

	// Unpack 9 vec3 SH L2 coefficients
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;

	// Evaluate L2 irradiance
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;

	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );

	return max( result, vec3( 0.0 ) );

}

#endif
`;var Dh=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`;var Ih=`
#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Uh=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`;var Nh=`
#ifdef USE_LOGARITHMIC_DEPTH_BUFFER

	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

#endif
`;var Fh=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vMapUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)

		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`;var Bh=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`;var Oh=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	#if defined( USE_POINTS_UV )

		vec2 uv = vUv;

	#else

		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

	#endif

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`;var Gh=`
#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`;var zh=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`;var Hh=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`;var Vh=`
#ifdef USE_INSTANCING_MORPH

	float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;

	}
#endif
`;var kh=`
#if defined( USE_MORPHCOLORS )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`;var Wh=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Xh=`
#ifdef USE_MORPHTARGETS

	#ifndef USE_INSTANCING_MORPH

		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];

	#endif

	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;

	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;

		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );

	}

#endif
`;var qh=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

	}

#endif
`;var Yh=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal *= faceDirection;

	#endif

#endif

#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )

	#ifdef USE_TANGENT

		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);

	#endif

	#ifdef DOUBLE_SIDED

		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;

	#endif

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	#ifdef USE_TANGENT

		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

	#else

		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

	#endif

	#ifdef DOUBLE_SIDED

		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 nonPerturbedNormal = normal;

`;var Zh=`

#ifdef USE_NORMALMAP_OBJECTSPACE

	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( USE_NORMALMAP_TANGENTSPACE )

	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;

	#if defined( USE_PACKED_NORMALMAP )

		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );

	#endif

	mapN.xy *= normalScale;

	normal = normalize( tbn * mapN );

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`;var Jh=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var Kh=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`;var $h=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

		#ifdef FLIP_SIDED

			vBitangent = - vBitangent;

		#endif

	#endif

#endif
`;var Qh=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef USE_NORMALMAP_OBJECTSPACE

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

		return mat3( T * scale, B * scale, N );

	}

#endif
`;var jh=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = nonPerturbedNormal;

#endif
`;var ed=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	clearcoatNormal = normalize( tbn2 * clearcoatMapN );

#endif
`;var td=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif
`;var id=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`;var nd=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;var rd=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)
const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;

const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );

const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );

vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}

vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	// the 0.9999 tweak is unimportant, very tiny empirical improvement
	// return vec3( vuf * Inv255, gf * PackUpscale, bf * 0.9999 );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}

vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}

float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}

float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}

vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ, the z-coordinate in camera space, is negative for points in front of the camera

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( viewZ + near ) / ( near - far );
}

float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {

	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;

	#else

		return depth * ( near - far ) - near;

	#endif
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	// -near maps to 0; -far maps to 1
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}

float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER

		return ( near * far ) / ( ( near - far ) * depth - near );

	#else

		return ( near * far ) / ( ( far - near ) * depth - far );

	#endif
}
`;var od=`
#ifdef PREMULTIPLIED_ALPHA

	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`;var sd=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_BATCHING

	mvPosition = batchingMatrix * mvPosition;

#endif

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`;var ad=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;var ld=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`;var cd=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`;var fd=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;var ud=`
#if NUM_SPOT_LIGHT_COORDS > 0

	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#if NUM_SPOT_LIGHT_MAPS > 0

	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

		// must match the cascade count in SunLightShadow

		#define SUN_LIGHT_CASCADES 2

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];

		#else

			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];

		#endif

		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;

		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];

		#else

			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];

		#endif

		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		#else

			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];

		#endif

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#if defined( SHADOWMAP_TYPE_PCF )

			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];

		#elif defined( SHADOWMAP_TYPE_BASIC )

			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];

		#endif

		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	#if defined( SHADOWMAP_TYPE_PCF )

		// Interleaved Gradient Noise for randomizing sampling patterns
		float interleavedGradientNoise( vec2 position ) {

			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );

		}

		// Vogel disk sampling for uniform circular distribution
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {

			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;

		}

	#endif

	#if defined( SHADOWMAP_TYPE_PCF )

		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				// Hardware PCF with LinearFilter gives us 4-tap filtering per sample
				// 5 samples using Vogel disk + IGN = effectively 20 filtered taps with better distribution
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;

				// Use IGN to rotate sampling pattern per pixel
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;

				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#elif defined( SHADOWMAP_TYPE_VSM )

		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				shadowCoord.z -= shadowBias;

			#else

				shadowCoord.z += shadowBias;

			#endif

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;

				float mean = distribution.x;
				float variance = distribution.y * distribution.y;

				#ifdef USE_REVERSED_DEPTH_BUFFER

					float hard_shadow = step( mean, shadowCoord.z );

				#else

					float hard_shadow = step( shadowCoord.z, mean );

				#endif
				
				// Early return if fully lit
				if ( hard_shadow == 1.0 ) {

					shadow = 1.0;

				} else {

					// Variance must be non-zero to avoid division by zero
					variance = max( variance, 0.0000001 );

					// Distance from mean
					float d = shadowCoord.z - mean;

					// Chebyshev's inequality for upper bound on probability
					float p_max = variance / ( variance + d * d );

					// Reduce light bleeding by remapping [amount, 1] to [0, 1]
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );

					shadow = max( hard_shadow, p_max );

				}

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#else // SHADOWMAP_TYPE_BASIC

		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

			float shadow = 1.0;

			shadowCoord.xyz /= shadowCoord.w;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				shadowCoord.z -= shadowBias;

			#else

				shadowCoord.z += shadowBias;

			#endif

			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;

			if ( frustumTest ) {

				float depth = texture2D( shadowMap, shadowCoord.xy ).r;

				#ifdef USE_REVERSED_DEPTH_BUFFER

					shadow = step( depth, shadowCoord.z );

				#else

					shadow = step( shadowCoord.z, depth );

				#endif

			}

			return mix( 1.0, shadow, shadowIntensity );

		}

	#endif

	#if NUM_SUN_LIGHT_SHADOWS > 0

		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {

			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;

			float shadow = 1.0;

			// walk the cascades back to front so each fade band can blend with the shadow behind it

			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {

				// ( begin, end, fade start ) view depths of the cascade

				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];

				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {

					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);

					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );

				}

			}

			return shadow;

		}

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#if defined( SHADOWMAP_TYPE_PCF )

	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// Direction from light to fragment
		vec3 bd3D = normalize( lightToPosition );

		// For cube shadow maps, depth is stored as distance along each face's view axis, not radial distance
		// The view-space depth is the maximum component of the direction vector (which face is sampled)
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );

		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {

			// viewZ to perspective depth

			#ifdef USE_REVERSED_DEPTH_BUFFER

				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;

			#else

				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;

			#endif

			// Hardware PCF with LinearFilter gives us 4-tap filtering per sample
			// Use Vogel disk + IGN sampling for better quality
			float texelSize = shadowRadius / shadowMapSize.x;

			// Build a tangent-space coordinate system for applying offsets
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );

			// Use IGN to rotate sampling pattern per pixel
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;

			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );

			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	#elif defined( SHADOWMAP_TYPE_BASIC )

	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		float shadow = 1.0;

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// For cube shadow maps, depth is stored as distance along each face's view axis, not radial distance
		// The view-space depth is the maximum component of the direction vector (which face is sampled)
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );

		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {

			// viewZ to perspective depth

			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;

			// Direction from light to fragment
			vec3 bd3D = normalize( lightToPosition );

			float depth = textureCube( shadowMap, bd3D ).r;

			#ifdef USE_REVERSED_DEPTH_BUFFER

				depth = 1.0 - depth;

			#endif

			shadow = step( dp, depth );

		}

		return mix( 1.0, shadow, shadowIntensity );

	}

	#endif

	#endif

#endif
`;var hd=`

#if NUM_SPOT_LIGHT_COORDS > 0

	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];

#endif

#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

		// cascade selection and shadow coordinates are computed per fragment

		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`;var dd=`

#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	#ifdef HAS_NORMAL

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.

		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );

	#else

		vec3 shadowWorldNormal = vec3( 0.0 ); // fallback, see #21483

	#endif

	vec4 shadowWorldPosition;

#endif

#if defined( USE_SHADOWMAP )

	#if NUM_SUN_LIGHT_SHADOWS > 0

		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

		}
		#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif

// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)

#if NUM_SPOT_LIGHT_COORDS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {

		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

#endif


`;var pd=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_SUN_LIGHT_SHADOWS > 0

	SunLightShadow sunLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {

		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`;var md=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`;var Ad=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;

	mat4 getBoneMatrix( const in float i ) {

		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );

		return mat4( v1, v2, v3, v4 );

	}

#endif
`;var gd=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`;var xd=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`;var _d=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`;var vd=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`;var Md=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;var Sd=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return saturate( toneMappingExposure * color );

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 CineonToneMapping( vec3 color ) {

	// filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

// Matrices for rec 2020 <> rec 709 color space conversion
// matrix provided in row-major order so it has been transposed
// https://www.itu.int/pub/R-REP-BT.2407-2017
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);

const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);

// https://iolite-engine.com/blog_posts/minimal_agx_implementation
// Mean error^2: 3.6705141e-06
vec3 agxDefaultContrastApprox( vec3 x ) {

	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;

	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;

}

// AgX Tone Mapping implementation based on Filament, which in turn is based
// on Blender's implementation using rec 2020 primaries
// https://github.com/google/filament/pull/7236
// Inputs and outputs are encoded as Linear-sRGB.

vec3 AgXToneMapping( vec3 color ) {

	// AgX constants
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);

	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);

	// LOG2_MIN      = -10.0
	// LOG2_MAX      =  +6.5
	// MIDDLE_GRAY   =  0.18
	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )
	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )

	color *= toneMappingExposure;

	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

	color = AgXInsetMatrix * color;

	// Log2 encoding
	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2
	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );

	color = clamp( color, 0.0, 1.0 );

	// Apply sigmoid
	color = agxDefaultContrastApprox( color );

	// Apply AgX look
	// v = agxLook(v, look);

	color = AgXOutsetMatrix * color;

	// Linearize
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );

	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

	// Gamut mapping. Simple clamp for now.
	color = clamp( color, 0.0, 1.0 );

	return color;

}

// https://modelviewer.dev/examples/tone-mapping

vec3 NeutralToneMapping( vec3 color ) {

	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;

	color *= toneMappingExposure;

	float x = min( color.r, min( color.g, color.b ) );

	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;

	color -= offset;

	float peak = max( color.r, max( color.g, color.b ) );

	if ( peak < StartCompression ) return color;

	float d = 1. - StartCompression;

	float newPeak = 1. - d * d / ( peak + d - StartCompression );

	color *= newPeak / peak;

	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );

	return mix( color, vec3( newPeak ), g );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`;var yd=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );

	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );

#endif
`;var bd=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	// Mipped Bicubic Texture Filtering by N8
	// https://www.shadertoy.com/view/Dl2SDW

	float w0( float a ) {

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );

	}

	float w1( float a ) {

		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );

	}

	float w2( float a ){

		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );

	}

	float w3( float a ) {

		return ( 1.0 / 6.0 ) * ( a * a * a );

	}

	// g0 and g1 are the two amplitude functions
	float g0( float a ) {

		return w0( a ) + w1( a );

	}

	float g1( float a ) {

		return w2( a ) + w3( a );

	}

	// h0 and h1 are the two offset functions
	float h0( float a ) {

		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );

	}

	float h1( float a ) {

		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );

	}

	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {

		uv = uv * texelSize.zw + 0.5;

		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );

		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );

		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;

		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );

	}

	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {

		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );

	}

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independent scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );

	}

	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +\u221E, i.e. the transmitted color is not attenuated at all.
			return vec3( 1.0 );

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec4 transmittedLight;
		vec3 transmittance;

		#ifdef USE_DISPERSION

			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );

			for ( int i = 0; i < 3; i ++ ) {

				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;

				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;

				// Sample framebuffer to get pixel the refracted ray hits.
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;

				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];

			}

			transmittedLight.a /= 3.0;

		#else

			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;

			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;

			// Sample framebuffer to get pixel the refracted ray hits.
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );

		#endif

		vec3 attenuatedColor = transmittance * transmittedLight.rgb;

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job
		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;

		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );

	}
#endif
`;var wd=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	varying vec2 vNormalMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_SPECULARMAP

	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var Ed=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;

#endif
#ifdef USE_ALPHAMAP

	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;

#endif
#ifdef USE_LIGHTMAP

	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;

#endif
#ifdef USE_AOMAP

	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;

#endif
#ifdef USE_BUMPMAP

	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;

#endif
#ifdef USE_NORMALMAP

	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;

#endif
#ifdef USE_DISPLACEMENTMAP

	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;

#endif
#ifdef USE_EMISSIVEMAP

	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;

#endif
#ifdef USE_METALNESSMAP

	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;

#endif
#ifdef USE_ROUGHNESSMAP

	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;

#endif
#ifdef USE_ANISOTROPYMAP

	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;

#endif
#ifdef USE_CLEARCOATMAP

	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;

#endif
#ifdef USE_SHEEN_COLORMAP

	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;

#endif
#ifdef USE_IRIDESCENCEMAP

	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;

#endif
#ifdef USE_SPECULARMAP

	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;

#endif
#ifdef USE_SPECULAR_COLORMAP

	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;

#endif
#ifdef USE_TRANSMISSIONMAP

	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;

#endif
#ifdef USE_THICKNESSMAP

	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;

#endif
`;var Td=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	vUv = vec3( uv, 1 ).xy;

#endif
#ifdef USE_MAP

	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ALPHAMAP

	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_LIGHTMAP

	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_AOMAP

	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_BUMPMAP

	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_NORMALMAP

	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_EMISSIVEMAP

	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_METALNESSMAP

	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ROUGHNESSMAP

	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_ANISOTROPYMAP

	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOATMAP

	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULARMAP

	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;

#endif
#ifdef USE_THICKNESSMAP

	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;

#endif
`;var Rd=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_BATCHING

		worldPosition = batchingMatrix * worldPosition;

	#endif

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;var Cd=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,Pd=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var Ld=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Dd=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var Id=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Ud=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var Nd=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,Fd=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z

	#ifdef USE_REVERSED_DEPTH_BUFFER

		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];

	#else

		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;

	#endif

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		// TODO Deprecate
		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#elif DEPTH_PACKING == 3202

		// TODO Deprecate
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );

	#elif DEPTH_PACKING == 3203

		// TODO Deprecate
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );

	#endif

}
`;var Bd=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <batching_vertex>
	#include <skinbase_vertex>

	#include <morphinstance_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,Od=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );

}
`;var Gd=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,zd=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>

}
`;var Hd=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Vd=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var kd=`
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,Wd=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Xd=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,qd=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Yd=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,Zd=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var Jd=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Kd=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )

	varying vec3 vViewPosition;

#endif

#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`;var $d=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Qd=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var jd=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,ep=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif

	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_DISPERSION
	uniform float dispersion;
#endif

#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif

#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;

	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;

	#endif

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var tp=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,ip=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`;var np=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

void main() {

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,rp=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var op=`
#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,sp=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	#include <logdepthbuf_fragment>

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;var ap=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix[ 3 ];

	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,lp=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>

}
`;var ht={alphahash_fragment:Cu,alphahash_pars_fragment:Pu,alphamap_fragment:Lu,alphamap_pars_fragment:Du,alphatest_fragment:Iu,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Bu,batching_vertex:Ou,begin_vertex:Gu,beginnormal_vertex:zu,bsdfs:Hu,iridescence_fragment:Vu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:Ku,color_vertex:$u,common:Qu,cube_uv_reflection_fragment:ju,defaultnormal_vertex:eh,displacementmap_pars_vertex:th,displacementmap_vertex:ih,emissivemap_fragment:nh,emissivemap_pars_fragment:rh,colorspace_fragment:oh,colorspace_pars_fragment:sh,envmap_fragment:ah,envmap_common_pars_fragment:lh,envmap_pars_fragment:ch,envmap_pars_vertex:fh,envmap_physical_pars_fragment:Mh,envmap_vertex:uh,fog_vertex:hh,fog_pars_vertex:dh,fog_fragment:ph,fog_pars_fragment:mh,gradientmap_pars_fragment:Ah,lightmap_pars_fragment:gh,lights_lambert_fragment:xh,lights_lambert_pars_fragment:_h,lights_pars_begin:vh,lights_toon_fragment:Sh,lights_toon_pars_fragment:yh,lights_phong_fragment:bh,lights_phong_pars_fragment:wh,lights_physical_fragment:Eh,lights_physical_pars_fragment:Th,lights_fragment_begin:Rh,lights_fragment_maps:Ch,lights_fragment_end:Ph,lightprobes_pars_fragment:Lh,logdepthbuf_fragment:Dh,logdepthbuf_pars_fragment:Ih,logdepthbuf_pars_vertex:Uh,logdepthbuf_vertex:Nh,map_fragment:Fh,map_pars_fragment:Bh,map_particle_fragment:Oh,map_particle_pars_fragment:Gh,metalnessmap_fragment:zh,metalnessmap_pars_fragment:Hh,morphinstance_vertex:Vh,morphcolor_vertex:kh,morphnormal_vertex:Wh,morphtarget_pars_vertex:Xh,morphtarget_vertex:qh,normal_fragment_begin:Yh,normal_fragment_maps:Zh,normal_pars_fragment:Jh,normal_pars_vertex:Kh,normal_vertex:$h,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:ed,clearcoat_pars_fragment:td,iridescence_pars_fragment:id,opaque_fragment:nd,packing:rd,premultiplied_alpha_fragment:od,project_vertex:sd,dithering_fragment:ad,dithering_pars_fragment:ld,roughnessmap_fragment:cd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:ud,shadowmap_pars_vertex:hd,shadowmap_vertex:dd,shadowmask_pars_fragment:pd,skinbase_vertex:md,skinning_pars_vertex:Ad,skinning_vertex:gd,skinnormal_vertex:xd,specularmap_fragment:_d,specularmap_pars_fragment:vd,tonemapping_fragment:Md,tonemapping_pars_fragment:Sd,transmission_fragment:yd,transmission_pars_fragment:bd,uv_pars_fragment:wd,uv_pars_vertex:Ed,uv_vertex:Td,worldpos_vertex:Rd,background_vert:Cd,background_frag:Pd,backgroundCube_vert:Ld,backgroundCube_frag:Dd,cube_vert:Id,cube_frag:Ud,depth_vert:Nd,depth_frag:Fd,distance_vert:Bd,distance_frag:Od,equirect_vert:Gd,equirect_frag:zd,linedashed_vert:Hd,linedashed_frag:Vd,meshbasic_vert:kd,meshbasic_frag:Wd,meshlambert_vert:Xd,meshlambert_frag:qd,meshmatcap_vert:Yd,meshmatcap_frag:Zd,meshnormal_vert:Jd,meshnormal_frag:Kd,meshphong_vert:$d,meshphong_frag:Qd,meshphysical_vert:jd,meshphysical_frag:ep,meshtoon_vert:tp,meshtoon_frag:ip,points_vert:np,points_frag:rp,shadow_vert:op,shadow_frag:sp,sprite_vert:ap,sprite_frag:lp};var be={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}};var $i={basic:{uniforms:Si([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Si([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new le(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Si([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Si([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Si([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new le(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Si([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Si([be.points,be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Si([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Si([be.common,be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Si([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Si([be.sprite,be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Si([be.common,be.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Si([be.lights,be.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};$i.physical={uniforms:Si([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Sl={r:0,b:0,g:0},BA=new tt,cp=new Ze;cp.set(-1,0,0,0,1,0,0,0,1);function fp(n,e,t,i,r,o){let s=new le(0),a=r===!0?0:1,c,l,f=null,h=0,u=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let _=S.backgroundBlurriness>0;E=e.get(E,_)}return E}function m(S){let E=!1,_=d(S);_===null?A(s,a):_&&_.isColor&&(A(_,1),E=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(S,E){let _=d(E);_&&(_.isCubeTexture||_.mapping===Yn)?(l===void 0&&(l=new de(new Tt(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Nn($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,y,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cp),l.material.toneMapped=lt.getTransfer(_.colorSpace)!==xt,(f!==_||h!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new de(new Oi(2,2),new bt({name:"BackgroundMaterial",uniforms:Nn($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=lt.getTransfer(_.colorSpace)!==xt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function A(S,E){S.getRGB(Sl,ul(n)),t.buffers.color.setClear(Sl.r,Sl.g,Sl.b,E,o)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,E=1){s.set(S),a=E,A(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,A(s,a)},render:m,addToRenderList:v,dispose:p}}function up(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null),o=r,s=!1;function a(D,B,O,I,F){let X=!1,k=h(D,I,O,B);o!==k&&(o=k,l(o.object)),X=d(D,I,O,F),X&&m(D,I,O,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,_(D,B,O,I),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function f(D){return n.deleteVertexArray(D)}function h(D,B,O,I){let F=I.wireframe===!0,X=i[B.id];X===void 0&&(X={},i[B.id]=X);let k=D.isInstancedMesh===!0?D.id:0,ae=X[k];ae===void 0&&(ae={},X[k]=ae);let q=ae[O.id];q===void 0&&(q={},ae[O.id]=q);let Q=q[F];return Q===void 0&&(Q=u(c()),q[F]=Q),Q}function u(D){let B=[],O=[],I=[];for(let F=0;F<t;F++)B[F]=0,O[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:I,object:D,attributes:{},index:null}}function d(D,B,O,I){let F=o.attributes,X=B.attributes,k=0,ae=O.getAttributes();for(let q in ae)if(ae[q].location>=0){let re=F[q],Le=X[q];if(Le===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Le=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Le=D.instanceColor)),re===void 0||re.attribute!==Le||Le&&re.data!==Le.data)return!0;k++}return o.attributesNum!==k||o.index!==I}function m(D,B,O,I){let F={},X=B.attributes,k=0,ae=O.getAttributes();for(let q in ae)if(ae[q].location>=0){let re=X[q];re===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(re=D.instanceColor));let Le={};Le.attribute=re,re&&re.data&&(Le.data=re.data),F[q]=Le,k++}o.attributes=F,o.attributesNum=k,o.index=I}function v(){let D=o.newAttributes;for(let B=0,O=D.length;B<O;B++)D[B]=0}function A(D){p(D,0)}function p(D,B){let O=o.newAttributes,I=o.enabledAttributes,F=o.attributeDivisors;O[D]=1,I[D]===0&&(n.enableVertexAttribArray(D),I[D]=1),F[D]!==B&&(n.vertexAttribDivisor(D,B),F[D]=B)}function S(){let D=o.newAttributes,B=o.enabledAttributes;for(let O=0,I=B.length;O<I;O++)B[O]!==D[O]&&(n.disableVertexAttribArray(O),B[O]=0)}function E(D,B,O,I,F,X,k){k===!0?n.vertexAttribIPointer(D,B,O,F,X):n.vertexAttribPointer(D,B,O,I,F,X)}function _(D,B,O,I){v();let F=I.attributes,X=O.getAttributes(),k=B.defaultAttributeValues;for(let ae in X){let q=X[ae];if(q.location>=0){let Q=F[ae];if(Q===void 0&&(ae==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ae==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let re=Q.normalized,Le=Q.itemSize,Re=e.get(Q);if(Re===void 0)continue;let ct=Re.buffer,rt=Re.type,ft=Re.bytesPerElement,K=rt===n.INT||rt===n.UNSIGNED_INT||Q.gpuType===zr;if(Q.isInterleavedBufferAttribute){let te=Q.data,xe=te.stride,Ue=Q.offset;if(te.isInstancedInterleavedBuffer){for(let ye=0;ye<q.locationSize;ye++)p(q.location+ye,te.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<q.locationSize;ye++)A(q.location+ye);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let ye=0;ye<q.locationSize;ye++)E(q.location+ye,Le/q.locationSize,rt,re,xe*ft,(Ue+Le/q.locationSize*ye)*ft,K)}else{if(Q.isInstancedBufferAttribute){for(let te=0;te<q.locationSize;te++)p(q.location+te,Q.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let te=0;te<q.locationSize;te++)A(q.location+te);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let te=0;te<q.locationSize;te++)E(q.location+te,Le/q.locationSize,rt,re,Le*ft,Le/q.locationSize*te*ft,K)}}else if(k!==void 0){let re=k[ae];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(q.location,re);break;case 3:n.vertexAttrib3fv(q.location,re);break;case 4:n.vertexAttrib4fv(q.location,re);break;default:n.vertexAttrib1fv(q.location,re)}}}}S()}function b(){w();for(let D in i){let B=i[D];for(let O in B){let I=B[O];for(let F in I){let X=I[F];for(let k in X)f(X[k].object),delete X[k];delete I[F]}}delete i[D]}}function y(D){if(i[D.id]===void 0)return;let B=i[D.id];for(let O in B){let I=B[O];for(let F in I){let X=I[F];for(let k in X)f(X[k].object),delete X[k];delete I[F]}}delete i[D.id]}function C(D){for(let B in i){let O=i[B];for(let I in O){let F=O[I];if(F[D.id]===void 0)continue;let X=F[D.id];for(let k in X)f(X[k].object),delete X[k];delete F[D.id]}}}function g(D){for(let B in i){let O=i[B],I=D.isInstancedMesh===!0?D.id:0,F=O[I];if(F!==void 0){for(let X in F){let k=F[X];for(let ae in k)f(k[ae].object),delete k[ae];delete F[X]}delete O[I],Object.keys(O).length===0&&delete i[B]}}}function w(){P(),s=!0,o!==r&&(o=r,l(o.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:y,releaseStatesOfObject:g,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:A,disableUnusedAttributes:S}}function hp(n,e,t){let i;function r(c){i=c}function o(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function s(c,l,f){f!==0&&(n.drawArraysInstanced(i,c,l,f),t.update(l,i,f))}function a(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,f);let u=0;for(let d=0;d<f;d++)u+=l[d];t.update(u,i,1)}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a}function dp(n,e,t,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==di&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let g=C===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ti&&C!==si&&!g&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",f=c(l);f!==l&&(Pe("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),A=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:A,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:_,maxSamples:b,samples:y}}function pp(n){let e=this,t=null,i=0,r=!1,o=!1,s=new gi,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||i!==0||r;return r=u,i=h.length,d},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,d){let m=h.clippingPlanes,v=h.clipIntersection,A=h.clipShadows,p=n.get(h);if(!r||m===null||m.length===0||o&&!A)o?f(null):l();else{let S=o?0:i,E=S*4,_=p.clippingState||null;c.value=_,_=f(m,u,E,d);for(let b=0;b!==E;++b)_[b]=t[b];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,d,m){let v=h!==null?h.length:0,A=null;if(v!==0){if(A=c.value,m!==!0||A===null){let p=d+v*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(A===null||A.length<p)&&(A=new Float32Array(p));for(let E=0,_=d;E!==v;++E,_+=4)s.copy(h[E]).applyMatrix4(S,a),s.normal.toArray(A,_),A[_+3]=s.constant}c.value=A,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,A}}var Fo=4,OA=6,GA=20,zA=256,Js=new lr,mp=new le,Nc=null,Fc=0,Bc=0,Oc=!1,HA=new T,Lr=new T,cr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,o={}){let{size:s=256,position:a=HA}=o;Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Fc,Bc),this._renderer.xr.enabled=Oc,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===yn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:hi,format:di,colorSpace:vr,depthBuffer:!1},r=Ap(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(e,t,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=VA(o)),this._blurMaterial=WA(o,e,t),this._ggxMaterial=kA(o,e,t)}return r}_compileMaterial(e){let t=new de(new Ke,e);this._renderer.compile(t,Js)}_sceneToCubeUV(e,t,i,r,o){let c=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mp),h.toneMapping=wi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new Tt,new qt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,A=v.material,p=!1,S=e.background;S?S.isColor&&(A.color.copy(S),e.background=null,p=!0):(A.color.copy(mp),p=!0);for(let E=0;E<6;E++){let _=E%3;_===0?(c.up.set(0,l[E],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x+f[E],o.y,o.z)):_===1?(c.up.set(0,0,l[E]),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y+f[E],o.z)):(c.up.set(0,l[E],0),c.position.set(o.x,o.y,o.z),c.lookAt(o.x,o.y,o.z+f[E]));let b=this._cubeSize;No(r,_*b,E>2?b:0,b,b),h.setRenderTarget(r),p&&h.render(v,c),h.render(e,c)}h.toneMapping=d,h.autoClear=u,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===qi||e.mapping===yn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());let o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;let a=o.uniforms;a.envMap.value=e;let c=this._cubeSize;No(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(s,Js)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;let c=s.uniforms,l=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-f*f),u=l*1.25,d=h*u,{_lodMax:m}=this,v=this._sizeLods[i],A=3*v*(i>m-Fo?i-m+Fo:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,No(o,A,p,3*v,2*v),r.setRenderTarget(o),r.render(a,Js),c.envMap.value=o.texture,c.roughness.value=0,c.mipInt.value=m-i,No(e,A,p,3*v,2*v),r.setRenderTarget(e),r.render(a,Js)}_blur(e,t,i,r){let o=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,i,s),this._blurPass(o,e,i,i,s)}_blurPass(e,t,i,r,o){let s=this._renderer,a=this._blurMaterial,c=this._lodMeshes[r];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=o,l.mipInt.value=this._lodMax-i;let f=this._sizeLods[r],h=3*f*(r>this._lodMax-Fo?r-this._lodMax+Fo:0),u=4*(this._cubeSize-f);No(t,h,u,3*f,2*f),s.setRenderTarget(t),s.render(c,Js)}};function VA(n){let e=[],t=[],i=n,r=n-Fo+1+OA;for(let o=0;o<r;o++){let s=Math.pow(2,i);e.push(s);let a=1/(s-2),c=-a,l=1+a,f=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,u=6,d=3,m=new Float32Array(d*u*h),v=new Float32Array(d*u*h);for(let p=0;p<h;p++){let S=p%3*2/3-1,E=p>2?0:-1,_=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];m.set(_,d*u*p);for(let b=0;b<u;b++){let y=f[b*2]*2-1,C=f[b*2+1]*2-1;p===0?Lr.set(1,C,y):p===1?Lr.set(-y,1,-C):p===2?Lr.set(-y,C,1):p===3?Lr.set(-1,C,-y):p===4?Lr.set(-y,-1,C):Lr.set(y,C,-1),Lr.toArray(v,(p*u+b)*d)}}let A=new Ke;A.setAttribute("position",new ii(m,d)),A.setAttribute("outputDirection",new ii(v,d)),t.push(new de(A,null)),i>Fo&&i--}return{lodMeshes:t,sizeLods:e}}function Ap(n,e,t){let i=new ai(n,e,t);return i.texture.mapping=Yn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function No(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function kA(n,e,t){return new bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function WA(n,e,t){return new bt({name:"SphericalGaussianBlur",defines:{SAMPLES:GA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function gp(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function xp(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bo=class extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tt(5,5,5),o=new bt({name:"CubemapFromEquirect",uniforms:Nn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:Gi});o.uniforms.tEquirect.value=t;let s=new de(r,o),a=t.minFilter;return t.minFilter===ji&&(t.minFilter=Wt),new _l(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}};function _p(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,d=!1){return u==null?null:d?s(u):o(u)}function o(u){if(u&&u.isTexture){let d=u.mapping;if(d===ua||d===ha)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let v=new Bo(m.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let d=u.mapping,m=d===ua||d===ha,v=d===qi||d===yn;if(m||v){let A=t.get(u),p=A!==void 0?A.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new cr(n)),A=m?i.fromEquirectangular(u,A):i.fromCubemap(u,A),A.texture.pmremVersion=u.pmremVersion,t.set(u,A),A.texture;if(A!==void 0)return A.texture;{let S=u.image;return m&&S&&S.height>0||v&&S&&c(S)?(i===null&&(i=new cr(n)),A=m?i.fromEquirectangular(u):i.fromCubemap(u),A.texture.pmremVersion=u.pmremVersion,t.set(u,A),u.addEventListener("dispose",f),A.texture):null}}}return u}function a(u,d){return d===ua?u.mapping=qi:d===ha&&(u.mapping=yn),u}function c(u){let d=0,m=6;for(let v=0;v<m;v++)u[v]!==void 0&&d++;return d===m}function l(u){let d=u.target;d.removeEventListener("dispose",l);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function vp(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&hn("WebGLRenderer: "+i+" extension not supported."),r}}}function Mp(n,e,t,i){let r={},o=new WeakMap;function s(h){let u=h.target;u.index!==null&&e.remove(u.index);for(let m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",s),delete r[u.id];let d=o.get(u);d&&(e.remove(d),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function c(h){let u=h.attributes;for(let d in u)e.update(u[d],n.ARRAY_BUFFER)}function l(h){let u=[],d=h.index,m=h.attributes.position,v=0;if(m===void 0)return;if(d!==null){let S=d.array;v=d.version;for(let E=0,_=S.length;E<_;E+=3){let b=S[E+0],y=S[E+1],C=S[E+2];u.push(b,y,y,C,C,b)}}else{let S=m.array;v=m.version;for(let E=0,_=S.length/3-1;E<_;E+=3){let b=E+0,y=E+1,C=E+2;u.push(b,y,y,C,C,b)}}let A=new(m.count>=65535?Ao:mo)(u,1);A.version=v;let p=o.get(h);p&&e.remove(p),o.set(h,A)}function f(h){let u=o.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&l(h)}else l(h);return o.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function Sp(n,e,t){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function c(h,u){n.drawElements(i,u,o,h*s),t.update(u,i,1)}function l(h,u,d){d!==0&&(n.drawElementsInstanced(i,u,o,h*s,d),t.update(u,i,d))}function f(h,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,o,h,0,d);let v=0;for(let A=0;A<d;A++)v+=u[A];t.update(v,i,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function yp(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:at("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bp(n,e,t){let i=new WeakMap,r=new Et;function o(s,a,c){let l=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=i.get(a);if(u===void 0||u.count!==h){let w=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,A=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),v===!0&&(E=3);let _=a.attributes.position.count*E,b=1;_>e.maxTextureSize&&(b=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let y=new Float32Array(_*b*4*h),C=new ro(y,_,b,h);C.type=si,C.needsUpdate=!0;let g=E*4;for(let P=0;P<h;P++){let D=A[P],B=p[P],O=S[P],I=_*b*4*P;for(let F=0;F<D.count;F++){let X=F*g;d===!0&&(r.fromBufferAttribute(D,F),y[I+X+0]=r.x,y[I+X+1]=r.y,y[I+X+2]=r.z,y[I+X+3]=0),m===!0&&(r.fromBufferAttribute(B,F),y[I+X+4]=r.x,y[I+X+5]=r.y,y[I+X+6]=r.z,y[I+X+7]=0),v===!0&&(r.fromBufferAttribute(O,F),y[I+X+8]=r.x,y[I+X+9]=r.y,y[I+X+10]=r.z,y[I+X+11]=O.itemSize===4?r.w:1)}}u={count:h,texture:C,size:new W(_,b)},i.set(a,u),a.addEventListener("dispose",w)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:o}}function wp(n,e,t,i,r){let o=new WeakMap;function s(l){let f=r.render.frame,h=l.geometry,u=e.get(l,h);if(o.get(u)!==f&&(e.update(u),o.set(u,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),o.get(l)!==f&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),o.set(l,f))),l.isSkinnedMesh){let d=l.skeleton;o.get(d)!==f&&(d.update(),o.set(d,f))}return u}function a(){o=new WeakMap}function c(l){let f=l.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:a}}var XA={[oa]:"LINEAR_TONE_MAPPING",[sa]:"REINHARD_TONE_MAPPING",[aa]:"CINEON_TONE_MAPPING",[Gr]:"ACES_FILMIC_TONE_MAPPING",[ca]:"AGX_TONE_MAPPING",[fa]:"NEUTRAL_TONE_MAPPING",[la]:"CUSTOM_TONE_MAPPING"};function Ep(n,e,t,i,r,o){let s=new ai(e,t,{type:n,depthBuffer:r,stencilBuffer:o,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Ke;l.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Me([0,2,0,0,2,0],2));let f=new hl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new de(l,f),u=new lr(-1,1,1,-1,0,1),d=null,m=null,v=!1,A,p=null,S=[],E=!1;this.setSize=function(_,b){s.setSize(_,b),a!==null&&a.setSize(_,b),c!==null&&c.setSize(_,b);for(let y=0;y<S.length;y++){let C=S[y];C.setSize&&C.setSize(_,b)}},this.setEffects=function(_){S=_,E=S.length>0&&S[0].isRenderPass===!0;let b=s.width,y=s.height;S.length>0&&a===null&&(a=new ai(b,y,{type:hi,depthBuffer:!1,stencilBuffer:!1}),c=new ai(b,y,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let g=S[C];g.setSize&&g.setSize(b,y)}},this.begin=function(_,b){if(v||_.toneMapping===wi&&S.length===0)return!1;if(p=b,b!==null){let y=b.width,C=b.height;(s.width!==y||s.height!==C)&&this.setSize(y,C)}return E===!1&&_.setRenderTarget(s),A=_.toneMapping,_.toneMapping=wi,!0},this.hasRenderPass=function(){return E},this.end=function(_,b){_.toneMapping=A,v=!0;let y=s,C=a;for(let g=0;g<S.length;g++){let w=S[g];w.enabled!==!1&&(w.render(_,C,y,b),w.needsSwap!==!1&&(y=C,C=C===a?c:a))}if(d!==_.outputColorSpace||m!==_.toneMapping){d=_.outputColorSpace,m=_.toneMapping,f.defines={},lt.getTransfer(d)===xt&&(f.defines.SRGB_TRANSFER="");let g=XA[m];g&&(f.defines[g]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,_.setRenderTarget(p),_.render(h,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){s.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),f.dispose()}}var Ip=new Xt,zc=new an(1,1),Up=new ro,Np=new ba,Fp=new Mo,Tp=[],Rp=[],Cp=new Float32Array(16),Pp=new Float32Array(9),Lp=new Float32Array(4);function Oo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,o=Tp[r];if(o===void 0&&(o=new Float32Array(r),Tp[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function ci(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fi(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bl(n,e){let t=Rp[e];t===void 0&&(t=new Int32Array(e),Rp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function qA(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function YA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ci(t,e))return;n.uniform2fv(this.addr,e),fi(t,e)}}function ZA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ci(t,e))return;n.uniform3fv(this.addr,e),fi(t,e)}}function JA(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ci(t,e))return;n.uniform4fv(this.addr,e),fi(t,e)}}function KA(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ci(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fi(t,e)}else{if(ci(t,i))return;Lp.set(i),n.uniformMatrix2fv(this.addr,!1,Lp),fi(t,i)}}function $A(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ci(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fi(t,e)}else{if(ci(t,i))return;Pp.set(i),n.uniformMatrix3fv(this.addr,!1,Pp),fi(t,i)}}function QA(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(ci(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fi(t,e)}else{if(ci(t,i))return;Cp.set(i),n.uniformMatrix4fv(this.addr,!1,Cp),fi(t,i)}}function jA(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function e0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ci(t,e))return;n.uniform2iv(this.addr,e),fi(t,e)}}function t0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ci(t,e))return;n.uniform3iv(this.addr,e),fi(t,e)}}function i0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ci(t,e))return;n.uniform4iv(this.addr,e),fi(t,e)}}function n0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function r0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ci(t,e))return;n.uniform2uiv(this.addr,e),fi(t,e)}}function o0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ci(t,e))return;n.uniform3uiv(this.addr,e),fi(t,e)}}function s0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ci(t,e))return;n.uniform4uiv(this.addr,e),fi(t,e)}}function a0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o;this.type===n.SAMPLER_2D_SHADOW?(zc.compareFunction=t.isReversedDepthBuffer()?Qr:$r,o=zc):o=Ip,t.setTexture2D(e||o,r)}function l0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Np,r)}function c0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fp,r)}function f0(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Up,r)}function u0(n){switch(n){case 5126:return qA;case 35664:return YA;case 35665:return ZA;case 35666:return JA;case 35674:return KA;case 35675:return $A;case 35676:return QA;case 5124:case 35670:return jA;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return i0;case 5125:return n0;case 36294:return r0;case 36295:return o0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return f0}}function h0(n,e){n.uniform1fv(this.addr,e)}function d0(n,e){let t=Oo(e,this.size,2);n.uniform2fv(this.addr,t)}function p0(n,e){let t=Oo(e,this.size,3);n.uniform3fv(this.addr,t)}function m0(n,e){let t=Oo(e,this.size,4);n.uniform4fv(this.addr,t)}function A0(n,e){let t=Oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function g0(n,e){let t=Oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function x0(n,e){let t=Oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _0(n,e){n.uniform1iv(this.addr,e)}function v0(n,e){n.uniform2iv(this.addr,e)}function M0(n,e){n.uniform3iv(this.addr,e)}function S0(n,e){n.uniform4iv(this.addr,e)}function y0(n,e){n.uniform1uiv(this.addr,e)}function b0(n,e){n.uniform2uiv(this.addr,e)}function w0(n,e){n.uniform3uiv(this.addr,e)}function E0(n,e){n.uniform4uiv(this.addr,e)}function T0(n,e,t){let i=this.cache,r=e.length,o=bl(t,r);ci(i,o)||(n.uniform1iv(this.addr,o),fi(i,o));let s;this.type===n.SAMPLER_2D_SHADOW?s=zc:s=Ip;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||s,o[a])}function R0(n,e,t){let i=this.cache,r=e.length,o=bl(t,r);ci(i,o)||(n.uniform1iv(this.addr,o),fi(i,o));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Np,o[s])}function C0(n,e,t){let i=this.cache,r=e.length,o=bl(t,r);ci(i,o)||(n.uniform1iv(this.addr,o),fi(i,o));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Fp,o[s])}function P0(n,e,t){let i=this.cache,r=e.length,o=bl(t,r);ci(i,o)||(n.uniform1iv(this.addr,o),fi(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Up,o[s])}function L0(n){switch(n){case 5126:return h0;case 35664:return d0;case 35665:return p0;case 35666:return m0;case 35674:return A0;case 35675:return g0;case 35676:return x0;case 5124:case 35670:return _0;case 35667:case 35671:return v0;case 35668:case 35672:return M0;case 35669:case 35673:return S0;case 5125:return y0;case 36294:return b0;case 36295:return w0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return P0}}var Hc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=u0(t.type)}},Vc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L0(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let o=0,s=r.length;o!==s;++o){let a=r[o];a.setValue(e,t[a.id],i)}}},Gc=/(\w+)(\])?(\[|\.)?/g;function Dp(n,e){n.seq.push(e),n.map[e.id]=e}function D0(n,e,t){let i=n.name,r=i.length;for(Gc.lastIndex=0;;){let o=Gc.exec(i),s=Gc.lastIndex,a=o[1],c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&s+2===r){Dp(t,l===void 0?new Hc(a,n,e):new Vc(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new kc(a),Dp(t,h)),t=h}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);D0(a,c,this)}let r=[],o=[];for(let s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,t,i,r){let o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){let a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,o=e.length;r!==o;++r){let s=e[r];s.id in t&&i.push(s)}return i}};function Wc(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var I0=37297,U0=0;function N0(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){let a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}var Bp=new Ze;function F0(n){lt._getMatrix(Bp,lt.workingColorSpace,n);let e=`mat3( ${Bp.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case Mr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Op(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";let s=/ERROR: 0:(\d+)/.exec(o);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+N0(n.getShaderSource(e),a)}else return o}function B0(n,e){let t=F0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var O0={[oa]:"Linear",[sa]:"Reinhard",[aa]:"Cineon",[Gr]:"ACESFilmic",[ca]:"AgX",[fa]:"Neutral",[la]:"Custom"};function G0(n,e){let t=O0[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wl=new T;function z0(){lt.getLuminanceCoefficients(wl);let n=wl.x.toFixed(4),e=wl.y.toFixed(4),t=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function V0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function k0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(e,r),s=o.name,a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function Ks(n){return n!==""}function Gp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(n){return n.replace(W0,q0)}var X0=new Map;function q0(n,e){let t=ht[e];if(t===void 0){let i=X0.get(e);if(i!==void 0)t=ht[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xc(t)}var Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(n){return n.replace(Y0,Z0)}function Z0(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Vp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var J0={[Br]:"SHADOWMAP_TYPE_PCF",[Ar]:"SHADOWMAP_TYPE_VSM"};function K0(n){return J0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var $0={[qi]:"ENVMAP_TYPE_CUBE",[yn]:"ENVMAP_TYPE_CUBE",[Yn]:"ENVMAP_TYPE_CUBE_UV"};function Q0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var j0={[yn]:"ENVMAP_MODE_REFRACTION"};function eg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":j0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tg={[Or]:"ENVMAP_BLENDING_MULTIPLY",[_f]:"ENVMAP_BLENDING_MIX",[vf]:"ENVMAP_BLENDING_ADD"};function ig(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tg[n.combine]||"ENVMAP_BLENDING_NONE"}function ng(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function kp(n,e,t,i){let r=n.getContext(),o=t.defines,s=t.vertexShader,a=t.fragmentShader,c=K0(t),l=Q0(t),f=eg(t),h=ig(t),u=ng(t),d=H0(t),m=V0(o),v=r.createProgram(),A,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),A.length>0&&(A+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ks).join(`
`),p.length>0&&(p+=`
`)):(A=[Vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),p=[Vp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?ht.tonemapping_pars_fragment:"",t.toneMapping!==wi?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,B0("linearToOutputTexel",t.outputColorSpace),z0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),s=Xc(s),s=Gp(s,t),s=zp(s,t),a=Xc(a),a=Gp(a,t),a=zp(a,t),s=Hp(s),a=Hp(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,A=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,p=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=S+A+s,_=S+p+a,b=Wc(r,r.VERTEX_SHADER,E),y=Wc(r,r.FRAGMENT_SHADER,_);r.attachShader(v,b),r.attachShader(v,y),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(D){if(n.debug.checkShaderErrors){let B=r.getProgramInfoLog(v)||"",O=r.getShaderInfoLog(b)||"",I=r.getShaderInfoLog(y)||"",F=B.trim(),X=O.trim(),k=I.trim(),ae=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,b,y);else{let Q=Op(r,b,"vertex"),re=Op(r,y,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+Q+`
`+re)}else F!==""?Pe("WebGLProgram: Program Info Log:",F):(X===""||k==="")&&(q=!1);q&&(D.diagnostics={runnable:ae,programLog:F,vertexShader:{log:X,prefix:A},fragmentShader:{log:k,prefix:p}})}r.deleteShader(b),r.deleteShader(y),g=new fr(r,v),w=k0(r,v)}let g;this.getUniforms=function(){return g===void 0&&C(this),g};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(v,I0)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=y,this}var rg=0,El=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new qc(e),t.set(e,i)),i}},qc=class{constructor(e){this.id=rg++,this.code=e,this.usedTimes=0}};function og(n){return n===zi||n===gr||n===xr}function Wp(n,e,t,i,r,o){let s=new Kn,a=new El,c=new Set,l=[],f=new Map,h=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function v(g,w,P,D,B,O){let I=D.fog,F=B.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,k=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,ae=e.get(g.envMap||X,k),q=ae&&ae.mapping===Yn?ae.image.height:null,Q=d[g.type];g.precision!==null&&(u=i.getMaxPrecision(g.precision),u!==g.precision&&Pe("WebGLProgram.getParameters:",g.precision,"not supported, using",u,"instead."));let re=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Le=re!==void 0?re.length:0,Re=0;F.morphAttributes.position!==void 0&&(Re=1),F.morphAttributes.normal!==void 0&&(Re=2),F.morphAttributes.color!==void 0&&(Re=3);let ct,rt,ft,K;if(Q){let Rt=$i[Q];ct=Rt.vertexShader,rt=Rt.fragmentShader}else{ct=g.vertexShader,rt=g.fragmentShader;let Rt=a.getVertexShaderStage(g),mt=a.getFragmentShaderStage(g);a.update(g,Rt,mt),ft=Rt.id,K=mt.id}let te=n.getRenderTarget(),xe=n.state.buffers.depth.getReversed(),Ue=B.isInstancedMesh===!0,ye=B.isBatchedMesh===!0,Ne=!!g.map,qe=!!g.matcap,ee=!!ae,Z=!!g.aoMap,ne=!!g.lightMap,se=!!g.bumpMap&&g.wireframe===!1,fe=!!g.normalMap,De=!!g.displacementMap,we=!!g.emissiveMap,We=!!g.metalnessMap,$e=!!g.roughnessMap,L=g.anisotropy>0,ut=g.clearcoat>0,nt=g.dispersion>0,R=g.retroreflectivity>0,x=g.iridescence>0,G=g.sheen>0,z=g.transmission>0,J=L&&!!g.anisotropyMap,ue=ut&&!!g.clearcoatMap,me=ut&&!!g.clearcoatNormalMap,$=ut&&!!g.clearcoatRoughnessMap,j=x&&!!g.iridescenceMap,pe=x&&!!g.iridescenceThicknessMap,ze=G&&!!g.sheenColorMap,ve=G&&!!g.sheenRoughnessMap,Ae=!!g.specularMap,He=!!g.specularColorMap,Ye=!!g.specularIntensityMap,et=z&&!!g.transmissionMap,N=z&&!!g.thicknessMap,_e=!!g.gradientMap,ie=!!g.alphaMap,ge=g.alphaTest>0,Se=!!g.alphaHash,ce=!!g.extensions,Fe=wi;g.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Fe=n.toneMapping);let Be={shaderID:Q,shaderType:g.type,shaderName:g.name,vertexShader:ct,fragmentShader:rt,defines:g.defines,customVertexShaderID:ft,customFragmentShaderID:K,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:u,batching:ye,batchingColor:ye&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ne,matcap:qe,envMap:ee,envMapMode:ee&&ae.mapping,envMapCubeUVHeight:q,aoMap:Z,lightMap:ne,bumpMap:se,normalMap:fe,displacementMap:De,emissiveMap:we,normalMapObjectSpace:fe&&g.normalMapType===yf,normalMapTangentSpace:fe&&g.normalMapType===_r,packedNormalMap:fe&&g.normalMapType===_r&&og(g.normalMap.format),metalnessMap:We,roughnessMap:$e,anisotropy:L,anisotropyMap:J,clearcoat:ut,clearcoatMap:ue,clearcoatNormalMap:me,clearcoatRoughnessMap:$,dispersion:nt,retroreflection:R,iridescence:x,iridescenceMap:j,iridescenceThicknessMap:pe,sheen:G,sheenColorMap:ze,sheenRoughnessMap:ve,specularMap:Ae,specularColorMap:He,specularIntensityMap:Ye,transmission:z,transmissionMap:et,thicknessMap:N,gradientMap:_e,opaque:g.transparent===!1&&g.blending===Wn&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:ge,alphaHash:Se,combine:g.combine,mapUv:Ne&&m(g.map.channel),aoMapUv:Z&&m(g.aoMap.channel),lightMapUv:ne&&m(g.lightMap.channel),bumpMapUv:se&&m(g.bumpMap.channel),normalMapUv:fe&&m(g.normalMap.channel),displacementMapUv:De&&m(g.displacementMap.channel),emissiveMapUv:we&&m(g.emissiveMap.channel),metalnessMapUv:We&&m(g.metalnessMap.channel),roughnessMapUv:$e&&m(g.roughnessMap.channel),anisotropyMapUv:J&&m(g.anisotropyMap.channel),clearcoatMapUv:ue&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(g.sheenRoughnessMap.channel),specularMapUv:Ae&&m(g.specularMap.channel),specularColorMapUv:He&&m(g.specularColorMap.channel),specularIntensityMapUv:Ye&&m(g.specularIntensityMap.channel),transmissionMapUv:et&&m(g.transmissionMap.channel),thicknessMapUv:N&&m(g.thicknessMap.channel),alphaMapUv:ie&&m(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(fe||L),vertexNormals:!!F.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!F.attributes.uv&&(Ne||ie),fog:!!I,useFog:g.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||F.attributes.normal===void 0&&fe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Re,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ne&&g.map.isVideoTexture===!0&&lt.getTransfer(g.map.colorSpace)===xt,decodeVideoTextureEmissive:we&&g.emissiveMap.isVideoTexture===!0&&lt.getTransfer(g.emissiveMap.colorSpace)===xt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ht,flipSided:g.side===Pt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ce&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&g.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function A(g){let w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)w.push(P),w.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(p(w,g),S(w,g),w.push(n.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function p(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapCubeUVHeight),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.morphAttributeCount),g.push(w.numSunLights),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numSunLightShadows),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function S(g,w){s.disableAll(),w.instancing&&s.enable(0),w.instancingColor&&s.enable(1),w.instancingMorph&&s.enable(2),w.matcap&&s.enable(3),w.envMap&&s.enable(4),w.normalMapObjectSpace&&s.enable(5),w.normalMapTangentSpace&&s.enable(6),w.clearcoat&&s.enable(7),w.iridescence&&s.enable(8),w.alphaTest&&s.enable(9),w.vertexColors&&s.enable(10),w.vertexAlphas&&s.enable(11),w.vertexUv1s&&s.enable(12),w.vertexUv2s&&s.enable(13),w.vertexUv3s&&s.enable(14),w.vertexTangents&&s.enable(15),w.anisotropy&&s.enable(16),w.alphaHash&&s.enable(17),w.batching&&s.enable(18),w.dispersion&&s.enable(19),w.retroreflection&&s.enable(24),w.batchingColor&&s.enable(20),w.gradientMap&&s.enable(21),w.packedNormalMap&&s.enable(22),w.vertexNormals&&s.enable(23),g.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.reversedDepthBuffer&&s.enable(4),w.skinning&&s.enable(5),w.morphTargets&&s.enable(6),w.morphNormals&&s.enable(7),w.morphColors&&s.enable(8),w.premultipliedAlpha&&s.enable(9),w.shadowMapEnabled&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),w.decodeVideoTexture&&s.enable(19),w.decodeVideoTextureEmissive&&s.enable(20),w.alphaToCoverage&&s.enable(21),w.numLightProbeGrids>0&&s.enable(22),w.hasPositionAttribute&&s.enable(23),g.push(s.mask)}function E(g){let w=d[g.type],P;if(w){let D=$i[w];P=_u.clone(D.uniforms)}else P=g.uniforms;return P}function _(g,w){let P=f.get(w);return P!==void 0?++P.usedTimes:(P=new kp(n,w,g,r),l.push(P),f.set(w,P)),P}function b(g){if(--g.usedTimes===0){let w=l.indexOf(g);l[w]=l[l.length-1],l.pop(),f.delete(g.cacheKey),g.destroy()}}function y(g){a.remove(g)}function C(){a.dispose()}return{getParameters:v,getProgramCacheKey:A,getUniforms:E,acquireProgram:_,releaseProgram:b,releaseShaderCache:y,programs:l,dispose:C}}function Xp(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function i(s){n.delete(s)}function r(s,a,c){n.get(s)[a]=c}function o(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:o}}function sg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function qp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yp(){let n=[],e=0,t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,v,A,p){let S=n[e];return S===void 0?(S={id:u.id,object:u,geometry:d,material:m,materialVariant:s(u),groupOrder:v,renderOrder:u.renderOrder,z:A,group:p},n[e]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=m,S.materialVariant=s(u),S.groupOrder=v,S.renderOrder=u.renderOrder,S.z=A,S.group=p),e++,S}function c(u,d,m,v,A,p,S){S.reversedDepth===!0&&(A=-A);let E=a(u,d,m,v,A,p);m.transmission>0?i.push(E):m.transparent===!0?r.push(E):t.push(E)}function l(u,d,m,v,A,p){let S=a(u,d,m,v,A,p);m.transmission>0?i.unshift(S):m.transparent===!0?r.unshift(S):t.unshift(S)}function f(u,d){t.length>1&&t.sort(u||sg),i.length>1&&i.sort(d||qp),r.length>1&&r.sort(d||qp)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:f}}function Zp(){let n=new WeakMap;function e(i,r){let o=n.get(i),s;return o===void 0?(s=new Yp,n.set(i,[s])):r>=o.length?(s=new Yp,o.push(s)):s=o[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function ag(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new T,color:new le};break;case"SpotLight":t={position:new T,direction:new T,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new le,groundColor:new le};break;case"RectAreaLight":t={color:new le,position:new T,halfWidth:new T,halfHeight:new T};break}return n[e.id]=t,t}}}function lg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var cg=0;function fg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jp(n){let e=new ag,t=lg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new T);let r=new T,o=new tt,s=new tt;function a(l){let f=0,h=0,u=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,m=0,v=0,A=0,p=0,S=0,E=0,_=0,b=0,y=0,C=0,g=0,w=0,P=0;l.sort(fg);for(let B=0,O=l.length;B<O;B++){let I=l[B],F=I.color,X=I.intensity,k=I.distance,ae=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===zi?ae=I.shadow.map.texture:ae=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=F.r*X,h+=F.g*X,u+=F.b*X;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],X);P++}else if(I.isSunLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,re=t.get(I);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[m]=re,i.sunShadowMap[m]=ae;let Le=Q.getViewportCount();for(let Re=0;Re<Le;Re++)i.sunShadowMatrix[v+Re]=Q.getMatrix(Re),i.sunShadowCascade[v+Re]=Q._cascadeData[Re];v+=Le,m++}i.sun[d]=q,d++}else if(I.isDirectionalLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,re=t.get(I);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,i.directionalShadow[A]=re,i.directionalShadowMap[A]=ae,i.directionalShadowMatrix[A]=I.shadow.matrix,b++}i.directional[A]=q,A++}else if(I.isSpotLight){let q=e.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(F).multiplyScalar(X),q.distance=k,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[S]=q;let Q=I.shadow;if(I.map&&(i.spotLightMap[g]=I.map,g++,Q.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[S]=Q.matrix,I.castShadow){let re=t.get(I);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,i.spotShadow[S]=re,i.spotShadowMap[S]=ae,C++}S++}else if(I.isRectAreaLight){let q=e.get(I);q.color.copy(F).multiplyScalar(X),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=q,E++}else if(I.isPointLight){let q=e.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let Q=I.shadow,re=t.get(I);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,re.shadowCameraNear=Q.camera.near,re.shadowCameraFar=Q.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=ae,i.pointShadowMatrix[p]=I.shadow.matrix,y++}i.point[p]=q,p++}else if(I.isHemisphereLight){let q=e.get(I);q.skyColor.copy(I.color).multiplyScalar(X),q.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[_]=q,_++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;let D=i.hash;(D.sunLength!==d||D.directionalLength!==A||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==E||D.hemiLength!==_||D.numSunShadows!==m||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==C||D.numSpotMaps!==g||D.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=A,i.spot.length=S,i.rectArea.length=E,i.point.length=p,i.hemi.length=_,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=y,i.pointShadowMap.length=y,i.pointShadowMatrix.length=y,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+g-w,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,D.sunLength=d,D.directionalLength=A,D.pointLength=p,D.spotLength=S,D.rectAreaLength=E,D.hemiLength=_,D.numSunShadows=m,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=C,D.numSpotMaps=g,D.numLightProbes=P,i.version=cg++)}function c(l,f){let h=0,u=0,d=0,m=0,v=0,A=0,p=f.matrixWorldInverse;for(let S=0,E=l.length;S<E;S++){let _=l[S];if(_.isSunLight){let b=i.sun[h];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),h++}else if(_.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),u++}else if(_.isSpotLight){let b=i.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let b=i.rectArea[v];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),s.identity(),o.copy(_.matrixWorld),o.premultiply(p),s.extractRotation(o),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),v++}else if(_.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let b=i.hemi[A];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),A++}}}return{setup:a,setupView:c,state:i}}function Kp(n){let e=new Jp(n),t=[],i=[],r=[];function o(u){h.camera=u,t.length=0,i.length=0,r.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function c(u){r.push(u)}function l(){e.setup(t)}function f(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:h,setupLights:l,setupLightsView:f,pushLight:s,pushShadow:a,pushLightProbeGrid:c}}function $p(n){let e=new WeakMap;function t(r,o=0){let s=e.get(r),a;return s===void 0?(a=new Kp(n),e.set(r,[a])):o>=s.length?(a=new Kp(n),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Qp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,jp=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );

	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );

}
`;var hg=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],dg=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],em=new tt,$s=new T,Yc=new T;function tm(n,e,t){let i=new er,r=new W,o=new W,s=new Et,a=new dl,c=new pl,l={},f=t.maxTextureSize,h={[Xi]:Pt,[Pt]:Xi,[Ht]:Ht},u=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:Qp,fragmentShader:jp}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ke;m.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new de(m,u),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Br;let p=this.type;this.render=function(y,C,g){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||y.length===0)return;this.type===jc&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Br);let w=n.getRenderTarget(),P=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Gi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=p!==this.type;O&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=y.length;I<F;I++){let X=y[I],k=X.shadow;if(k===void 0){Pe("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let ae=k.getFrameExtents();r.multiply(ae),o.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/ae.x),r.x=o.x*ae.x,k.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/ae.y),r.y=o.y*ae.y,k.mapSize.y=o.y));let q=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=q,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ar){if(X.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ai(r.x,r.y,{format:zi,type:hi,minFilter:Wt,magFilter:Wt,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new an(r.x,r.y,si),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=Ei,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vt,k.map.depthTexture.magFilter=Vt}else X.isPointLight?(k.map=new Bo(r.x),k.map.depthTexture=new Qa(r.x,ui)):(k.map=new ai(r.x,r.y),k.map.depthTexture=new an(r.x,r.y,ui)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=Ei,this.type===Br?(k.map.depthTexture.compareFunction=q?Qr:$r,k.map.depthTexture.minFilter=Wt,k.map.depthTexture.magFilter=Wt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vt,k.map.depthTexture.magFilter=Vt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);let Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,g);for(let re=0;re<Q;re++){let Le=k.getCamera(re);if(X.isPointLight){let Re=k.camera,ct=k.matrix,rt=X.distance||Re.far;rt!==Re.far&&(Re.far=rt,Re.updateProjectionMatrix()),$s.setFromMatrixPosition(X.matrixWorld),Re.position.copy($s),Yc.copy(Re.position),Yc.add(hg[re]),Re.up.copy(dg[re]),Re.lookAt(Yc),Re.updateMatrixWorld(),ct.makeTranslation(-$s.x,-$s.y,-$s.z),em.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),k._frustum.setFromProjectionMatrix(em,Re.coordinateSystem,Re.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,re),n.clear();else{re===0&&(n.setRenderTarget(k.map),n.clear());let Re=k.getViewport(re);s.set(o.x*Re.x,o.y*Re.y,o.x*Re.z,o.y*Re.w),B.viewport(s)}i=k.getFrustum(re),_(C,g,Le,X,this.type)}k.isPointLightShadow!==!0&&this.type===Ar&&S(k,g),k.needsUpdate=!1}p=this.type,A.needsUpdate=!1,n.setRenderTarget(w,P,D)};function S(y,C){let g=e.update(v);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new ai(r.x,r.y,{format:zi,type:hi}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value.set(y.map.width,y.map.height),u.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(C,null,g,u,v,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(C,null,g,d,v,null)}function E(y,C,g,w){let P=null,D=g.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)P=D;else if(P=g.isPointLight===!0?c:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=P.uuid,O=C.uuid,I=l[B];I===void 0&&(I={},l[B]=I);let F=I[O];F===void 0&&(F=P.clone(),I[O]=F,C.addEventListener("dispose",b)),P=F}if(P.visible=C.visible,P.wireframe=C.wireframe,w===Ar?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:h[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,g.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let B=n.properties.get(P);B.light=g}return P}function _(y,C,g,w,P){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&P===Ar)&&(!y.frustumCulled||y.intersectsFrustum(i))){y.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,y.matrixWorld);let O=e.update(y),I=y.material;if(Array.isArray(I)){let F=O.groups;for(let X=0,k=F.length;X<k;X++){let ae=F[X],q=I[ae.materialIndex];if(q&&q.visible){let Q=E(y,q,w,P);y.onBeforeShadow(n,y,C,g,O,Q,ae),n.renderBufferDirect(g,null,O,Q,y,ae),y.onAfterShadow(n,y,C,g,O,Q,ae)}}}else if(I.visible){let F=E(y,I,w,P);y.onBeforeShadow(n,y,C,g,O,F,null),n.renderBufferDirect(g,null,O,F,y,null),y.onAfterShadow(n,y,C,g,O,F,null)}}let B=y.children;for(let O=0,I=B.length;O<I;O++)_(B[O],C,g,w,P)}function b(y){y.target.removeEventListener("dispose",b);for(let g in l){let w=l[g],P=y.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function im(n,e){function t(){let N=!1,_e=new Et,ie=null,ge=new Et(0,0,0,0);return{setMask:function(Se){ie!==Se&&!N&&(n.colorMask(Se,Se,Se,Se),ie=Se)},setLocked:function(Se){N=Se},setClear:function(Se,ce,Fe,Be,Rt){Rt===!0&&(Se*=Be,ce*=Be,Fe*=Be),_e.set(Se,ce,Fe,Be),ge.equals(_e)===!1&&(n.clearColor(Se,ce,Fe,Be),ge.copy(_e))},reset:function(){N=!1,ie=null,ge.set(-1,0,0,0)}}}function i(){let N=!1,_e=!1,ie=null,ge=null,Se=null;return{setReversed:function(ce){if(_e!==ce){let Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),_e=ce;let Be=Se;Se=null,this.setClear(Be)}},getReversed:function(){return _e},setTest:function(ce){ce?te(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(ce){ie!==ce&&!N&&(n.depthMask(ce),ie=ce)},setFunc:function(ce){if(_e&&(ce=Bf[ce]),ge!==ce){switch(ce){case Yo:n.depthFunc(n.NEVER);break;case Zo:n.depthFunc(n.ALWAYS);break;case Jo:n.depthFunc(n.LESS);break;case qn:n.depthFunc(n.LEQUAL);break;case Ko:n.depthFunc(n.EQUAL);break;case $o:n.depthFunc(n.GEQUAL);break;case Qo:n.depthFunc(n.GREATER);break;case jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=ce}},setLocked:function(ce){N=ce},setClear:function(ce){Se!==ce&&(Se=ce,_e&&(ce=1-ce),n.clearDepth(ce))},reset:function(){N=!1,ie=null,ge=null,Se=null,_e=!1}}}function r(){let N=!1,_e=null,ie=null,ge=null,Se=null,ce=null,Fe=null,Be=null,Rt=null;return{setTest:function(mt){N||(mt?te(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(mt){_e!==mt&&!N&&(n.stencilMask(mt),_e=mt)},setFunc:function(mt,he,Ge){(ie!==mt||ge!==he||Se!==Ge)&&(n.stencilFunc(mt,he,Ge),ie=mt,ge=he,Se=Ge)},setOp:function(mt,he,Ge){(ce!==mt||Fe!==he||Be!==Ge)&&(n.stencilOp(mt,he,Ge),ce=mt,Fe=he,Be=Ge)},setLocked:function(mt){N=mt},setClear:function(mt){Rt!==mt&&(n.clearStencil(mt),Rt=mt)},reset:function(){N=!1,_e=null,ie=null,ge=null,Se=null,ce=null,Fe=null,Be=null,Rt=null}}}let o=new t,s=new i,a=new r,c=new WeakMap,l=new WeakMap,f={},h={},u={},d=new WeakMap,m=[],v=null,A=!1,p=null,S=null,E=null,_=null,b=null,y=null,C=null,g=new le(0,0,0),w=0,P=!1,D=null,B=null,O=null,I=null,F=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ae=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=ae>=1):q.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=ae>=2);let Q=null,re={},Le=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),ct=new Et().fromArray(Le),rt=new Et().fromArray(Re);function ft(N,_e,ie,ge){let Se=new Uint8Array(4),ce=n.createTexture();n.bindTexture(N,ce),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<ie;Fe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(_e+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return ce}let K={};K[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),te(n.DEPTH_TEST),s.setFunc(qn),se(!1),fe(Xl),te(n.CULL_FACE),Z(Gi);function te(N){f[N]!==!0&&(n.enable(N),f[N]=!0)}function xe(N){f[N]!==!1&&(n.disable(N),f[N]=!1)}function Ue(N,_e){return u[N]!==_e?(n.bindFramebuffer(N,_e),u[N]=_e,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_e),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function ye(N,_e){let ie=m,ge=!1;if(N){ie=d.get(_e),ie===void 0&&(ie=[],d.set(_e,ie));let Se=N.textures;if(ie.length!==Se.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Fe=Se.length;ce<Fe;ce++)ie[ce]=n.COLOR_ATTACHMENT0+ce;ie.length=Se.length,ge=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,ge=!0);ge&&n.drawBuffers(ie)}function Ne(N){return v!==N?(n.useProgram(N),v=N,!0):!1}let qe={[Xn]:n.FUNC_ADD,[tf]:n.FUNC_SUBTRACT,[nf]:n.FUNC_REVERSE_SUBTRACT};qe[rf]=n.MIN,qe[of]=n.MAX;let ee={[sf]:n.ZERO,[af]:n.ONE,[lf]:n.SRC_COLOR,[na]:n.SRC_ALPHA,[pf]:n.SRC_ALPHA_SATURATE,[hf]:n.DST_COLOR,[ff]:n.DST_ALPHA,[cf]:n.ONE_MINUS_SRC_COLOR,[ra]:n.ONE_MINUS_SRC_ALPHA,[df]:n.ONE_MINUS_DST_COLOR,[uf]:n.ONE_MINUS_DST_ALPHA,[mf]:n.CONSTANT_COLOR,[Af]:n.ONE_MINUS_CONSTANT_COLOR,[gf]:n.CONSTANT_ALPHA,[xf]:n.ONE_MINUS_CONSTANT_ALPHA};function Z(N,_e,ie,ge,Se,ce,Fe,Be,Rt,mt){if(N===Gi){A===!0&&(xe(n.BLEND),A=!1);return}if(A===!1&&(te(n.BLEND),A=!0),N!==ef){if(N!==p||mt!==P){if((S!==Xn||b!==Xn)&&(n.blendEquation(n.FUNC_ADD),S=Xn,b=Xn),mt)switch(N){case Wn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kt:n.blendFunc(n.ONE,n.ONE);break;case ql:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",N);break}else switch(N){case Wn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ql:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",N);break}E=null,_=null,y=null,C=null,g.set(0,0,0),w=0,p=N,P=mt}return}Se=Se||_e,ce=ce||ie,Fe=Fe||ge,(_e!==S||Se!==b)&&(n.blendEquationSeparate(qe[_e],qe[Se]),S=_e,b=Se),(ie!==E||ge!==_||ce!==y||Fe!==C)&&(n.blendFuncSeparate(ee[ie],ee[ge],ee[ce],ee[Fe]),E=ie,_=ge,y=ce,C=Fe),(Be.equals(g)===!1||Rt!==w)&&(n.blendColor(Be.r,Be.g,Be.b,Rt),g.copy(Be),w=Rt),p=N,P=!1}function ne(N,_e){N.side===Ht?xe(n.CULL_FACE):te(n.CULL_FACE);let ie=N.side===Pt;_e&&(ie=!ie),se(ie),N.blending===Wn&&N.transparent===!1?Z(Gi):Z(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),o.setMask(N.colorWrite);let ge=N.stencilWrite;a.setTest(ge),ge&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),we(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function fe(N){N!==$c?(te(n.CULL_FACE),N!==B&&(N===Xl?n.cullFace(n.BACK):N===Qc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),B=N}function De(N){N!==O&&(k&&n.lineWidth(N),O=N)}function we(N,_e,ie){N?(te(n.POLYGON_OFFSET_FILL),(I!==_e||F!==ie)&&(I=_e,F=ie,s.getReversed()&&(_e=-_e),n.polygonOffset(_e,ie))):xe(n.POLYGON_OFFSET_FILL)}function We(N){N?te(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function $e(N){N===void 0&&(N=n.TEXTURE0+X-1),Q!==N&&(n.activeTexture(N),Q=N)}function L(N,_e,ie){ie===void 0&&(Q===null?ie=n.TEXTURE0+X-1:ie=Q);let ge=re[ie];ge===void 0&&(ge={type:void 0,texture:void 0},re[ie]=ge),(ge.type!==N||ge.texture!==_e)&&(Q!==ie&&(n.activeTexture(ie),Q=ie),n.bindTexture(N,_e||K[N]),ge.type=N,ge.texture=_e)}function ut(){let N=re[Q];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function nt(){try{n.compressedTexImage2D(...arguments)}catch(N){at("WebGLState:",N)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(N){at("WebGLState:",N)}}function x(){try{n.texSubImage2D(...arguments)}catch(N){at("WebGLState:",N)}}function G(){try{n.texSubImage3D(...arguments)}catch(N){at("WebGLState:",N)}}function z(){try{n.compressedTexSubImage2D(...arguments)}catch(N){at("WebGLState:",N)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(N){at("WebGLState:",N)}}function ue(){try{n.texStorage2D(...arguments)}catch(N){at("WebGLState:",N)}}function me(){try{n.texStorage3D(...arguments)}catch(N){at("WebGLState:",N)}}function $(){try{n.texImage2D(...arguments)}catch(N){at("WebGLState:",N)}}function j(){try{n.texImage3D(...arguments)}catch(N){at("WebGLState:",N)}}function pe(N){return h[N]!==void 0?h[N]:n.getParameter(N)}function ze(N,_e){h[N]!==_e&&(n.pixelStorei(N,_e),h[N]=_e)}function ve(N){ct.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ct.copy(N))}function Ae(N){rt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),rt.copy(N))}function He(N,_e){let ie=l.get(_e);ie===void 0&&(ie=new WeakMap,l.set(_e,ie));let ge=ie.get(N);ge===void 0&&(ge=n.getUniformBlockIndex(_e,N.name),ie.set(N,ge))}function Ye(N,_e){let ge=l.get(_e).get(N);c.get(_e)!==ge&&(n.uniformBlockBinding(_e,ge,N.__bindingPointIndex),c.set(_e,ge))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},Q=null,re={},u={},d=new WeakMap,m=[],v=null,A=!1,p=null,S=null,E=null,_=null,b=null,y=null,C=null,g=new le(0,0,0),w=0,P=!1,D=null,B=null,O=null,I=null,F=null,ct.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:te,disable:xe,bindFramebuffer:Ue,drawBuffers:ye,useProgram:Ne,setBlending:Z,setMaterial:ne,setFlipSided:se,setCullFace:fe,setLineWidth:De,setPolygonOffset:we,setScissorTest:We,activeTexture:$e,bindTexture:L,unbindTexture:ut,compressedTexImage2D:nt,compressedTexImage3D:R,texImage2D:$,texImage3D:j,pixelStorei:ze,getParameter:pe,updateUBOMapping:He,uniformBlockBinding:Ye,texStorage2D:ue,texStorage3D:me,texSubImage2D:x,texSubImage3D:G,compressedTexSubImage2D:z,compressedTexSubImage3D:J,scissor:ve,viewport:Ae,reset:et}}function nm(n,e,t,i,r,o,s){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new W,f=new WeakMap,h=new Set,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return m?new OffscreenCanvas(R,x):eo("canvas")}function A(R,x,G){let z=1,J=nt(R);if((J.width>G||J.height>G)&&(z=G/Math.max(J.width,J.height)),z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ue=Math.floor(z*J.width),me=Math.floor(z*J.height);u===void 0&&(u=v(ue,me));let $=x?v(ue,me):u;return $.width=ue,$.height=me,$.getContext("2d").drawImage(R,0,0,ue,me),Pe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+me+")."),$}else return"data"in R&&Pe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function p(R){return R.generateMipmaps}function S(R){n.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,x,G,z,J,ue=!1){if(R!==null){if(n[R]!==void 0)return n[R];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let me;z&&(me=e.get("EXT_texture_norm16"),me||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===n.RED&&(G===n.FLOAT&&($=n.R32F),G===n.HALF_FLOAT&&($=n.R16F),G===n.UNSIGNED_BYTE&&($=n.R8),G===n.UNSIGNED_SHORT&&me&&($=me.R16_EXT),G===n.SHORT&&me&&($=me.R16_SNORM_EXT)),x===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.R8UI),G===n.UNSIGNED_SHORT&&($=n.R16UI),G===n.UNSIGNED_INT&&($=n.R32UI),G===n.BYTE&&($=n.R8I),G===n.SHORT&&($=n.R16I),G===n.INT&&($=n.R32I)),x===n.RG&&(G===n.FLOAT&&($=n.RG32F),G===n.HALF_FLOAT&&($=n.RG16F),G===n.UNSIGNED_BYTE&&($=n.RG8),G===n.UNSIGNED_SHORT&&me&&($=me.RG16_EXT),G===n.SHORT&&me&&($=me.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RG8UI),G===n.UNSIGNED_SHORT&&($=n.RG16UI),G===n.UNSIGNED_INT&&($=n.RG32UI),G===n.BYTE&&($=n.RG8I),G===n.SHORT&&($=n.RG16I),G===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGB8UI),G===n.UNSIGNED_SHORT&&($=n.RGB16UI),G===n.UNSIGNED_INT&&($=n.RGB32UI),G===n.BYTE&&($=n.RGB8I),G===n.SHORT&&($=n.RGB16I),G===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&($=n.RGBA8UI),G===n.UNSIGNED_SHORT&&($=n.RGBA16UI),G===n.UNSIGNED_INT&&($=n.RGBA32UI),G===n.BYTE&&($=n.RGBA8I),G===n.SHORT&&($=n.RGBA16I),G===n.INT&&($=n.RGBA32I)),x===n.RGB&&(G===n.UNSIGNED_SHORT&&me&&($=me.RGB16_EXT),G===n.SHORT&&me&&($=me.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),x===n.RGBA){let j=ue?Mr:lt.getTransfer(J);G===n.FLOAT&&($=n.RGBA32F),G===n.HALF_FLOAT&&($=n.RGBA16F),G===n.UNSIGNED_BYTE&&($=j===xt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&me&&($=me.RGBA16_EXT),G===n.SHORT&&me&&($=me.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(R,x){let G;return R?x===null||x===ui||x===wn?G=n.DEPTH24_STENCIL8:x===si?G=n.DEPTH32F_STENCIL8:x===bn&&(G=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ui||x===wn?G=n.DEPTH_COMPONENT24:x===si?G=n.DEPTH_COMPONENT32F:x===bn&&(G=n.DEPTH_COMPONENT16),G}function y(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vt&&R.minFilter!==Wt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function C(R){let x=R.target;x.removeEventListener("dispose",C),w(x),x.isVideoTexture&&f.delete(x),x.isHTMLTexture&&h.delete(x)}function g(R){let x=R.target;x.removeEventListener("dispose",g),D(x)}function w(R){let x=i.get(R);if(x.__webglInit===void 0)return;let G=R.source,z=d.get(G);if(z){let J=z[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(R),Object.keys(z).length===0&&d.delete(G)}i.remove(R)}function P(R){let x=i.get(R);n.deleteTexture(x.__webglTexture);let G=R.source,z=d.get(G);delete z[x.__cacheKey],s.memory.textures--}function D(R){let x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(x.__webglFramebuffer[z]))for(let J=0;J<x.__webglFramebuffer[z].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[z][J]);else n.deleteFramebuffer(x.__webglFramebuffer[z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[z])}else{if(Array.isArray(x.__webglFramebuffer))for(let z=0;z<x.__webglFramebuffer.length;z++)n.deleteFramebuffer(x.__webglFramebuffer[z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let z=0;z<x.__webglColorRenderbuffer.length;z++)x.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let G=R.textures;for(let z=0,J=G.length;z<J;z++){let ue=i.get(G[z]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),s.memory.textures--),i.remove(G[z])}i.remove(R)}let B=0;function O(){B=0}function I(){return B}function F(R){B=R}function X(){let R=B;return R>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,R}function k(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function ae(R,x){let G=i.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let z=R.image;if(z===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(G,R,x);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+x)}function q(R,x){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){xe(G,R,x);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+x)}function Q(R,x){let G=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){xe(G,R,x);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+x)}function re(R,x){let G=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Ue(G,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+x)}let Le={[Qi]:n.REPEAT,[Fi]:n.CLAMP_TO_EDGE,[es]:n.MIRRORED_REPEAT},Re={[Vt]:n.NEAREST,[Mf]:n.NEAREST_MIPMAP_NEAREST,[ts]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[da]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},ct={[wf]:n.NEVER,[Pf]:n.ALWAYS,[Ef]:n.LESS,[$r]:n.LEQUAL,[Tf]:n.EQUAL,[Qr]:n.GEQUAL,[Rf]:n.GREATER,[Cf]:n.NOTEQUAL};function rt(R,x){if(x.type===si&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Wt||x.magFilter===da||x.magFilter===ts||x.magFilter===ji||x.minFilter===Wt||x.minFilter===da||x.minFilter===ts||x.minFilter===ji)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Le[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Le[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Le[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Re[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Re[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ct[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==ts&&x.minFilter!==ji||x.type===si&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ft(R,x){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",C));let z=x.source,J=d.get(z);J===void 0&&(J={},d.set(z,J));let ue=k(x);if(ue!==R.__cacheKey){J[ue]===void 0&&(J[ue]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,G=!0),J[ue].usedTimes++;let me=J[R.__cacheKey];me!==void 0&&(J[R.__cacheKey].usedTimes--,me.usedTimes===0&&P(x)),R.__cacheKey=ue,R.__webglTexture=J[ue].texture}return G}function K(R,x,G){return Math.floor(Math.floor(R/G)/x)}function te(R,x,G,z){let ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,G,z,x.data);else{ue.sort((ze,ve)=>ze.start-ve.start);let me=0;for(let ze=1;ze<ue.length;ze++){let ve=ue[me],Ae=ue[ze],He=ve.start+ve.count,Ye=K(Ae.start,x.width,4),et=K(ve.start,x.width,4);Ae.start<=He+1&&Ye===et&&K(Ae.start+Ae.count-1,x.width,4)===Ye?ve.count=Math.max(ve.count,Ae.start+Ae.count-ve.start):(++me,ue[me]=Ae)}ue.length=me+1;let $=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ze=0,ve=ue.length;ze<ve;ze++){let Ae=ue[ze],He=Math.floor(Ae.start/4),Ye=Math.ceil(Ae.count/4),et=He%x.width,N=Math.floor(He/x.width),_e=Ye,ie=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,et),t.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,et,N,_e,ie,G,z,x.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function xe(R,x,G){let z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=n.TEXTURE_3D);let J=ft(R,x),ue=x.source;t.bindTexture(z,R.__webglTexture,n.TEXTURE0+G);let me=i.get(ue);if(ue.version!==me.__version||J===!0){if(t.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ie=lt.getPrimaries(lt.workingColorSpace),ge=x.colorSpace===Yi?null:lt.getPrimaries(x.colorSpace),Se=x.colorSpace===Yi||ie===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let j=A(x.image,!1,r.maxTextureSize);j=ut(x,j);let pe=o.convert(x.format,x.colorSpace),ze=o.convert(x.type),ve=_(x.internalFormat,pe,ze,x.normalized,x.colorSpace,x.isVideoTexture);rt(z,x);let Ae,He=x.mipmaps,Ye=x.isVideoTexture!==!0,et=me.__version===void 0||J===!0,N=ue.dataReady,_e=y(x,j);if(x.isDepthTexture)ve=b(x.format===en,x.type),et&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,ve,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,ve,j.width,j.height,0,pe,ze,null));else if(x.isDataTexture)if(He.length>0){Ye&&et&&t.texStorage2D(n.TEXTURE_2D,_e,ve,He[0].width,He[0].height);for(let ie=0,ge=He.length;ie<ge;ie++)Ae=He[ie],Ye?N&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ae.width,Ae.height,pe,ze,Ae.data):t.texImage2D(n.TEXTURE_2D,ie,ve,Ae.width,Ae.height,0,pe,ze,Ae.data);x.generateMipmaps=!1}else Ye?(et&&t.texStorage2D(n.TEXTURE_2D,_e,ve,j.width,j.height),N&&te(x,j,pe,ze)):t.texImage2D(n.TEXTURE_2D,0,ve,j.width,j.height,0,pe,ze,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ye&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,He[0].width,He[0].height,j.depth);for(let ie=0,ge=He.length;ie<ge;ie++)if(Ae=He[ie],x.format!==di)if(pe!==null)if(Ye){if(N)if(x.layerUpdates.size>0){let Se=Ic(Ae.width,Ae.height,x.format,x.type);for(let ce of x.layerUpdates){let Fe=Ae.data.subarray(ce*Se/Ae.data.BYTES_PER_ELEMENT,(ce+1)*Se/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,ce,Ae.width,Ae.height,1,pe,Fe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Ae.width,Ae.height,j.depth,pe,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,ve,Ae.width,Ae.height,j.depth,0,Ae.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Ae.width,Ae.height,j.depth,pe,ze,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,ve,Ae.width,Ae.height,j.depth,0,pe,ze,Ae.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ye&&et&&t.texStorage2D(n.TEXTURE_2D,_e,ve,He[0].width,He[0].height);for(let ie=0,ge=He.length;ie<ge;ie++)Ae=He[ie],x.format!==di?pe!==null?Ye?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,Ae.width,Ae.height,pe,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,ve,Ae.width,Ae.height,0,Ae.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?N&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Ae.width,Ae.height,pe,ze,Ae.data):t.texImage2D(n.TEXTURE_2D,ie,ve,Ae.width,Ae.height,0,pe,ze,Ae.data)}else if(x.isDataArrayTexture)if(Ye){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,ve,j.width,j.height,j.depth),N)if(x.layerUpdates.size>0){let ie=Ic(j.width,j.height,x.format,x.type);for(let ge of x.layerUpdates){let Se=j.data.subarray(ge*ie/j.data.BYTES_PER_ELEMENT,(ge+1)*ie/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ge,j.width,j.height,1,pe,ze,Se)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,ze,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,j.width,j.height,j.depth,0,pe,ze,j.data);else if(x.isData3DTexture)Ye?(et&&t.texStorage3D(n.TEXTURE_3D,_e,ve,j.width,j.height,j.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,ze,j.data)):t.texImage3D(n.TEXTURE_3D,0,ve,j.width,j.height,j.depth,0,pe,ze,j.data);else if(x.isFramebufferTexture){if(et)if(Ye)t.texStorage2D(n.TEXTURE_2D,_e,ve,j.width,j.height);else{let ie=j.width,ge=j.height;for(let Se=0;Se<_e;Se++)t.texImage2D(n.TEXTURE_2D,Se,ve,ie,ge,0,pe,ze,null),ie>>=1,ge>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let ie=n.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),j.parentNode!==ie){ie.appendChild(j),h.add(x),ie.onpaint=ge=>{let Se=ge.changedElements;for(let ce of h)Se.includes(ce.image)&&(ce.needsUpdate=!0)},ie.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,j);else{let Se=n.RGBA,ce=n.RGBA,Fe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Se,ce,Fe,j)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(He.length>0){if(Ye&&et){let ie=nt(He[0]);t.texStorage2D(n.TEXTURE_2D,_e,ve,ie.width,ie.height)}for(let ie=0,ge=He.length;ie<ge;ie++)Ae=He[ie],Ye?N&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,pe,ze,Ae):t.texImage2D(n.TEXTURE_2D,ie,ve,pe,ze,Ae);x.generateMipmaps=!1}else if(Ye){if(et){let ie=nt(j);t.texStorage2D(n.TEXTURE_2D,_e,ve,ie.width,ie.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,ze,j)}else t.texImage2D(n.TEXTURE_2D,0,ve,pe,ze,j);p(x)&&S(z),me.__version=ue.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ue(R,x,G){if(x.image.length!==6)return;let z=ft(R,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);let ue=i.get(J);if(J.version!==ue.__version||z===!0){t.activeTexture(n.TEXTURE0+G);let me=lt.getPrimaries(lt.workingColorSpace),$=x.colorSpace===Yi?null:lt.getPrimaries(x.colorSpace),j=x.colorSpace===Yi||me===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let pe=x.isCompressedTexture||x.image[0].isCompressedTexture,ze=x.image[0]&&x.image[0].isDataTexture,ve=[];for(let ce=0;ce<6;ce++)!pe&&!ze?ve[ce]=A(x.image[ce],!0,r.maxCubemapSize):ve[ce]=ze?x.image[ce].image:x.image[ce],ve[ce]=ut(x,ve[ce]);let Ae=ve[0],He=o.convert(x.format,x.colorSpace),Ye=o.convert(x.type),et=_(x.internalFormat,He,Ye,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,_e=ue.__version===void 0||z===!0,ie=J.dataReady,ge=y(x,Ae);rt(n.TEXTURE_CUBE_MAP,x);let Se;if(pe){N&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,et,Ae.width,Ae.height);for(let ce=0;ce<6;ce++){Se=ve[ce].mipmaps;for(let Fe=0;Fe<Se.length;Fe++){let Be=Se[Fe];x.format!==di?He!==null?N?ie&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Be.width,Be.height,He,Be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,et,Be.width,Be.height,0,Be.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Be.width,Be.height,He,Ye,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,et,Be.width,Be.height,0,He,Ye,Be.data)}}}else{if(Se=x.mipmaps,N&&_e){Se.length>0&&ge++;let ce=nt(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,et,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ze){N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ve[ce].width,ve[ce].height,He,Ye,ve[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,et,ve[ce].width,ve[ce].height,0,He,Ye,ve[ce].data);for(let Fe=0;Fe<Se.length;Fe++){let Rt=Se[Fe].image[ce].image;N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,Rt.width,Rt.height,He,Ye,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,et,Rt.width,Rt.height,0,He,Ye,Rt.data)}}else{N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,He,Ye,ve[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,et,He,Ye,ve[ce]);for(let Fe=0;Fe<Se.length;Fe++){let Be=Se[Fe];N?ie&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,He,Ye,Be.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,et,He,Ye,Be.image[ce])}}}p(x)&&S(n.TEXTURE_CUBE_MAP),ue.__version=J.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ye(R,x,G,z,J,ue){let me=o.convert(G.format,G.colorSpace),$=o.convert(G.type),j=_(G.internalFormat,me,$,G.normalized,G.colorSpace),pe=i.get(x),ze=i.get(G);if(ze.__renderTarget=x,!pe.__hasExternalTextures){let ve=Math.max(1,x.width>>ue),Ae=Math.max(1,x.height>>ue);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ue,j,ve,Ae,x.depth,0,me,$,null):t.texImage2D(J,ue,j,ve,Ae,0,me,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),$e(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,J,ze.__webglTexture,0,We(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,J,ze.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(R,x,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){let z=x.depthTexture,J=z&&z.isDepthTexture?z.type:null,ue=b(x.stencilBuffer,J),me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$e(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We(x),ue,x.width,x.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,We(x),ue,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ue,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,R)}else{let z=x.textures;for(let J=0;J<z.length;J++){let ue=z[J],me=o.convert(ue.format,ue.colorSpace),$=o.convert(ue.type),j=_(ue.internalFormat,me,$,ue.normalized,ue.colorSpace);$e(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,We(x),j,x.width,x.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,We(x),j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function qe(R,x,G){let z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),z){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),rt(n.TEXTURE_CUBE_MAP,x.depthTexture);let pe=o.convert(x.depthTexture.format),ze=o.convert(x.depthTexture.type),ve;x.depthTexture.format===Ei?ve=n.DEPTH_COMPONENT24:x.depthTexture.format===en&&(ve=n.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ve,x.width,x.height,0,pe,ze,null)}}else ae(x.depthTexture,0);let ue=J.__webglTexture,me=We(x),$=z?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,j=x.depthTexture.format===en?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ei)$e(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,$,ue,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,j,$,ue,0);else if(x.depthTexture.format===en)$e(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,$,ue,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,j,$,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(R){let x=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let z=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),z){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,z.removeEventListener("dispose",J)};z.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=z}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(G)for(let z=0;z<6;z++)qe(x.__webglFramebuffer[z],R,z);else{let z=R.texture.mipmaps;z&&z.length>0?qe(x.__webglFramebuffer[0],R,0):qe(x.__webglFramebuffer,R,0)}else if(G){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]===void 0)x.__webglDepthbuffer[z]=n.createRenderbuffer(),Ne(x.__webglDepthbuffer[z],R,!1);else{let J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=x.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ue)}}else{let z=R.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Ne(x.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(R,x,G){let z=i.get(R);x!==void 0&&ye(z.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ee(R)}function ne(R){let x=R.texture,G=i.get(R),z=i.get(x);R.addEventListener("dispose",g);let J=R.textures,ue=R.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=x.version,s.memory.textures++),ue){G.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[$]=[];for(let j=0;j<x.mipmaps.length;j++)G.__webglFramebuffer[$][j]=n.createFramebuffer()}else G.__webglFramebuffer[$]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)G.__webglFramebuffer[$]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(me)for(let $=0,j=J.length;$<j;$++){let pe=i.get(J[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),s.memory.textures++)}if(R.samples>0&&$e(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let j=J[$];G.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[$]);let pe=o.convert(j.format,j.colorSpace),ze=o.convert(j.type),ve=_(j.internalFormat,pe,ze,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),Ae=We(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ve,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,G.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ne(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),rt(n.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)ye(G.__webglFramebuffer[$][j],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else ye(G.__webglFramebuffer[$],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(x)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let $=0,j=J.length;$<j;$++){let pe=J[$],ze=i.get(pe),ve=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,ze.__webglTexture),rt(ve,pe),ye(G.__webglFramebuffer,R,pe,n.COLOR_ATTACHMENT0+$,ve,0),p(pe)&&S(ve)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,z.__webglTexture),rt($,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)ye(G.__webglFramebuffer[j],R,x,n.COLOR_ATTACHMENT0,$,j);else ye(G.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,$,0);p(x)&&S($),t.unbindTexture()}R.depthBuffer&&ee(R)}function se(R){let x=R.textures;for(let G=0,z=x.length;G<z;G++){let J=x[G];if(p(J)){let ue=E(R),me=i.get(J).__webglTexture;t.bindTexture(ue,me),S(ue),t.unbindTexture()}}}let fe=[],De=[];function we(R){if(R.samples>0){if($e(R)===!1){let x=R.textures,G=R.width,z=R.height,J=n.COLOR_BUFFER_BIT,ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(R),$=x.length>1;if($)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let j=R.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[pe]);let ze=i.get(x[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,G,z,0,0,G,z,J,n.NEAREST),c===!0&&(fe.length=0,De.length=0,fe.push(n.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(fe.push(ue),De.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,me.__webglColorRenderbuffer[pe]);let ze=i.get(x[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function We(R){return Math.min(r.maxSamples,R.samples)}function $e(R){let x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(R){let x=s.render.frame;f.get(R)!==x&&(f.set(R,x),R.update())}function ut(R,x){let G=R.colorSpace,z=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==vr&&G!==Yi&&(lt.getTransfer(G)===xt?(z!==di||J!==ti)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",G)),x}function nt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=ae,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=re,this.rebindTextures=Z,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rm(n,e){function t(i,r=Yi){let o,s=lt.getTransfer(r);if(i===ti)return n.UNSIGNED_BYTE;if(i===Hr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Vr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Aa)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ga)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===pa)return n.BYTE;if(i===ma)return n.SHORT;if(i===bn)return n.UNSIGNED_SHORT;if(i===zr)return n.INT;if(i===ui)return n.UNSIGNED_INT;if(i===si)return n.FLOAT;if(i===hi)return n.HALF_FLOAT;if(i===xa)return n.ALPHA;if(i===_a)return n.RGB;if(i===di)return n.RGBA;if(i===Ei)return n.DEPTH_COMPONENT;if(i===en)return n.DEPTH_STENCIL;if(i===kr)return n.RED;if(i===Wr)return n.RED_INTEGER;if(i===zi)return n.RG;if(i===Xr)return n.RG_INTEGER;if(i===qr)return n.RGBA_INTEGER;if(i===Yr||i===Zr||i===Jr||i===Kr)if(s===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Yr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Yr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===is||i===ns||i===rs||i===os)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===is)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ns)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===os)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ss||i===as||i===ls||i===cs||i===fs||i===gr||i===us)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ss||i===as)return s===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ls)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===cs)return o.COMPRESSED_R11_EAC;if(i===fs)return o.COMPRESSED_SIGNED_R11_EAC;if(i===gr)return o.COMPRESSED_RG11_EAC;if(i===us)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hs||i===ds||i===ps||i===ms||i===As||i===gs||i===xs||i===_s||i===vs||i===Ms||i===Ss||i===ys||i===bs||i===ws)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===hs)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ds)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ps)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ms)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===As)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gs)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xs)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_s)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vs)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ms)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ss)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ys)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bs)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ws)return s===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Es||i===Ts||i===Rs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Es)return s===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ts)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rs)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cs||i===Ps||i===xr||i===Ls)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Cs)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ps)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ls)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new So(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new bt({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new Oi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var Rl=class extends _i{constructor(e,t){super();let i=this,r=null,o=1,s=null,a="local-floor",c=1,l=null,f=null,h=null,u=null,d=null,m=null,v=typeof XRWebGLBinding<"u",A=new Tl,p={},S=t.getContextAttributes(),E=null,_=null,b=[],y=[],C=new W,g=null,w=null,P=new Ft;P.viewport=new Et;let D=new Ft;D.viewport=new Et;let B=[P,D],O=new vl,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=b[K];return te===void 0&&(te=new lo,b[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=b[K];return te===void 0&&(te=new lo,b[K]=te),te.getGripSpace()},this.getHand=function(K){let te=b[K];return te===void 0&&(te=new lo,b[K]=te),te.getHandSpace()};function X(K){let te=y.indexOf(K.inputSource);if(te===-1)return;let xe=b[te];xe!==void 0&&(xe.update(K.inputSource,K.frame,l||s),xe.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",ae);for(let K=0;K<b.length;K++){let te=y[K];te!==null&&(y[K]=null,b[K].disconnect(te))}I=null,F=null,A.reset();for(let K in p)delete p[K];if(e.setRenderTarget(E),d=null,u=null,h=null,r=null,_=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(C.width,C.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",k),r.addEventListener("inputsourceschange",ae),S.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ue=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?en:Ei,Ue=S.stencil?wn:ui);let Ne={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:o};h=this.getBinding(),u=h.createProjectionLayer(Ne),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new ai(u.textureWidth,u.textureHeight,{format:di,type:ti,depthTexture:new an(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new ai(d.framebufferWidth,d.framebufferHeight,{format:di,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(a),ft.setContext(r),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ae(K){for(let te=0;te<K.removed.length;te++){let xe=K.removed[te],Ue=y.indexOf(xe);Ue>=0&&(y[Ue]=null,b[Ue].disconnect(xe))}for(let te=0;te<K.added.length;te++){let xe=K.added[te],Ue=y.indexOf(xe);if(Ue===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=y.length){y.push(xe),Ue=Ne;break}else if(y[Ne]===null){y[Ne]=xe,Ue=Ne;break}if(Ue===-1)break}let ye=b[Ue];ye&&ye.connect(xe)}}let q=new T,Q=new T;function re(K,te,xe){q.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);let Ue=q.distanceTo(Q),ye=te.projectionMatrix.elements,Ne=xe.projectionMatrix.elements,qe=ye[14]/(ye[10]-1),ee=ye[14]/(ye[10]+1),Z=(ye[9]+1)/ye[5],ne=(ye[9]-1)/ye[5],se=(ye[8]-1)/ye[0],fe=(Ne[8]+1)/Ne[0],De=qe*se,we=qe*fe,We=Ue/(-se+fe),$e=We*-se;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX($e),K.translateZ(We),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let L=qe+We,ut=ee+We,nt=De-$e,R=we+(Ue-$e),x=Z*ee/ut*L,G=ne*ee/ut*L;K.projectionMatrix.makePerspective(nt,R,x,G,L,ut),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Le(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let te=K.near,xe=K.far;A.texture!==null&&(A.depthNear>0&&(te=A.depthNear),A.depthFar>0&&(xe=A.depthFar)),O.near=D.near=P.near=te,O.far=D.far=P.far=xe,(I!==O.near||F!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,F=O.far),O.layers.mask=K.layers.mask|6,P.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let Ue=K.parent,ye=O.cameras;Le(O,Ue);for(let Ne=0;Ne<ye.length;Ne++)Le(ye[Ne],Ue);ye.length===2?re(O,P,D):O.projectionMatrix.copy(P.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),Re(K,O,Ue)};function Re(K,te,xe){xe===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(xe.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ds*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(O)},this.getCameraTexture=function(K){return p[K]};let ct=null;function rt(K,te){if(f=te.getViewerPose(l||s),m=te,f!==null){let xe=f.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let Ue=!1;xe.length!==O.cameras.length&&(O.cameras.length=0,Ue=!0);for(let ee=0;ee<xe.length;ee++){let Z=xe[ee],ne=null;if(d!==null)ne=d.getViewport(Z);else{let fe=h.getViewSubImage(u,Z);ne=fe.viewport,ee===0&&(e.setRenderTargetTextures(_,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(_))}let se=B[ee];se===void 0&&(se=new Ft,se.layers.enable(ee),se.viewport=new Et,B[ee]=se),se.matrix.fromArray(Z.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Z.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ne.x,ne.y,ne.width,ne.height),ee===0&&(O.matrix.copy(se.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ue===!0&&O.cameras.push(se)}let ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();let ee=h.getDepthInformation(xe[0]);ee&&ee.isValid&&ee.texture&&A.init(ee,r.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let ee=0;ee<xe.length;ee++){let Z=xe[ee].camera;if(Z){let ne=p[Z];ne||(ne=new So,p[Z]=ne);let se=h.getCameraImage(Z);ne.sourceTexture=se}}}}for(let xe=0;xe<b.length;xe++){let Ue=y[xe],ye=b[xe];Ue!==null&&ye!==void 0&&ye.update(Ue,te,l||s)}ct&&ct(K,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),m=null}let ft=new Ml;ft.setAnimationLoop(rt),this.setAnimationLoop=function(K){ct=K},this.dispose=function(){}}};var Ag=new tt,om=new Ze;om.set(-1,0,0,0,1,0,0,0,1);function sm(n,e){function t(A,p){A.matrixAutoUpdate===!0&&A.updateMatrix(),p.value.copy(A.matrix)}function i(A,p){p.color.getRGB(A.fogColor.value,ul(n)),p.isFog?(A.fogNear.value=p.near,A.fogFar.value=p.far):p.isFogExp2&&(A.fogDensity.value=p.density)}function r(A,p,S,E,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?o(A,p):p.isMeshLambertMaterial?(o(A,p),p.envMap&&(A.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(A,p),h(A,p)):p.isMeshPhongMaterial?(o(A,p),f(A,p),p.envMap&&(A.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(A,p),u(A,p),p.isMeshPhysicalMaterial&&d(A,p,_)):p.isMeshMatcapMaterial?(o(A,p),m(A,p)):p.isMeshDepthMaterial?o(A,p):p.isMeshDistanceMaterial?(o(A,p),v(A,p)):p.isMeshNormalMaterial?o(A,p):p.isLineBasicMaterial?(s(A,p),p.isLineDashedMaterial&&a(A,p)):p.isPointsMaterial?c(A,p,S,E):p.isSpriteMaterial?l(A,p):p.isShadowMaterial?(A.color.value.copy(p.color),A.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(A,p){A.opacity.value=p.opacity,p.color&&A.diffuse.value.copy(p.color),p.emissive&&A.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(A.map.value=p.map,t(p.map,A.mapTransform)),p.alphaMap&&(A.alphaMap.value=p.alphaMap,t(p.alphaMap,A.alphaMapTransform)),p.bumpMap&&(A.bumpMap.value=p.bumpMap,t(p.bumpMap,A.bumpMapTransform),A.bumpScale.value=p.bumpScale,p.side===Pt&&(A.bumpScale.value*=-1)),p.normalMap&&(A.normalMap.value=p.normalMap,t(p.normalMap,A.normalMapTransform),A.normalScale.value.copy(p.normalScale),p.side===Pt&&A.normalScale.value.negate()),p.displacementMap&&(A.displacementMap.value=p.displacementMap,t(p.displacementMap,A.displacementMapTransform),A.displacementScale.value=p.displacementScale,A.displacementBias.value=p.displacementBias),p.emissiveMap&&(A.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,A.emissiveMapTransform)),p.specularMap&&(A.specularMap.value=p.specularMap,t(p.specularMap,A.specularMapTransform)),p.alphaTest>0&&(A.alphaTest.value=p.alphaTest);let S=e.get(p),E=S.envMap,_=S.envMapRotation;E&&(A.envMap.value=E,A.envMapRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&A.envMapRotation.value.premultiply(om),A.reflectivity.value=p.reflectivity,A.ior.value=p.ior,A.refractionRatio.value=p.refractionRatio),p.lightMap&&(A.lightMap.value=p.lightMap,A.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,A.lightMapTransform)),p.aoMap&&(A.aoMap.value=p.aoMap,A.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,A.aoMapTransform))}function s(A,p){A.diffuse.value.copy(p.color),A.opacity.value=p.opacity,p.map&&(A.map.value=p.map,t(p.map,A.mapTransform))}function a(A,p){A.dashSize.value=p.dashSize,A.totalSize.value=p.dashSize+p.gapSize,A.scale.value=p.scale}function c(A,p,S,E){A.diffuse.value.copy(p.color),A.opacity.value=p.opacity,A.size.value=p.size*S,A.scale.value=E*.5,p.map&&(A.map.value=p.map,t(p.map,A.uvTransform)),p.alphaMap&&(A.alphaMap.value=p.alphaMap,t(p.alphaMap,A.alphaMapTransform)),p.alphaTest>0&&(A.alphaTest.value=p.alphaTest)}function l(A,p){A.diffuse.value.copy(p.color),A.opacity.value=p.opacity,A.rotation.value=p.rotation,p.map&&(A.map.value=p.map,t(p.map,A.mapTransform)),p.alphaMap&&(A.alphaMap.value=p.alphaMap,t(p.alphaMap,A.alphaMapTransform)),p.alphaTest>0&&(A.alphaTest.value=p.alphaTest)}function f(A,p){A.specular.value.copy(p.specular),A.shininess.value=Math.max(p.shininess,1e-4)}function h(A,p){p.gradientMap&&(A.gradientMap.value=p.gradientMap)}function u(A,p){A.metalness.value=p.metalness,p.metalnessMap&&(A.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,A.metalnessMapTransform)),A.roughness.value=p.roughness,p.roughnessMap&&(A.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,A.roughnessMapTransform)),p.envMap&&(A.envMapIntensity.value=p.envMapIntensity)}function d(A,p,S){A.ior.value=p.ior,p.sheen>0&&(A.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),A.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(A.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,A.sheenColorMapTransform)),p.sheenRoughnessMap&&(A.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,A.sheenRoughnessMapTransform))),p.clearcoat>0&&(A.clearcoat.value=p.clearcoat,A.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(A.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,A.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(A.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&A.clearcoatNormalScale.value.negate())),p.dispersion>0&&(A.dispersion.value=p.dispersion),p.retroreflectivity>0&&(A.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(A.iridescence.value=p.iridescence,A.iridescenceIOR.value=p.iridescenceIOR,A.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(A.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,A.iridescenceMapTransform)),p.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),p.transmission>0&&(A.transmission.value=p.transmission,A.transmissionSamplerMap.value=S.texture,A.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(A.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,A.transmissionMapTransform)),A.thickness.value=p.thickness,p.thicknessMap&&(A.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=p.attenuationDistance,A.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(A.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(A.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=p.specularIntensity,A.specularColor.value.copy(p.specularColor),p.specularColorMap&&(A.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,A.specularColorMapTransform)),p.specularIntensityMap&&(A.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,A.specularIntensityMapTransform))}function m(A,p){p.matcap&&(A.matcap.value=p.matcap)}function v(A,p){let S=e.get(p).light;A.referencePosition.value.setFromMatrixPosition(S.matrixWorld),A.nearDistance.value=S.shadow.camera.near,A.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function am(n,e,t,i){let r={},o={},s=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,b){let y=b.program;i.uniformBlockBinding(_,y)}function l(_,b){let y=r[_.id];y===void 0&&(A(_),y=f(_),r[_.id]=y,_.addEventListener("dispose",S));let C=b.program;i.updateUBOMapping(_,C);let g=e.render.frame;o[_.id]!==g&&(u(_),o[_.id]=g)}function f(_){let b=h();_.__bindingPointIndex=b;let y=n.createBuffer(),C=_.__size,g=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,g),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function h(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=r[_.id],y=_.uniforms,C=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let g=0,w=y.length;g<w;g++){let P=y[g];if(Array.isArray(P))for(let D=0,B=P.length;D<B;D++)d(P[D],g,D,C);else d(P,g,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,b,y,C){if(v(_,b,y,C)===!0){let g=_.__offset,w=_.value;if(Array.isArray(w)){let P=0;for(let D=0;D<w.length;D++){let B=w[D],O=p(B);m(B,_.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,g,_.__data)}}function m(_,b,y){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,y)}function v(_,b,y,C){let g=_.value,w=b+"_"+y;if(C[w]===void 0)return typeof g=="number"||typeof g=="boolean"?C[w]=g:ArrayBuffer.isView(g)?C[w]=g.slice():C[w]=g.clone(),!0;{let P=C[w];if(typeof g=="number"||typeof g=="boolean"){if(P!==g)return C[w]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(P.equals(g)===!1)return P.copy(g),!0}}return!1}function A(_){let b=_.uniforms,y=0,C=16;for(let w=0,P=b.length;w<P;w++){let D=Array.isArray(b[w])?b[w]:[b[w]];for(let B=0,O=D.length;B<O;B++){let I=D[B],F=Array.isArray(I.value)?I.value:[I.value];for(let X=0,k=F.length;X<k;X++){let ae=F[X],q=p(ae),Q=y%C,re=Q%q.boundary,Le=Q+re;y+=re,Le!==0&&C-Le<q.storage&&(y+=C-Le),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=q.storage}}}let g=y%C;return g>0&&(y+=C-g),_.__size=y,_.__cache={},this}function p(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",_),b}function S(_){let b=_.target;b.removeEventListener("dispose",S);let y=s.indexOf(b.__bindingPointIndex);s.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete o[b.id]}function E(){for(let _ in r)n.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:c,update:l,dispose:E}}var gg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_n=null;function lm(){return _n===null&&(_n=new xo(gg,16,16,zi,hi),_n.name="DFG_LUT",_n.minFilter=Wt,_n.magFilter=Wt,_n.wrapS=Fi,_n.wrapT=Fi,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}var Qs=class{constructor(e={}){let{canvas:t=Uf(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=ti}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;let v=d,A=new Set([qr,Xr,Wr]),p=new Set([ti,ui,bn,wn,Hr,Vr]),S=new Uint32Array(4),E=new Int32Array(4),_=new T,b=null,y=null,C=[],g=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,B=null,O=null,I=null,F=null;this._outputColorSpace=$t;let X=0,k=0,ae=null,q=-1,Q=null,re=new Et,Le=new Et,Re=null,ct=new le(0),rt=0,ft=t.width,K=t.height,te=1,xe=null,Ue=null,ye=new Et(0,0,ft,K),Ne=new Et(0,0,ft,K),qe=!1,ee=new er,Z=!1,ne=!1,se=new tt,fe=new T,De=new Et,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function $e(){return ae===null?te:1}let L=i;function ut(M,U){return t.getContext(M,U)}let nt,R,x,G,z,J,ue,me,$,j,pe,ze,ve,Ae,He,Ye,et,N,_e,ie,ge,Se,ce;try{let M={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){let U="webgl2";if(L=ut(U,M),L===null)throw ut(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(M){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",he,!1),at("WebGLRenderer: "+M.message),M}function Fe(){nt=new vp(L),nt.init(),ge=new rm(L,nt),R=new dp(L,nt,e,ge),x=new im(L,nt),R.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=L.createFramebuffer(),I=L.createFramebuffer(),F=L.createFramebuffer(),G=new yp(L),z=new Xp,J=new nm(L,nt,x,z,R,ge,G),ue=new _p(P),me=new Ru(L),Se=new up(L,me),$=new Mp(L,me,G,Se),j=new wp(L,$,me,Se,G),N=new bp(L,R,J),He=new pp(z),pe=new Wp(P,ue,nt,R,Se,He),ze=new sm(P,z),ve=new Zp,Ae=new $p(nt),et=new fp(P,ue,x,j,m,c),Ye=new tm(P,j,R),ce=new am(L,G,R,x),_e=new hp(L,nt,G),ie=new Sp(L,nt,G),G.programs=pe.programs,P.capabilities=R,P.extensions=nt,P.properties=z,P.renderLists=ve,P.shadowMap=Ye,P.state=x,P.info=G}v!==ti&&(w=new Ep(v,t.width,t.height,a,r,o));let Be=new Rl(P,L);this.xr=Be,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let M=nt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=nt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(ft,K,!1))},this.getSize=function(M){return M.set(ft,K)},this.setSize=function(M,U,Y=!0){if(Be.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=M,K=U,t.width=Math.floor(M*te),t.height=Math.floor(U*te),Y===!0&&(t.style.width=M+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ft*te,K*te).floor()},this.setDrawingBufferSize=function(M,U,Y){ft=M,K=U,te=Y,t.width=Math.floor(M*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(v===ti){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(re)},this.getViewport=function(M){return M.copy(ye)},this.setViewport=function(M,U,Y,H){M.isVector4?ye.set(M.x,M.y,M.z,M.w):ye.set(M,U,Y,H),x.viewport(re.copy(ye).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(Ne)},this.setScissor=function(M,U,Y,H){M.isVector4?Ne.set(M.x,M.y,M.z,M.w):Ne.set(M,U,Y,H),x.scissor(Le.copy(Ne).multiplyScalar(te).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(M){x.setScissorTest(qe=M)},this.setOpaqueSort=function(M){xe=M},this.setTransparentSort=function(M){Ue=M},this.getClearColor=function(M){return M.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Y=!0){let H=0;if(M){let V=!1;if(ae!==null){let Ce=ae.texture.format;V=A.has(Ce)}if(V){let Ce=ae.texture.type,Oe=p.has(Ce),Ee=et.getClearColor(),Ve=et.getClearAlpha(),Xe=Ee.r,pt=Ee.g,gt=Ee.b;Oe?(S[0]=Xe,S[1]=pt,S[2]=gt,S[3]=Ve,L.clearBufferuiv(L.COLOR,0,S)):(E[0]=Xe,E[1]=pt,E[2]=gt,E[3]=Ve,L.clearBufferiv(L.COLOR,0,E))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",he,!1),et.dispose(),ve.dispose(),Ae.dispose(),z.dispose(),ue.dispose(),j.dispose(),Se.dispose(),ce.dispose(),pe.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",wt),Be.removeEventListener("sessionend",Lt),At.stop()};function Rt(M){M.preventDefault(),Kl("WebGLRenderer: Context Lost."),D=!0}function mt(){Kl("WebGLRenderer: Context Restored."),D=!1;let M=G.autoReset,U=Ye.enabled,Y=Ye.autoUpdate,H=Ye.needsUpdate,V=Ye.type;Fe(),G.autoReset=M,Ye.enabled=U,Ye.autoUpdate=Y,Ye.needsUpdate=H,Ye.type=V}function he(M){at("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ge(M){let U=M.target;U.removeEventListener("dispose",Ge),dt(U)}function dt(M){Je(M),z.remove(M)}function Je(M){let U=z.get(M).programs;U!==void 0&&(U.forEach(function(Y){pe.releaseProgram(Y)}),M.isShaderMaterial&&pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,Y,H,V,Ce){U===null&&(U=we);let Oe=V.isMesh&&V.matrixWorld.determinantAffine()<0,Ee=Ui(M,U,Y,H,V);x.setMaterial(H,Oe);let Ve=Y.index,Xe=1;if(H.wireframe===!0){if(Ve=$.getWireframeAttribute(Y),Ve===void 0)return;Xe=2}let pt=Y.drawRange,gt=Y.attributes.position,ke=pt.start*Xe,Ct=(pt.start+pt.count)*Xe;Ce!==null&&(ke=Math.max(ke,Ce.start*Xe),Ct=Math.min(Ct,(Ce.start+Ce.count)*Xe)),Ve!==null?(ke=Math.max(ke,0),Ct=Math.min(Ct,Ve.count)):gt!=null&&(ke=Math.max(ke,0),Ct=Math.min(Ct,gt.count));let ni=Ct-ke;if(ni<0||ni===1/0)return;Se.setup(V,H,Ee,Y,Ve);let Bt,It=_e;if(Ve!==null&&(Bt=me.get(Ve),It=ie,It.setIndex(Bt)),V.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*$e()),It.setMode(L.LINES)):It.setMode(L.TRIANGLES);else if(V.isLine){let xi=H.linewidth;xi===void 0&&(xi=1),x.setLineWidth(xi*$e()),V.isLineSegments?It.setMode(L.LINES):V.isLineLoop?It.setMode(L.LINE_LOOP):It.setMode(L.LINE_STRIP)}else V.isPoints?It.setMode(L.POINTS):V.isSprite&&It.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))It.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let xi=V._multiDrawStarts,Ie=V._multiDrawCounts,bi=V._multiDrawCount,yt=Ve?me.get(Ve).bytesPerElement:1,Wi=z.get(H).currentProgram.getUniforms();for(let un=0;un<bi;un++)Wi.setValue(L,"_gl_DrawID",un),It.render(xi[un]/yt,Ie[un])}else if(V.isInstancedMesh)It.renderInstances(ke,ni,V.count);else if(Y.isInstancedBufferGeometry){let xi=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ie=Math.min(Y.instanceCount,xi);It.renderInstances(ke,ni,Ie)}else It.render(ke,ni)};function Mt(M,U,Y,H){B!==null&&M.isNodeMaterial&&B.setObject(H,M),Z===!0&&He.setState(M,Y,!1),M.transparent===!0&&M.side===Ht&&M.forceSinglePass===!1?(M.side=Pt,M.needsUpdate=!0,je(M,U,H),M.side=Xi,M.needsUpdate=!0,je(M,U,H),M.side=Ht):je(M,U,H)}this.compile=function(M,U,Y=null){Y===null&&(Y=M),B!==null&&B.renderStart(M,U,Y),y=Ae.get(Y),y.init(U),g.push(y),Y.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),M!==Y&&M.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights(),B!==null&&B.updateLights(y.state.lightsArray),ne=this.localClippingEnabled,Z=He.init(this.clippingPlanes,ne),Z===!0&&He.setGlobalState(this.clippingPlanes,U),B!==null&&Ye.render(y.state.shadowsArray,Y,U);let H=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Ce=V.material;if(Ce)if(Array.isArray(Ce))for(let Oe=0;Oe<Ce.length;Oe++){let Ee=Ce[Oe];Mt(Ee,Y,U,V),H.add(Ee)}else Mt(Ce,Y,U,V),H.add(Ce)}),y=g.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(M,U,Y=null){let H=this.compile(M,U,Y);return new Promise(V=>{function Ce(){if(H.forEach(function(Oe){let Ve=z.get(Oe).currentProgram;(Ve===void 0||Ve.isReady())&&H.delete(Oe)}),H.size===0){V(M);return}setTimeout(Ce,10)}nt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Ot=null;function jt(M){Ot&&Ot(M)}function wt(){At.stop()}function Lt(){At.start()}let At=new Ml;At.setAnimationLoop(jt),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(M){Ot=M,Be.setAnimationLoop(M),M===null?At.stop():At.start()},Be.addEventListener("sessionstart",wt),Be.addEventListener("sessionend",Lt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(M,U);let Y=Be.enabled===!0&&Be.isPresenting===!0,H=w!==null&&(ae===null||Y)&&w.begin(P,ae);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(U),U=Be.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,U,ae),y=Ae.get(M,g.length),y.init(U),y.state.textureUnits=J.getTextureUnits(),g.push(y),se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(se,Ti,U.reversedDepth),ne=this.localClippingEnabled,Z=He.init(this.clippingPlanes,ne),b=ve.get(M,C.length),b.init(),C.push(b),Be.enabled===!0&&Be.isPresenting===!0){let Oe=P.xr.getDepthSensingMesh();Oe!==null&&Gt(Oe,U,-1/0,P.sortObjects)}Gt(M,U,0,P.sortObjects),b.finish(),B!==null&&B.updateLights(y.state.lightsArray),P.sortObjects===!0&&b.sort(xe,Ue),We=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,We&&et.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Z===!0&&He.beginShadows();let V=y.state.shadowsArray;if(Ye.render(V,M,U),Z===!0&&He.endShadows(),(H&&w.hasRenderPass())===!1){let Oe=b.opaque,Ee=b.transmissive;if(y.setupLights(),U.isArrayCamera){let Ve=U.cameras;if(Ee.length>0)for(let Xe=0,pt=Ve.length;Xe<pt;Xe++){let gt=Ve[Xe];Ai(Oe,Ee,M,gt)}We&&et.render(M);for(let Xe=0,pt=Ve.length;Xe<pt;Xe++){let gt=Ve[Xe];zt(b,M,gt,gt.viewport)}}else Ee.length>0&&Ai(Oe,Ee,M,U),We&&et.render(M),zt(b,M,U)}ae!==null&&k===0&&(J.updateMultisampleRenderTarget(ae),J.updateRenderTargetMipmap(ae)),H&&w.end(P),M.isScene===!0&&M.onAfterRender(P,M,U),Se.resetDefaultState(),q=-1,Q=null,g.pop(),g.length>0?(y=g[g.length-1],J.setTextureUnits(y.state.textureUnits),Z===!0&&He.setGlobalState(P.clippingPlanes,y.state.camera)):y=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,B!==null&&B.renderEnd()};function Gt(M,U,Y,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)y.pushLightProbeGrid(M);else if(M.isLight)y.pushLight(M),M.castShadow&&y.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ee)){H&&De.setFromMatrixPosition(M.matrixWorld).applyMatrix4(se);let Oe=j.update(M),Ee=M.material;Ee.visible&&b.push(M,Oe,Ee,Y,De.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ee))){let Oe=j.update(M),Ee=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),De.copy(M.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),De.copy(Oe.boundingSphere.center)),De.applyMatrix4(M.matrixWorld).applyMatrix4(se)),Array.isArray(Ee)){let Ve=Oe.groups;for(let Xe=0,pt=Ve.length;Xe<pt;Xe++){let gt=Ve[Xe],ke=Ee[gt.materialIndex];ke&&ke.visible&&b.push(M,Oe,ke,Y,De.z,gt,U)}}else Ee.visible&&b.push(M,Oe,Ee,Y,De.z,null,U)}}let Ce=M.children;for(let Oe=0,Ee=Ce.length;Oe<Ee;Oe++)Gt(Ce[Oe],U,Y,H)}function zt(M,U,Y,H){let{opaque:V,transmissive:Ce,transparent:Oe}=M;y.setupLightsView(Y),Z===!0&&He.setGlobalState(P.clippingPlanes,Y),H&&x.viewport(re.copy(H)),V.length>0&&Ii(V,U,Y),Ce.length>0&&Ii(Ce,U,Y),Oe.length>0&&Ii(Oe,U,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Ai(M,U,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[H.id]===void 0){let ke=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:ke?hi:ti,minFilter:ji,samples:Math.max(4,R.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Ce=y.state.transmissionRenderTarget[H.id],Oe=H.viewport||re;Ce.setSize(Oe.z*P.transmissionResolutionScale,Oe.w*P.transmissionResolutionScale);let Ee=P.getRenderTarget(),Ve=P.getActiveCubeFace(),Xe=P.getActiveMipmapLevel();P.setRenderTarget(Ce),P.getClearColor(ct),rt=P.getClearAlpha(),rt<1&&P.setClearColor(16777215,.5),P.clear(),We&&et.render(Y);let pt=P.toneMapping;P.toneMapping=wi;let gt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),y.setupLightsView(H),Z===!0&&He.setGlobalState(P.clippingPlanes,H),Ii(M,Y,H),J.updateMultisampleRenderTarget(Ce),J.updateRenderTargetMipmap(Ce),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ct=0,ni=U.length;Ct<ni;Ct++){let Bt=U[Ct],{object:It,geometry:xi,material:Ie,group:bi}=Bt;if(Ie.side===Ht&&It.layers.test(H.layers)){let yt=Ie.side;Ie.side=Pt,Ie.needsUpdate=!0,oe(It,Y,H,xi,Ie,bi),Ie.side=yt,Ie.needsUpdate=!0,ke=!0}}ke===!0&&(J.updateMultisampleRenderTarget(Ce),J.updateRenderTargetMipmap(Ce))}P.setRenderTarget(Ee,Ve,Xe),P.setClearColor(ct,rt),gt!==void 0&&(H.viewport=gt),P.toneMapping=pt}function Ii(M,U,Y){let H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,Ce=M.length;V<Ce;V++){let Oe=M[V],{object:Ee,geometry:Ve,group:Xe}=Oe,pt=Oe.material;pt.allowOverride===!0&&H!==null&&(pt=H),Ee.layers.test(Y.layers)&&oe(Ee,U,Y,Ve,pt,Xe)}}function oe(M,U,Y,H,V,Ce){B!==null&&V.isNodeMaterial&&B.setObject(M,V),M.onBeforeRender(P,U,Y,H,V,Ce),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(P,U,Y,H,M,Ce),V.transparent===!0&&V.side===Ht&&V.forceSinglePass===!1?(V.side=Pt,V.needsUpdate=!0,P.renderBufferDirect(Y,U,H,V,M,Ce),V.side=Xi,V.needsUpdate=!0,P.renderBufferDirect(Y,U,H,V,M,Ce),V.side=Ht):P.renderBufferDirect(Y,U,H,V,M,Ce),M.onAfterRender(P,U,Y,H,V,Ce)}function je(M,U,Y){U.isScene!==!0&&(U=we);let H=z.get(M),V=y.state.lights,Ce=y.state.shadowsArray,Oe=V.state.version,Ee=pe.getParameters(M,V.state,Ce,U,Y,y.state.lightProbeGridArray),Ve=pe.getProgramCacheKey(Ee),Xe=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let pt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=ue.get(M.envMap||H.environment,pt),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Xe===void 0&&(M.addEventListener("dispose",Ge),Xe=new Map,H.programs=Xe);let gt=Xe.get(Ve);if(gt!==void 0){if(H.currentProgram===gt&&H.lightsStateVersion===Oe)return St(M,Ee),gt}else Ee.uniforms=pe.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,Y,Ee),M.onBeforeCompile(Ee,P),gt=pe.acquireProgram(Ee,Ve),Xe.set(Ve,gt),H.uniforms=Ee.uniforms;let ke=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=He.uniform),St(M,Ee),H.needsLights=mr(M),H.lightsStateVersion=Oe,H.needsLights&&(ke.ambientLightColor.value=V.state.ambient,ke.lightProbe.value=V.state.probe,ke.sunLights.value=V.state.sun,ke.sunLightShadows.value=V.state.sunShadow,ke.directionalLights.value=V.state.directional,ke.directionalLightShadows.value=V.state.directionalShadow,ke.spotLights.value=V.state.spot,ke.spotLightShadows.value=V.state.spotShadow,ke.rectAreaLights.value=V.state.rectArea,ke.ltc_1.value=V.state.rectAreaLTC1,ke.ltc_2.value=V.state.rectAreaLTC2,ke.pointLights.value=V.state.point,ke.pointLightShadows.value=V.state.pointShadow,ke.hemisphereLights.value=V.state.hemi,ke.sunShadowMatrix.value=V.state.sunShadowMatrix,ke.sunShadowCascade.value=V.state.sunShadowCascade,ke.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ke.spotLightMatrix.value=V.state.spotLightMatrix,ke.spotLightMap.value=V.state.spotLightMap,ke.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=y.state.lightProbeGridArray.length>0,H.currentProgram=gt,H.uniformsList=null,gt}function st(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=fr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function St(M,U){let Y=z.get(M);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Jt(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let Y=0,H=M.length;Y<H;Y++){let V=M[Y];if(V.texture!==null&&V.boundingBox.containsPoint(_))return V}return null}function Ui(M,U,Y,H,V){U.isScene!==!0&&(U=we),J.resetTextureUnits();let Ce=U.fog,Oe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,Ee=ae===null?P.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:lt.workingColorSpace,Ve=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Xe=ue.get(H.envMap||Oe,Ve),pt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,gt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ke=!!Y.morphAttributes.position,Ct=!!Y.morphAttributes.normal,ni=!!Y.morphAttributes.color,Bt=wi;H.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Bt=P.toneMapping);let It=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xi=It!==void 0?It.length:0,Ie=z.get(H),bi=y.state.lights;if(Z===!0&&(ne===!0||M!==Q)){let Nt=M===Q&&H.id===q;He.setState(H,M,Nt)}let yt=!1;H.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==bi.state.version||Ie.outputColorSpace!==Ee||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==Xe||H.fog===!0&&Ie.fog!==Ce||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==He.numPlanes||Ie.numIntersection!==He.numIntersection)||Ie.vertexAlphas!==pt||Ie.vertexTangents!==gt||Ie.morphTargets!==ke||Ie.morphNormals!==Ct||Ie.morphColors!==ni||Ie.toneMapping!==Bt||Ie.morphTargetsCount!==xi||!!Ie.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Ie.__version=H.version);let Wi=Ie.currentProgram;yt===!0&&(Wi=je(H,U,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Wi,Ie));let un=!1,Hn=!1,Nr=!1,Dt=Wi.getUniforms(),ei=Ie.uniforms;if(x.useProgram(Wi.program)&&(un=!0,Hn=!0,Nr=!0),H.id!==q&&(q=H.id,Hn=!0),Ie.needsLights){let Nt=Jt(y.state.lightProbeGridArray,V);Ie.lightProbeGrid!==Nt&&(Ie.lightProbeGrid=Nt,Hn=!0)}if(un||Q!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Dt.setValue(L,"projectionMatrix",M.projectionMatrix),Dt.setValue(L,"viewMatrix",M.matrixWorldInverse);let kn=Dt.map.cameraPosition;kn!==void 0&&kn.setValue(L,fe.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&Dt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Dt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Hn=!0,Nr=!0)}if(Ie.needsLights&&(bi.state.sunShadowMap.length>0&&Dt.setValue(L,"sunShadowMap",bi.state.sunShadowMap,J),bi.state.directionalShadowMap.length>0&&Dt.setValue(L,"directionalShadowMap",bi.state.directionalShadowMap,J),bi.state.spotShadowMap.length>0&&Dt.setValue(L,"spotShadowMap",bi.state.spotShadowMap,J),bi.state.pointShadowMap.length>0&&Dt.setValue(L,"pointShadowMap",bi.state.pointShadowMap,J)),V.isSkinnedMesh){Dt.setOptional(L,V,"bindMatrix"),Dt.setOptional(L,V,"bindMatrixInverse");let Nt=V.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Dt.setValue(L,"boneTexture",Nt.boneTexture,J))}V.isBatchedMesh&&(Dt.setOptional(L,V,"batchingTexture"),Dt.setValue(L,"batchingTexture",V._matricesTexture,J),Dt.setOptional(L,V,"batchingIdTexture"),Dt.setValue(L,"batchingIdTexture",V._indirectTexture,J),Dt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Dt.setValue(L,"batchingColorTexture",V._colorsTexture,J));let Vn=Y.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&N.update(V,Y,Wi),(Hn||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,Dt.setValue(L,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(ei.envMapIntensity.value=U.environmentIntensity),ei.dfgLUT!==void 0&&(ei.dfgLUT.value=lm()),Hn){if(Dt.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ie.needsLights&&zn(ei,Nr),Ce&&H.fog===!0&&ze.refreshFogUniforms(ei,Ce),ze.refreshMaterialUniforms(ei,H,te,K,y.state.transmissionRenderTarget[M.id]),Ie.needsLights&&Ie.lightProbeGrid){let Nt=Ie.lightProbeGrid;ei.probesSH.value=Nt.texture,ei.probesMin.value.copy(Nt.boundingBox.min),ei.probesMax.value.copy(Nt.boundingBox.max),ei.probesResolution.value.copy(Nt.resolution)}fr.upload(L,st(Ie),ei,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(fr.upload(L,st(Ie),ei,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Dt.setValue(L,"center",V.center),Dt.setValue(L,"modelViewMatrix",V.modelViewMatrix),Dt.setValue(L,"normalMatrix",V.normalMatrix),Dt.setValue(L,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Nt=H.uniformsGroups;for(let kn=0,Fr=Nt.length;kn<Fr;kn++){let Kc=Nt[kn];ce.update(Kc,Wi),ce.bind(Kc,Wi)}}return Wi}function zn(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function mr(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(M,U,Y){let H=z.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),z.get(M.texture).__webglTexture=U,z.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let Y=z.get(M);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Y=0){ae=M,X=U,k=Y;let H=null,V=!1,Ce=!1;if(M){let Ee=z.get(M);if(Ee.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,Ee.__webglFramebuffer),re.copy(M.viewport),Le.copy(M.scissor),Re=M.scissorTest,x.viewport(re),x.scissor(Le),x.setScissorTest(Re),q=-1;return}else if(Ee.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(Ee.__hasExternalTextures)J.rebindTextures(M,z.get(M.texture).__webglTexture,z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let pt=M.depthTexture;if(Ee.__boundDepthTexture!==pt){if(pt!==null&&z.has(pt)&&(M.width!==pt.image.width||M.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}let Ve=M.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);let Xe=z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Xe[U])?H=Xe[U][Y]:H=Xe[U],V=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?H=z.get(M).__webglMultisampledFramebuffer:Array.isArray(Xe)?H=Xe[Y]:H=Xe,re.copy(M.viewport),Le.copy(M.scissor),Re=M.scissorTest}else re.copy(ye).multiplyScalar(te).floor(),Le.copy(Ne).multiplyScalar(te).floor(),Re=qe;if(Y!==0&&(H=O),x.bindFramebuffer(L.FRAMEBUFFER,H)&&x.drawBuffers(M,H),x.viewport(re),x.scissor(Le),x.setScissorTest(Re),V){let Ee=z.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,Y)}else if(Ce){let Ee=U;for(let Ve=0;Ve<M.textures.length;Ve++){let Xe=z.get(M.textures[Ve]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,Y,Ee)}}else if(M!==null&&Y!==0){let Ee=z.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ee.__webglTexture,Y)}q=-1};function Ni(M){let U=z.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=R.textureFormatReadable(M.format),U.__typeReadable=R.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,Y,H,V,Ce,Oe,Ee=0){if(!(M&&M.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve){x.bindFramebuffer(L.FRAMEBUFFER,Ve);try{let Xe=M.textures[Ee],pt=Xe.format,gt=Xe.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee);let ke=Ni(Xe);if(ke.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ke.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&Y>=0&&Y<=M.height-V&&L.readPixels(U,Y,H,V,ge.convert(pt),ge.convert(gt),Ce)}finally{let Xe=ae!==null?z.get(ae).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(M,U,Y,H,V,Ce,Oe,Ee=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ve=Ve[Oe]),Ve)if(U>=0&&U<=M.width-H&&Y>=0&&Y<=M.height-V){x.bindFramebuffer(L.FRAMEBUFFER,Ve);let Xe=M.textures[Ee],pt=Xe.format,gt=Xe.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ee);let ke=Ni(Xe);if(ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.bufferData(L.PIXEL_PACK_BUFFER,Ce.byteLength,L.STREAM_READ),L.readPixels(U,Y,H,V,ge.convert(pt),ge.convert(gt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let ni=ae!==null?z.get(ae).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,ni);let Bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ff(L,Bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ce),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ct),L.deleteSync(Bt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Y=0){let H=Math.pow(2,-Y),V=Math.floor(M.image.width*H),Ce=Math.floor(M.image.height*H),Oe=U!==null?U.x:0,Ee=U!==null?U.y:0;J.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Oe,Ee,V,Ce),x.unbindTexture()},this.copyTextureToTexture=function(M,U,Y=null,H=null,V=0,Ce=0){let Oe,Ee,Ve,Xe,pt,gt,ke,Ct,ni,Bt=M.isCompressedTexture?M.mipmaps[Ce]:M.image;if(Y!==null)Oe=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Ve=Y.isBox3?Y.max.z-Y.min.z:1,Xe=Y.min.x,pt=Y.min.y,gt=Y.isBox3?Y.min.z:0;else{let ei=Math.pow(2,-V);Oe=Math.floor(Bt.width*ei),Ee=Math.floor(Bt.height*ei),M.isDataArrayTexture?Ve=Bt.depth:M.isData3DTexture?Ve=Math.floor(Bt.depth*ei):Ve=1,Xe=0,pt=0,gt=0}H!==null?(ke=H.x,Ct=H.y,ni=H.z):(ke=0,Ct=0,ni=0);let It=ge.convert(U.format),xi=ge.convert(U.type),Ie;U.isData3DTexture?(J.setTexture3D(U,0),Ie=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Ie=L.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Ie=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let bi=x.getParameter(L.UNPACK_ROW_LENGTH),yt=x.getParameter(L.UNPACK_IMAGE_HEIGHT),Wi=x.getParameter(L.UNPACK_SKIP_PIXELS),un=x.getParameter(L.UNPACK_SKIP_ROWS),Hn=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Xe),x.pixelStorei(L.UNPACK_SKIP_ROWS,pt),x.pixelStorei(L.UNPACK_SKIP_IMAGES,gt);let Nr=M.isDataArrayTexture||M.isData3DTexture,Dt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let ei=z.get(M),Vn=z.get(U),Nt=z.get(ei.__renderTarget),kn=z.get(Vn.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,Nt.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Fr=0;Fr<Ve;Fr++)Nr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(M).__webglTexture,V,gt+Fr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(U).__webglTexture,Ce,ni+Fr)),L.blitFramebuffer(Xe,pt,Oe,Ee,ke,Ct,Oe,Ee,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||z.has(M)){let ei=z.get(M),Vn=z.get(U);x.bindFramebuffer(L.READ_FRAMEBUFFER,I),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,F);for(let Nt=0;Nt<Ve;Nt++)Nr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ei.__webglTexture,V,gt+Nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ei.__webglTexture,V),Dt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Vn.__webglTexture,Ce,ni+Nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Vn.__webglTexture,Ce),V!==0?L.blitFramebuffer(Xe,pt,Oe,Ee,ke,Ct,Oe,Ee,L.COLOR_BUFFER_BIT,L.NEAREST):Dt?L.copyTexSubImage3D(Ie,Ce,ke,Ct,ni+Nt,Xe,pt,Oe,Ee):L.copyTexSubImage2D(Ie,Ce,ke,Ct,Xe,pt,Oe,Ee);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Dt?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(Ie,Ce,ke,Ct,ni,Oe,Ee,Ve,It,xi,Bt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Ie,Ce,ke,Ct,ni,Oe,Ee,Ve,It,Bt.data):L.texSubImage3D(Ie,Ce,ke,Ct,ni,Oe,Ee,Ve,It,xi,Bt):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ce,ke,Ct,Oe,Ee,It,xi,Bt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ce,ke,Ct,Bt.width,Bt.height,It,Bt.data):L.texSubImage2D(L.TEXTURE_2D,Ce,ke,Ct,Oe,Ee,It,xi,Bt);x.pixelStorei(L.UNPACK_ROW_LENGTH,bi),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt),x.pixelStorei(L.UNPACK_SKIP_PIXELS,Wi),x.pixelStorei(L.UNPACK_SKIP_ROWS,un),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Hn),Ce===0&&U.generateMipmaps&&L.generateMipmap(Ie),x.unbindTexture()},this.initRenderTarget=function(M){z.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){X=0,k=0,ae=null,x.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Cl=class extends rn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Tt;e.deleteAttribute("uv");let t=new _t({side:Pt}),i=new _t,r=new ar(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let o=new de(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let s=new Dn(e,i,6),a=new vt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),s.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),s.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),s.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),s.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),s.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),s.setMatrixAt(5,a.matrix),this.add(s);let c=new de(e,Go(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new de(e,Go(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let f=new de(e,Go(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let h=new de(e,Go(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let u=new de(e,Go(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new de(e,Go(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Go(n){return new Ys({color:0,emissive:16777215,emissiveIntensity:n})}var Ul=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,xg=()=>window.matchMedia("(pointer: coarse)").matches,js=null;function cm(){if(js!==null)return js;try{let e=document.createElement("canvas").getContext("webgl2");js=!!e,e?.getExtension("WEBGL_lose_context")?.loseContext()}catch{js=!1}return js}function zo({canvas:n,alpha:e=!0,antialias:t=!0}={}){let i=new Qs({canvas:n,alpha:e,antialias:t,powerPreference:"high-performance"});return i.outputColorSpace=$t,i.toneMapping=Gr,i.toneMappingExposure=1.05,i.setClearColor(0,0),i}var Ho=(n=2)=>Math.min(window.devicePixelRatio||1,xg()?Math.min(n,1.75):n),Zc=new WeakMap;function Vo(n){if(Zc.has(n))return Zc.get(n);let e=new cr(n),t=e.fromScene(new Cl,.04).texture;return e.dispose(),Zc.set(n,t),t}var Dl=new Set,Il=0,Pl=0;function fm(n){Il=0;let e=Pl?Math.min((n-Pl)/1e3,.05):1/60;Pl=n;let t=!1;if(!document.hidden){for(let i of Dl)if(i.visible)try{i.tick(e,n/1e3)!==!1&&(t=!0)}catch(r){console.error("Flytz 3D:",r),Dl.delete(i)}}t?Il=requestAnimationFrame(fm):Pl=0}function Di(){Il||(Il=requestAnimationFrame(fm))}function ko(n){Dl.add(n),Di()}function ur(n){Dl.delete(n)}document.addEventListener("visibilitychange",()=>!document.hidden&&Di());function Nl(n,e,t="120px"){let i=new IntersectionObserver(([r])=>{e.visible=r.isIntersecting,e.visible&&Di()},{rootMargin:t});return i.observe(n),i}var oi=(n,e,t)=>Math.min(t,Math.max(e,n)),Fl=(n,e,t,i)=>n+(e-n)*(1-Math.exp(-t*i)),Jc=n=>1-Math.pow(1-oi(n,0,1),3),ea=n=>(n=oi(n,0,1),n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2),um=n=>{n=oi(n,0,1);let e=1.70158;return 1+(e+1)*Math.pow(n-1,3)+e*Math.pow(n-1,2)};function ki(n=1){let e=n>>>0||1;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Bl(n,e,t,{repeat:i=!1,color:r=!0}={}){let o=document.createElement("canvas");o.width=n,o.height=e,t(o.getContext("2d"),n,e);let s=new Un(o);return r&&(s.colorSpace=$t),i&&(s.wrapS=s.wrapT=Qi),s.anisotropy=4,s}var Ll=null;function Wo(){return Ll||(Ll=Bl(64,64,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.25)"),t.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=t,n.fillRect(0,0,e,e)}),Ll)}function hm(n=3,e=1){return Bl(128,128,(t,i,r)=>{t.fillStyle="#fff",t.fillRect(0,0,i,r),t.fillStyle="#000";let o=r/n;for(let s=0;s<n;s++)for(let a=0;a<e;a++){let c=i/e,l=a*c+c*.22,f=c*.56,h=s*o+o*.22,u=(s+1)*o-o*.08;t.beginPath(),t.moveTo(l,u),t.lineTo(l,h+f/2),t.arc(l+f/2,h+f/2,f/2,Math.PI,0),t.lineTo(l+f,u),t.closePath(),t.fill()}},{repeat:!0,color:!1})}function ta(n=7){let e=ki(n);return Bl(64,128,(t,i,r)=>{t.fillStyle="#05070c",t.fillRect(0,0,i,r);for(let o=4;o<r;o+=8)for(let s=3;s<i;s+=8){let a=e();a<.45||(t.fillStyle=a>.9?"#ffe2a8":a>.7?"#e7b866":"#7a5a2a",t.fillRect(s,o,4,4))}},{repeat:!0})}function dm(){return Bl(128,128,(n,e)=>{let t=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);t.addColorStop(0,"rgba(0,0,0,0.75)"),t.addColorStop(.5,"rgba(0,0,0,0.35)"),t.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=t,n.fillRect(0,0,e,e)})}function Ol(n){n.traverse(e=>{e.geometry?.dispose?.();let t=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let i of t){for(let r of["map","alphaMap","emissiveMap","roughnessMap"])i[r]?.dispose?.();i.dispose?.()}})}function Gl(n,{onDrag:e,onRelease:t,onTap:i,skip:r="a, button, input, select, textarea, label"}={}){let o=null,s=l=>{l.button!==void 0&&l.button!==0||l.target.closest(r)||(o={x:l.clientX,y:l.clientY,lx:l.clientX,ly:l.clientY,t:performance.now(),moved:!1})},a=l=>{if(!o)return;let f=l.clientX-o.lx,h=l.clientY-o.ly;!o.moved&&Math.hypot(l.clientX-o.x,l.clientY-o.y)>5&&(o.moved=!0);let u=performance.now();o.moved&&e?.(f,h,Math.max(u-o.t,8),l),o.lx=l.clientX,o.ly=l.clientY,o.t=u},c=l=>{if(!o)return;let f=!o.moved;o=null,f?i?.(l):t?.(l)};return n.addEventListener("pointerdown",s),window.addEventListener("pointermove",a,{passive:!0}),window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c),{get dragging(){return!!(o&&o.moved)},dispose(){n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",c)}}}var yi={cols:360,rows:180,step:1,b64:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADf//8AAf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////D//////n/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gf/x////////wAAAAAbgAAB4AAAAAAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAf//8A///////+AAAAB/ngAAAAAAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAcH3Hv/5////////8AAAAA/gAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAcIAAQP/AH///////+AAAAAPCAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAADwDAc+f+AP///////4AAAAAAAAAAAAAB4AAAAB/8AAAAAAAAAAAAAAAAAAAAAH9wc374AAAf/////8AAAAAAAAAAAAH4AAAA////AAAB/gAAAAAAAAAAAAAAAAwAAA/QAAAH/////8AAAAAAAAAAAAOAAAAP///wAAAAAAAAAAAAAAAAAAAAP8AYe+c3AAAD/////4AAAAAAAAAAAA4AAAH////++HgAOAAAAAAAAAAAAAAAfv+4+w/4gAAB/////wAAAAAAAAAAADwAHgH///////4AfgAAAAAgAAAAAAAAPf/4O4//9AAB/////wAAAAAAAAAAADwAPb////////4m//gAAAAAAAf+AAAAAA/+A8f//4AB////8gAAAAAAA/gAAAAAfv/////////////8AAAAAB///+H//H/+PeDwf+AA3////AAAAAAA//4AAAA8fv///////////////P8gAf////////A4CPz4H8AAP///wAAAAAAD///wADH/n3/////////////////8AD////////////34Z/wA///4AAAAAAAP///+M////n/////////////////+4E/////////////gD/8Af//gAAAAAAAf//5+P////f/////////////////fw/////////////6AD8YAf/wAAf8AAAA/8f+D///////////////////////AgEf///////////zw7/AAP/gAAP4AAAB/4/+f//////////////////////8AMAf//////////+DIA/gAH/gAAAAAAAH/z/////////////////////////+AAH///////////8AwgOAAD+AAAAAAAA//H/////////////////////////6AAP///////////wAA/AAAB+AAAAAAAB/+H//////////////////////nP+AAAH//z////////wAA/wAAAOAAAAAAAB//D/////////////////////+A/4AAAA/zAD///////gAA/4wAAAAAAAAAAB//Ab///////////////////+eDgAAAAABwAA///////4AA/94AAAAAAAAAYA5+A///////////////////4AAHAAAAAADcAAD//////4AAf/8AAAAAAAAA8AC+C///////////////////wAAfgAAAAAMAAAA///////wAf/8AAAAAAAAA4AO8H///////////////////AAA/gAAAABgAAAA///////8A///AAAAAAAAA8ANwH//////////////////8AAB/AAAAAEAAAAAf///////z///4AAAAAAAHOAEDv//////////////////+AAA+AAAAAAAAAABH///////x///8AAAAAAAHHAf/////////////////////6AA8AAAAAAAAAAAD///////x///8AAAAAAAGPz//////////////////////6AAwAAAAAAAAAAAD///////9///6AAAAAAAAPj//////////////////////6AAQAAAAAAAAAAAC///////////MAAAAAAAAYf//////////////////////7AAAAAAAAAAAAAABv////////+MNAAAAAAAAD///////////////////////zAAAAAAAAAAAAAAAH////////7gfgAAAAAAAf///////////////////////yAAAAAAAAAAAAAAAL/////////gCgAAAAAAAH///////////////////////iAAAAAAAAAAAAAAAP/////////pAAAAAAAAAD/////uP/x//////////////DAAAAAAAAAAAAAAAP/////////+AAAAAAAAAB//v//Gf/B/////////////+AAAAAAAAAAAAAAAAP////////8wAAAAAAAAAB//H/+AP+P/////////////8CAAAAAAAAAAAAAAAP////////wAAAAAAAAADj/jz/8AD/H/////////////4HgAAAAAAAAAAAAAAP////////gAAAAAAAAAH/4Bw/8AA/B////////////+APAAAAAAAAAAAAAAAP////////gAAAAAAAAAH/wA8f8Ph/g////////////8AAAAAAAAAAAAAAAAAP///////8AAAAAAAAAAH/gMHfJ///x///////////v4AMAAAAAAAAAAAAAAAP///////8AAAAAAAAAAH/AMCOP///h//////////+JwAMAAAAAAAAAAAAAAAH///////4AAAAAAAAAAH/AAAHH///g//////////8BwAIAAAAAAAAAAAAAAAH///////wAAAAAAAAAAH+AAYGH///w//////////+w4A4AAAAAAAAAAAAAAAD///////wAAAAAAAAAAAgf+ACBs//////////////g4D4AAAAAAAAAAAAAAAB///////wAAAAAAAAAAAj/+AAAA//////////////AYf4AAAAAAAAAAAAAAAA///////gAAAAAAAAAAB//8AAAA//////////////Ah2AAAAAAAAAAAAAAAAAP/////+AAAAAAAAAAAD//+AAAB//////////////gDwAAAAAAAAAAAAAAAAAH/////8AAAAAAAAAAAH///4GAB//////////////gDAAAAAAAAAAAAAAAAAAG/////4AAAAAAAAAAAP///8P4h//////////////wCAAAAAAAAAAAAAAAAAACf////4AAAAAAAAAAAP////v////////////////gAAAAAAAAAAAAAAAAAAABP//hgYAAAAAAAAAAAP//////3//P///////////wAAAAAAAAAAAAAAAAAAAAv//AAYAAAAAAAAAAAf//////9//H///////////wAAAAAAAAAAAAAAAAAAAB3/+AAcAAAAAAAAAAB///////4//h///////////gAAAAAAAAAAAAAAAAAAAAR/+AANAAAAAAAAAAD///////8//wH//////////AAAAAAAAAAAAAAAAAAAAAJ/+AAEAAAAAAAAAAH///////+f/0B/////////+AAAAAAAAAAAAAAAAAAAAAI/8AAAAAAAAAAAAAH///////+f/44Af///////+QAAAAAAAAAAAAAAAAAAAAAf8AAAAAAAAAAAAAP////////H//+AP///////4gAAAAAAAAAAAAAAAAAAAAAP8AAuAAAAAAAAAAP////////H///AD///v///ggAAAAAAAAAAAAAAAAAAAAAH+AABgAAAAAAAAAf////////n//+AD//4P//YAAAAAAAAAAAAAAAAAAAAAAAP+A4AYAAAAAAAAAP////////j//+AAf/4H/+AAAAAAAAAAAAAAAAgAAAAAAAH/B4ABwAAAAAAAAP////////h//8AAf/gD/8YAAAAAAAAAAAAAAAAAAAAAAAD/nwAD9AAAAAAAAP////////x//4AAf/AD/8QAAAAAAAAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAP////////4//gAAf+AD/+AAwAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAAf////////4f+AAAf8AD//AAwAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAf////////8f8AAAPwAAP/gAwAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAf////////+fgAAAPwAAP/gAwAAAAAAAAAAAAAAAAAAAAAAAA/AAAAAAAAAAAf/////////eAAAAHwAAP/gAMAAAAAAAAAAAAAAAAAAAAAAAAHgAAAAAAAAAAf/////////gAAAAHwAAM/gACAAAAAAAAAAAAAAAAAAAAAAAADABAAAAAAAAAP/////////gYAAADwAAEfgAJAAAAAAAAAAAAAAAAAAAAAAAADgPfKAAAAAAAH/////////34AAADwAAIOABAAAAAAAAAAAAAAAAAAAAAAAAAAyPf+AAAAAAAD//////////4AAADoAAIEACBAAAAAAAAAAAAAAAAAAAAAAAAA8///AAAAAAAB//////////wAAABIAAMAAAFAAAAAAAAAAAAAAAAAAAAAAAAAE///gAAAAAAB//////////wAAAAMAAEAAALgAAAAAAAAAAAAAAAAAAAAAAAAAf//wAAAAAAAf/////////gAAAAMAADAAMCAAAAAAAAAAAAAAAAAAAAAAAAAA////gAAAAAAP/B///////gAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAf///wAAAAAACAA///////AAAAAAAAxgA+AAAAAAAAAAAAAAAAAAAAAAAAAAAf///4AAAAAAAAAD/////+AAAAAAAAZgB4AAAAAAAAAAAAAAAAAAAAAAAAAAB////4AAAAAAAAAD/////8AAAAAAAAMwH8AAAAAAAAAAAAAAAAAAAAAAAAAAB////8AAAAAAAAAH/////4AAAAAAAAHQf8AIAAAAAAAAAAAAAAAAAAAAAAAAD////8AAAAAAAAAH/////gAAAAAAAAHgf88IAAAAAAAAAAAAAAAAAAAAAAAAD////+AAAAAAAAAH/////AAAAAAAAADwf8AAgAAAAAAAAAAAAAAAAAAAAAAAH/////4AAAAAAAAH/////AAAAAAAAABwP5wBwAAAAAAAAAAAAAAAAAAAAAAAH/////6AAAAAAAAD////+AAAAAAAAAB8P5wATwAAAAAAAAAAAAAAAAAAAAAAD//////4AAAAAAAB////8AAAAAAAAAA8AxQif+AAAAAAAAAAAAAAAAAAAAAAH//////8AAAAAAAB////4AAAAAAAAAAcAAIAD/gAAAAAAAAAAAAAAAAAAAAAH///////gAAAAAAA////4AAAAAAAAAAMAAIAI/ywAAAAAAAAAAAAAAAAAAAAH///////gAAAAAAA////4AAAAAAAAAADgAAAI/8BAAAAAAAAAAAAAAAAAAAAD///////gAAAAAAAf///4AAAAAAAAAAB+AAAA/4AIAAAAAAAAAAAAAAAAAAAB///////gAAAAAAAf///4AAAAAAAAAAAAmogAOMAAAAAAAAAAAAAAAAAAAAAB///////AAAAAAAAf///8AAAAAAAAAAAABCAAAGADAAAAAAAAAAAAAAAAAAAA///////AAAAAAAAf///8AAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAf/////+AAAAAAAAP///8AAAAAAAAAAAAAAAgCAAAAAAAAAAAAAAAAAAAAAAAf/////8AAAAAAAAf///+AQAAAAAAAAAAAAB+CAAAAAAAAAAAAAAAAAAAAAAAP/////4AAAAAAAAf///+AQAAAAAAAAAAAAD8DAAAAAAAAAAAAAAAAAAAAAAAP/////4AAAAAAAA////+AwAAAAAAAAAAAA38DgAAAAAAAAAAAAAAAAAAAAAAH/////4AAAAAAAA////8BwAAAAAAAAAAAD/8DgAAAAAAAAAAAAAAAAAAAAAAB/////4AAAAAAAA////8PwAAAAAAAAAAAD//HwAABABAAAAAAAAAAAAAAAAAAf////4AAAAAAAA////wPgAAAAAAAAAAAP//3wAAAACAAAAAAAAAAAAAAAAAAP////wAAAAAAAA////APgAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAP////wAAAAAAAAf//+APgAAAAAAAAAAAf///4AAAAAAAAAAAAAAAAAAAAAAAP////wAAAAAAAAf//+APgAAAAAAAAAAD////+AAIAAAAAAAAAAAAAAAAAAAAP////gAAAAAAAAP//+AfAAAAAAAAAAAf////+AAEAAAAAAAAAAAAAAAAAAAAP////AAAAAAAAAP///AfAAAAAAAAAAA//////AAAAAAAAAAAAAAAAAAAAAAAP///4AAAAAAAAAP//+APAAAAAAAAAAA//////gAAAAAAAAAAAAAAAAAAAAAAf///gAAAAAAAAAH//+AOAAAAAAAAAAB//////wAAAAAAAAAAAAAAAAAAAAAAf///AAAAAAAAAAH//4AEAAAAAAAAAAA//////4AAAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAH//4AAAAAAAAAAAAB//////4AAAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAH//4AAAAAAAAAAAAA//////4AAAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAD//wAAAAAAAAAAAAAf/////8AAAAAAAAAAAAAAAAAAAAAAf//8AAAAAAAAAAB//gAAAAAAAAAAAAAf/////4AAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAB//gAAAAAAAAAAAAAf/////4AAAAAAAAAAAAAAAAAAAAAA///4AAAAAAAAAAA//AAAAAAAAAAAAAAP/////4AAAAAAAAAAAAAAAAAAAAAAf//wAAAAAAAAAAA/+AAAAAAAAAAAAAAP/AP//wAAAAAAAAAAAAAAAAAAAAAA///gAAAAAAAAAAA/4AAAAAAAAAAAAAAf8AG//gAAAAAAAAAAAAAAAAAAAAAA//3AAAAAAAAAAAAYAAAAAAAAAAAAAAAOAAF//gAAAAAAAAAAAAAAAAAAAAAB//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAABAAAAAAAAAAAAAAAAAAB//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAgAAAAAAAAAAAAAAAAAD//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAQAAAAAAAAAAAAAAAAAB//gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAAAcAAAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAADQAAAAAAAAAAAAAAAAAD/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAHAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAOAAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAAAAAAAH4AAAAAAB4HgAD8AAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAA//AAAD//////////wAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAf///4Af///////////AAAAAAAAAAAAAAAAAAAAAAAz4AAAAAAAAAAAAAAAPz////8B/////////////wAAAAAAAAAAAAAAAAAAAAA78AAAAAAAAAAA8/8///////wf/////////////+AAAAAAAAAAAAAAAAAAAAH9+AAAAAAAAZ////////////w////////////////4AAAAAAAAAAAAAAAAAAAB+AAAAAAAB//////////////////////////////4AAAAAAAAABmAAB8f+HB/+AAAAAAAP//////////////////////////////gAAAAAAAAP/c/oAf/////4AAAAAAAP/////////////////////////////8AAAAAAAD/////////////gAAAAAAB//////////////////////////////wAAAAAAAD////////////wAAAAAAP///////////////////////////////wAAAAAD/////////////4AAAAAAD////////////////////////////////wAAAADh/////////////AAAAB8A/////////////////////////////////+AAAAA4Af///////////gAAAH+AA///////////////////////////////+AAAAAAAAH///////////+A/A/wAA///////////////////////////////8AAAAAAAf//////////////gAAAf////////////////////////////////+AAAAAAAH///////////////h////////////////////////////////////wAAAAAAP/////////////////////////////////////////////////////gA+/gAAH/////////////////////////////////////////////////////8/////v//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"};function zl({detail:n="high",accent:e="#c9a24b"}={}){let t=n==="high",i=new Qe;i.name="airliner";let r=new _t({color:"#eef2f7",metalness:.25,roughness:.32}),o=new _t({color:"#c9d1dd",metalness:.45,roughness:.4,side:Ht}),s=new _t({color:e,metalness:.7,roughness:.32,side:Ht}),a=new _t({color:"#0b0f17",metalness:.6,roughness:.25}),c=new _t({color:"#dfe5ee",metalness:.5,roughness:.3}),l=new qt({color:new le("#ffd28a")}),f=[[0,-.5],[.011,-.492],[.019,-.47],[.031,-.41],[.044,-.34],[.052,-.27],[.056,-.19],[.056,.3],[.054,.36],[.049,.41],[.04,.45],[.028,.478],[.014,.494],[0,.5]].map(([_,b])=>new W(_,b)),h=new Co(f,t?32:16);h.rotateZ(-Math.PI/2);let u=h.attributes.position;for(let _=0;_<u.count;_++){let b=u.getX(_);b<-.2&&u.setY(_,u.getY(_)+(-.2-b)*.22)}h.computeVertexNormals(),i.add(new de(h,r));for(let _ of[-.0566,.0566]){let b=new de(new Tt(.62,.0045,.0015),s);b.position.set(.02,-.004,_),i.add(b)}let d=(_,b,y,C,g,w,P)=>{let D=[[_,0],[y,g*w],[C,g*w],[b,0]];w<0&&D.reverse();let B=new li(D.map(([I,F])=>new W(I,F))),O=new An(B,{depth:P,bevelEnabled:!0,bevelThickness:P*.35,bevelSize:P*.35,bevelSegments:1});return O.rotateX(Math.PI/2),O};for(let _ of[-1,1]){let b=new de(d(.15,-.1,-.15,-.25,.5,_,.01),o);b.position.set(0,-.022,0),b.rotation.x=-.07*_,i.add(b);let y=new li([new W(-.165,0),new W(-.205,.045),new W(-.228,.045),new W(-.236,0)]),C=new de(new An(y,{depth:.005,bevelEnabled:!1}),s);C.position.set(0,0,.5*_-.0025),b.add(C);let g=new de(d(-.34,-.45,-.46,-.51,.19,_,.006),o);g.position.set(0,.044,0),g.rotation.x=-.1*_,i.add(g);let w=new Qe,P=new de(new Ut(.03,.026,.13,t?24:12,1,!0),c);P.rotation.z=Math.PI/2;let D=new de(new Li(.029,.004,8,t?24:12),s);D.rotation.y=Math.PI/2,D.position.x=.065;let B=new de(new Ut(.027,.027,.004,t?20:10),a);B.rotation.z=Math.PI/2,B.position.x=.06;let O=new de(new Tt(.09,.03,.006),o);O.position.set(-.01,.028,0),w.add(P,D,B,O),w.position.set(.07,-.062,.19*_),i.add(w)}let m=new li([new W(-.29,.045),new W(-.43,.245),new W(-.5,.245),new W(-.48,.045)]),v=new An(m,{depth:.01,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:1});v.translate(0,0,-.005),i.add(new de(v,s));let A=new de(new Tt(.03,.012,.058),a);A.position.set(.445,.02,0),A.rotation.z=-.5,i.add(A);let p={navLights:[],strobes:[],beacon:null,gear:null,cargoDoor:null,windows:null};if(t){let b=new Dn(new Tt(.008,.007,.002),l,60),y=new tt,C=0;for(let g of[-.0545,.0545])for(let w=0;w<30;w++)y.makeTranslation(.31-w*.017,.016,g),b.setMatrixAt(C++,y);i.add(b),p.windows=b}let S=(_,b,y,C,g=.007)=>{let w=new de(new Zt(g,8,6),new qt({color:_}));return w.position.set(b,y,C),i.add(w),w};if(p.navLights.push(S("#ff3b3b",-.18,.012,-.505),S("#3bff7a",-.18,.012,.505),S("#ffffff",-.505,.11,0)),p.strobes.push(S("#ffffff",-.19,.012,-.508,.005),S("#ffffff",-.19,.012,.508,.005)),p.beacon=S("#ff4a3a",.05,.06,0,.006),t){let _=new Qe,b=new _t({color:"#9aa3b2",metalness:.8,roughness:.35}),y=new _t({color:"#121418",roughness:.8}),C=(P,D,B)=>{let O=new Qe,I=new de(new Ut(.0035,.0035,.06,8),b);I.position.y=-.03,O.add(I);for(let F of B){let X=new de(new Ut(.013,.013,.008,14),y);X.rotation.x=Math.PI/2,X.position.set(0,-.062,F),O.add(X)}O.position.set(P,-.045,D),_.add(O)};C(.37,0,[-.006,.006]),C(-.02,-.07,[-.008,.008]),C(-.02,.07,[-.008,.008]),i.add(_),p.gear=_;let g=new vt;g.position.set(.17,.004,.0545);let w=new de(new Tt(.075,.045,.004),r);w.position.y=-.0225,g.add(w),i.add(g),p.cargoDoor=g}let E=(_,b)=>{_.visible=b};return{group:i,parts:p,update(_){let b=_%1.2<.07||_%1.2>.16&&_%1.2<.22;p.strobes.forEach(y=>E(y,b)),p.beacon&&E(p.beacon,_%1<.12)}}}var Dr=Math.PI/180,_g=new T(0,1,0),dr=(n,e,t=1)=>new T(Math.cos(n*Dr)*Math.sin(e*Dr)*t,Math.sin(n*Dr)*t,Math.cos(n*Dr)*Math.cos(e*Dr)*t),Hl=null;function vg(n,e){if(!Hl){let o=atob(yi.b64);Hl=new Uint8Array(o.length);for(let s=0;s<o.length;s++)Hl[s]=o.charCodeAt(s)}let t=oi(Math.floor((90-n)/yi.step),0,yi.rows-1),i=(Math.floor((e+180)/yi.step)%yi.cols+yi.cols)%yi.cols,r=t*yi.cols+i;return Hl[r>>3]>>7-(r&7)&1}var hr=`
#include <colorspace_fragment>
`;function Mg(n){let e=ki(42),t=[],i=[],r=0;for(let s=-82;s<=84;s+=n,r++){let a=Math.max(1,Math.round(360/n*Math.cos(s*Dr)));for(let c=0;c<a;c++){let l=-180+(c+r%2*.5)*360/a;if(!vg(s,l))continue;let f=dr(s,l,1.004);t.push(f.x,f.y,f.z),i.push(e())}}let o=new Ke;return o.setAttribute("position",new Me(t,3)),o.setAttribute("aRand",new Me(i,1)),o}function Sg(){let n=[];for(let i=-60;i<=60;i+=30)for(let r=0;r<120;r++){let o=dr(i,r/120*360,1.002),s=dr(i,(r+1)/120*360,1.002);n.push(o.x,o.y,o.z,s.x,s.y,s.z)}for(let i=0;i<360;i+=30)for(let r=0;r<120/2;r++){let o=dr(-90+r/60*180,i,1.002),s=dr(-90+(r+1)/(120/2)*180,i,1.002);n.push(o.x,o.y,o.z,s.x,s.y,s.z)}let t=new Ke;return t.setAttribute("position",new Me(n,3)),t}function yg(n=1400){let e=ki(7),t=[],i=[],r=[];for(let s=0;s<n;s++){let a=e()*2-1,c=e()*Math.PI*2,l=40+e()*40,f=Math.sqrt(1-a*a);t.push(Math.cos(c)*f*l,a*l,-Math.abs(Math.sin(c)*f*l)-8),i.push(e()<.08?2.4:.8+e()*1.1),r.push(e())}let o=new Ke;return o.setAttribute("position",new Me(t,3)),o.setAttribute("aSize",new Me(i,1)),o.setAttribute("aRand",new Me(r,1)),o}function bg(n,e,t){let i=oi(n.dot(e),-1,1),r=Math.acos(i);if(r<1e-4)return n.clone();let o=Math.sin(r);return n.clone().multiplyScalar(Math.sin((1-t)*r)/o).add(e.clone().multiplyScalar(Math.sin(t*r)/o))}function pm(n,e={}){let t=e.reduced??Ul(),i=new le(e.accent||"#c9a24b"),r=new le(e.accentSoft||"#e7cf96"),o=(e.pins||[]).slice(0,24),s=document.createElement("canvas");s.className="flytz-globe3d",s.setAttribute("aria-hidden","true"),n.appendChild(s);let a=document.createElement("div");a.className="flytz-globe3d__labels",(e.labelsParent||n).appendChild(a);let c=zo({canvas:s,alpha:!0});s.addEventListener("webglcontextlost",he=>{he.preventDefault(),e.onContextLost?.()});let l=new rn,f=new Ft(32,1,.1,400);f.position.set(0,0,4),l.environment=Vo(c);let h=new xn("#fff3dd",2.4);h.position.set(-3,2.5,3),l.add(h,new Fn("#9fb4ff","#0a0d16",.8));let u=new Qe,d=new Qe;u.add(d),l.add(u);let m=new bt({uniforms:{uTime:{value:0},uPixelRatio:{value:1}},vertexShader:`attribute float aSize; attribute float aRand; uniform float uTime; uniform float uPixelRatio; varying float vA;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = aSize * uPixelRatio * 1.6;
      vA = 0.35 + 0.65 * (0.5 + 0.5 * sin(uTime * (0.6 + aRand * 1.8) + aRand * 40.0)); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
      float a = smoothstep(0.5, 0.0, d) * vA; gl_FragColor = vec4(vec3(0.92, 0.94, 1.0) * a, a); ${hr} }`,transparent:!0,depthWrite:!1,blending:Kt,toneMapped:!1}),v=new mn(yg(),m);l.add(v);let A=new bt({uniforms:{uDeep:{value:new le("#060a14")},uLit:{value:new le("#1a2742")},uRim:{value:new le("#2c4f9e")},uGold:{value:i.clone()},uLightDir:{value:new T(-.55,.5,.67).normalize()},uReveal:{value:1}},vertexShader:`varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uDeep; uniform vec3 uLit; uniform vec3 uRim; uniform vec3 uGold; uniform vec3 uLightDir; uniform float uReveal;
      varying vec3 vN; varying vec3 vV;
      void main(){ vec3 n = normalize(vN); float l = clamp(dot(n, uLightDir), 0.0, 1.0);
        vec3 col = mix(uDeep, uLit, pow(l, 1.5));
        float f = pow(1.0 - clamp(dot(n, vV), 0.0, 1.0), 3.2);
        col += uRim * f * 0.55 + uGold * f * f * 0.08;
        vec3 h = normalize(uLightDir + vV); col += vec3(1.0, 0.9, 0.75) * pow(clamp(dot(n, h), 0.0, 1.0), 220.0) * 0.05;
        gl_FragColor = vec4(col * uReveal, 1.0);
        #include <tonemapping_fragment>
        ${hr} }`}),p=new de(new Zt(1,96,64),A);d.add(p);let S=new Tr(Sg(),new In({color:"#c7d3f0",transparent:!0,opacity:.06,depthWrite:!1}));d.add(S);let E=new bt({uniforms:{uColor:{value:r.clone()},uScale:{value:400},uSize:{value:.0105},uTime:{value:0},uReveal:{value:t?1:0}},vertexShader:`attribute float aRand; uniform float uScale; uniform float uSize; varying float vFacing; varying float vRand;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vec3 n = normalize(normalMatrix * normalize(position));
        vFacing = dot(n, normalize(-mv.xyz)); vRand = aRand;
        gl_PointSize = uSize * uScale / -mv.z * (0.8 + 0.4 * aRand); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uTime; uniform float uReveal; varying float vFacing; varying float vRand;
      void main(){ float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
        float shape = smoothstep(0.5, 0.15, d);
        float face = smoothstep(0.02, 0.4, vFacing);
        float tw = 0.82 + 0.18 * sin(uTime * 1.6 + vRand * 50.0);
        float show = smoothstep(vRand, vRand + 0.08, uReveal * 1.1);
        float a = shape * face * (0.32 + 0.68 * vFacing) * show;
        gl_FragColor = vec4(uColor * tw * a, a); ${hr} }`,transparent:!0,depthWrite:!1,blending:Kt,toneMapped:!1}),_=new mn(Mg(window.innerWidth<750?1.35:1.05),E);d.add(_);let b=new bt({uniforms:{uColor:{value:new le("#3b6cf5")},uIntensity:{value:t?1:0}},vertexShader:`varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0);
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uIntensity; varying vec3 vN; varying vec3 vV;
      void main(){ float d = clamp(-dot(normalize(vN), vV), 0.0, 1.0);
        float i = pow(d, 2.4) * 1.6 * uIntensity;
        gl_FragColor = vec4(uColor * i, i); ${hr} }`,side:Pt,transparent:!0,depthWrite:!1,blending:Kt,toneMapped:!1}),y=new de(new Zt(1,64,48),b);y.scale.setScalar(1.2),u.add(y);let C=Wo(),g=new Ut(.0018,.0055,1,10,1,!0);g.translate(0,.5,0);let w=new bt({uniforms:{uColor:{value:r.clone()},uAlpha:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uColor; uniform float uAlpha; varying vec2 vUv;
      void main(){ float a = pow(1.0 - vUv.y, 1.6) * 0.85 * uAlpha; gl_FragColor = vec4(uColor * a, a); ${hr} }`,transparent:!0,depthWrite:!1,blending:Kt,toneMapped:!1}),P=new Po(.82,1,48),D=new Zt(.0105,12,10),B=new qt({color:r,toneMapped:!1}),O=new Zt(.05,8,6),I=new qt({visible:!1}),F=o.map((he,Ge)=>{let dt=dr(he.lat,he.lng,1),Je=dt.clone().normalize(),Mt=new Qe;Mt.position.copy(dt),Mt.quaternion.setFromUnitVectors(_g,Je);let Ot=new de(g,w.clone());Ot.scale.set(1,.07+Ge%3*.018,1);let jt=new de(D,B),wt=new qt({color:i,transparent:!0,opacity:0,depthWrite:!1,blending:Kt,toneMapped:!1}),Lt=new de(P,wt);Lt.rotation.x=-Math.PI/2,Lt.position.y=.002;let At=new mn(new Ke().setAttribute("position",new Me([0,0,0],3)),new bt({uniforms:{uMap:{value:C},uColor:{value:r.clone()},uSize:{value:26},uPixelRatio:{value:1},uAlpha:{value:1}},vertexShader:"uniform float uSize; uniform float uPixelRatio; void main(){ gl_PointSize = uSize * uPixelRatio; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D uMap; uniform vec3 uColor; uniform float uAlpha; void main(){ float a = texture2D(uMap, gl_PointCoord).a * 0.55 * uAlpha; gl_FragColor = vec4(uColor * a, a); ${hr} }`,transparent:!0,depthWrite:!1,blending:Kt,toneMapped:!1})),Gt=new de(O,I);return Gt.userData.pin=he,Mt.add(Ot,jt,Lt,At,Gt),Mt.scale.setScalar(t?1:1e-4),d.add(Mt),{pin:he,group:Mt,beam:Ot,ring:Lt,halo:At,hit:Gt,normal:Je,phase:Ge*.37%1,label:null}}),X=[];if(e.showRoutes!==!1){let he=o.slice(0,7);for(let Ge=1;Ge<he.length;Ge++){let dt=dr(he[Ge-1].lat,he[Ge-1].lng),Je=dr(he[Ge].lat,he[Ge].lng),Ot=.06+.22*(Math.acos(oi(dt.dot(Je),-1,1))/Math.PI),jt=[];for(let Gt=0;Gt<=40;Gt++){let zt=Gt/40;jt.push(bg(dt,Je,zt).multiplyScalar(1.004+Math.sin(zt*Math.PI)*Ot))}let wt=new fl(new nr(jt),120,.0034,6,!1),Lt=new bt({uniforms:{uColor:{value:r.clone()},uHead:{value:0},uDraw:{value:t?1:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uColor; uniform float uHead; uniform float uDraw; varying vec2 vUv;
          void main(){ if (vUv.x > uDraw) discard; float d = uHead - vUv.x; if (d < 0.0) d += 1.0;
            float comet = exp(-d * 10.0); float a = 0.16 + comet * 1.15; gl_FragColor = vec4(uColor * a, a); ${hr} }`,transparent:!0,depthWrite:!1,blending:Kt,toneMapped:!1}),At=new de(wt,Lt);d.add(At),X.push({mesh:At,mat:Lt,offset:Ge*.37%1,delay:1.25+Ge*.14})}}let k=null,ae=.125,q=new Qe;q.rotation.order="ZYX",q.rotation.set(.42,0,-.22),u.add(q);let Q=72,re=new Float32Array(Q*2*3),Le=new Float32Array(Q*2),Re=[];for(let he=0;he<Q-1;he++){let Ge=he*2;Re.push(Ge,Ge+1,Ge+2,Ge+1,Ge+3,Ge+2)}for(let he=0;he<Q;he++)Le[he*2]=Le[he*2+1]=1-he/(Q-1);let ct=new Ke;ct.setAttribute("position",new ii(re,3)),ct.setAttribute("aFade",new ii(Le,1)),ct.setIndex(Re);let rt=new bt({uniforms:{uColor:{value:r.clone()},uAlpha:{value:0}},vertexShader:"attribute float aFade; varying float vF; void main(){ vF = aFade; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uColor; uniform float uAlpha; varying float vF; void main(){ float a = pow(vF, 1.6) * 0.5 * uAlpha; gl_FragColor = vec4(uColor * a, a); ${hr} }`,transparent:!0,depthWrite:!1,blending:Kt,toneMapped:!1}),ft=new de(ct,rt);ft.frustumCulled=!1;let K=!1;e.showPlane!==!1&&(k=zl({detail:"low",accent:"#"+i.getHexString()}),k.group.scale.setScalar(ae),q.add(k.group),l.add(ft));let te=1.27,xe=new T,Ue=new tt,ye=he=>he.code||he.title||"";for(let he of F){if(!ye(he.pin))continue;let Ge=!!(he.pin.handle||he.pin.url),dt=document.createElement(Ge?"button":"span");dt.className="flytz-globe3d__pin",dt.hidden=!0,dt.innerHTML='<span class="flytz-globe3d__code"></span><span class="flytz-globe3d__name"></span>',dt.querySelector(".flytz-globe3d__code").textContent=he.pin.code||"",dt.querySelector(".flytz-globe3d__name").textContent=he.pin.title||"",Ge?(dt.type="button",dt.setAttribute("aria-label",`${he.pin.title||he.pin.code}${he.pin.code&&he.pin.title?", "+he.pin.code:""}. ${e.openLabel||"Open the capsule"}`),he.pin.handle&&(dt.dataset.handle=he.pin.handle),dt.addEventListener("click",Je=>e.onPinClick?.(he.pin,Je))):dt.setAttribute("aria-hidden","true"),dt.addEventListener("pointerenter",()=>he.hover=!0),dt.addEventListener("pointerleave",()=>he.hover=!1),dt.addEventListener("focus",()=>he.hover=!0),dt.addEventListener("blur",()=>he.hover=!1),a.appendChild(dt),he.label=dt}let Ne=1,qe=1,ee=1,Z=[],ne=0,se=0,fe=f.fov*Math.PI/180;function De(){Ne=n.clientWidth||1,qe=n.clientHeight||1;let he=Ho(2);c.setPixelRatio(he),c.setSize(Ne,qe,!1),f.aspect=Ne/qe,ee=Ne<750?Math.min(Ne*.47,qe*.36):Math.min(Ne,qe)*.41;let Ge=qe/2/(ee*Math.tan(fe/2));f.position.set(0,0,Ge),f.near=Math.max(.05,Ge-3),f.far=Ge+200,f.updateProjectionMatrix(),u.position.y=Ne<750?0:-(.05*qe)/ee,E.uniforms.uScale.value=qe*he/(2*Math.tan(fe/2)),m.uniforms.uPixelRatio.value=he,F.forEach(dt=>dt.halo.material.uniforms.uPixelRatio.value=he),we(),ce()}function we(){let he=n.getBoundingClientRect(),Ge=a.parentElement.getBoundingClientRect();ne=he.left-Ge.left,se=he.top-Ge.top,Z=(typeof e.avoid=="function"?e.avoid():e.avoidSelectors?[...document.querySelectorAll(e.avoidSelectors)]:[]).map(Je=>{let Mt=Je.getBoundingClientRect();return[Mt.left-he.left-10,Mt.top-he.top-10,Mt.right-he.left+10,Mt.bottom-he.top+10]}).filter(Je=>Je[2]>Je[0])}let We=-12*Dr,$e=.36,L=0,ut=0,nt=t?1:0,R=null,x=t?0:(Number.isFinite(e.speed)?e.speed:4)*.011,G=e.dragArea||n,z=new Zs,J=new W,ue=Gl(G,{onDrag:(he,Ge,dt)=>{We+=he/ee,$e=oi($e+Ge/ee/2,.05,.75),L=he/ee/(dt/1e3),Di()},onRelease:()=>Di(),onTap:he=>{let Ge=s.getBoundingClientRect();if(he.clientX<Ge.left||he.clientX>Ge.right||he.clientY<Ge.top||he.clientY>Ge.bottom)return;J.set((he.clientX-Ge.left)/Ge.width*2-1,-((he.clientY-Ge.top)/Ge.height)*2+1),z.setFromCamera(J,f);let Je=z.intersectObjects([p,...F.map(Mt=>Mt.hit)],!1)[0];Je&&Je.object.userData.pin&&e.onPinClick?.(Je.object.userData.pin,he)}}),me=window.scrollY,$=()=>{let he=window.scrollY-me;me=window.scrollY,t||(L+=he*9e-4,Di())};window.addEventListener("scroll",$,{passive:!0});let j=new T,pe=new T,ze=new T,ve=d.quaternion.clone(),Ae=new Array(Q),He=new T,Ye=new T,et=new T,N=new T;function _e(){let he=[],Ge=[];for(let Je of F){if(!Je.label)continue;Je.group.getWorldPosition(pe),ze.copy(Je.normal).applyQuaternion(d.getWorldQuaternion(ve)),j.copy(f.position).sub(pe).normalize();let Mt=ze.dot(j);pe.project(f),Ge.push({o:Je,facing:Mt,x:(pe.x*.5+.5)*Ne,y:(-pe.y*.5+.5)*qe})}Ge.sort((Je,Mt)=>Mt.facing-Je.facing);let dt=nt>=.75;for(let{o:Je,facing:Mt,x:Ot,y:jt}of Ge){let wt=dt&&Mt>.22,Lt=Je.w||54,At=Ot+10;At+Lt>Ne-6&&(At=Ot-10-Lt);let Gt=jt-22;if(wt){let zt=[At,Gt,At+Lt,Gt+22];(At<6||Gt<6||Gt+22>qe-6)&&(wt=!1),wt&&Z.some(Ai=>zt[0]<Ai[2]&&zt[2]>Ai[0]&&zt[1]<Ai[3]&&zt[3]>Ai[1])&&(wt=!1),wt&&he.some(Ai=>zt[0]<Ai[2]+4&&zt[2]+4>Ai[0]&&zt[1]<Ai[3]+2&&zt[3]+2>Ai[1])&&(wt=!1),wt&&he.push(zt)}document.activeElement===Je.label&&(wt=!0),Je.label.hidden===wt&&(Je.label.hidden=!wt),wt&&(Je.label.style.transform=`translate3d(${(At+ne).toFixed(1)}px, ${(Gt+se).toFixed(1)}px, 0)`,Je.label.style.opacity=String(oi((Mt-.22)*5,0,1)),Je.w||(Je.w=Je.label.offsetWidth))}}function ie(he){if(!k)return;let Ge=t?1.9:he*(Math.PI*2/16)+1.2,dt=He.set(Math.cos(Ge)*te,0,Math.sin(Ge)*te),Je=Ye.set(-Math.sin(Ge),0,Math.cos(Ge)),Mt=et.copy(dt).normalize(),Ot=N.crossVectors(Je,Mt);Ue.makeBasis(Je,Mt,Ot),k.group.position.copy(dt),k.group.quaternion.setFromRotationMatrix(Ue),k.group.rotateX(Math.sin(he*.9)*.18);let jt=t?1:Jc((nt-.45)/.4);k.group.scale.setScalar(ae*Math.max(jt,1e-4)),k.update(he),k.group.getWorldPosition(xe);let wt=xe.clone().add(pe.copy(Je).transformDirection(q.matrixWorld).multiplyScalar(-.05*jt));if(!K){for(let Lt=0;Lt<Q;Lt++)Ae[Lt]=wt.clone();K=!0}Ae.pop(),Ae.unshift(wt);for(let Lt=0;Lt<Q;Lt++){let At=Ae[Lt],Gt=Ae[Math.min(Lt+1,Q-1)],zt=pe.copy(At).sub(Gt);zt.lengthSq()<1e-10&&zt.set(1,0,0);let Ai=j.copy(f.position).sub(At),Ii=ze.crossVectors(zt,Ai).normalize().multiplyScalar(.0085*(1-Lt/Q)*jt);re.set([At.x+Ii.x,At.y+Ii.y,At.z+Ii.z,At.x-Ii.x,At.y-Ii.y,At.z-Ii.z],Lt*6)}ct.attributes.position.needsUpdate=!0,rt.uniforms.uAlpha.value=jt}let ge=null,Se=new Promise(he=>ge=he);function ce(){c.render(l,f),ge&&(ge(),ge=null)}let Fe={visible:!0,tick(he,Ge){if(t||(ut+=he),!t&&nt<1&&(R===null&&(R=Ge),nt=Math.min(1,(Ge-R)/2.2)),!ue.dragging){let Je=a.contains(document.activeElement)||F.some(Mt=>Mt.hover)?0:1;We+=(x*Je+L)*he,L*=Math.exp(-3.4*he),Math.abs(L)<1e-4&&(L=0)}let dt=Jc(nt);return d.rotation.set($e,We+(1-dt)*1.1,0),u.scale.setScalar(.86+.14*dt),b.uniforms.uIntensity.value=dt,E.uniforms.uReveal.value=t?1:oi(nt*1.4,0,1),E.uniforms.uTime.value=ut,m.uniforms.uTime.value=ut,F.forEach((Je,Mt)=>{let Ot=t?1:um(oi((nt*2.2-.9-Mt*.06)/.5,0,1)),jt=Je.hover?1.6:1;Je.group.scale.setScalar(Math.max(Ot,1e-4)*jt);let wt=(ut/2.4+Je.phase)%1;Je.ring.scale.setScalar(.012+wt*.05),Je.ring.material.opacity=(1-wt)*.75*Ot,Je.halo.material.uniforms.uAlpha.value=Ot}),X.forEach(Je=>{Je.mat.uniforms.uDraw.value=t?1:oi((nt*2.2-Je.delay)/.9,0,1),Je.mat.uniforms.uHead.value=(ut/3.2+Je.offset)%1}),u.updateMatrixWorld(!0),ie(ut),_e(),ce(),!t||ue.dragging||L!==0}},Be=new ResizeObserver(()=>{De(),Di()});Be.observe(n);let Rt=Nl(n,Fe,"0px");document.fonts?.ready.then(we);let mt=setTimeout(we,1700);return De(),ko(Fe),{canvas:s,ready:Se,dispose(){ur(Fe),clearTimeout(mt),Be.disconnect(),Rt.disconnect(),ue.dispose(),window.removeEventListener("scroll",$),Ol(l),c.dispose(),c.forceContextLoss(),s.remove(),a.remove()}}}function Vl(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),o={},s={},a=n[0].morphTargetsRelative,c=new Ke,l=0;for(let f=0;f<n.length;++f){let h=n[f],u=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,f),l+=d}}if(t){let f=0,h=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+f);f+=n[u].attributes.position.count}c.setIndex(h)}for(let f in o){let h=mm(o[f]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,h)}for(let f in s){let h=s[f][0].length;if(h!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let u=0;u<h;++u){let d=[];for(let v=0;v<s[f].length;++v)d.push(s[f][v][u]);let m=mm(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(m)}}}return c}function mm(n){let e,t,i,r=-1,o=0;for(let l=0;l<n.length;++l){let f=n[l];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=f.normalized),i!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=f.count*t}let s=new e(o),a=new ii(s,t,i),c=0;for(let l=0;l<n.length;++l){let f=n[l];if(f.isInterleavedBufferAttribute){let h=c/t;for(let u=0,d=f.count;u<d;u++)for(let m=0;m<t;m++){let v=f.getComponent(u,m);a.setComponent(u+h,m,v)}}else s.set(f.array,c);c+=f.count*t}return r!==void 0&&(a.gpuType=r),a}var Xo=Math.PI/180,wg=new T(0,1,0);function it(n,e,t,i=0,r=0,o=0,s=0,a=0,c=0){let l=new de(e,t);return l.position.set(i,r,o),l.rotation.set(s,a,c),n.add(l),l}function Te(n,e,t,i,r,o=0,s=0,a=0,c=0,l=0){let f=new Tt(t,i,r);if(l){let h=f.attributes.uv,u=[[r,i],[r,i],[t,r],[t,r],[t,i],[t,i]];for(let d=0;d<6;d++)for(let m=d*4;m<d*4+4;m++)h.setXY(m,h.getX(m)*u[d][0]*l,h.getY(m)*u[d][1]*l)}return it(n,f,e,o,s+i/2,a,0,c,0)}function kt(n,e,t,i,r,o=0,s=0,a=0,c=24){return it(n,new Ut(t,i,r,c),e,o,s+r/2,a)}function Bn(n,e,t,i,r=.02,o=6,s=r){let a=new T().subVectors(i,t),c=a.length(),l=new de(new Ut(s,r,c,o),e);return l.position.copy(t).addScaledVector(a,.5),l.quaternion.copy(new Ci().setFromUnitVectors(wg,a.normalize())),n.add(l),l}function fn(n,e=48){return new Co(n.map(([t,i])=>new W(t,i)),e)}function vn(n,e){return new nr(n.map(([i,r])=>new T(i,r,0)),!1,"centripetal").getSpacedPoints(e).map(i=>[Math.max(0,i.x),i.y])}function ia(n,e){let t=n.attributes.position;for(let i=0;i<t.count;i++){let r=t.getX(i),o=t.getZ(i),s=Math.hypot(r,o);if(s<1e-6)continue;let a=Math.atan2(r,o),c=e(a,t.getY(i),s);t.setX(i,r*c),t.setZ(i,o*c)}return n.computeVertexNormals(),n}function Ir(n,e){let t=n.attributes.position,i=new Float32Array(t.count*3),r=new le;for(let o=0;o<t.count;o++)e(t.getX(o),t.getY(o),t.getZ(o),r),i[o*3]=r.r,i[o*3+1]=r.g,i[o*3+2]=r.b;return n.setAttribute("color",new Me(i,3)),n}function Am(n,e,t,i){let r=[],o=[],s=[];r.push(0,i(0,0),0),o.push(.5,.5);for(let l=1;l<=e;l++){let f=l/e*n;for(let h=0;h<t;h++){let u=h/t*Math.PI*2,d=Math.sin(u)*f,m=Math.cos(u)*f;r.push(d,l===e?0:i(d,m),m),o.push(.5+d/n/2,.5+m/n/2)}}let a=(l,f)=>l===0?0:1+(l-1)*t+f%t;for(let l=0;l<t;l++)s.push(0,a(1,l),a(1,l+1));for(let l=1;l<e;l++)for(let f=0;f<t;f++){let h=a(l,f),u=a(l+1,f),d=a(l+1,f+1),m=a(l,f+1);s.push(h,u,m,u,d,m)}let c=new Ke;return c.setAttribute("position",new Me(r,3)),c.setAttribute("uv",new Me(o,2)),c.setIndex(s),c.computeVertexNormals(),c}function gm(n){n.updateMatrixWorld(!0);let e=new Map;n.traverse(i=>{if(!i.isMesh||!i.geometry)return;let r=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();r.applyMatrix4(i.matrixWorld);let o=["position","normal","uv"];i.material.vertexColors&&o.push("color");for(let s of Object.keys(r.attributes))o.includes(s)||r.deleteAttribute(s);r.attributes.normal||r.computeVertexNormals(),r.attributes.uv||r.setAttribute("uv",new Me(new Float32Array(r.attributes.position.count*2),2)),i.material.vertexColors&&!r.attributes.color&&r.setAttribute("color",new Me(new Float32Array(r.attributes.position.count*3).fill(1),3)),r.clearGroups(),e.has(i.material)||e.set(i.material,[]),e.get(i.material).push(r)});let t=[];for(let[i,r]of e){let o=Vl(r,!1);r.forEach(s=>s.dispose()),o&&t.push({geometry:o,material:i})}return t}function xm(n="#c9a24b",e=[]){let t=(a,c=.6,l=0,f={})=>new _t({color:a,roughness:c,metalness:l,clippingPlanes:e,...f}),i=new le(n).lerp(new le("#e3c27e"),.35),r={gold:t(i,.26,.9),goldGlow:t(i,.3,.6,{emissive:new le("#ffc65a"),emissiveIntensity:1.6}),ivory:t("#ece4d2",.5),marble:t("#f1ece2",.32),marbleShade:t("#cfc6b6",.45),sand:t("#d1b07c",.85),sandDark:t("#a98a5c",.9),stone:t("#c4b293",.8),stoneDark:t("#8b7c66",.85),limestone:t("#cdb98f",.7),patina:t("#6ea995",.5,.35),steel:t("#c9d2de",.22,.9),slate:t("#363c4b",.55,.2),dark:t("#14161c",.5,.1),red:t("#b8382c",.45),black:t("#1b1b1f",.4),terracotta:t("#b87650",.8),terracottaDark:t("#8a5236",.85),teal:t("#2f7c6e",.4,.2),tile:t("#f4f1ea",.3,0,{side:Ht}),glass:t("#262a33",.12,.85),soap:t("#ebe7de",.55,0,{emissive:new le("#fff1d6"),emissiveIntensity:.12}),thatch:t("#5c4a36",.9),ground:t("#ffffff",.92,0,{vertexColors:!0}),lattice:null},o=hm(4,1);o.wrapS=o.wrapT=Qi,r.arcade=t("#c9b28c",.8,0,{alphaMap:o,alphaTest:.5,side:Ht});let s=ta(11);return r.tower=t("#a9b6c8",.2,.85,{emissiveMap:s,emissive:new le("#ffffff"),emissiveIntensity:.9}),r.globeSkin=t("#ffffff",.45,.25,{map:Eg(i)}),r.all=Object.values(r).filter(a=>a&&a.isMaterial),r}function Eg(n){let e=document.createElement("canvas");e.width=yi.cols*2,e.height=yi.rows*2;let t=e.getContext("2d");t.fillStyle="#13203a",t.fillRect(0,0,e.width,e.height);let i=atob(yi.b64);t.fillStyle="#"+n.getHexString();for(let o=0;o<yi.rows;o++)for(let s=0;s<yi.cols;s++){let a=o*yi.cols+s;i.charCodeAt(a>>3)>>7-(a&7)&1&&t.fillRect(s*2,o*2,2,2)}let r=new Un(e);return r.colorSpace=$t,r.anisotropy=4,r}function pr(n,e,t=.75){let i=new li,r=n/2;return i.moveTo(-r,0),i.lineTo(-r,e),i.quadraticCurveTo(-r,e+n*t*.6,0,e+n*t),i.quadraticCurveTo(r,e+n*t*.6,r,e),i.lineTo(r,0),i.closePath(),i}function _m(n,e){let t=new li,i=n/2;return t.moveTo(-i,0),t.lineTo(-i,e),t.absarc(0,e,i,Math.PI,0,!0),t.lineTo(i,0),t.closePath(),t}function Mn(n,e,t,i,r,o,s=0){return it(n,new qs(e,8),t,i,r,o,0,s,0)}function vm(n,e){let t=new An(n,{depth:e,bevelEnabled:!1,curveSegments:10});return t.translate(0,0,-e/2),t}function On(n,e){e(0,n,0),e(n,0,Math.PI/2),e(0,-n,Math.PI),e(-n,0,-Math.PI/2)}function Tg(n){let e=new Qe,t=[[1,0],[.8,.28],[.6,.6],[.43,.95],[.31,1.25],[.2,1.65],[.12,2.15],[.065,2.6],[.04,2.85]],i=a=>{for(let c=1;c<t.length;c++)if(a<=t[c][1]){let l=(a-t[c-1][1])/(t[c][1]-t[c-1][1]);return t[c-1][0]+(t[c][0]-t[c-1][0])*l}return t[t.length-1][0]},r=(a,c,l=0)=>{let f=i(a)-l,h=(45+90*c)*Xo;return new T(Math.cos(h)*f,a,Math.sin(h)*f)};for(let a=0;a<4;a++)for(let c=1;c<t.length;c++){let l=t[c-1][1],f=t[c][1],h=.075*(1-l/3.2)+.012,u=.075*(1-f/3.2)+.012;Bn(e,n.gold,r(l,a),r(f,a),h,4,u)}let o=[.12,.36,.6,.78,.95,1.1,1.25,1.45,1.65,1.9,2.15,2.4,2.6];for(let a of o)for(let c=0;c<4;c++)Bn(e,n.gold,r(a,c),r(a,(c+1)%4),.008,4);for(let a=1;a<o.length;a++)if(!(o[a]<=.6))for(let c=0;c<4;c++){let l=(c+1)%4;Bn(e,n.gold,r(o[a-1],c),r(o[a],l),.006,4),Bn(e,n.gold,r(o[a-1],l),r(o[a],c),.006,4)}for(let a=0;a<4;a++){let c=90*a*Xo,l=new Li(.52,.022,6,28,Math.PI);l.scale(1,.78,1),it(e,l,n.gold,Math.cos(c+Math.PI/2)*.58,.12,Math.sin(c+Math.PI/2)*.58,0,-c,0).rotateX(-.42)}let s=(a,c,l)=>{Te(e,n.gold,c*2,l,c*2,0,a,0),Te(e,n.gold,c*2+.06,.012,c*2+.06,0,a+l+.03,0)};return s(.58,i(.6)*.78,.07),s(1.22,i(1.25)*.78,.05),Te(e,n.gold,.13,.1,.13,0,2.78,0),kt(e,n.gold,.025,.04,.06,0,2.88,0,8),kt(e,n.gold,.006,.012,.24,0,2.94,0,6),e}function Rg(n){let e=new Qe;Te(e,n.stoneDark,1.25,.24,1.25,0,0,0),Te(e,n.limestone,1,3.3,1,0,.24,0),On(.5,(t,i,r)=>{for(let o=-2;o<=2;o++){let s=o*.17;Te(e,n.stone,.035,3.2,.035,t+Math.cos(r)*s,.3,i-Math.sin(r)*s)}});for(let t of[1.2,2.35])Te(e,n.stone,1.06,.06,1.06,0,t,0);for(let[t,i]of[[-.5,-.5],[.5,-.5],[.5,.5],[-.5,.5]])Te(e,n.stone,.13,3.45,.13,t,.24,i),it(e,new ln(.06,.22,4),n.gold,t,3.8,i,0,Math.PI/4,0);Te(e,n.limestone,1.2,1.2,1.2,0,3.54,0),On(.6,(t,i,r)=>{let o=new Qe;it(o,new tr(.38,40),n.ivory,0,0,.012),it(o,new Li(.39,.032,8,40),n.gold,0,0,.02);for(let s=0;s<12;s++){let a=s/12*Math.PI*2;Te(o,n.dark,.02,.06,.01,Math.sin(a)*.31,Math.cos(a)*.31-.03,.02).rotation.z=-a}Te(o,n.dark,.022,.24,.012,.05,-.02,.03).rotation.z=-.5,Te(o,n.dark,.022,.18,.012,-.04,-.01,.034).rotation.z=.9,Te(o,n.gold,.96,.05,.03,0,.44,.01),Te(o,n.gold,.96,.05,.03,0,-.49,.01),o.position.set(t,4.14,i),o.rotation.y=r,e.add(o)}),Te(e,n.limestone,1.04,.72,1.04,0,4.74,0),On(.525,(t,i,r)=>{for(let o of[-.27,0,.27])Mn(e,pr(.13,.36,.5),n.dark,t+Math.cos(r)*o,4.86,i-Math.sin(r)*o,r)}),Te(e,n.gold,1.12,.05,1.12,0,5.46,0),it(e,new ln(.76,1.25,4),n.slate,0,5.51+.625,0,0,Math.PI/4,0);for(let[t,i]of[[-.44,-.44],[.44,-.44],[.44,.44],[-.44,.44]])it(e,new ln(.07,.42,4),n.gold,t,5.72,i,0,Math.PI/4,0);return Te(e,n.gold,.22,.32,.22,0,6.38,0),it(e,new ln(.11,.62,4),n.gold,0,6.7+.31,0,0,Math.PI/4,0),e}function Cg(n){let e=new Qe,t=1.6,i=1.3,r=128,o=h=>{let u=Math.abs((h+Math.PI)%(Math.PI*2)-Math.PI);return u<1.9?1:u<2.05?.86:u<2.2?.74:.62},s=(h,u,d,m,v,A)=>{let p=[],S=[];for(let _=0;_<r;_++){let b=_/r*Math.PI*2,y=(_+1)/r*Math.PI*2,C=Math.min(o((b+y)/2),d),g=[Math.sin(b)*(h-m),Math.cos(b)*(u-m)],w=[Math.sin(y)*(h-m),Math.cos(y)*(u-m)],P=_/r*A,D=(_+1)/r*A;p.push(g[0],0,g[1],w[0],0,w[1],w[0],C,w[1],g[0],0,g[1],w[0],C,w[1],g[0],C,g[1]),S.push(P,0,D,0,D,C,P,0,D,C,P,C)}let E=new Ke;E.setAttribute("position",new Me(p,3)),E.setAttribute("uv",new Me(S,2)),E.computeVertexNormals(),it(e,E,v)};s(t,i,1,0,n.arcade,64),s(t,i,1,.13,n.arcade,64);for(let[h,u]of[[.25,1],[.5,1],[.75,1]]){let d=new Li(1,.012,4,96);d.rotateX(Math.PI/2),d.scale(t+.005,1,i+.005),it(e,d,n.stone,0,h*u,0)}let a=[];for(let h=0;h<=6;h++)a.push([1.45-h*.13,.82-h*.12],[1.45-(h+1)*.13,.82-h*.12]);a.reverse();let c=fn([[.55,.05],...a.filter(([h])=>h>.56)],96);c.scale(1,1,i/t),it(e,c,n.stone);let l=new tr(.62,64);l.rotateX(-Math.PI/2),l.scale(1,1,i/t),it(e,l,n.sand,0,.06,0);let f=new Ut(1,1,.05,96);return f.scale(t+.08,1,i+.08),it(e,f,n.stoneDark,0,.025,0),e}function Pg(n){let e=new Qe,t=2.6,i=1.2;Te(e,n.marbleShade,t+.3,.07,i+.3,0,0,0),Te(e,n.marble,t+.2,.07,i+.2,0,.07,0),Te(e,n.marble,t+.1,.07,i+.1,0,.14,0);let r=.21,o=.92;Te(e,n.marbleShade,t-.46,o,i-.42,0,r,0);let s=(f,h)=>{kt(e,n.marble,.042,.054,o-.05,f,r,h,14),Te(e,n.marble,.12,.05,.12,f,r+o-.05,h)};for(let f=0;f<8;f++){let h=-i/2+.06+f*(i-.12)/7;s(-t/2+.06,h),s(t/2-.06,h)}for(let f=1;f<16;f++){let h=-t/2+.06+f*(t-.12)/16;s(h,-i/2+.06),s(h,i/2-.06)}let a=r+o;Te(e,n.marble,t+.04,.1,i+.04,0,a,0),Te(e,n.gold,t+.06,.035,i+.06,0,a+.1,0),Te(e,n.marble,t+.08,.06,i+.08,0,a+.135,0);let c=new li([new W(-(i+.1)/2,0),new W((i+.1)/2,0),new W(0,.24)]),l=vm(c,t+.1);l.rotateY(Math.PI/2),it(e,l,n.marble,0,a+.195,0);for(let f of[-1,1])it(e,new Zt(.03,10,8),n.gold,f*(t/2+.05),a+.44,0);return e}function Lg(n){let e=new Qe,t=vn([[2,0],[1.55,.14],[1.15,.36],[.85,.62],[.6,.92],[.4,1.2],[.26,1.4],[.19,1.47],[.12,1.45]],48);t.push([0,1.42]);let i=fn(t,120);ia(i,(c,l)=>l>1.44?1:1+(.035*Math.sin(c*9)+.02*Math.sin(c*17+1.3))*(1-l/1.5));let r=new le("#4c5674"),o=new le("#eef2f8"),s=new le("#2d3b33");Ir(i,(c,l,f,h)=>{let u=Math.atan2(c,f),d=.98+.07*Math.sin(u*5)+.05*Math.sin(u*11+2),m=Math.max(0,Math.sin(u*9))*.22;l>d-m*(l>.65?1:0)?h.copy(o):l<.18?h.copy(s).lerp(r,l/.18):h.copy(r)}),it(e,i,n.ground);let a=new Qe;for(let c of[-.22,.22])kt(a,n.red,.028,.034,.52,c,0,0,12);return Te(a,n.red,.56,.035,.04,0,.37,0),Te(a,n.red,.66,.045,.07,0,.47,0),Te(a,n.black,.74,.03,.09,0,.515,0),Te(a,n.red,.04,.1,.035,0,.405,0),a.position.set(0,0,1.72),a.scale.setScalar(1.2),e.add(a),e}function Dg(n){let e=new Qe,t=(d,m)=>.78*Math.exp(-((d-.1)**2+(m-.1)**2)/.5)+.58*Math.exp(-((d+1.15)**2+(m-.45)**2)/.3)+.66*Math.exp(-((d-1.15)**2+(m+.2)**2)/.28)+.3*Math.exp(-((d+.3)**2+(m+1.1)**2)/.4),i=2,r=(d,m)=>Math.max(0,1-(Math.hypot(d,m)/i)**4),o=(d,m)=>t(d,m)*r(d,m),s=Am(i,36,96,o),a=new le("#4f6a3b"),c=new le("#7d8f57"),l=new le("#7c6a4c");Ir(s,(d,m,v,A)=>{let S=Math.hypot(o(d+.0015,v)-o(d-.0015,v),o(d,v+.0015)-o(d,v-.0015))/.003;A.copy(a).lerp(c,Math.min(1,m*1.2)).lerp(l,Math.min(1,Math.max(0,S-.9)*.8))}),it(e,s,n.ground);let f=[[-1.75,.55],[-1.2,.42],[-.65,-.05],[-.05,.12],[.55,-.12],[1.12,-.18],[1.7,.3]],h=[];for(let d=0;d<f.length-1;d++)for(let m=0;m<14;m++){let v=m/14,A=f[Math.max(0,d-1)],p=f[d],S=f[d+1],E=f[Math.min(f.length-1,d+2)],_=(C,g,w,P)=>.5*(2*g+(-C+w)*v+(2*C-5*g+4*w-P)*v*v+(-C+3*g-3*w+P)*v*v*v),b=_(A[0],p[0],S[0],E[0]),y=_(A[1],p[1],S[1],E[1]);h.push(new T(b,o(b,y),y))}h.push(new T(f[f.length-1][0],o(...f[f.length-1]),f[f.length-1][1]));let u=new Set([14,42,70]);for(let d=0;d<h.length-1;d++){let m=h[d],v=h[d+1],A=m.clone().add(v).multiplyScalar(.5),p=m.distanceTo(v)+.01,S=Math.atan2(v.x-m.x,v.z-m.z),E=Math.atan2(v.y-m.y,Math.hypot(v.x-m.x,v.z-m.z)),_=Te(e,n.stone,.15,.15,p,0,0,0);if(_.position.set(A.x,A.y+.04,A.z),_.rotation.set(-E,S,0,"YXZ"),d%2===0)for(let b of[-1,1]){let y=Te(e,n.stone,.03,.035,.035,0,0,0);y.position.set(A.x+Math.cos(S)*.06*b,A.y+.13,A.z-Math.sin(S)*.06*b),y.rotation.set(-E,S,0,"YXZ")}if(u.has(d)){let b=Te(e,n.stoneDark,.26,.32,.26,m.x,m.y-.02,m.z,S);b.rotation.y=S;for(let[y,C]of[[-.11,-.11],[.11,-.11],[.11,.11],[-.11,.11],[0,.11],[0,-.11],[.11,0],[-.11,0]]){let g=Te(e,n.stoneDark,.045,.045,.045,0,0,0);g.position.set(m.x+y*Math.cos(S)+C*Math.sin(S),m.y+.32,m.z-y*Math.sin(S)+C*Math.cos(S)),g.rotation.y=S}}}return e}function Ig(n){let e=new Qe;Te(e,n.marbleShade,2.7,.06,2.7,0,0,0),Te(e,n.marble,2.6,.14,2.6,0,.06,0);let t=.2,i=.68,r=.2,o=new li([new W(-i+r,-i),new W(i-r,-i),new W(i,-i+r),new W(i,i-r),new W(i-r,i),new W(-i+r,i),new W(-i,i-r),new W(-i,-i+r)]),s=new An(o,{depth:.9,bevelEnabled:!1});s.rotateX(-Math.PI/2),it(e,s,n.marble,0,t,0),On(i+.004,(l,f,h)=>{let u=Math.cos(h),d=-Math.sin(h);Te(e,n.marble,.6,.86,.04,l,t,f,h),Mn(e,pr(.36,.42,.55),n.marbleShade,l+Math.sin(h)*.022,t+.1,f+Math.cos(h)*.022,h),Mn(e,pr(.26,.36,.5),n.glass,l+Math.sin(h)*.024,t+.12,f+Math.cos(h)*.024,h);for(let m of[-.4,.4])for(let v of[.12,.5])Mn(e,pr(.14,.18,.5),n.marbleShade,l+u*m+Math.sin(h)*.003,t+v,f+d*m+Math.cos(h)*.003,h)}),kt(e,n.marble,.43,.45,.24,0,t+.9,0,48);let a=fn(vn([[.45,0],[.53,.14],[.56,.3],[.5,.48],[.36,.64],[.18,.78],[.06,.88],[0,.92]],24),64);it(e,a,n.marble,0,t+1.14,0);let c=t+2.05;kt(e,n.gold,.012,.02,.2,0,c-.02,0,8),it(e,new Zt(.03,12,10),n.gold,0,c+.06,0),it(e,new Zt(.022,12,10),n.gold,0,c+.12,0),it(e,new Li(.035,.008,6,16,Math.PI*1.4),n.gold,0,c+.22,0,0,0,-Math.PI*.2);for(let[l,f]of[[-.45,-.45],[.45,-.45],[.45,.45],[-.45,.45]]){kt(e,n.marble,.13,.13,.04,l,t+.9,f,16);for(let u=0;u<6;u++){let d=u/6*Math.PI*2;kt(e,n.marble,.012,.012,.14,l+Math.sin(d)*.1,t+.94,f+Math.cos(d)*.1,6)}let h=fn(vn([[.13,0],[.13,.04],[.1,.11],[.04,.16],[0,.18]],10),20);it(e,h,n.marble,l,t+1.08,f),kt(e,n.gold,.005,.008,.06,l,t+1.26,f,6)}for(let[l,f]of[[-1.16,-1.16],[1.16,-1.16],[1.16,1.16],[-1.16,1.16]]){kt(e,n.marble,.05,.065,1.55,l,t,f,16);for(let h of[.52,1.02,1.5])kt(e,n.marble,.095,.08,.04,l,t+h,f,16);kt(e,n.marble,.07,.07,.03,l,t+1.62,f,12),it(e,new Zt(.07,14,8,0,Math.PI*2,0,Math.PI/2),n.marble,l,t+1.65,f),kt(e,n.gold,.004,.008,.07,l,t+1.72,f,6)}return e}function Ug(n){let e=new Qe,t=3.6;kt(e,n.tower,.17,.2,t,0,0,0,6);let i=[[0,.95,.66],[.95,1.6,.54],[1.6,2.2,.44],[2.2,2.75,.34],[2.75,3.2,.25]];for(let o=0;o<3;o++){let s=(o*120+90)*Xo,a=o*.18;i.forEach(([c,l,f],h)=>{let u=h===0?0:c+a,d=Math.min(l+a,t);if(d<=u)return;let m=f,v=Te(e,n.tower,.26,d-u,m,0,0,0,0,6);v.position.set(Math.cos(s)*(m/2),u+(d-u)/2,Math.sin(s)*(m/2)),v.rotation.y=-s+Math.PI/2,kt(e,n.tower,.13,.13,d-u,Math.cos(s)*m,u,Math.sin(s)*m,16)})}kt(e,n.steel,.02,.12,1.5,0,t,0,12),kt(e,n.steel,.006,.02,.5,0,t+1.5,0,8),kt(e,n.goldGlow,.012,.012,.03,0,t+1.95,0,8);let r=new Ut(.95,1,.1,6);return it(e,r,n.slate,0,.05,0,0,Math.PI/6,0),e}function Ng(n){let e=new Qe,t=(a,c,l,f,h,u,d)=>{for(let m=0;m<h;m++){let v=l*(1-m/h);Te(e,u,v,f/h+.002,v,a,m*f/h,c)}d&&it(e,new ln(l/h*.75,f/h*1.4,4),d,a,f+f/h*.7-.01,c,0,Math.PI/4,0)};t(-.62,.42,1.55,1,16,n.sand,n.gold);let i=new ln(1.4/Math.SQRT2,.94,4,1);it(e,i,n.sandDark,.62,.47,-.4,0,Math.PI/4,0);let r=new ln(1.4/Math.SQRT2*.22,.94*.22,4,1);it(e,r,n.limestone,.62,.94-.103+.002,-.4,0,Math.PI/4,0),t(1.5,-1.05,.72,.46,10,n.sand,null);let o=-.1,s=1.38;return Te(e,n.sandDark,.12,.09,.34,o,0,s-.02),Te(e,n.sandDark,.13,.06,.14,o,0,s+.2),Te(e,n.sandDark,.09,.1,.09,o,.08,s+.13),Te(e,n.sand,.13,.05,.06,o,.13,s+.11),e}function Fg(n){let e=new Qe;Te(e,n.terracottaDark,1.12,.12,1.12,0,0,0),Te(e,n.terracotta,1,3.2,1,0,.12,0),On(.505,(i,r,o)=>{let s=Math.cos(o),a=-Math.sin(o);Mn(e,pr(.12,.26,.5),n.terracottaDark,i,.75,r,o);for(let c of[-.16,.16])Mn(e,pr(.11,.24,.5),n.terracottaDark,i+s*c,1.45,r+a*c,o);Mn(e,_m(.2,.2),n.terracottaDark,i,1.5,r,o),Te(e,n.terracottaDark,.7,.62,.02,i,2.05,r,o);for(let c of[-.22,0,.22])Mn(e,pr(.1,.3,.5),n.dark,i+s*c+Math.sin(o)*.012,2.12,r+a*c+Math.cos(o)*.012,o)}),Te(e,n.teal,1.03,.16,1.03,0,2.86,0),Te(e,n.terracotta,1.06,.06,1.06,0,3.02,0),Te(e,n.terracotta,1,.24,1,0,3.08,0);let t=(i,r,o)=>{let s=Math.round(i*2/(o*1.8));for(let a=0;a<=s;a++){let c=-i+a*i*2/s;for(let[l,f]of[[c,-i],[c,i],[-i,c],[i,c]])Te(e,n.terracotta,o,o*.9,o,l,r,f),Te(e,n.terracotta,o*.5,o*.45,o*.5,l,r+o*.9,f)}};return t(.47,3.32,.09),Te(e,n.terracotta,.42,.62,.42,0,3.32,0),On(.212,(i,r,o)=>Mn(e,pr(.12,.2,.5),n.dark,i,3.44,r,o)),Te(e,n.teal,.44,.06,.44,0,3.86,0),t(.2,3.94,.05),it(e,new Zt(.17,24,12,0,Math.PI*2,0,Math.PI/2),n.terracotta,0,3.94,0),kt(e,n.gold,.008,.008,.5,0,4.06,0,6),[[.075,4.22],[.06,4.36],[.045,4.47]].forEach(([i,r])=>it(e,new Zt(i,16,12),n.gold,0,r,0)),e}function Bg(n){let e=new Qe,t=new li;for(let f=0;f<22;f++){let h=f%2?.62:.86,u=f/22*Math.PI*2,d=[Math.cos(u)*h,Math.sin(u)*h];f?t.lineTo(...d):t.moveTo(...d)}let i=new An(t,{depth:.18,bevelEnabled:!1});i.rotateX(-Math.PI/2),it(e,i,n.stoneDark),Te(e,n.stone,.8,.12,.8,0,.18,0),Te(e,n.limestone,.62,.78,.62,0,.3,0),On(.315,(f,h,u)=>Mn(e,_m(.16,.22),n.stoneDark,f,.6,h,u)),Te(e,n.stone,.7,.06,.7,0,1.08,0),Te(e,n.limestone,.52,.14,.52,0,1.14,0);let r=1.28,o=fn(vn([[.2,0],[.215,.12],[.2,.45],[.17,.82],[.145,1],[.11,1.1],[.07,1.15],[0,1.17]],30),40);ia(o,(f,h)=>1+(h<.95?.06*Math.sin(f*11+h*4)*(1-h):0)),it(e,o,n.patina,0,r,0),it(e,new Zt(.072,20,16),n.patina,0,r+1.24,.005),it(e,new Li(.072,.014,6,24),n.patina,0,r+1.27,0,Math.PI/2-.15,0,0);for(let f=0;f<7;f++){let h=(-60+f*20)*Xo,u=new T(Math.sin(h)*.07,r+1.28,Math.cos(h)*.04);Bn(e,n.patina,u,u.clone().add(new T(Math.sin(h)*.12,.07,Math.cos(h)*.06)),.012,4,.001)}let s=new T(.11,r+1.08,0),a=new T(.17,r+1.6,.02);Bn(e,n.patina,s,a,.036,10,.03),kt(e,n.patina,.03,.02,.1,a.x,a.y-.02,a.z,10),kt(e,n.gold,.05,.022,.06,a.x,a.y+.08,a.z,14);let c=new ln(.035,.12,12);return it(e,c,n.goldGlow,a.x,a.y+.2,a.z),Bn(e,n.patina,new T(-.11,r+1.05,0),new T(-.15,r+.82,.07),.032,8),Te(e,n.patina,.1,.2,.035,-.15,r+.72,.1).rotation.set(.15,.3,.25),e}function Og(n){let e=new Qe,t=9,i=.11;for(let o=0;o<t;o++){let s=1.9-o*.16;Te(e,o%2?n.stone:n.limestone,s,i,s,0,o*i,0),Te(e,n.stoneDark,s+.012,.018,s+.012,0,o*i+i*.5,0)}let r=t*i;return On(0,(o,s,a)=>{let c=new Qe,l=(1.9-.62)/2,f=18;for(let h=0;h<f;h++){let u=h/f;Te(c,n.limestone,.36,r/f+.003,l/f+.004,0,u*r,.95-.005-u*l-l/f/2+.02)}for(let h of[-.21,.21])Bn(c,n.stoneDark,new T(h,.04,.99),new T(h,r+.02,.31),.025,4),Te(c,n.stoneDark,.07,.07,.1,h,0,1.02);c.rotation.y=a,e.add(c)}),Te(e,n.limestone,.56,.06,.56,0,r,0),Te(e,n.stone,.48,.3,.48,0,r+.06,0),Te(e,n.limestone,.52,.07,.52,0,r+.36,0),On(.242,(o,s,a)=>{for(let c of[-.11,0,.11])Te(e,n.dark,.06,.18,.01,o+Math.cos(a)*c,r+.06,s-Math.sin(a)*c,a)}),e}function Gg(n){let e=new Qe,t=vn([[1.6,0],[1.3,.12],[.95,.38],[.7,.72],[.5,1.02],[.33,1.24],[.2,1.36],[.12,1.4],[0,1.41]],36),i=fn(t,96),r=ki(5),o=Array.from({length:6},()=>[r()*6,2+Math.floor(r()*5)]);ia(i,(h,u)=>{let d=0;for(let[m,v]of o)d+=Math.sin(h*v+m+u*3)*.035;return 1+d*(1-u/1.5)+(Math.abs(Math.sin(h))>.92&&u>.6?-.05:0)});let s=new le("#2b4632"),a=new le("#6c6b68"),c=new le("#3e5c3f");Ir(i,(h,u,d,m)=>{let v=Math.atan2(h,d),A=u>.75+.18*Math.sin(v*3+1)||u>.4&&Math.sin(v*2+.5)>.6;m.copy(A?a:u<.5?s:c)}),it(e,i,n.ground);let l=1.4;Te(e,n.soap,.32,.05,.32,0,l,0),Te(e,n.soap,.12,.2,.12,0,l+.05,0);let f=fn(vn([[.07,0],[.075,.1],[.065,.4],[.055,.52],[.04,.56],[0,.57]],18),28);it(e,f,n.soap,0,l+.25,0),Te(e,n.soap,.62,.045,.05,0,l+.73,0);for(let h of[-1,1])Te(e,n.soap,.05,.07,.06,h*.31,l+.71,0);return it(e,new Zt(.035,16,12),n.soap,0,l+.86,0),e}function zg(n){let e=new Qe,t=[new le("#3d5a35"),new le("#4f7243"),new le("#61834f")],i=new le("#7b766c"),r=fn(vn([[.9,0],[.64,.32],[.44,.78],[.31,1.18],[.2,1.52],[.1,1.78],[.03,1.88],[0,1.9]],36),72),o=ki(9),s=Array.from({length:6},()=>[o()*6,2+Math.floor(o()*5)]);ia(r,(l,f)=>1+s.reduce((h,[u,d])=>h+Math.sin(l*d+u+f*1.5)*.06,0)*(1-f/2.2)),Ir(r,(l,f,h,u)=>{let d=Math.atan2(l,h),m=Math.sin(d*5+f*3)>.62||f>1.35&&Math.sin(d*3)>.1;u.copy(m?i:t[0]).lerp(t[1],m?0:Math.max(0,.5-f*.3))}),it(e,r,n.ground,.2,0,-.85);let a=fn(vn([[1.55,0],[1.4,.12],[1.15,.3],[.8,.42],[.3,.47],[0,.48]],20),64);a.scale(1,1,.62),Ir(a,(l,f,h,u)=>u.copy(t[1]).lerp(t[2],f)),it(e,a,n.ground,0,0,.25);for(let l=0;l<6;l++){let f=1.42-l*.1,h=new Ut(f,f+.02,.05,48,1,!1,-.95,1.9);h.scale(1,1,.62);let u=it(e,h,(l%2,n.ground),0,l*.07+.02,.25);Ir(u.geometry,(d,m,v,A)=>A.copy(m>.02?t[2]:i))}let c=ki(3);for(let l=0;l<14;l++){let f=-.75+l%7*.24+c()*.05,h=.1+Math.floor(l/7)*.24+c()*.05,u=c()*.4;if(Te(e,n.stone,.12,.07,.09,f,.47,h,u),l%3!==1){let d=vm(new li([new W(-.065,0),new W(.065,0),new W(0,.06)]),.1);it(e,d,n.thatch,f,.54,h,0,u+Math.PI/2,0)}}return e}function Hg(n){let e=new Qe;Te(e,n.stoneDark,2.3,.08,1.2,0,0,0),Te(e,n.limestone,2.1,.16,1,0,.08,0);for(let i=0;i<6;i++)Te(e,n.limestone,.5-i*.04,.03,.4,1.25-i*.04,.08+i*.027,0);let t=(i,r,o,s,a,c=1)=>{let l=new Qe,f=(m,v,A)=>[m*(1-.32*v*v),1.3*Math.pow(v,.75),A*(1-.3*v)],h=new Zt(1,28,16,0,Math.PI,0,Math.PI/2),u=h.attributes.position;for(let m=0;m<u.count;m++){let[v,A,p]=f(u.getX(m),Math.max(0,u.getY(m)),u.getZ(m));u.setXYZ(m,v,A,p)}h.computeVertexNormals(),it(l,h,n.tile);let d=new li;d.moveTo(-.98,0);for(let m=0;m<=24;m++){let v=Math.PI-m/24*Math.PI,[A,p]=f(Math.cos(v)*.98,Math.sin(v)*.98,0);d.lineTo(A,p)}d.lineTo(.98,0),it(l,new qs(d,1),n.glass,0,0,-.02,0,0,0).rotation.y=Math.PI,l.scale.set(.42*o,.62*o*c,.6*o),l.rotation.set(0,a*Math.PI/2,0),l.rotateX(-s),l.position.set(i,.24,r),e.add(l)};return t(-.55,-.22,1,.35,-1),t(-.15,-.22,.84,.35,-1),t(.2,-.22,.66,.35,-1),t(.62,-.22,.44,.2,1),t(-.5,.26,.82,.35,-1),t(-.15,.26,.68,.35,-1),t(.15,.26,.52,.35,-1),t(.5,.26,.36,.2,1),e}function Vg(n){let e=new Qe,t=fn(vn([[.42,0],[.4,.04],[.3,.07],[.12,.1],[.07,.16],[.06,.4],[0,.42]],20),48);it(e,t,n.gold);let i=new Qe;i.position.y=1.15,i.rotation.z=23.4*Xo,e.add(i);let r=it(i,new Zt(.62,64,40),n.globeSkin);return r.rotation.y=-.6,it(i,new Li(.7,.018,8,96,Math.PI*1.25),n.gold,0,0,0,0,Math.PI/2,-Math.PI*.625+Math.PI/2),kt(i,n.gold,.012,.012,1.5,0,-.75,0,8),it(i,new Zt(.03,12,10),n.gold,0,.76,0),kt(e,n.gold,.035,.05,.2,0,.38,0,16),e}var kl={eiffel:Tg,bigben:Rg,colosseum:Cg,parthenon:Pg,fuji:Lg,greatwall:Dg,tajmahal:Ig,burj:Ug,pyramids:Ng,koutoubia:Fg,liberty:Bg,chichen:Og,redeemer:Gg,machu:zg,opera:Hg,globe:Vg};function Mm(n,e){return(kl[n]||kl.globe)(e)}var Sn=null;function kg(n){if(Sn)return Sn;let e=document.createElement("canvas"),t=zo({canvas:e,alpha:!0});t.localClippingEnabled=!0,t.setPixelRatio(1);let i=new gi(new T(0,-1,0),1e6),r=new gi(new T(0,1,0),-1e6),o=xm(n,[i]);return Sn={canvas:e,renderer:t,w:0,h:0,kit:o,clipModel:i,clipGhost:r,cache:new Map,views:new Set,ghostMat:new In({color:new le(n).lerp(new le("#fff3d0"),.4),transparent:!0,opacity:0,depthWrite:!1,blending:Kt,clippingPlanes:[r],toneMapped:!1}),ghostFillMat:new qt({color:new le(n),transparent:!0,opacity:0,depthWrite:!1,blending:Kt,clippingPlanes:[r],toneMapped:!1}),plinthTop:new _t({color:"#141a26",roughness:.28,metalness:.6}),plinthSide:new _t({color:"#0d111a",roughness:.5,metalness:.4}),rim:new _t({color:new le(n).lerp(new le("#e3c27e"),.35),roughness:.25,metalness:.9}),shadowMat:new qt({map:dm(),transparent:!0,depthWrite:!1,opacity:.85,toneMapped:!1}),scanMat:new qt({color:new le(n).lerp(new le("#fff1c8"),.5),transparent:!0,opacity:0,depthWrite:!1,blending:Kt,toneMapped:!1,side:Ht}),scanGlowMat:new qt({map:Wo(),color:new le(n),transparent:!0,opacity:0,depthWrite:!1,blending:Kt,toneMapped:!1,side:Ht}),lost:!1},e.addEventListener("webglcontextlost",s=>{s.preventDefault(),Sn.lost=!0;for(let a of[...Sn.views])a.lost()}),Sn}function Wg(n){if(Sn.cache.has(n))return Sn.cache.get(n);let e=Mm(n,Sn.kit),t=gm(e),i=1/0,r=-1/0,o=1/0,s=-1/0,a=1/0,c=-1/0;for(let{geometry:v}of t){v.computeBoundingBox();let A=v.boundingBox;i=Math.min(i,A.min.y),r=Math.max(r,A.max.y),o=Math.min(o,A.min.x),s=Math.max(s,A.max.x),a=Math.min(a,A.min.z),c=Math.max(c,A.max.z)}let l=1/(r-i),f=(o+s)/2,h=(a+c)/2,u=0;for(let{geometry:v}of t){v.translate(-f,-i,-h),v.scale(l,l,l);let A=v.attributes.position;for(let p=0;p<A.count;p++)u=Math.max(u,Math.hypot(A.getX(p),A.getZ(p)))}let d=Vl(t.map(({geometry:v})=>new il(v,28))),m={parts:t,edges:d,radius:u};return Sn.cache.set(n,m),m}var Sm={card:{spin:.32,hoverSpin:1.1,elev:.2,fill:.86,drag:!1,dpr:1.5},stage:{spin:.22,hoverSpin:.22,elev:.16,fill:.84,drag:!0,dpr:2},panel:{spin:.2,hoverSpin:.2,elev:.15,fill:.86,drag:!0,dpr:2}};function ym(n,e={}){let t=kg(e.accent||"#c9a24b"),i=Sm[e.mode]||Sm.stage,r=e.reduced??Ul(),o=document.createElement("canvas");o.className="flytz-landmark3d",o.setAttribute("aria-hidden","true"),n.appendChild(o);let s=o.getContext("2d"),a=new rn;a.environment=Vo(t.renderer),a.environmentIntensity=.85;let c=new xn("#fff0d8",2.6);c.position.set(-2.2,3,2.6);let l=new xn("#9db7ff",1.8);l.position.set(2.5,1.6,-2.8),a.add(c,l,new Fn("#c9d4ff","#1a140e",.45));let f=new Ft(26,1,.05,50),h=new Qe;a.add(h);let u=new Qe;h.add(u);let d=new Qe;h.add(d);let m=new Qe;a.add(m);let v=new de(new Po(.965,1,96),t.scanMat);v.rotation.x=-Math.PI/2;let A=new de(new tr(1,48),t.scanGlowMat);A.rotation.x=-Math.PI/2,m.add(v,A),m.visible=!1;let p=null,S=null,E=.5,_=1,b=1,y=1,C=e.rotation??-.5,g=0,w=r?0:i.spin,P=!1,D=0,B=0,O=0,I=0,F=1,X=0,k=!1,ae=0,q=0,Q=!1;function re(Z){d.clear();let ne=Z*1.18+.06,se=new de(new Ut(ne,ne,.035,96),t.plinthTop);se.position.y=-.0175;let fe=new de(new Ut(ne*1.06,ne*1.1,.05,96),t.plinthSide);fe.position.y=-.06;let De=new de(new Li(ne,.006,6,120),t.rim);De.rotation.x=Math.PI/2,De.position.y=-.002;let we=new de(new tr(Z*1.25,48),t.shadowMat);we.rotation.x=-Math.PI/2,we.position.y=.002,d.add(se,fe,De,we)}function Le(Z,{reveal:ne=!0}={}){if(!Z||Z===p||Q||t.lost)return;p=Z;let se=Wg(Z);u.clear(),S=new Qe;for(let{geometry:fe,material:De}of se.parts)u.add(new de(fe,De)),S.add(new de(fe,t.ghostFillMat));S.add(new Tr(se.edges,t.ghostMat)),u.add(S),E=se.radius,re(E),m.scale.setScalar(E*1.12+.04),Re(),F=ne&&!r?0:1,X=0,k=!1,ae=F<1?1:0,Di()}function Re(){f.aspect=_/b;let Z=f.fov*Math.PI/180,ne=2*Math.atan(Math.tan(Z/2)*f.aspect),se=E*1.18+.12,fe=1.18/i.fill,De=2*se/i.fill,we=Math.max(fe/2/Math.tan(Z/2),De/2/Math.tan(ne/2))+se*.6;f.userData.dist=we,f.near=Math.max(.05,we-se*3),f.far=we+se*4+4,f.updateProjectionMatrix()}function ct(){_=Math.max(1,n.clientWidth),b=Math.max(1,n.clientHeight),y=Math.min(Ho(2),i.dpr),o.width=Math.round(_*y),o.height=Math.round(b*y),Re(),rt()}function rt(){if(!p||t.lost||Q)return;let Z=o.width,ne=o.height;(Z>t.w||ne>t.h)&&(t.w=Math.max(t.w,Z),t.h=Math.max(t.h,ne),t.renderer.setSize(t.w,t.h,!1));let se=f.userData.dist||4,fe=i.elev+B*.12,De=D*.3,we=.5;f.position.set(Math.sin(De)*se*Math.cos(fe),we+Math.sin(fe)*se,Math.cos(De)*se*Math.cos(fe)),f.lookAt(0,we-.04,0);let We=F<1?F*1.02:1e6;t.clipModel.constant=We,t.clipGhost.constant=F<1?-We:-1e6,t.ghostMat.opacity=.55*ae,t.ghostFillMat.opacity=.07*ae;let $e=F>0&&F<1;if(m.visible=$e,$e){m.position.y=We;let L=Math.sin(Math.PI*F);t.scanMat.opacity=.9*L,t.scanGlowMat.opacity=.35*L}S&&(S.visible=ae>.001),t.renderer.setViewport(0,0,Z,ne),t.renderer.setScissor(0,0,Z,ne),t.renderer.setScissorTest(!0),t.renderer.render(a,f),s.clearRect(0,0,Z,ne),s.drawImage(t.canvas,0,t.h-ne,Z,ne,0,0,Z,ne),k=!0,ft&&(ft(),ft=null)}let ft=null,K=new Promise(Z=>ft=Z),te=e.hoverTarget||n,xe=Z=>{let ne=te.getBoundingClientRect();O=oi((Z.clientX-ne.left)/ne.width*2-1,-1,1),I=oi((Z.clientY-ne.top)/ne.height*2-1,-1,1),P=!0,Di()},Ue=()=>{P=!1,O=0,I=0,Di()};!r&&!i.drag&&(te.addEventListener("pointermove",xe),te.addEventListener("pointerleave",Ue));let ye=i.drag?Gl(n,{onDrag:(Z,ne,se)=>{C+=Z*.012,g=Z*.012/(se/1e3),Di()},onRelease:()=>Di()}):null,Ne={visible:!0,tick(Z,ne){if(!p||t.lost)return!1;q+=Z,F<1?(X+=k?Z:0,F=ea(Math.min(1,X/2.4))):ae>0&&(ae=Math.max(0,ae-Z*1.6));let se=ye&&ye.dragging;return se||(w=Fl(w,r?0:P?i.hoverSpin:i.spin,3,Z),C+=(w+g)*Z,g*=Math.exp(-3*Z),Math.abs(g)<.001&&(g=0)),D=Fl(D,P?O:0,4,Z),B=Fl(B,P?-I:0,4,Z),h.rotation.y=C,h.position.y=r?0:Math.sin(q*.9)*.008,rt(),!r||se||g!==0||F<1||ae>0||Math.abs(D)>.001||Math.abs(B)>.001},lost(){e.onContextLost?.()}},qe=new ResizeObserver(()=>{ct(),Di()});qe.observe(n);let ee=Nl(n,Ne,"80px");return t.views.add(Ne),ct(),ko(Ne),e.monument&&Le(e.monument,{reveal:e.reveal!==!1}),{canvas:o,ready:K,setMonument:Le,dispose(){Q=!0,ur(Ne),t.views.delete(Ne),qe.disconnect(),ee.disconnect(),ye?.dispose(),te.removeEventListener("pointermove",xe),te.removeEventListener("pointerleave",Ue),d.traverse(Z=>Z.geometry?.dispose()),v.geometry.dispose(),A.geometry.dispose(),o.remove()}}}var Wl=`
#include <colorspace_fragment>
`,Gn=(n,e,t)=>{let i=oi((t-n)/(e-n),0,1);return i*i*(3-2*i)},Ur=(n,e,t)=>n+(e-n)*t;function bm(n,e,t,i){let r=document.createElement("canvas");r.width=n,r.height=e,t(r.getContext("2d"),n,e);let o=new Un(r);return o.colorSpace=$t,o.anisotropy=8,i&&(o.wrapS=o.wrapT=Qi,o.repeat.set(...i)),o}function qo(n,e){let t=new Ke;t.setAttribute("position",new Me(n.flatMap(o=>o.p),3)),t.setAttribute("color",new Me(n.flatMap(o=>[o.c.r,o.c.g,o.c.b]),3)),t.setAttribute("aSize",new Me(n.map(o=>o.s),1)),t.setAttribute("aSeq",new Me(n.map(o=>o.q??-1),1));let i=new bt({uniforms:{uMap:{value:e},uScale:{value:300},uTime:{value:0},uIntensity:{value:1}},vertexShader:`attribute float aSize; attribute float aSeq; attribute vec3 color; uniform float uScale; uniform float uTime;
      varying vec3 vC; varying float vA;
      void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float d = -mv.z; vA = exp(-d * 0.028);
        float seq = 1.0;
        if (aSeq >= 0.0) { float ph = fract(uTime * 2.0); seq = 0.25 + 3.0 * exp(-abs(ph - aSeq) * 40.0); }
        vC = color * seq;
        gl_PointSize = clamp(aSize * uScale / d, 1.5, 64.0);
        gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uMap; uniform float uIntensity; varying vec3 vC; varying float vA;
      void main(){ float a = texture2D(uMap, gl_PointCoord).a * vA * uIntensity; gl_FragColor = vec4(vC * a, a); ${Wl} }`,transparent:!0,depthWrite:!1,blending:Kt,toneMapped:!1,fog:!1}),r=new mn(t,i);return r.frustumCulled=!1,r}function wm(n,e={}){let t=new le(e.accent||"#c9a24b"),i=e.duration||3.7,r=document.createElement("canvas");r.className="flytz-boarding3d",r.setAttribute("aria-hidden","true"),n.appendChild(r);let o=zo({canvas:r,alpha:!1});o.setClearColor("#05080f",1),o.toneMappingExposure=1.15;let s=new rn;s.fog=new Us("#0b1424",.03),s.environment=Vo(o),s.environmentIntensity=.25;let a=new Ft(38,1,.03,500),c=Wo(),l=new de(new Zt(300,32,16),new bt({uniforms:{uGold:{value:t.clone()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uGold; varying vec3 vDir;
        void main(){ float h = vDir.y;
          vec3 top = vec3(0.008, 0.014, 0.035); vec3 mid = vec3(0.035, 0.06, 0.12); vec3 hor = vec3(0.12, 0.13, 0.2);
          vec3 col = mix(hor, mid, smoothstep(0.0, 0.18, h)); col = mix(col, top, smoothstep(0.18, 0.7, h));
          col += uGold * 0.16 * exp(-max(h, 0.0) * 22.0);
          gl_FragColor = vec4(col, 1.0); ${Wl} }`,side:Pt,depthWrite:!1,fog:!1}));s.add(l);let f=ki(21),h=[];for(let oe=0;oe<900;oe++){let je=f()*Math.PI*2,st=.08+f()*.92,St=Math.sqrt(1-st*st);h.push(Math.cos(je)*St*250,st*250,Math.sin(je)*St*250)}let u=new Ke;u.setAttribute("position",new Me(h,3));let d=new mn(u,new bt({uniforms:{uTime:{value:0}},vertexShader:`uniform float uTime; varying float vA; void main(){ vA = 0.45 + 0.55 * sin(uTime * 2.0 + position.x * 0.3 + position.z * 0.2);
        gl_PointSize = 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying float vA; void main(){ gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * vA, vA); ${Wl} }`,transparent:!0,depthWrite:!1,blending:Kt,fog:!1}));s.add(d),s.add(new Fn("#3a5280","#0a0806",.7));let m=new xn("#9fb6ff",1.1);m.position.set(-4,6,-3),s.add(m);let v=new ar("#ffd9a3",6,6,1.4);v.position.set(.9,1.1,1.2),s.add(v);let A=new ar("#ffcf8a",3,5,1.6);A.position.set(-1.2,.9,-.9),s.add(A);let p=bm(256,256,(oe,je,st)=>{oe.fillStyle="#0d1118",oe.fillRect(0,0,je,st);let St=ki(4);for(let Jt=0;Jt<2600;Jt++)oe.fillStyle=`rgba(${40+St()*30},${48+St()*30},${56+St()*30},${.08+St()*.1})`,oe.fillRect(St()*je,St()*st,2+St()*3,2+St()*3)},[60,60]),S=new de(new Oi(500,500),new _t({map:p,roughness:.95}));S.rotation.x=-Math.PI/2,s.add(S);let E={x0:-6,x1:74,w:1.3},_=bm(512,128,(oe,je,st)=>{oe.fillStyle="#20242c",oe.fillRect(0,0,je,st);let St=ki(8);for(let Jt=0;Jt<900;Jt++)oe.fillStyle=`rgba(255,255,255,${St()*.035})`,oe.fillRect(St()*je,St()*st,3,1);oe.fillStyle="rgba(80,60,40,0.25)",oe.fillRect(0,st*.36,je,st*.28),oe.fillStyle="rgba(240,240,235,0.55)",oe.fillRect(0,5,je,3),oe.fillRect(0,st-8,je,3),oe.fillRect(0,st/2-2,je*.5,4)},[(E.x1-E.x0)/3,1]),b=new de(new Oi(E.x1-E.x0,E.w),new _t({map:_,roughness:.75,metalness:.05}));b.rotation.x=-Math.PI/2,b.position.set((E.x0+E.x1)/2,.003,0),s.add(b);let y=new qt({color:"#d9d9d2"});for(let oe=0;oe<12;oe++){if(oe===5||oe===6)continue;let je=new de(new Oi(.5,.06),y);je.rotation.x=-Math.PI/2,je.position.set(E.x0+.6,.004,-.5+oe*.09),s.add(je)}let C=new de(new Oi(18,4.4),new _t({color:"#181b21",roughness:.85}));C.rotation.x=-Math.PI/2,C.position.set(1,.002,-3.4),s.add(C);let g=new le("#fff1d8"),w=new le("#ffb547"),P=new le("#ff3b30"),D=new le("#3dff8c"),B=new le("#3c7dff"),O=[];for(let oe=E.x0;oe<=E.x1;oe+=.9){let je=oe>E.x1-12;for(let st of[-E.w/2-.04,E.w/2+.04])O.push({p:[oe,.03,st],c:je?w:g,s:.09})}for(let oe=E.x0+.4;oe<=E.x1;oe+=.45)O.push({p:[oe,.012,0],c:oe>E.x1-8?P:g,s:.05});for(let oe=-.6;oe<=.6;oe+=.15)O.push({p:[E.x0-.05,.03,oe],c:D,s:.1}),O.push({p:[E.x1+.05,.03,oe],c:P,s:.1});for(let oe=0;oe<14;oe++){let je=E.x0-.8-oe*.62;if(O.push({p:[je,.06,0],c:g,s:.18,q:1-oe/14}),oe%3===1)for(let st of[-.36,-.18,.18,.36])O.push({p:[je,.06,st],c:g,s:.1})}for(let oe=-6;oe<=8;oe+=.7)O.push({p:[oe,.03,-.95],c:B,s:.08});for(let oe=-6;oe<=8;oe+=.35)O.push({p:[oe,.012,-1.25],c:D,s:.045});let I=qo(O,c);s.add(I);let F=ta(17);F.repeat.set(70,1);let X=new Qe,k=new de(new Tt(18,.34,1.4),new _t({color:"#10141c",roughness:.55,metalness:.5}));k.position.set(1,.17,-6.6);let ae=new de(new Tt(18,.13,.02),new _t({color:"#06080c",roughness:.15,metalness:.8,emissiveMap:F,emissive:new le("#ffffff"),emissiveIntensity:1.1}));ae.position.set(1,.2,-5.89);let q=new de(new Tt(18.6,.04,1.8),new _t({color:"#1d222c",roughness:.6,metalness:.4}));q.position.set(1,.36,-6.5),X.add(k,ae,q);let Q=new _t({color:"#2a303b",roughness:.5,metalness:.5});for(let oe of[-5,-2,3.5,6.5]){let je=new de(new Tt(.14,.11,1.4),Q);je.position.set(oe,.24,-5.2),X.add(je)}let re=new _t({color:"#1c212b",roughness:.5,metalness:.4}),Le=new de(new Ut(.12,.18,1.9,16),re);Le.position.set(8.5,.95,-7.6);let Re=new de(new Ut(.34,.26,.28,16),new _t({color:"#0a0d12",emissive:new le("#7fb2ff"),emissiveIntensity:.55,roughness:.2,metalness:.7}));Re.position.set(8.5,2.02,-7.6);let ct=new de(new Ut(.38,.38,.05,16),re);ct.position.set(8.5,2.19,-7.6),X.add(Le,Re,ct),s.add(X);let rt=qo([{p:[8.5,2.3,-7.6],c:P,s:.3},{p:[1,.42,-6.6],c:P,s:.15}],c);s.add(rt);let ft=ta(29),K=new _t({color:"#06080d",roughness:.6,emissiveMap:ft,emissive:new le("#ffffff"),emissiveIntensity:1.4}),te=new Dn(new Tt(1,1,1),K,90),xe=new vt,Ue=ki(13);for(let oe=0;oe<90;oe++){let je=.6+Ue()**2*4.2;xe.position.set(-40+Ue()*90,je/2,-32-Ue()*18),xe.scale.set(.8+Ue()*1.6,je,.8+Ue()*1.4),xe.updateMatrix(),te.setMatrixAt(oe,xe.matrix)}s.add(te);let ye=[];for(let oe=0;oe<70;oe++)ye.push({p:[-40+Ue()*90,.2+Ue()*3.6,-31-Ue()*18],c:Ue()>.85?P:new le("#ffd28a"),s:.5+Ue()*.6});let Ne=qo(ye,c);s.add(Ne);let qe=zl({detail:"high",accent:"#"+t.getHexString()}),ee=.12;qe.group.position.set(0,ee,0),s.add(qe.group);let Z=-1.25;qe.parts.cargoDoor&&(qe.parts.cargoDoor.rotation.x=Z);let ne=new de(new Oi(.07,.042),new qt({color:"#020306"}));ne.position.set(.17,-.0185,.0567),qe.group.add(ne);let se=qo([{p:[.36,-.07,0],c:g,s:.2},{p:[.05,-.03,.12],c:g,s:.16},{p:[.05,-.03,-.12],c:g,s:.16}],c);se.material.uniforms.uIntensity.value=0,qe.group.add(se);let fe=new Qe;s.add(fe);let De=new _t({color:"#e9e4d6",roughness:.5}),we=new _t({color:"#2a2f38",roughness:.6,metalness:.4}),We=new _t({color:t,roughness:.35,metalness:.7}),$e=new _t({color:"#efe6d2",roughness:.5}),L=new T(.17,ee-.03,.075),ut=new T(.36,.035,.5),nt=new T().subVectors(L,ut),R=nt.length(),x=new _t({color:"#0c0d10",roughness:.8}),G=(oe,je,st=.012)=>{for(let[St,Jt]of je){let Ui=new de(new Ut(st,st,.008,12),x);Ui.rotation.x=Math.PI/2,Ui.position.set(St,st,Jt),oe.add(Ui)}},z=new Qe,J=new de(new Tt(.05,.012,R),we);J.position.copy(ut).addScaledVector(nt,.5),J.lookAt(L);let ue=new Qe,me=new de(new Tt(.07,.022,.2),De);me.position.y=.03,ue.add(me),G(ue,[[-.035,-.07],[.035,-.07],[-.035,.07],[.035,.07]]),ue.position.set(ut.x-.04,0,ut.z-.1),ue.lookAt(L.x,0,L.z),z.add(J,ue),fe.add(z);let $=[];for(let oe=0;oe<5;oe++){let je=new de(new Tt(.032,.02,.026),oe%2?$e:We);$.push(je),fe.add(je)}let j=new Qe,pe=new de(new Tt(.07,.03,.045),De);pe.position.y=.028;let ze=new de(new Tt(.03,.025,.04),we);ze.position.set(-.012,.055,0),j.add(pe,ze),G(j,[[-.022,-.025],[.022,-.025],[-.022,.025],[.022,.025]],.01);for(let oe=1;oe<=2;oe++){let je=new de(new Tt(.08,.008,.045),we);je.position.set(-.1*oe,.022,0),j.add(je),G(j,[[-.1*oe-.028,-.024],[-.1*oe+.028,-.024],[-.1*oe-.028,.024],[-.1*oe+.028,.024]],.008);for(let st=0;st<3;st++){let St=new de(new Tt(.022,.016,.03),(oe+st)%2?We:$e);St.position.set(-.1*oe-.024+st*.024,.034,0),j.add(St)}}let ve=qo([{p:[-.012,.075,0],c:w,s:.1}],c);j.add(ve),j.position.set(.72,0,.36),j.rotation.y=-.35,fe.add(j);let Ae=new de(new Ut(.008,.012,1.1,8),we);Ae.position.set(-1.4,.55,-2.4),s.add(Ae),s.add(qo([{p:[-1.4,1.12,-2.4],c:new le("#ffd9a3"),s:.9},{p:[2.2,1.12,-2.6],c:new le("#ffd9a3"),s:.9}],c));let He=Ae.clone();He.position.set(2.2,.55,-2.6),s.add(He);let Ye=new bt({uniforms:{uColor:{value:t.clone().lerp(new le("#fff1c8"),.35)},uAlpha:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform vec3 uColor; uniform float uAlpha; varying vec2 vUv;
      void main(){ float edge = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.75, vUv.y) * smoothstep(0.0, 0.2, vUv.x) * smoothstep(1.0, 0.8, vUv.x);
        float a = (0.18 + 0.82 * pow(1.0 - abs(vUv.x - 0.5) * 2.0, 8.0)) * edge * uAlpha;
        gl_FragColor = vec4(uColor * a, a); ${Wl} }`,transparent:!0,depthWrite:!1,blending:Kt,side:Ht,toneMapped:!1,fog:!1}),et=new Qe,N=new de(new Oi(1.3,.42),Ye);N.rotation.y=Math.PI/2,N.position.y=.17;let _e=new qt({color:t.clone().lerp(new le("#fff1c8"),.5),transparent:!0,opacity:0,blending:Kt,depthWrite:!1,toneMapped:!1,fog:!1}),ie=new de(new Li(.066,.0035,8,48),_e);ie.rotation.y=Math.PI/2,ie.position.y=ee;let ge=new de(new Oi(.012,1.4),_e);ge.rotation.x=-Math.PI/2,ge.position.y=.006,et.add(N,ie,ge),et.visible=!1,s.add(et);let Se=[[0,[1.2,.3,1.32],[.1,.08,.05]],[.75,[.82,.3,1.42],[.02,.1,0]],[1.45,[-.95,.38,1.35],[.15,.1,0]],[2.15,[-.9,.55,2.3],[.9,.12,0]],[3,[1.6,.4,2.7],[2.8,.3,0]],[3.7,[3.4,.55,3],[6.2,1.1,0]],[5,[4.4,.75,3.4],[10,3,0]]],ce=new T,Fe=new T,Be=new T,Rt=new T,mt=!1;function he(oe,je){let st=0;for(;st<Se.length-2&&oe>Se[st+1][0];)st++;let[St,Jt,Ui]=Se[st],[zn,mr,Ni]=Se[st+1],M=ea(oi((oe-St)/(zn-St),0,1));ce.set(Ur(Jt[0],mr[0],M),Ur(Jt[1],mr[1],M),Ur(Jt[2],mr[2],M)),Fe.set(Ur(Ui[0],Ni[0],M),Ur(Ui[1],Ni[1],M),Ur(Ui[2],Ni[2],M));let U=Gn(2.3,3,oe);Fe.lerp(Be.copy(je).add(Rt.set(.35,.05,0)),U*.85),mt&&ce.sub(Fe).multiplyScalar(1.55).add(Fe),a.position.copy(ce),a.lookAt(Fe)}let Ge=new T;function dt(oe){let je=Gn(1.45,2.15,oe)*.35,st=Math.max(0,oe-2.1),St=je+3.1*st*st+.5*st,Jt=Math.max(0,oe-2.95),Ui=ee+.55*Jt*Jt+.9*Jt*Gn(2.95,3.3,oe);return Ge.set(St,Ui,0),Ge}let Je=oe=>Be.copy(ut).addScaledVector(nt,oe),Mt=0;function Ot(oe){Mt=oe,I.material.uniforms.uTime.value=oe,d.material.uniforms.uTime.value=oe;let je=dt(oe);qe.group.position.copy(je);let st=Gn(2.75,3.05,oe)*.2-Gn(3.4,4.2,oe)*.04;if(qe.group.rotation.set(0,0,st),qe.update(oe),qe.parts.cargoDoor&&(qe.parts.cargoDoor.rotation.x=Z*(1-Gn(.62,.95,oe))),ne.visible=oe<.95,qe.parts.gear){let Ni=Gn(3.25,3.6,oe);qe.parts.gear.scale.y=1-Ni*.92,qe.parts.gear.position.y=Ni*.04}se.material.uniforms.uIntensity.value=Gn(1.9,2.2,oe)*1.6,$.forEach((Ni,M)=>{let U=oi((oe+.25-M*.14)/.42,0,1);Ni.visible=U>0&&U<1,Ni.position.copy(Je(U)),Ni.position.y+=.016,Ni.rotation.y=-.6});let St=Gn(.85,1.6,oe);z.position.set(St*.25,0,St*.55),j.position.set(.72+St*1.1,0,.36+St*.3),ve.material.uniforms.uIntensity.value=oe%.6<.3?1.4:.25,rt.material.uniforms.uIntensity.value=oe%1.2<.5?1.3:.2;let Jt=oi((oe-.72)/.7,0,1);et.visible=Jt>0&&Jt<1,et.position.set(Ur(.56,-.56,ea(Jt)),0,0);let Ui=Math.sin(Math.PI*Jt);Ye.uniforms.uAlpha.value=Ui*1.3,_e.opacity=Ui;let zn=et.position.x,mr=zn>.3?1-((zn-.3)/.2)**2*.75:zn<-.19?1-(-.19-zn)/.31*.7:1;ie.scale.setScalar(Math.max(.2,mr)),he(oe,je)}let jt=1,wt=1;function Lt(){jt=n.clientWidth||window.innerWidth,wt=n.clientHeight||window.innerHeight;let oe=Ho(1.75);o.setPixelRatio(oe),o.setSize(jt,wt,!1),a.aspect=jt/wt,mt=a.aspect<.9,a.fov=mt?52:38,a.setViewOffset(jt,wt,0,wt*(mt?.14:.09),jt,wt),a.updateProjectionMatrix();let je=wt*oe/(2*Math.tan(a.fov*Math.PI/360));s.traverse(st=>{st.isPoints&&st.material.uniforms?.uScale&&(st.material.uniforms.uScale.value=je)})}let At=!1,Gt=null,zt={visible:!0,tick(oe,je){return At?(Gt===null&&(Gt=je),Ot(je-Gt),o.render(s,a),!0):!1}},Ai=new ResizeObserver(()=>{Lt(),At||(Ot(Mt),o.render(s,a))});Ai.observe(n),Lt(),Ot(0);let Ii=Promise.resolve();try{o.compile(s,a),o.render(s,a)}catch(oe){Ii=Promise.reject(oe)}return r.addEventListener("webglcontextlost",oe=>{oe.preventDefault(),At=!1,e.onContextLost?.()}),{canvas:r,ready:Ii,duration:i,play(){Gt=null,At=!0,ko(zt)},seek(oe){At=!1,ur(zt),Ot(oe),o.render(s,a)},reset(){At=!1,ur(zt),Ot(0),o.render(s,a)},dispose(){At=!1,ur(zt),Ai.disconnect(),Ol(s),o.dispose(),o.forceContextLoss(),r.remove()}}}window.Flytz3D={version:"1.1.0",supported:cm,createGlobe:pm,createLandmark:ym,createBoarding:wm,landmarks:Object.keys(kl)};window.dispatchEvent(new Event("flytz3d:ready"));})();
