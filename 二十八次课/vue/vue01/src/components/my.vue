<template>
  <div class="wapper">
    <div id="name">江西软件大学</div>
    <div id="content">江西软件大学简历</div>
    <div v-for="index in lists" :key="index">
      {{ index.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [{ name: "张三" }, { name: "李四" }],
      information: null
    }
  }
}
</script>
<style  scoped lang="less" rel="stylesheet/less">
#wapper {
  background-color: red;
  #name {
    background-color: orange;
  }
}
</style>