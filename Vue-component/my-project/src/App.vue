<template>
  <div id="app">
    <SearchBox></SearchBox>
    <UpperContent></UpperContent>
    <ProductCard></ProductCard>
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard";
import SearchBox from "./components/SearchBox";
import UpperContent from "./components/UpperContent";
export default {
  name: 'App',
  components: {
    ProductCard,
    SearchBox,
    UpperContent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
