import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular/lazy';
@Component({selector:'app-campus',standalone:true,imports:[IonicModule],templateUrl:'./campus.page.html',styleUrls:['./campus.page.scss']})
export class CampusPage {
 section=inject(ActivatedRoute).snapshot.data['section'] as string;
 titles: Record<string,string> = {dashboard:'Dashboard','school-profile':'School Profile',courses:'Courses Offered',faculty:'Faculty',contacts:'Contacts',gallery:'Gallery'};
 logo='assets/campus/logo/848090208_1141237838297627_2086635417711598450_n.webp';
 profile="NEUST Gabaldon Campus, located in Gabaldon, Nueva Ecija at the foothills of Mt. Mingan, spans approximately 278 hectares. It offers programs in Agriculture, Education, Information & Communication Technology, Hospitality Management, and secondary/vocational education. Several programs are Level II accredited, and the campus contributes to NEUST’s recognition as a top-performing state university. Under the leadership of Dr. Franklyn T. Dumayas, the campus engages in community outreach, environmental initiatives, and student wellness programs, though exact enrollment and faculty numbers are not publicly available";
 courses=['BS Information Technology','BS Hospitality Management','BS in Agriculture','Bachelor in Elementary Education','Bachelor in Secondary Education'];
 faculty=[
 {name:'Dr. Franklin T. Dumayas',role:'Campus Director',photo:'sir frank.jpg'},
 {name:'Prof. Adiza V. Dela Cruz',role:'DEAN College of Agriculture',photo:'adiza.jpg'},
 {name:'Prof. Ronaldo C. Arimbuyutan',role:'Area Chair - BSIT Department',photo:'sir roy.jpg'},
 {name:'Dr. Ralph Christopher M. Ramos',role:'Area Chair - BSHM Department',photo:'sir cchris.jpg'},
 {name:'Dr. Jaypee Del Rosario',role:'Area Chair - TEP Department',photo:'jaypee.jpg'}];
 announcements=[{title:'System Maintenance',date:'Nov 15, 2025',text:'Maintenance tomorrow from 1AM to 4AM.'},{title:'Holiday Notice',date:'Nov 10, 2025',text:'No work and classes on Friday.'}];
 photos=["886934931_1164993579537985_4095945034255274206_n.png","891842212_1134239999432235_8149577594902872078_n.png","892789164_2877454462655189_8078077932832622269_n.jpg","894688041_1457023333284056_3597936653131430547_n.jpg","899268250_2022695118394355_414861996837515226_n.jpg","900028451_1685002379685158_397042386127705312_n.jpg"];
 selectedPhoto: string | null=null;
}