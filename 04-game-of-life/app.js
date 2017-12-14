Vue.component("livingCell", {
    props: ["cell"],
    computed: {
        parsed: function () {
            return parseCell(this.cell);
        },
        x: function () {
            return this.parsed[0];
        },
        y: function () {
            return this.parsed[1];
        },
        size: function () {
            return 10;
        }
    },
    render: function(h) {
        return h(
            "div",
            {
                style: {
                    position: 'absolute',
                    top: this.y * this.size + (window.innerHeight / 2),
                    left: this.x * this.size + (window.innerWidth / 2),
                    color: 'red',
                    'background-color': 'black',
                    width: this.size,
                    height: this.size
                },
                attrs: {
                }
            },
            [" "]
        );
    }
});


var app = new Vue({
  el: "#app",
  data: {
    cellsAlive: []
  },
  computed: {
  },
  render: function(h) {
    return h("div", [
        h(
            "transition-group",
            {
                props: {
                    "enter-active-class": "animated zoomIn",
                    "leave-active-class": "animated zoomOut"
                }
            },
            this.cellsAlive.map(cell => h('livingCell', {key: cell, props: {cell: cell}}))
        )
    ]);
  }
});

function update() {
    app.cellsAlive = nextGeneration(app.cellsAlive);
}

app.cellsAlive = getNeighbours('0,0');
setInterval(() => update(), 1000);
