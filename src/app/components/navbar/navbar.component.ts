import { Component, OnInit } from '@angular/core';
import { faComputer } from '@fortawesome/free-solid-svg-icons';

declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  faComputer=faComputer;
  constructor(){}
  ngOnInit()  {
    $(document).ready(function(){
      var $nav = $('.nav');//Caching element
      // hide .navbar first - you can also do this in css .nav{display:none;}
      $nav.hide();
  
      // fade in .navbar
      $(function () {
          $(window).scroll(function (this:any) {
              // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 100) { //For dynamic effect use $nav.height() instead of '100'
                  $nav.fadeIn();
              } else {
                  $nav.fadeOut();
              }
          });
      });
  
  });
}

}
