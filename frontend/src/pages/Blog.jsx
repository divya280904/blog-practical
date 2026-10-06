import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';
import { ThumbsDown, ThumbsUp } from "lucide-react";

const images= [blog1, blog2, blog3, blog4, blog5, blog6];

const Blog=()=>{
    const { id }= useParams();
    const [post, setPost]= useState(null);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((response)=>response.json())
            .then((data)=>setPost(data))
            .catch((error)=>console.error("Error fetching post:", error))
            .finally(()=>setLoading(false));
    }, [id]);

    if(loading){
        return (
            <div className='py-20 text-center'>
                <p className='text-gray-500'>Loading...</p>
            </div>
        );
    }

    if (!post) {
        return(
            <div className="py-20 text-center">
                <p className="text-gray-500">Post not found.</p>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-white">
            <div className= "mx-auto max-w-6xl px-6 py-10">
                <Link to="/home" className="text-indigo-600 text-sm font-medium hover:text-indigo-700 mb-4 inline-block">Back to Home</Link>
                <h1 className="text-center mb-8 text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">{post.title}</h1>

                <img src={images[(post.id-1) % images.length]} alt={post.title} className= "mb-10 h-[300px] w-full object-cover md:h-[500px]" />
                <div className="mx-auto max-w-4xl">
                    <div className="mb-6 flex flex-wrap gap-2">
                        {post.tags?.map((tag)=>(
                            <span key={tag} className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-lg leading-8 text-gray-700">{post.body}{" "} Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rem? Veritatis nesciunt numquam dolores aspernatur accusamus quae, ipsa consequuntur quas quia praesentium eius cupiditate animi natus illo minus eum culpa quos nisi? Doloremque maiores, cum facere excepturi quaerat laborum vel tenetur necessitatibus, in fugit sunt dolor debitis. Numquam id, neque distinctio quas quia aliquid, magni vel obcaecati optio sit labore magnam. Officiis cum ipsam debitis voluptatem adipisci laborum maxime repellat odio dolores, asperiores excepturi possimus omnis voluptas in accusamus sapiente delectus nulla suscipit deserunt ipsum cumque! Omnis eaque quasi ipsam numquam commodi quos? Nisi saepe, odit laboriosam voluptates doloribus reiciendis eum eaque ratione eius, quibusdam quo reprehenderit cum omnis natus tempora, quasi rem cupiditate. Velit debitis obcaecati dolor ipsa ipsam voluptates saepe optio tenetur beatae quidem accusantium harum, aspernatur, magnam tempora veniam ab iure aliquid animi quaerat sit ex eligendi in recusandae! Voluptatem distinctio, similique porro omnis repellendus quaerat eum voluptate? Aperiam, odit deleniti quod, recusandae error similique amet hic natus architecto magni neque ipsum voluptates nobis asperiores necessitatibus? Quod corrupti molestiae odit sequi consectetur? Similique nobis tempore quia neque veritatis vitae quaerat quisquam vero excepturi corporis eligendi suscipit consequuntur, dignissimos maxime ipsa quasi iste aspernatur itaque reiciendis possimus porro nemo. Velit deleniti, doloribus quisquam sed sapiente consequatur voluptatum est in, assumenda obcaecati quos molestiae recusandae animi. Sequi, eius! Magnam quod cupiditate hic, et accusantium dolor temporibus est consequatur sed, debitis culpa dolorem suscipit at rem mollitia qui autem quibusdam quas tempora impedit officia non! Incidunt, aspernatur accusantium natus minus dolor deleniti est quis consectetur et, quaerat, quo aliquid. Praesentium est in deleniti iure, nisi omnis sit debitis dolores nesciunt facere magni, quas optio, quia modi veritatis! Neque eius ipsa quo placeat quidem delectus doloribus dignissimos natus adipisci praesentium. Commodi earum deserunt numquam rem et ducimus blanditiis ullam expedita inventore. Numquam porro ducimus eos? Maiores, itaque. Debitis pariatur quisquam amet. Consequuntur adipisci doloribus consectetur nihil, praesentium temporibus voluptas officia at repellendus molestias delectus atque in exercitationem, obcaecati veritatis quod voluptatem repudiandae soluta, tenetur assumenda quibusdam labore fugiat illo. Adipisci sunt voluptatibus atque vitae quod ducimus reiciendis, quas perferendis nulla dolorem quaerat, id quo maiores quisquam eum libero amet ex necessitatibus neque rerum possimus? Praesentium repudiandae voluptas quasi labore quo neque dolorem sunt aspernatur optio vero blanditiis iure porro provident sit tempore deleniti, vitae ea nisi reprehenderit rem. Totam, ad at praesentium quam vitae, illum, voluptatem necessitatibus nesciunt recusandae minus quaerat. Beatae necessitatibus pariatur architecto animi id tempora fugit voluptatibus nisi incidunt! Suscipit placeat commodi excepturi quisquam ab illo architecto, ipsum quibusdam officia debitis perferendis provident earum consequatur dolore. Veritatis ipsa expedita itaque delectus magni in. Porro soluta enim voluptatibus quisquam adipisci officiis ea eos vitae laboriosam maxime suscipit, iure qui reiciendis esse iusto dolorum commodi nesciunt.</p>

                        <div className="mt-8 flex gap-6 border-t pt-6 text-sm text-gray-500">
                            <span><ThumbsUp /> {post.reactions?.likes || 0}</span>
                            <span><ThumbsDown /> {post.reactions?.dislikes || 0}</span>
                        </div>
                </div>
            </div>
        </main>
    )
}

export default Blog;