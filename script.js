const app = new Vue({
  el: "#app",
  data: {
    buscar: null,
    autores: null,
    historias: [],
  },

  mounted() {
    //    async function obtHist(){
    //        const hist = await fetch('./historias.json');
    //        const datos = await hist.json();
    //        console.log(datos)
    //       this.historias=datos

    //    }
    //    obtHist()
    axios.get("historias.json").then((respuesta) => {
      this.historias = respuesta.data.sort((a, b) =>
        a.autor.localeCompare(b.autor)
      );
      this.autores = this.historias.map(item => item.autor)
    .filter((value, index, self) => self.indexOf(value) === index)
    })
    },
    methods: {
        filtrarPorAutor(escritor) {
            return this.historias.filter((item) => item.autor.includes(escritor));
          },
    },
    computed: {
        filtrarPorTexto() {
        return this.historias.filter((item) => item.texto.includes(this.buscar));
        },
    
  
  },
})
