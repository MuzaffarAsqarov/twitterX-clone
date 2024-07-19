import Auth from "@/components/Auth";

const Page = () => {
  const user = false;

  if(!user) return <div className="container h-screen mx-auto max-w-7xl"><Auth/></div> 

  return (
    <div>Page 1 2c3</div>
  )
}

export default Page 