class F8 extends HTMLElement {
  static components = {};

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  addEventListeners() {
    const buttons = this.shadowRoot.querySelectorAll("button");
    buttons.forEach((button) => {
      if (button.hasAttribute("v-on:click")) {
        button.addEventListener("click", () => {
          const method = button.getAttribute("v-on:click");
          this.executeMethod(method);
          this.updateTextNodes();
        });
      }
      if (button.hasAttribute("v-on:dblclick")) {
        button.addEventListener("dblclick", () => {
          const method = button.getAttribute("v-on:dblclick");
          this.executeMethod(method);
          this.updateTextNodes();
        });
      }
    });
  }

  executeMethod(methodName) {
    if (this.events && typeof this.events[methodName] === "function") {
      this.events[methodName].call(this);
    }
  }

  updateTextNodes() {
    this.render();
  }

  updateTemplate(template, data) {
    const regex = /{{(.+?)}}/g;
    return template.replace(regex, (_, key) => {
      return key.split(".").reduce((obj, key) => obj[key], data);
    });
  }

  render() {
    const name = this.tagName.toLowerCase();
    const component = F8.components[name];
    if (component) {
      this.shadowRoot.innerHTML = this.updateTemplate(
        component.template,
        this.state
      );
      this.addEventListeners();
    }
  }

  static component(name, options) {
    F8.components[name] = options;
    customElements.define(
      name,
      class extends F8 {
        constructor() {
          super();
          this.state = options.data ? options.data() : {};
          this.events = options.events || {};
        }

        render() {
          super.render();
        }
      }
    );
  }
}

F8.component("counter-app", {
  data: () => ({
    count: 0,
    title: "Counter App",
  }),
  template: `<h1>{{title}}</h1>
    <h2>Đã Đếm : {{count}} lần</h2>
    <button v-on:click="decrement">-</button>
    <button v-on:click="increment">+</button>
    <button v-on:click="changeTitle">Changer</button>`,
  events: {
    increment() {
      this.state.count++;
      this.render();
    },
    decrement() {
      this.state.count--;
      this.render();
    },
    changeTitle() {
      this.state.title = "Xin chào AE F8";
      this.render();
    },
  },
});

F8.component("header-component", {
  template: `<h1>HEADER</h1>`,
});
