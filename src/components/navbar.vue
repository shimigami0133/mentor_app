<template>
    <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Mentor_App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
      <div class="navbar-nav ">
      </div>
    </div>
    
  </div>
</nav>
    </div>
</template>

<script>
export default {
    name:"navbar",
    data()
    {
        return {}
    }
}
</script>

<style  scoped>
.navbar-nav
{
    justify-content:end
}
</style>