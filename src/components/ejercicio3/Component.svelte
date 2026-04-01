<script lang="ts">    
import { onMount } from 'svelte';
import type {Post} from '../../core/interfaces/ejercicio3.interface'
    let posts = $state<Post[]>([])
    let userId = $state<number>(0)

    onMount(async () => {

        console.log("onMount")

        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
        posts = await respuesta.json()

        console.log("posts: ", posts)
    }) 

    const filterPost = async (userId: number) => {
        if(userId === 0 || isNaN(userId)){
            alert("Please enter a valid userId")
            return;
         }
            const filteredPost  = posts 
            .filter(posts => posts.userId === userId)
            .map((posts) => {
                return{
                    id: posts.id,
                    title: posts.title
                }
            })
            if(filteredPost.length === 0){
                alert("No posts found for the given user ID")
                return;
            }else{
                console.log(`Se encontraron ${filteredPost.length} posts para el user ID ${userId}:`, filteredPost)
            }
    }


</script>  

    <div class="mb-2 p-2">
    <input class="border" bind:value={userId} type = "number" step="1" min="0">
    <button onclick={() => filterPost(userId)}>Filtrar Post</button>
    </div>

<table class="w-full"> 
    <thead class="bg-gray-400 text-black">
            <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
    </thead>
          
    <tbody class="bg-gray-200 flex-1">
        {#each posts as post}
            <tr class="p-1 hover:bg-gray-300">
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
        {/each} 
    </tbody>
</table>
