import React, { useRef, useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import './index.scss'

let BlockEmbed = Quill.import('blots/embed')

class ImageBlot extends BlockEmbed {
  static create({ text }) {
    let node = super.create()
    node.innerText = `${text} `
    node.style = 'color: red'
    return node
  }

  // static value(node) {
  //   return {
  //     alt: node.getAttribute('alt'),
  //     url: node.getAttribute('src'),
  //   }
  // }
}
ImageBlot.blotName = '@'
ImageBlot.tagName = 'span'

Quill.register(ImageBlot)

const Editor = () => {
  const editorRef = useRef(null)

  useEffect(() => {
    const quill = (editorRef.current = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: {
          container: '#toolbar',
        },
      },
    }))

    quill.on('editor-change', (...args) => {
      console.log('editorchange', args)
    })
  }, [])

  function insertStuff(e) {
    const editor = editorRef.current
    e.preventDefault()
    const idx = editor.getSelection().index
    editor.insertEmbed(idx, '@', { text: '@aaa@' })
    editor.setSelection(idx + 6)

    console.log('content -->', editor.getContents(), editor.root.innerHTML)
  }

  return (
    <>
      <div id="editor"></div>
      <div id="toolbar">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-insert" onMouseDown={insertStuff}>
          insert
        </button>
      </div>
    </>
  )
}

export default Editor
