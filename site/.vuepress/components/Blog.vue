<template>
  <main class="main">
    <hero class="hero-intro is-primary" containerClass="container-thin" withEntry title="Blog">
      <template slot="entry">
        <p>Stuff I've written is below.</p>
      </template>
    </hero>

    <div class="main-inner">
      <div class="container container-thin">
        <h4 class="main-title">All Posts</h4>
        <!-- /.main-title -->
        <div class="main-container">
          <div class="content">
            <PostList :author="author" :category="category"/>
          </div>
          <!-- /.content -->
          <aside class="sidebar">
            <ul class="widgets">
              <!-- <li class="widget">
                <div class="widget-head">
                  <h6 class="widget-title">Categories</h6>
                </div>
                <div class="widget-body">
                  <ul class="widget-list">
                    <li>
                      <router-link to="/blog/?category=personal">Personal</router-link>
                    </li>
                    <li>
                      <router-link to="/blog/?category=work">Work</router-link>
                    </li>
                    <li>
                      <router-link to="/blog/?category=random">Random</router-link>
                    </li>
                  </ul>
                </div>
              </li> Categories widget for later-->
              <!-- /.widget -->
              <li class="widget">
                <div class="widget-head">
                  <h6 class="widget-title">Find Me (you stalker)</h6>
                  <!-- /.widget-title -->
                </div>
                <!-- /.widget-head -->
                <div class="widget-body">
                  <ul class="widget-list">
                    <li>
                      <a href="//twitter.com/iamweswilson">Twitter</a>
                    </li>
                    <li>
                      <a href="//instagram.com/iamweswilson">Instagram</a>
                    </li>
                  </ul>
                  <!-- /.widget-list -->
                </div>
                <!-- /.widget-body -->
              </li>
              <!-- /.widget -->
            </ul>
            <!-- /.widgets -->
          </aside>
          <!-- /.sidebar -->
        </div>
        <!-- /.main-container -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.main-inner -->
  </main>
  <!-- /.main -->
</template>

<script>
import PostList from "./PostList.vue";

export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "Blog",

  components: { PostList },

  /**
   * Internal state of the component.
   *
   * @return {Object}
   */
  data: () => ({
    total: 200,
    current: 2,
    perPage: 20
  }),
  computed: {
    category() {
      return this.$route.query.category || "all";
    },
    author() {
      return this.$route.query.author || "any";
    }
  }
};
</script>
