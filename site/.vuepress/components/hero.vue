<template>
  <section :class="{
			'hero': true
		}">
    <div class="hero-body">
      <div class="container container-thin-alt">
        <div class="hero-content">
          <h2 class="hero-title">{{ item.headline }}</h2>
          <p class="hero-intro">{{ item.intro }}</p>
          <!-- /.hero-title -->
        </div>
        <!-- /.hero-content -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.hero-body -->
  </section>
  <!-- /.hero -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "Hero",

  /**
   * The supported properties of the component.
   *
   * @type {Object}
   */
  props: {
    item: {
      type: String,
      default: () => {}
    },
    intro: {
      type: String,
      default: () => {}
    },
    image: {
      type: String,
      default: () => {}
    },
    containerClass: {
      type: String,
      default: () => {}
    }
  }
};
</script>
