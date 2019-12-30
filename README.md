# Validator JavaScript Plugin
The Validation JavaScript Plugin provides drop-in validation for your forms

```js
import validator from './modules/validator';

addEventListener('DOMContentLoaded', function() {
   validator(document.querySelector('#form'));
});
```

```js
<script src="./validator.js"></script>
<script>
   addEventListener('DOMContentLoaded', function () {
      validator(document.querySelector('#form'));
   });
</script>
```

```js
<script src="./validator.js"></script>
```
