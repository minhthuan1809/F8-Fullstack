var F8 = {
  create: function (name, callback) {
    class Component extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({
          mode: "open",
        });
        this.attributeCallback = {
          "v-length": "applyLengthAttributeLength",
        };
        this.data = {};
      }

      connectedCallback() {
        this.shadowRoot.innerHTML = callback.call(this.shadowRoot);
        this.applyLengthAttribute(this.shadowRoot);
      }

      applyLengthAttribute(parentEl) {
        var elementList = parentEl.children;
        if (elementList.length) {
          Array.from(elementList).forEach((element) => {
            const attributeList = element.attributes;
            for (let i = 0; i < attributeList.length; i++) {
              var attributeName = attributeList[i].name;
              var attributeValue = attributeList[i].value;
              if (attributeName === "v-data") {
                var dataObject = new Function(
                  `return ${attributeValue}`
                ).call();
                if (
                  typeof dataObject === "object" &&
                  !Array.isArray(dataObject) &&
                  dataObject !== null
                ) {
                  Object.assign(this.data, dataObject);
                }
              }
              if (attributeName === "v-text" && attributeValue) {
                element.innerText = this.data[attributeValue] ?? "";
              }
              if (attributeName.startsWith("v-on:")) {
                const eventName = attributeName.replace("v-on:", "");
                element.addEventListener(eventName, (e) => {
                  var func = new Function("event", attributeValue);
                  func.call(this, e);
                  this.updateTextBindings();
                });
              } else {
                var callbackName = this.attributeCallback[attributeName];
                if (callbackName) {
                  this[callbackName](element, attributeValue);
                }
              }
            }
            // đệ quy
            if (element.children.length) {
              this.applyLengthAttribute(element);
            }
          });
        }
      }

      updateTextBindings() {
        const elementsWithTextBinding =
          this.shadowRoot.querySelectorAll("[v-text]");
        elementsWithTextBinding.forEach((element) => {
          const attributeValue = element.getAttribute("v-text");
          element.innerText = this.data[attributeValue] ?? "";
        });
      }

      applyLengthAttributeLength(element, value) {
        var nextElement = element.nextSibling;
        var parentEl = element.parentNode;
        for (let y = 0; y < value; y++) {
          var newElement = element.cloneNode(true);
          if (!nextElement) {
            parentEl.append(newElement);
          } else {
            parentEl.insertBefore(newElement, nextElement);
          }
        }
        element.remove();
      }
    }
    customElements.define(name, Component);
  },
};

F8.create("hello-world", function () {
  return `
        <div v-data="{count: 0, title: 'hoc js'}">
          <button v-on:click="this.data.count++">click me</button>
          <h1>Hello World <span v-text="count   "></span></h1>
          <span v-text="title"></span>  <br>
          <b>chào các bạn</b>
          <h1 v-length="5">F8</h1>
          <h1 v-length="20">F9</h1>
        </div>
      `;
});

document.body.innerHTML = `<hello-world></hello-world>`;
