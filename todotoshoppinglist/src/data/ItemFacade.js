const URL = "http://localhost:4000/items/";
const myHeader = new Headers({ "Content-Type": "application/json" });
class ItemFacade {

    getAllItems = () => {
        fetch(URL,
            {
                method: "GET",
                headers: myHeader
            })
            .then(res => res.json())
            .then(data => {
                if (this.handler) {
                    this.handler(data);
                }
            });
    }

    addItem = (item, cb) => {
        fetch(URL,
            {
                method: "POST",
                headers: myHeader,
                body: JSON.stringify(item)
            })
            .then(res => res.json())
            .then(data => {
                if (cb) {
                    cb(data);
                }
            });
    }

    removeItem = (item, cb) => {
        fetch(URL + item.id,
            {
                method: "DELETE",
                headers: myHeader
            })
            .then(res => res.json())
            .then(data => {
                //returns an empty object...
                if(cb){
                    cb();
                }
                
            });
    }

    setObserver = handler => {
        this.handler = handler;
    }

}
export default new ItemFacade();