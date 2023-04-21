
# Sanitize Email Directive

* A directive developed with Vue.js that sanitizes the entered email address reactively.

<p align="center">

[![vue version](https://img.shields.io/npm/v/sanitize-email.svg)](https://www.npmjs.com/package/sanitize-email)
[![vue version](https://img.shields.io/badge/vue-3.2-brightgreen.svg)](https://www.npmjs.com/package/sanitize-email)

</p>

## Installing

### Package manager

Using npm:

```bash
npm i sanitize-email
```

Then, import and register the component:


## Global Registration

main.js
```
import sanitizeEmail from "sanitize-email";
app.use(sanitizeEmail);
```

## Local Registration

* Composition API

```
<script setup>
import { sanitizeEmail as vSanitizeEmail } from "sanitize-email";
</script>
```

* Options API
```
<script>
import { sanitizeEmail } from "sanitize-email";

export default {
  directives: {
    "sanitize-email": sanitizeEmail
  },
}
</script>
```


## Usage
* Example 1
```
<script>
import { sanitizeEmail } from "sanitize-email";

export default {
  directives: {
    "sanitize-email": sanitizeEmail
  },
  data () {
    return {
       email: ""
    }
  }
}
</script>

<template>
      <input v-sanitize-email="email"
             v-model="email"
              type="text" />
</template>
```

* Example 2

```
<script setup>
import { sanitizeEmail as vSanitizeEmail } from "sanitize-email";
import { ref } from "vue";
const email = ref("");
</script>

<template>
      <input v-sanitize-email="email"
             v-model="email"
              type="text" />
</template>
```

* Example 3

```
<script setup>
import { ref } from "vue";
const email = ref("");
</script>

<template>
      <input v-sanitize-email="email"
             v-model="email"
              type="text" />
</template>
```

* Example 4
* 
```
<script>
export default {
  data() {
    return {
      email: ""
    }
  }
}
</script>

<template>
  <input v-sanitize-email="email" v-model="email" type="text" />
</template>
```

## License
[![License](https://img.shields.io/badge/LICENSE-GPL--3.0-orange)](https://github.com/mustafadalga/sanitize-email/blob/main/LICENSE)