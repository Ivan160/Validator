# Validator JavaScript Plugin
The Validation JavaScript Plugin provides drop-in validation for your forms

### Validator-install
**folder install**

First, download the file validator.js from the install folder. 
Import the validator into your project.
Next, call the validator function for those forms you wish to have validation.

```js
import validator from './validator';

addEventListener('DOMContentLoaded', function() {
   validator(document.querySelector('#form'));
});
```

### Validator-connections
**folder connections**

First, download the file validator.js from the install connections. 
First, include the validator.js.
Next, call the validator function for those forms you wish to have validation.

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

First, download the file validator.js from the install independent. 
First, include the validator.js.

```js
<script src="./validator.js"></script>
```
