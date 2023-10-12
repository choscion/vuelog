<template>
  <div>
    <h5>{{blogCont[0].title}}</h5>
    <p>{{blogCont[0].date}}</p>
  </div>
  <div>
    <h5>{{blogCont[1].title}}</h5>
    <p>{{blogCont[1].date}}</p>
  </div>
  <div>
    <h5>{{blogCont[2].title}}</h5>
    <p>{{blogCont[2].date}}</p>
  </div>
</template>

<script>
export default {
  name: 'ListWrap',
  props: {
    blogCont: Array,
  }
}
</script>

<style>

</style>