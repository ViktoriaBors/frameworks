console.log("hello vue")

const app = Vue.createApp({
    data(){
        return {
            url: "http://www.thenetninja.co.uk",
            showBooks: true,
            books: [
                {title:"wind",
                 author: "Patrick P",
                 img:"assets/1.jpg",
                 isFav: true,
                },
                {title:"wind 2",
                author: "Patrick P 2",
                img:"assets/2.jpg",
                isFav: false,
               },
               {title:"wind 3",
               author: "Patrick P 3",
               img:"assets/3.jpg",
               isFav: true,
              },
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            console.log("toggle")
            this.showBooks = !this.showBooks
        },
        toggleFav(book){ // no need for this.book.isFav, because book is an argument
            console.log(book.isFav)
            book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav == true)
        }
    }
})

app.mount("#app")