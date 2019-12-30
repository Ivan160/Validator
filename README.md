# Validator JavaScript Plugin
The Validation JavaScript Plugin provides drop-in validation for your forms

### Validator-install
**folder install**
```js
import validator from './modules/validator';

addEventListener('DOMContentLoaded', function() {
   validator(document.querySelector('#form'));
});
```

### Validator-connections
**folder connections**
```js
<script src="./validator.js"></script>
<script>
   addEventListener('DOMContentLoaded', function () {
      validator(document.querySelector('#form'));
   });
</script>
```

### Validator-independent
**folder independent**
```js
<script src="./validator.js"></script>
```
