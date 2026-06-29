<template>
  <div class="page-wrap">
    <div class="home-row">
      <div class="home-text">
        <h1>校园轻集市</h1>
        <p class="desc">把校园里的闲置、招领、拼单和委托，放进一个清爽的集市。</p>
        <p class="sub-desc">面向学生日常生活的轻量化信息平台，减少微信群刷屏，让信息可搜索、可管理、可追溯。</p>
        <div class="btn-group">
          <el-button type="primary" size="large" @click="$router.push('/publish')">我要发布</el-button>
          <el-button size="large" @click="$router.push('/list')">浏览全部</el-button>
        </div>
      </div>
      <div class="home-img">
        <img src="https://images.pexels.com/photos/152242/pexels-photo-152242.jpeg" alt="校园配图" />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.page-wrap {
  min-height: 65vh;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
}
.home-row {
  display: flex;
  gap: 50px;
  align-items: center;
}
.home-text {
  flex: 1;
}
.home-img {
  flex: 1;
}
.home-img img {
  width: 100%;
  border-radius: 12px;
}
h1 {
  font-size: 42px;
  color: #1d2129;
  margin: 0 0 20px;
}
.desc {
  font-size: 24px;
  color: #333;
  margin: 0 0 14px;
}
.sub-desc {
  color: #86909c;
  margin-bottom: 40px;
  font-size: 16px;
}
.btn-group {
  display: flex;
  gap: 20px;
}
</style>
