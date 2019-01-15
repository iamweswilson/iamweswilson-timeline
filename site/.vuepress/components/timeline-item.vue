<template>
  <div class="article-small">
    <figure v-if="image" class="article-small__image">
      <div class="image-wrapper">
        <img :src="image" :alt="title">
      </div>
    </figure>
    <!-- /.article-small__image -->
    <div class="article-small__content">
      <h5 class="article-small__title">{{ title }}</h5>
      <!-- /.article-small__title -->
      <div class="article-small__entry">
        <slot/>
      </div>
      <!-- /.article-small__entry -->
    </div>
    <!-- /.article-small__content -->
  </div>
  <!-- /.article-small -->
</template>

<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "ArticleSmall",

  /**
   * The supported properties of the component.
   *
   * @type {Object}
   */
  props: {
    image: {
      type: String,
      default: () => {}
    },
    title: {
      type: String,
      default: () => {}
    }
  }
};
</script>
