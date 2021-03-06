/*
 * This file is part of the Trilateration package.
 *
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * @author Matias Gutierrez <soporte@tbmsp.net>
 * @file Trilateration.js
 *
 * Project home:
 *   https://github.com/tbmsp/trilateration
 *
 */
function Compute(p1,p2,p3){
var a;var b;var c;var d;var f;var g;var h;var i;
var j=3.14159265359;
c=p2[0]-p1[0];
d=p2[1]-p1[1];
f=(180/j)*Math.acos(Math.abs(c)/Math.abs(Math.sqrt(Math.pow(c,2)+Math.pow(d,2))));
if((c>0&&d>0)){f=360-f;}else if((c<0&&d>0)){f=180+f;}else if((c<0&&d<0)){f=180-f;}
a=C(c,d,B(A(D(p2[2]))),f);
b=C(p3[0]-p1[0],p3[1]-p1[1],B(A(D(p3[2]))),f);
g=(Math.pow(B(A(D(p1[2]))),2)-Math.pow(a[2],2)+Math.pow(a[0],2))/(2*a[0]);
h=(Math.pow(B(A(D(p1[2]))),2)-Math.pow(b[2],2)-Math.pow(g,2)+Math.pow(g-b[0],2)+Math.pow(b[1],2))/(2*b[1]);
i=C(g,h,0,-f);
i[0]=i[0]+p1[0];
i[1]=i[1]+p1[1]; 
return [i[0],i[1]];
}
function A(a){return a*0.3048;}
function B(a){return a/82602.89223259855;}
function C(a,b,c,d){e=3.14159265359;return [a*Math.cos((e/180)*d)-b*Math.sin((e/180)*d),a*Math.sin((e/180)*d)+b*Math.cos((e/180)*d),c];}
function D(a){return 730.24198315+52.33325511*a+1.35152407*Math.pow(a,2)+0.01481265*Math.pow(a,3)+0.00005900*Math.pow(a,4)+0.00541703*180;}