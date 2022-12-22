import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(){}
  ngOnInit()  {
        $(document).ready(() =>{

      // hide .navbar first
      $(".navbar").hide();
  
      // fade in .navbar
      $( () => {
          $(window).scroll( () => {
  
                   // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 100) {
                  $('.navbar').fadeIn();
              } else {
                  $('.navbar').fadeOut();
              }
          });
      });
  
  });
  }
}


