<template>
  <div class="detail_area">
    <h3>상세페이지</h3>
    <h5>{{blogCont[$route.params.id].title}}</h5>
    <p>{{blogCont[$route.params.id].content}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // name : 'detailWrap',
  props: {
    blogCont: Array,
  },
}
</script>

<style>

</style>