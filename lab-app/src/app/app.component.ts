import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { homeOutline, schoolOutline, bookOutline, peopleOutline, callOutline, imagesOutline, chevronForwardOutline, mailOutline, locationOutline, closeOutline } from 'ionicons/icons';
@Component({ selector: 'app-root', templateUrl: 'app.component.html', styleUrls: ['app.component.scss'], standalone: false })
export class AppComponent {
 pages = [
 {title:'Dashboard',url:'/dashboard',icon:'home-outline'},
 {title:'School Profile',url:'/school-profile',icon:'school-outline'},
 {title:'Courses Offered',url:'/courses',icon:'book-outline'},
 {title:'Faculty',url:'/faculty',icon:'people-outline'},
 {title:'Contacts',url:'/contacts',icon:'call-outline'},
 {title:'Gallery',url:'/gallery',icon:'images-outline'}];
 constructor() { addIcons({homeOutline,schoolOutline,bookOutline,peopleOutline,callOutline,imagesOutline,chevronForwardOutline,mailOutline,locationOutline,closeOutline}); }
}