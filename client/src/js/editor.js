// client/src/js/editor.js
import { getDb, putDb } from "./database";
import { header } from "./header";
import CodeMirror from "codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/monokai.css";
import "codemirror/lib/codemirror.css";

export default class {
    constructor() {
        const localData = localStorage.getItem("content");

        // Initialize CodeMirror editor
        this.editor = CodeMirror(document.querySelector("#main"), {
            value: "",
            mode: "javascript",
            theme: "monokai",
            lineNumbers: true,
            lineWrapping: true,
            autofocus: true,
            indentUnit: 2,
            tabSize: 2,
        });

        // Load content from IndexedDB when the editor is ready
        getDb().then((data) => {
            console.info("Loaded data from IndexedDB, injecting into editor");
            this.editor.setValue(data || localData || header);
        });

        this.editor.on("change", () => {
            localStorage.setItem("content", this.editor.getValue());
        });

        // Save the content of the editor when it loses focus
        this.editor.on("blur", () => {
            console.log("The editor has lost focus");
            putDb(this.editor.getValue());
        });
    }
}
