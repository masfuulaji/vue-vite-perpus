<template>
  <div class="search-container">
    <input class="input-search" type="text" placeholder="What are you looking for?" />
    <button class="button-search">
      <i>Find</i>
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.search-container {
  background-color: rgb(133, 143, 139);
  padding: 15px;
  border-radius: 10px;
}
.input-search {
  width: 90%;
  height: 35px;
  border-radius: 10px;
  font-size: 15px;
}
.button-search {
  padding: 10px;
  border-radius: 10px;
  margin-left: 10px;
  background-color: #fff;
}
</style>