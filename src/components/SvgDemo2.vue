<template>
  <div>
    <div id="wrapper" ref="wrapper"></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { SVG, Rect as SVGRect, Text as SVGText, Path as SVGPath } from '@svgdotjs/svg.js'

export default defineComponent({
  name: 'SvgDemo2',
  setup() {
    const wrapper = ref()

    function genCanvas() {
      const width = 800
      const height = 600

      const canvas = SVG()
      canvas.addTo(wrapper.value)
      canvas.size(width, height)
      canvas.viewbox(0, 0, width, height)

      const bg = new SVGRect()
      bg.size(width, height)
      bg.fill('#000')
      bg.addTo(canvas)

      const groupText = canvas.group()

      const curvedTitlePath = new SVGPath().attr('d', 'M100,100 A100,100 0 1,1 400,100').fill('none').move(260, 240)
      groupText.add(curvedTitlePath)
      const curvedSloganPath = new SVGPath().attr('d', 'M100,100 A100,40 0 1,1 400,100').fill('none').move(260, 320)
      groupText.add(curvedSloganPath)

      const title = new SVGText()
      title.text('千变万化')
      title.path(curvedTitlePath)
      title.attr({
        x: 0,
        y: 0
      })
      title.font({
        family: 'CustomFont2',
        size: 120,
        fill: '#fff',
        anchor: 'middle'
      })
      title.textPath().attr({
        startOffset: '45%',
        'letter-spacing': '-40px'
      })
      groupText.add(title)

      const slogan = new SVGText()
      slogan.text('-EVER-CHANGING-')
      slogan.path(curvedSloganPath)
      slogan.attr({
        x: 0,
        y: 50
      })
      slogan.font({
        size: 30,
        fill: '#fff',
        anchor: 'middle'
      })
      slogan.textPath().attr({
        startOffset: '50%'
      })
      groupText.add(slogan)

      const groupAll = canvas.group()
      groupText.addTo(groupAll)

      groupAll.addTo(canvas)
      groupAll.move(160, 160)

      // const str = canvas.svg();
      // console.log(str);
    }

    onMounted(() => {
      genCanvas()
    })

    return {
      wrapper
    }
  }
})
</script>

<style scoped>
#wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
