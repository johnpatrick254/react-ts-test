
import image from "./assets/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look.jpg";
import { ProductForm } from "./components/productform";

function App() {
  return (
    <div className="container max-w-7xl px-4 mx-auto flex flex-col items-center justify-center pt-10">
      <div className="h-[90vh] display flex flex-wrap gap-y-5 md:flex-nowrap w-full ">

         <div className="w-[80rem] h-full rounded-md">
         <img src={image} alt="product image" className="w-full h-full" />
         </div>
         <div className="h-full flex flex-col justify-start gap-y-6 px-8 text-left">
          <div className="space-y-1 w-max">
          <h1 className="font-bold text-xl tracking-wider">Designer Clad</h1>
            <p className="italic font-semibold text-sm">Three Piece Dress</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quis in nam accusamus architecto sint, error molestias cupiditate corrupti consectetur fugit consequatur ipsam. Aliquid, ea est fugiat mollitia velit doloremque?</p>
          <ProductForm/>
         </div>
         <div>
         </div>
      </div>
    </div>
  )
}

export default App
