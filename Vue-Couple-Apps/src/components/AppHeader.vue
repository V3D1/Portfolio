<template>
  <nav
    class="navbar navbar-expand-md navbar-dark bg-primary text-white"
    id="menu"
  >
    <div class="container">
      <router-link class="navbar-brand" to="/">VUE.js</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
            v-for="item in list"
            :key="item.to"
            class="nav-link"
            :to="item.to"
            >{{ item.title }}</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { title: "DcHeroes", to: "/dcHeroes" },
        { title: "Calendar", to: "/Calendar" },
        { title: "Markdown", to: "/Markdown" },
        { title: "Calculator", to: "/Calculator" },
        { title: "ReusableModal", to: "/ReusableModal" },
        { title: "CRUD App", to: "/UserCRUD" },
      ],
    };
  },
};
</script>
<style lang=""></style>
