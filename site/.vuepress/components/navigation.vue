<template>
  <nav class="nav is-centered" id="top">
    <div class="container">
      <div class="nav-inner">
        <div class="nav-brand">
          <router-link to="/">
            <img :src="require('../public/images/avatar.svg')" alt="iamweswilson">
            <span class="brand-name">IAmWesWilson</span>
          </router-link>
        </div>
        <!-- /.nav-brand -->
        <!-- <client-only>
          <a
            @click.prevent="isMobileNavOpen = !isMobileNavOpen"
            ref="navTrigger"
            role="button"
            :class="{
						'navbar-burger': true,
						'is-active': isMobileNavOpen
					}"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </client-only>

        <div
          ref="mobileNav"
          :class="{
						'nav-content': true,
						'is-active': isMobileNavOpen
					}"
        >
          <ul class="nav-menu">
            <li v-for="(navItem, i) in $site.themeConfig.nav">
              <a @click.prevent="handleNavItemClick(navItem)" href="#">{{ navItem.text }}</a>
            </li>
        </ul> Hiding navigation until the blog is kicked off-->
        <!-- /.nav-menu -->
      </div>
      <!-- /.nav-content -->
    </div>
    <!-- /.container -->
  </nav>
  <!-- /.nav -->
</template>


<script>
export default {
  /**
   * The name of the component.
   *
   * @type {Strng}
   */
  name: "Navigation",

  /**
   * Internal state of the component.
   *
   * @return {Object}
   */
  data: () => ({
    isMobileNavOpen: false
  }),

  /**
   * The public API of the component.
   *
   * @type {Object}
   */
  methods: {
    documentClick(e) {
      const button = this.$refs.navTrigger;
      const dropdown = this.$refs.mobileNav;
      const target = e.target;

      if (
        dropdown !== target &&
        !dropdown.contains(target) &&
        button !== target &&
        !button.contains(target)
      ) {
        this.isMobileNavOpen = false;
      }
    },

    handleNavItemClick(navItem) {
      this.$router.push(navItem.link);

      this.isMobileNavOpen = false;
    }
  },

  /**
   * The created lifecycle hook
   *
   * @return {Void}
   */
  mounted() {
    if (document) document.addEventListener("click", this.documentClick);
  },

  /**
   * The destroyed lifecycle hook
   *
   * @return {Void}
   */
  destroyed() {
    document.removeEventListener("click", this.documentClick);
  }
};
</script>
