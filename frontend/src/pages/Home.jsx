import { useEffect, useState } from 'react';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog4 from '../assets/blog4.jpg';
import blog5 from '../assets/blog5.jpg';
import blog6 from '../assets/blog6.jpg';
import { MoveUpRight } from 'lucide-react';
import { useNavigate } from 'react-router';

const images= [blog1, blog2, blog3, blog4, blog5, blog6];

const Home=()=>{
    const [posts, setPosts]= useState([]);
    const [loading, setLoading]= useState(false);
    const navigate= useNavigate();

    useEffect(()=>{
        const fetchPosts= async()=>{
            try{
                const response= await fetch('https://dummyjson.com/posts');
                const data= await response.json();
                setPosts(data.posts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="mb-10 flex items-center justify-center flex-col gap-4 text-center">
                    <h4 className="text-lg font-semibold text-indigo-600">Our Blog</h4>
                    <h1 className="text-4xl font-bold text-gray-900">Stories and Interviews</h1>
                    <p className="mt-2 text-gray-500">Subscribe to learn about new product features, the latest in technology, solutions and updates.</p>
                    <div className="mt-2 flex items-center justify-center gap-4">
                        <input type="email" placeholder="Enter your email" className="w-full max-w-md border rounded-lg border-slate-300 py-3 text-sm focus:border-slate-600 placeholder:text-slate-500 mb-8" />
                    <button className="relative bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 transition rounded-md">Subscribe</button>
                    </div>
                    <p className="mt-0 text-sm text-gray-500">We care about your data in our <span className="underline">privacy policy</span>.</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-8">All Blog Posts</h2>

                {loading ? (
                    <div className='py-20 text-center'>
                        <p className='text-gray-500'>Loading...</p>
                    </div>
                ) : (
                    <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                        {posts.map((post, index)=>(
                            <article key={post.id} className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:shadow-lg">
                                <img src={images[index % images.length]} alt={post.title} className='h-52 w-full object-cover' />
                                <div className='p-6'>
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        {post.tags?.map((tag)=>(
                                            <span key={tag} className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900">{post.title}</h2>
                                    <p className="line-clamp-3 text-sm leading-6 text-gray-500">{post.body}</p>
                                    <button onClick={()=>navigate(`/posts/${post.id}`)} className="mt-5 font-medium text-blue-600 hover:text-blue-800"><MoveUpRight /></button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}

export default Home;