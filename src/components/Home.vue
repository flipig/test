<template>
  <div>
  <div class="hello">
    <h1>hello</h1>
    <el-button type="primary">hello</el-button>
    <el-button type="info">hello</el-button>
    <el-button type="success">hello</el-button>
    <el-button type="danger">hello</el-button>
    <el-button>hello</el-button>
  </div>
  <div class="hello1">
    <el-tag>tell</el-tag>
    <i class="fa fa-user"></i>
  </div>
  <div>
    <i class="fa fa-user" aria-hidden="true">dd</i>
    <i class="fa fa-window-restore">dd2</i>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
  background:rgb(81, 143, 172);
  .el-button {
    color: rgb(196, 19, 19);
  }
}


</style>
