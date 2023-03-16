class ButtonCount extends HTMLElement {
  constructor() {
    super();
    let count = 0; //count variable for display

    // amke shadow root
    let shadow = this.attachShadow({ mode: 'open' });

    // make button and event listerner
    let button = document.createElement('button');
    button.addEventListener('click', () => {
      count++;
      button.innerText = `Times Clicked: ${count}`;
    });

    // set inner text with no clicks 
    button.innerText = `Times Clicked: ${count}`;

    // attach to shadow root
    shadow.appendChild(button);
  }
}

//define
customElements.define('button-count', ButtonCount);