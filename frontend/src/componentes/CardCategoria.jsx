export function CardCategoria({categoria}){
    return(
        <div class="cursor-pointer">
            <div class="w-full flex justify-center">
                <div class="w-[110px] h-[110px] rounded-full bg-slate-400 duration-400 hover:bg-slate-300 items-center  flex justify-center mb-2.5">
                    <img src={categoria.url} alt={categoria.name} class="w-[60%]" />
                </div>
            </div> 
            <div class="w-full uppercase font-medium flex justify-center">{categoria.name}</div>
        </div>
    )
}