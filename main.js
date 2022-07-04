const app = new Vue(
    {
        el: '#root',
        data: {
            message: "",
            imageUrl: "",
            imageUrlImput: "",
        }, 
        methods: {
            updateImageUrl(){
                this.imageUrl = this.imageUrlImput;
            }
        }
    }
)