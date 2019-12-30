'use strict';
import validator from './validator';

addEventListener('DOMContentLoaded', function() {
   var forms = document.querySelectorAll('form');
   for (var i = 0; i < forms.length; i++) {
      validator(forms[i]);
   }

   document.querySelectorAll('form').forEach(elem => validator(elem));

   validator(document.querySelector('#form'));
});