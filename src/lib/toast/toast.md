
# Toasts

## Usage

```html
<script>
  import { addToast, Toasts } from "../lib/toast";
  const getRnd = (min = 2000, max = 6000) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const toast = {
    ok(msg) {
      let i = getRnd();
      addToast(`${msg}`, "success", i);
    },
    err(msg) {
      let i = getRnd();
      addToast(`${msg}`, "error", i);
    },
    info(msg) {
      let i = getRnd();
      addToast(`${msg}`, "info", i);
    },
  };
</script>

<Toasts />

<button
  class="btn btn-blue"
  on:click={() => toast.err("You recieve an Error Message !")}
  >Toggle Error</button>
<button
  class="btn btn-blue"
  on:click={() => toast.ok("You recieve an Success Message !")}
  >Toggle Success</button>
```