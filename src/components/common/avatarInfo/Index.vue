<template>
  <div class="header">
    <div class="info">
      <div class="img">
        <img src="" alt="" />
      </div>
      <div class="info">
        <span>姓名：</span>
        <span>{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 150px;
  .info{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
}
</style>