function(properties, context) {
        
    function setProps(target) {
        target.dataset.aos = properties.animation;
        target.dataset.aosEasing = properties.easing;
        target.dataset.aosAnchorPlacement = properties.anchor;
        target.dataset.aosDuration = properties.duration;
        target.dataset.aosOnce = properties.once;
        target.dataset.aosMirror = properties.mirror;
        target.dataset.aosOffset = properties.offset;
        target.dataset.aosDelay = properties.delay;
        
        // remove opacity default property
        if (target.style.opacity) {
        	target.style.removeProperty('opacity');
        }
    }
        
    var selectors = properties.selectors.trim().split(/\s*,\s*/);
    
    selectors.forEach((selector) => {
        var target = document.querySelector('#' + selector);
        if (target) {
            if (properties.repeating && target.classList.contains('RepeatingGroup')) {
                target.style.overflow = 'visible';
                // Where repeating is enabled and target is a repeating group
                for (const child of target.children) {
                    setProps(child);
                }
            } else {
            	setProps(target);
            }
        }
    })
        
    AOS.refreshHard();
    
}