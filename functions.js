var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.image1',
    triggerHook: 0.6
})
.setClassToggle('.image1', 'image1In')
.addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '.image2',
    triggerHook: 0.6
})
.setClassToggle('.image2', 'image2In')
.addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '.image3',
    triggerHook: 0.6
})
.setClassToggle('.image3', 'image3In')
.addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '.image4',
    triggerHook: 0.6
})
.setClassToggle('.image4', 'image4In')
.addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '.image5',
    triggerHook: 0.6
})
.setClassToggle('.image5', 'image5In')
.addTo(controller)



var scene = new ScrollMagic.Scene({
    triggerElement: '.text1',
    triggerHook: 0.4
})
.setClassToggle('.nav-top', 'nav-top-side')
.addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement: '.footer',
    triggerHook: 0.9
})
.setClassToggle('.nav-top', 'nav-top-stop')
.addTo(controller)


var scene = new ScrollMagic.Scene({
    triggerElement: '.footer',
    triggerHook: 0.7
})
.setClassToggle('.nav-top', 'nav-top-stop2')
.addTo(controller)