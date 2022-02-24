import Keyboard from "../lib";
import "./css/BasicDemo.css";

const setDOM = () => {
  document.querySelector("body").innerHTML = `
    <input class="input" placeholder="Tap on the virtual keyboard to start" />
    <div class="simple-keyboard"></div>
  `;
};

class Demo {
  constructor() {
    setDOM();

    /**
     * Demo Start
     */
    this.keyboard = new Keyboard({
      onChange: (input) => this.onChange(input),
      onKeyPress: (button) => this.onKeyPress(button),
      layout: {
        default: [
          "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
          "{tab} q w e r t y u i o p [ ] \\",
          "{lock} a s d f g h j k l ; ' {enter}",
          "{shift} z x c v b n m , . / {shift}",
          ".com @ {space}"
        ],
        shift: [
          "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
          "{tab} Q W E R T Y U I O P { } |",
          '{lock} A S D F G H J K L : " {enter}',
          "{shift} Z X C V B N M < > ? {shift}",
          ".com @ {space}"
        ]
      },
      display: {
        a: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/A.png?raw=true" width="30" height ="30" />`,
        b: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/B.png?raw=true" width="30" height ="30" />`,
        c: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/C.png?raw=true" width="30" height ="30" />`,
        d: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/D.png?raw=true" width="30" height ="30" />`,
        e: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/E.png?raw=true" width="30" height ="30" />`,
        f: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/F.png?raw=true" width="30" height ="30" />`,
        g: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/G.png?raw=true" width="30" height ="30" />`,
        h: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/H.png?raw=true" width="30" height ="30" />`,
        i: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/I.png?raw=true" width="30" height ="30" />`,
        j: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/J.png?raw=true" width="30" height ="30" />`,
        k: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/K.png?raw=true" width="30" height ="30" />`,
        l: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/L.png?raw=true" width="30" height ="30" />`,
        m: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/M.png?raw=true" width="30" height ="30" />`,
        n: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/N.png?raw=true" width="30" height ="30" />`,
        o: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/O.png?raw=true" width="30" height ="30" />`,
        p: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/P.png?raw=true" width="30" height ="30" />`,
        q: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/Q.png?raw=true" width="30" height ="30" />`,
        r: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/R.png?raw=true" width="30" height ="30" />`,
        s: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/S.png?raw=true" width="30" height ="30" />`,
        t: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/T.png?raw=true" width="30" height ="30" />`,
        u: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/U.png?raw=true" width="30" height ="30" />`,
        v: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/V.png?raw=true" width="30" height ="30" />`,
        w: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/W.png?raw=true" width="30" height ="30" />`,
        x: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/X.png?raw=true" width="30" height ="30" />`,
        y: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/Y.png?raw=true" width="30" height ="30" />`,
        z: `<img src="https://github.com/antlam/simple-keyboard/blob/master/simple-keyboard/src/demo/images/Z.png?raw=true" width="30" height ="30" />`
      },
      mergeDisplay: true
    });

    /**
     * Update simple-keyboard when input is changed directly
     */
    document.querySelector(".input").addEventListener("input", event => {
      this.keyboard.setInput(event.target.value);
    });
  }

  onChange(input) {
    document.querySelector(".input").value = input;
    console.log("Input changed", input);
  }

  onKeyPress(button) {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  }

  handleShift() {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  }
}

export default Demo;