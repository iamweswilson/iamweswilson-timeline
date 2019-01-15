<template>
  <div class="header">
    <navigation/>
  </div>
  <!-- /.header -->
</template>

<script>
/**
 * @ The internal dependecies.
 */
import Navigation from "./navigation";

export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "BaseHeader",

  /**
   * The imported components.
   */
  components: {
    Navigation
  }
};
</script>
