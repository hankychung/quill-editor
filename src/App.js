// import ReactQuill, { Quill } from 'react-quill'
// import 'react-quill/dist/quill.snow.css'
// import './App.css'
import React from 'react'
import Editor from './editor'
// const Inline = Quill.import('blots/inline')

// const CustomButton = () => <span>insert</span>

// class LinkBlot extends Inline {
//   static create(url) {
//     console.log('ur;', url)
//     let node = super.create()
//     node.innerText = 'aa'
//     node.href = 'aa'
//     node.setAttribute('contenteditable', false)
//     return node
//   }

//   static formats(node) {
//     return node.getAttribute('href')
//   }
// }
// LinkBlot.blotName = 'link'
// LinkBlot.tagName = 'a'

// Quill.register(LinkBlot)

// function insertStar() {
//   console.log('insert', this.quill.getSelection().index)
//   const cursorPosition = this.quill.getSelection().index

//   this.quill.insertEmbed(
//     cursorPosition,
//     'link',
//     { href: 'url', innerText: 'file.name' },
//     Quill.sources.USER
//   )
//   this.quill.setSelection(cursorPosition + 2)

//   this.quill.insertText(this.quill.getSelection().index, ' ~s')
// }

// const CustomToolbar = () => (
//   <div id="toolbar">
//     <select
//       className="ql-header"
//       defaultValue={''}
//       onChange={(e) => e.persist()}
//     >
//       <option value="1"></option>
//       <option value="2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-bold"></button>
//     <button className="ql-italic"></button>
//     <select className="ql-color">
//       <option value="red"></option>
//       <option value="green"></option>
//       <option value="blue"></option>
//       <option value="orange"></option>
//       <option value="violet"></option>
//       <option value="#d0d1d2"></option>
//       <option selected></option>
//     </select>
//     <button className="ql-insertStar">
//       <CustomButton />
//     </button>
//   </div>
// )

// const Editor = () => {
//   function handleChange(e) {
//     console.log(e)
//   }
//   return (
//     <>
//       <CustomToolbar />
//       <ReactQuill
//         modules={Editor.modules}
//         formats={Editor.formats}
//         onChange={handleChange}
//       />
//     </>
//   )
// }

// Editor.modules = {
//   toolbar: {
//     container: '#toolbar',
//     handlers: {
//       insertStar: insertStar,
//     },
//   },
// }

// /*
//  * Quill editor formats
//  * See http://quilljs.com/docs/formats/
//  */
// Editor.formats = [
//   'header',
//   'font',
//   'size',
//   'bold',
//   'italic',
//   'underline',
//   'strike',
//   'blockquote',
//   'list',
//   'bullet',
//   'indent',
//   'link',
//   'image',
//   'color',
// ]

function App() {
  return <Editor />
}

export default App
