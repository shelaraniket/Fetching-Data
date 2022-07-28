

class Posts {
    hundredPosts = [];
    container;
    constructor() {
      this.container = document.getElementById('postlist');
      console.log(this.ul)
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(data => data.json())
        .then(data => {
          console.log(data);
          this.hundredPosts = data;
          this.constructHTML();
        })
        .catch(err => console.error(err));
    }
   
    constructHTML() {
      console.log(this.hundredPosts);
      const posts = this.hundredPosts.map((post) => {
        return `

                <div class="col-lg-4 col-md-6 col-sm-12 rounded-5 ">

                    <div class="card bg-warning bg-gradient  rounded-5 shadow-sm p-3 mb-5 bg-body rounded" style="width: 18rem;">

                        <img src="${post.thumbnailUrl}"}>

                        <div class="card-body">
                            <h5 class="card-title title fst-italic text-danger">${post.title}</h5>
                        </div>

                    </div>

                </div>

    
        `;
      }).join('');
      this.container.innerHTML = posts;
    }
   
  }
   
  const p = new Posts();