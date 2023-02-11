import Button from "@/components/UI/Button";

export default function Custom404() {
  return (
    <div className="bg-black">
      <div className="container flex">
        <div className="py-36 ml-48 mr-auto">
          <h1 className="text-7xl text-white">404!</h1>
          <h2 className="text-4xl text-white">Page can’t be found</h2>
          <Button className='mt-6'>Go Home!</Button>
        </div>
      </div>
    </div>
  );
}
