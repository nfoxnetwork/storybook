<template>
  <div>
    <h1>Vue.js &amp; Storybook example</h1>
    <div>
      <my-button text="Button" />
    </div>
    <div>
      <my-button text="Primary" kind="primary" />
      <my-button text="Default" kind="default" />
      <my-button text="Success" kind="success" />
      <my-button text="Info" kind="info" />
      <my-button text="Warning" kind="warning" />
      <my-button text="Danger" kind="danger" />
      <my-button text="Dark" kind="dark" />
    </div>
    <div>
      <my-button text="Minimum" size="minimum" />
      <my-button text="Small" size="small" />
      <my-button text="Normal" size="normal" />
      <my-button text="Large" size="large" />
    </div>
  </div>
</template>

<script>
import MyButton from './components/Button'

export default {
  name: 'App',
  components: {
    MyButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
