<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="module" src="https://cdn.jsdelivr.net/gh/zerodevx/zero-md@2/dist/zero-md.min.js"></script>
    <script type="module" src="https://md-block.verou.me/md-block.js"></script>
    <link rel="stylesheet" href="custom.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <script src="global.js"></script>
    <script>
        window.ZeroMdConfig = {
            cssUrls: ['https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@4/github-markdown.min.css',
                'https://cdn.jsdelivr.net/gh/PrismJS/prism@1/themes/prism.min.css', "custom.css"]
        } -->
<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
export default {
  components: {
    MarkdownItVue
  },
  data() {
    return {
      content: '# your markdown content'
    }
  }
}
</script>

<template>
  <!-- <div id="window">
    <div id="projectbuttons" class="tabcontent" style="margin-top: -1%">
      <div class="projectbutton" onclick="viewpage('customAPI')">
        <h2 class="projectbuttontitle">Custom API</h2>
        <p class="projectbuttondesc">Lorem impsum</p>
      </div>
      <div class="projectbutton" onclick="viewpage('responsiveness')">
        <h2 class="projectbuttontitle">Responsiveness</h2>
        <p class="projectbuttondesc">Basic Bootstrap</p>
      </div>
      <div class="projectbutton" onclick="viewpage('makeupAPI')">
        <h2 class="projectbuttontitle">Makeup API</h2>
        <p class="projectbuttondesc">An experiment in dynamic elements</p>
      </div>
      <div class="projectbutton" onclick="viewpage('weatherAPI')">
        <h2 class="projectbuttontitle">Weather API</h2>
        <p class="projectbuttondesc">My first project with APIs.</p>
      </div>
    </div>
    <zero-md class="tabcontent markdownpg" id="viewmarkdown"></zero-md>
  </div> -->

  <!-- <div v-html="markdown.render('../assets/makeupAPI.md')"></div> -->
  <div class="page-content">
    <div>TEST</div>

    <markdown-it-vue :content="content" />
    <!-- <MarkdownRenderer :source="'# Hi!!'" /> -->
  </div>
</template>

<style>
.page-content {
  float: right;
  background-color: blue;
}

.projectbutton {
  padding-top: 1px;
  padding-bottom: 1px;
  width: 75.75vw;
  margin-top: 1%;
  margin-bottom: 1%;
  position: relative;
  background-color: var(--color-obj-bg);
  border-radius: 10px;
  font-family: sans-serif;
  font-size: 30px;
}

.projectbutton:hover {
  cursor: pointer;
}

.projectbutton:hover > .projectbuttontitle {
  color: var(--color-title-hover);
}

.projectbutton:hover > .projectbuttondesc {
  color: var(--color-title-hover);
}

.projectbuttontitle {
  margin-left: 3%;
  margin-top: 3%;
  margin-bottom: -2%;
  font-size: 0.85em;
  color: var(--color-title-text);
}
</style>
