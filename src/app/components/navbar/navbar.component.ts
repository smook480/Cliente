import { Component, OnInit } from '@angular/core';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';


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
    
    (function ($) {
      $(document).ready(function(){
        
      // hide .navbar first
      $(".navbar").hide();
      
      // fade in .navbar
      $(function () {
        $(window).scroll(function (this:any) {
                // set distance user needs to scroll before we fadeIn navbar
          if ($(this).scrollTop() > 100) {
            $('.navbar').fadeIn();
          } else {
            $('.navbar').fadeOut();
          }
        });
    
      
      });
    
    });
      }(jQuery));
  }
}
