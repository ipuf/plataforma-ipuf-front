export function draggable (node) {
  let x
  let y
  let dragging = false

  function handleClick (e) {
    x = e.clientX
    y = e.clientY

    node.dispatchEvent(new CustomEvent('toggledrag', {
      detail: { x, y }
    }))

    if (!dragging) {
      window.addEventListener('mousemove', handleMousemove)
      dragging = true
    } else {
      window.removeEventListener('mousemove', handleMousemove)
      dragging = false
    }
  }

  function handleMousemove (e) {
    const dx = e.clientX - x
    const dy = e.clientY - y
    x = e.clientX
    y = e.clientY

    node.dispatchEvent(new CustomEvent('drag', {
      detail: { x, y, dx, dy }
    }))
  }

  node.addEventListener('click', handleClick)

  return {
    destroy () {
      node.removeEventListener('click', handleClick)
    }
  }
}
