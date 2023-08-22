<template>
  <div>
    <div id="wrapper" ref="wrapper"></div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { SVG, Rect as SVGRect, Text as SVGText } from '@svgdotjs/svg.js'

export default defineComponent({
  name: 'SvgDemo',
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
      bg.fill('#e3dbcb')
      bg.addTo(canvas)


      const groupLogo = canvas.group()

      const logo = new SVG().svg('<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 93.6 61.1\"><path d=\"M75.7 30.6c0 3.5-2.8 6.3-6.3 6.3-5 0-10.3-6.3-10.3-6.3m16.6 0c0-3.5-2.8-6.3-6.3-6.3-5 0-10.3 6.3-10.3 6.3m-24.6 0s-5.2-6.3-10.3-6.3c-3.5 0-6.3 2.8-6.3 6.3m0 0c0 3.5 2.8 6.3 6.3 6.3 5 0 10.3-6.3 10.3-6.3m24.6 0L30.6 2 2 30.6l28.6 28.6 28.5-28.6zm32.5 0L63 2 34.5 30.6 63 59.1l28.6-28.5z\" fill=\"none\" stroke=\"#333\" stroke-width=\"4\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"/></svg>')
      logo.size(140, 140)
      logo.find('path').each(function() {
        const logoThis = this
        logoThis.stroke({ color: '#9f704f' })
      })
      
      groupLogo.add(logo)
      groupLogo.move(0, 0)

      const groupText = canvas.group()

      const title = new SVGText()
      title.text('千变万化')
      title.attr({
        x: 0,
        y: 0
      })
      title.font({
        family: 'CustomFont1',
        size: 100,
        fill: '#9f704f',
        anchor: 'middle'
      })
      groupText.add(title)

      const slogan = new SVGText()
      slogan.text('EVER-CHANGING')
      slogan.attr({
        x: 0,
        y: 50
      })
      slogan.font({
        size: 30,
        fill: '#23334b',
        anchor: 'middle'
      })
      groupText.add(slogan)

      groupText.move(160, 0)

      const groupAll = canvas.group()

      groupLogo.addTo(groupAll)
      groupText.addTo(groupAll)

      groupAll.addTo(canvas)
      groupAll.move(100, 200)

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
