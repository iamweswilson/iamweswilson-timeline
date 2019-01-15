<template>
  <main class="main">
    <hero class="hero-main is-horizontal-center" :item="$page.frontmatter.hero"></hero>
    <div class="container container-thin">
      <div class="jump-to bottom">
        <a href="#footer">
          Jump to beginning
          <span class="arrow-down"></span>
        </a>
      </div>
      <div class="timeline is-centered" v-for="group, year in groups">
        <header class="timeline-header">
          <span class="tag">{{year}}</span>
        </header>
        <div class="timeline-item" v-for="value in group">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <!-- with an image -->
            <timeline-item
              v-if="value.image"
              :title="value.title"
              :image="require('../public/images/' + value.image )"
            >
              <p v-if="value.copy" class="timeline-copy">{{ value.copy }}</p>
              <a v-if="value.link" :href="value.link">
                {{ value.linktext }}
                <span class="arrow-right"></span>
              </a>
              <a v-if="value.link2" :href="value.link2">
                {{ value.linktext2 }}
                <span class="arrow-right"></span>
              </a>
            </timeline-item>
            <!-- without an image -->
            <timeline-item v-else :title="value.title">
              <p v-if="value.copy" class="timeline-copy">{{ value.copy }}</p>
              <a v-if="value.link" :href="value.link">
                {{ value.linktext }}
                <span class="arrow-right"></span>
              </a>
              <a v-if="value.link2" :href="value.link2">
                {{ value.linktext2 }}
                <span class="arrow-right"></span>
              </a>
            </timeline-item>
          </div>
          <!-- /timeline-content -->
        </div>
      </div>
      <div class="jump-to top">
        <a href="#top">
          Jump to Current
          <span class="arrow-up"></span>
        </a>
      </div>
    </div>
  </main>
  <!-- /.main -->
</template>

<script>
function groupBy(array, key) {
  // put array into reverse chronological order
  array.sort(function(a, b) {
    if (a.year > b.year) return -1;
    if (a.year < b.year) return 1;
    return 0;
  });

  // hack adds space to ensure alpha keys
  var newArray = array.map(function(val) {
    val.year = val.year + " ";
    return val;
  });

  const result = {};
  newArray.forEach(item => {
    if (!result[item[key]]) {
      result[item[key]] = [];
    }
    result[item[key]].push(item);
  });
  return result;
}
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "HomeContent",
  computed: {
    groups() {
      return groupBy(this.$page.frontmatter.values, "year");
    }
  }
};
</script>