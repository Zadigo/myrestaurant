import { onMounted, onUnmounted, ref } from 'vue'

function useEventListener(target, event, callback) {
    onMounted(() => target.addEventListener(event, callback))
    onUnmounted(() => target.addEventListener(event, callback))
}

function useVerticalScrollPercentage() {
    const el = ref('el')
    const parent = el.parentNode
    var scrollPercentage = ref(0)

    useEventListener(el, '', () => {
        scrollPercentage.value = (el.scrollTop || parent.scrollTop) / (parent.scrollHeight - parent.clientHeight) * 100
    })

    return {
        scrollPercentage
    }
}

export {
    useVerticalScrollPercentage
}
